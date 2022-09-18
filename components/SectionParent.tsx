import React from "react";
import { motion } from "framer-motion";

type Props = {
	children: React.ReactNode;
	className?: string;
};

const SectionParent = (props: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className={`flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 pt-20 lg:pt-24 justify-evenly mx-auto items-center ${props.className}`}
		>
			{props.children}
		</motion.div>
	);
};

export default SectionParent;
