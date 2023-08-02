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
        const STORED_PASS = platform.env?.STORE.get(Username);
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


/*
const { Username, Password } = await request.json();
    if (!(Username && Password)) throw error(400, "Username and Password must not be null");
    try {
        const { Username, Password } = LoginRequest.parse(await request.json());
        const TOKEN_SECRET = env.TOKEN_SECRET ?? platform?.env?.TOKEN_SECRET;
        if (!TOKEN_SECRET) throw error(500, "Missing ENV config");
        const AccessToken = jwt.sign({
            iat: Date.now(),
            exp: Math.floor(Date.now() / 1000) * (2 * (60 * 60)),
        }, TOKEN_SECRET, {
            algorithm: "HS512"
        });
        return json({ access_token: AccessToken});
    } catch(err) {

        if (err instanceof z.ZodError) throw error(400, fromZodError(err).message);
        throw error(500, "Internal Server Error");
    }
*/