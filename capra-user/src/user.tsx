import { DEV, createContext, useContext, createSignal } from 'solid-js';
import { _, is_instance_of, parse_svg } from "core";
import { colors_ctx, color_rules, colorscheme } from "core/context";

import driveSVG from "../../assets/icons/drive.svg?raw";
import calendarSVG from "../../assets/icons/calendar.svg?raw";

const HEADERS = [
	{
		account: ["security"],
	},
	"plugins",
	{
		colors: ["build"],
	}
];

const CONTENTS = {
	account: {},
	"account/security": {
		send_me_emails: true,
		expose_my_address: false,
	},
	colors: {
		verdant: {
			scheme: {
				red: "#A95525", green: "#87a187", blue: "#485d6c",
				abstract: "#f0f8ff35", opaque: "#a0c65578",
				black: "black", white: "#f0f8ff",
				"grad-start": "rgb(204, 217, 208)", "grad-end": "rgb(245, 244, 225)",
				"grad-rotate": "328deg",
			},
			pinned: true,
		},
		"black-star": {
			scheme: {
				opaque: "linear-gradient(132deg, #b574447a 0%, #502941 100%)",
				abstract: "rgba(73, 126, 172, 0.21)",
				black: "#e3e2e4", white: "#1f212e",
				blue: "#9e8776", green: "#87a187", red: "#A95525",
				"grad-start": "#43001e", "grad-end": "#000000",
				"grad-rotate": "341deg",
			},
			pinned: true,
		},
	},
	plugins: {
		drive: {
			icon: parse_svg(driveSVG),
			depict: "store, share and backup your files [not yet available]",
			root: "http://127.0.0.1:6608",
			accent: "#859f60",
		},
		calendar: {
			icon: parse_svg(calendarSVG),
			depict: "manage your schedule and affairs [not yet available]",
			root: undefined,
			accent: "#c29884",
		}
	},
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
