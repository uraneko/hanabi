import { Match, Switch } from "solid-js";
import { parse_svg } from 'core';
import { Catalyst, TextField } from 'core/primitives';
import { user_state } from "../user";

import styles from './Account.module.css';
import homeSVG from "../../../assets/icons/home.svg?raw";

export const Account = () => {
	const user = user_state();

	return <div class={styles.Chapter}>
		<Profile name={user.name()} pfp={user.pfp()} address={user.address()} />
	</div>;
};

const Profile = (props: { name: string, pfp?: string, address?: string }) => {
	const name = () => props.name;
	const pfp = () => props.pfp;
	const addr = () => props.address;

	return <div class={styles.Section}>
		<span class={styles.Title}>Profile</span>
		<div class={styles.SectionContents}>
			<Pfp pfp={pfp()} />
			<UserInfo name={name()} address={addr()} />
		</div>
	</div>;
};

export const Pfp = (props: { pfp?: string }) => {
	const pfp = () => props.pfp ? <img src={props.pfp} /> : parse_svg(homeSVG);

	return <Catalyst class={styles.Pfp}>
		{pfp()}
	</Catalyst>;
};

const UserInfo = (props: { name: string, address?: string }) => {
	const name = () => props.name;
	const addr = () => props.address ?? "-";

	return <div class={styles.UserInfo}>
		<InfoEntry key="user-name" val={name()} />
		<InfoEntry key="email-address" val={addr()} />
	</div>;
};

const InfoEntry = (props: { key: string, val: string }) => {
	const key = () => props.key;
	const val = () => props.val;

	return <span class={styles.InfoEntry}>
		<span class={styles.EntryKey}>
			{key()}
		</span>
		<span class={styles.EntryVal}>
			{val()}
		</span>
	</span>;
};
