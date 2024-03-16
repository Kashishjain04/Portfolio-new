import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import type { Social } from "../typings";

type Props = {
	socials: Social[];
	email: string;
	resume: string;
};

const Header = ({ socials, email, resume }: Props) => {
	return (
		<div className="sticky top-0 p-5 flex items-center justify-between max-w-7xl mx-auto z-20 xl:items-center">
			<motion.div
				initial={{ x: -500, opacity: 0, scale: 0.5 }}
				animate={{ x: 0, opacity: 1, scale: 1 }}
				transition={{ duration: 1.5 }}
				className="flex flex-row items-center"
			>
				{socials?.map((social) => (
					<SocialIcon
						key={social._id}
						style={{ height: 40, width: 40 }}
						url={social.url}
						target="_blank"
						rel="noopener noreferrer"
						network={social.title}
						fgColor="gray"
						bgColor="transparent"
					/>
				))}
					<SocialIcon
						url={`mailto:${email}`}
						target="_blank"
						rel="noopener noreferrer"
						style={{ height: 40, width: 40 }}
						network="email"
						fgColor="gray"
						bgColor="transparent"
					/>
			</motion.div>
			<a href={resume} target="_blank" rel="noopener noreferrer">
				<motion.p
					initial={{ x: 500, opacity: 0, scale: 0.5 }}
					animate={{ x: 0, opacity: 1, scale: 1 }}
					transition={{ duration: 1.5 }}
					className="uppercase text-sm text-gray-400"
				>
					Resume
				</motion.p>
			</a>
		</div>
	);
};

export default Header;
