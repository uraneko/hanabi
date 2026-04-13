import { Match, Switch } from "solid-js";
import { parse_svg } from 'core';
import { Catalyst } from 'core/primitives';
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

	const forward_click_to_upload = (e: Event) => {
		const et = e.currentTarget as HTMLButtonElement;
		const uploader = et.firstElementChild as HTMLInputElement;

		uploader.click();
	};

	const change_pfp = async (e: Event) => {
		const et = e.currentTarget as HTMLInputElement;
		const pfp = et.files![0];
		// console.log(pfp);
		await fetch("/user/pfp/update", {
			method: "POST",
			headers: {
				"content-type": pfp.type,
				"content-disposition": `attachment; filename="${pfp.name}"`
			},
			body: pfp,
		});
	};

	return <Catalyst class={styles.Pfp} call={forward_click_to_upload}>
		<input class={styles.PfpUpload} type="file" accept="image/png, image/jpeg" on:change={change_pfp} />
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
