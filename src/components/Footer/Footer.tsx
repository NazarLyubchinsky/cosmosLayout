import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import s from "./styles.module.scss";
import { Logo } from "../Logo";


const Footer = () => (
	<section className={s.footer}>
		<Logo />

		<div className={s.rights}>
			Developed by{" "}
			<a href="https://www.linkedin.com/in/nazar-lyubchynskyi-37a89026b/" target="_blank" rel="noreferrer">
				Lyubchinskyi
			</a>
		</div>

		<div className={s.socials}>
			<a href="https://instagram.com" target="_blank" rel="noreferrer">
				<FaInstagramSquare />
			</a>

			<a href="https://facebook.com" target="_blank" rel="noreferrer">
				<FaFacebookF />
			</a>

			<a href="https://youtube.com" target="_blank" rel="noreferrer">
				<FaYoutube />
			</a>
		</div>
	</section>
);

export default Footer;