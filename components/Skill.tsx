import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typings";
import { urlFor } from "../sanity";

type Props = {
	swipeLeft?: boolean;
	skill: Skill;
};

const Skill = ({ swipeLeft, skill }: Props) => {
	return (
		<a href={skill?.documentation} target="_blank" rel="noopener noreferrer">
			<motion.div
				initial={{ x: swipeLeft ? -100 : 100, opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				transition={{ duration: 1 }}
				viewport={{ once: true }}
				className="cursor-pointer group rounded-full border border-gray-500 overflow-hidden w-[5.5rem] lg:w-[7rem] h-[5.5rem] lg:h-[7rem] grid place-items-center"
			>
				<img
					className="object-contain filter group-hover:grayscale w-16 lg:w-24 h-16 lg:h-24"
					src={urlFor(skill?.image).url()}
					alt={skill?.title}
				/>
			</motion.div>
		</a>
	);
};

export default Skill;
