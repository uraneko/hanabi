import { Match, Switch } from "solid-js";
import { parse_svg } from 'core';
import { Catalyst, TextField } from 'core/primitives';

import styles from './Account.module.css';
import homeSVG from "../../../assets/icons/home.svg?raw";

export const Account = (props: { user: string, email_address?: string, pfp?: Blob }) => {
	const user = () => props.user;
	const pfp = () => props.pfp;
	const address = () => props.email_address;

	return <div class={styles.Chapter}>
		<Profile user={user()} pfp={pfp()} />
		<EmailAddress address={address()} />
	</div>;
};

export const Profile = (props: { user: string, pfp?: Blob }) => {
	const user = () => props.user;
	const pfp = () => props.pfp;

	return <div class={styles.Section}>
		<span class={styles.Title}>Profile</span>
		<Pfp pfp={pfp()} />
		<TextField legend="user name" value={user()} name="profile-name" mandatory />
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

export const EmailAddress = (props: { address?: string }) => {
	return <div class={styles.Section}>
		<span class={styles.Title}>Email-Address</span>
	</div>;
};

