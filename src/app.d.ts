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
				STORE : KVNamespace;
				//fallback 512 bit token secret
				MAIN_KEY : string;
				TOKEN_SECRET : string;
			}
		}
	}
}

export {};
