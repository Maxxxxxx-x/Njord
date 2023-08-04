import type { KVNamespace } from "@cloudflare/workers-types";
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		interface Platform {
			env? : {
				TOKENS : KVNamespace;
				ACCOUNTS : KVNamespace;
				ACCESS_TOKEN_SECRET : string;
				ACCESS_TOKEN_EXPIRE : string;
				NJORD_TOKEN_SECRET : string;
			}
		}
	}
}

export {};
