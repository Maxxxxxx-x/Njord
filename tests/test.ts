import { expect, test } from '@playwright/test';

test.describe("Login API test", () => {
    test("tries sending empty request", async ({ request }) => {
        const res = await request.post("http://localhost:5173/api/accounts/login", {
            headers: {
                "Content-Type": "application/json",
            },
        });

        await expect(res.status()).toBe(400);
    });
});