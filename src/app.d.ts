import type { KVNamespace } from "@cloudflare/workers-types";
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
		interface Platform {
			env? : {
				STORE: KVNamespace;
				//fallback 512 bit token secret
				TOKEN_SECRET: "7FuLmrAhp4uhnIQVya8PQuXfEtI3eN7Jufv0kEza9wyTilWc3cg/ibrl1OP20nluVBkxKUXCwpMh8xEWRXkvyoV+NcL6Si7KsvZH6VzC6AaWcpmLKBrfZxY5M/2r6+aOLAucm6cxAdamfzZwtyBCitzDg6dyhwaAd9ZL74jVNYaGUQBjphKYvPqd0KoIp5odtOM32GG1rwMlN9+SRiz1N2oFwv1mgH2MmRUKPR7jI6VlBUmbQns3cIm4IQ4FinZXS2MdzpVR8FIN6fumYB9Oxu6zlzFfX2ktqwmqE4VKuaeKjYHqA8RpnSbCtE+mZ2WJ33OsUy9Cb8I2FA40/k9JckR7BanH6p/xSqpf23io7LYHY1Fc4awtXvbWetKZIb4+X1Oue5FSw2LKRyhWr6QmizrtJ068tQ9SIn0Yqsma4uA0bJDb0x6ufj3dIEX9oUpgt5UcPy5AhvnUk9cclrC4n9lmqos18o8C0uLsx8ULlUhEoOJV5R8TowSOLxegIhCr3RNiPvMX3cIkGo1s/63VH292FKxowibcJfTyV5zQDUjMXcu9Wpy+Hex5nPV0UtoJE5lj5wKZZ3CmgTqdb63gfMx37NxPzxzwgjjPZIKWR/ajtUM/9Bscg9Srf9K4NcbsGERgu+Y06h2Q9nLwPWuBQf/zXelObKBltLoLxkel8os="
			}
		}
	}
}

export {};
