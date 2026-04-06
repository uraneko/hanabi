import { Match, Switch } from "solid-js";
import { parse_svg } from 'core';
import { Catalyst, TextField } from 'core/primitives';
import { user_state } from "../user";

import styles from './Account.module.css';
import homeSVG from "../../../assets/icons/home.svg?raw";

export const Account = () => {
	const user = user_state();

	return <div class={styles.Chapter}>
		<Profile name={user.name()} pfp={user.pfp()} />
		<Address address={user.address()} />
	</div>;
};

export const Profile = (props: { name: string, pfp?: Blob }) => {
	const name = () => props.name;
	const pfp = () => props.pfp;

	return <div class={styles.Section}>
		<span class={styles.Title}>Profile</span>
		<Pfp pfp={pfp()} />
		<TextField legend="user name" value={name()} name="profile-name" mandatory />
	</div>;
};

export const Pfp = (props: { pfp?: Blob }) => {
	const pfp = () => props.pfp ? <img src={URL.createObjectURL(props.pfp!)} /> : undefined;
	const home = () => props.pfp ? parse_svg(homeSVG) : undefined;

	return <Catalyst class={styles.Pfp}>
		<Switch>
			<Match when={!pfp()}>
				{home()!}
			</Match>
			<Match when={pfp()}>
				{pfp()!}
			</Match>
		</Switch></Catalyst>;
};

export const Address = (props: { address?: string }) => {
	const addr = () => props.address;

	return <div class={styles.Section}>
		<span class={styles.Title}>Email-Address</span>
	</div>;
};

