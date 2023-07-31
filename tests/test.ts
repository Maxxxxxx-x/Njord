import { expect, test } from '@playwright/test';

test("Login API POST", async ({ request }) => {
    const res = await request.post("http://localhost:5173/api/accounts/login", {
        data: {
            Username: "Username",
            Password: "Password",
        }
    });
    expect(res.status()).toBe(200);
    console.log(await res.json());
    expect(await res.json()).toMatchObject({ message: "Test" });
});


test("Login API POST with empty params", async ({ request }) => {
    const res = await request.post("http://localhost:5173/api/accounts/login", {
    });
    expect(res.status()).toBe(400);
    expect(await res.json()).toMatchObject({ message: "Test" });
});
