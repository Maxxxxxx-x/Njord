import { z } from "zod";
import { env } from "$env/dynamic/private";
import { LoginRequest} from "$lib/schema";
import { error, json } from "@sveltejs/kit";
import jwt from "@tsndr/cloudflare-worker-jwt";
import { fromZodError } from "zod-validation-error";
import type { RequestHandler } from "./$types";
import { TimingSafeEqual } from "$lib/server/TimingSafeEqual";

export const POST: RequestHandler = async ({ request, platform }) => {
    try {
        const Body = await request.json().catch(() => ({}));
        const { Username, Password } = LoginRequest.parse(Body);
        const STORED_PASS = "test" ?? platform?.env?.STORE.get(Username);
        if (!STORED_PASS) throw error(401, "Invalid username or password");
        if (!TimingSafeEqual(Password, STORED_PASS)) {
            throw error(401, "Invalid username or password")
        }
        const AccessToken = jwt.sign({}, "SECRET",{});
        return json({ access_token: AccessToken });
    } catch(err) {
        if (err instanceof z.ZodError) {
            throw error(400, fromZodError(err).message);
        }
        throw error(500, "Internal server error");
    }
};
