import { DEV, createContext, useContext, createSignal } from 'solid-js';
import { _, is_instance_of, parse_svg } from "core";
import { colors_ctx, color_rules, colorscheme } from "core/context";

import driveSVG from "../../assets/icons/drive.svg?raw";
import calendarSVG from "../../assets/icons/calendar.svg?raw";
import radioSVG from "../../assets/icons/radio.svg?raw"
import canvasSVG from "../../assets/icons/canvas.svg?raw"

export const HEADERS = [
	{
		account: ["security"],
	},
	"plugins",
	{
		colors: ["build"],
	}
];

export const INIT_CONTENTS = {
	colors: {
		qahwa: {
			props: {
				"--red": { "value": "#A95525", "idx": 0 },
				"--green": { "value": "#87a187", "idx": 1 },
				"--blue": { "value": "#63310c", "idx": 2 },
				"--black": { "value": "black", "idx": 3 },
				"--white": { "value": "#f0f8ff", "idx": 4 },
				"--abstract": { "value": "#f0f8ff35", "idx": 5 },
				"--opaque": { "value": "#dccc8ec9", "idx": 6 },
				"--grad-start": { "value": "rgb(214, 210, 204)", "idx": 7 },
				"--grad-end": { "value": "rgb(171, 139, 89)", "idx": 8 },
				"--grad-rotate": { "value": "328deg", "idx": 9 },
				"--cap": { "value": "#ffb85e", "idx": 10 },
				"--ra": { "value": "#f1fcf6", "idx": 11 },
			},
			selectors: {
				":root": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
				"svg.capra_svg": [10, 11],
			},
			pinned: false,
		},
	},
};

export const LOGIN_CONTENTS = {
	account: {},
	"account/security": {
		send_me_emails: true,
		expose_my_address: false,
	},
	plugins: {
		drive: {
			icon: parse_svg(driveSVG),
			depict: "store, share and backup your files [not yet available]",
			root: "/drive",
			accent: "#859f60",
		},
		calendar: {
			icon: parse_svg(calendarSVG),
			depict: "manage your schedule and affairs [not yet available]",
			root: "/events",
			accent: "#c29884",
		},
		comms: {
			accent: "#1475dc",
			icon: parse_svg(radioSVG),
			depict: "talk with people in text, audio or video format [not yet available]",
			root: "/comms",
		},
		machines: {
			icon: parse_svg(canvasSVG),
			accent: "#bd0841",
			root: "/machines",
			depict: "manage your virtual machines [not yet available]",
		}
	},
};

// export async function load_configs(user: _): Promise<Record<_, _>> {
// 	if (DEV !== undefined) {
// 		return {
// 			headers: HEADERS,
// 			...CONTENTS
// 		};
// 	}
//
// 	const resp = await fetch("/config/read", {
// 		method: "GET",
// 		credentials: "include",
// 		headers: {
// 			"authorization": `Bearer<${user.access_token()}>`,
// 		}
// 	});
//
// 	return resp.json();
// }
//

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
