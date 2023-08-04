import type { RequestHandler } from "./$types";
import { error, json } from "@sveltejs/kit";
import { env } from "$env/dynamic/private";

export const POST : RequestHandler = async ({request, platform}) => {
    return json({ message: "Test" });
}