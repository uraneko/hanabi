import { DEV, createContext, useContext, createSignal } from 'solid-js';
import { _, is_instance_of } from "core";

const HEADERS = [
	"colors",
	"plugins",
	{
		account: ["security"],
	}
];

const CONTENTS = {
	account: {},
	"account/security": {},
	colors: undefined,
	plugins: undefined,
};

export async function init_configs() {
	const { user, re_user } = user_ctx();
	const config = await load_configs(user_state(user));
	re_user((user_: _) => {
		return {
			config: config,
			name: user_.name,
			address: user_.address,
			access_token: user_.access_token,
			pfp: user_.pfp,
		}
	});
}

export async function load_configs(user: _): Promise<Record<_, _>> {
	if (DEV !== undefined) {
		return {
			headers: HEADERS,
			...CONTENTS
		};
	}

	const resp = await fetch("/config/read", {
		method: "GET",
		credentials: "include",
		headers: {
			"authorization": `Bearer<${user.access_token()}>`,
		}
	});

	return resp.json();
}


const [user, re_user] = createSignal({
	name: undefined as string | undefined,
	address: undefined as string | undefined,
	access_token: undefined as string | undefined,
	config: undefined as Record<string, _> | undefined,
	pfp: undefined as undefined | string,
});

export function user_state(ctx?: _) {
	return {
		ctx: ctx ?? user_ctx().user,
		inner() {
			return this.ctx();
		},
		is_logged_in() {
			const user = this.ctx();

			return user.name === undefined ? false :
				is_instance_of(user.name, "String") ? user.name.length !== 0 : true;
		},
		is_logged_out() {
			return this.ctx().name === ""
		},
		/// this state can only be observed from the time the app's page is opened 
		/// to the time it takes to initialize the user state 
		is_non_init() {
			return this.ctx().name === undefined
		},
		access_token() {
			return this.ctx().access_token;
		},
		address() {
			return this.ctx().address;
		},
		name() {
			return this.ctx().name;
		},
		config() {
			return this.ctx().config;
		},
		pfp() {
			return this.ctx().pfp;
		}
	}
}

const user_context = createContext({ user, re_user });
export function user_ctx() {
	return useContext(user_context);
}
