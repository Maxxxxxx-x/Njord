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
        const { Username, Password } = LoginRequest.parse(await request.json());
        const AccessToken = jwt.sign({
            iat: Date.now(),
            exp: Math.floor(Date.now() / 1000) * (2 * (60 * 60)),
        }, "SECRET", {
            algorithm: "ES256"
        });
        return json({ access_token: AccessToken});
    } catch(err) {
        if (err instanceof z.ZodError) {
            throw error(400, fromZodError(err).message);
        }
        throw error(500, "Internal Server Error");
    }
};
