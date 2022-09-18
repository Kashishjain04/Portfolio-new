import React from "react";
import { motion } from "framer-motion";
import SectionParent from "./SectionParent";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
	pageInfo: PageInfo
};

const About = ({pageInfo}: Props) => {
	return (
		<SectionParent>
			<h3 className="sectionHead">About</h3>
			<motion.img
				initial={{ x: -200, opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				transition={{ duration: 1.2 }}
				viewport={{ once: true }}
				className="-mb-14 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 x:w-[500px] x:h-[600px]"
				src={urlFor(pageInfo?.profilePic).url()}
				alt="about-image"
			/>

			<div className="space-y-10 px-0 md:px-10">
				<h4 className="text-4xl font-semibold">Little bit about me</h4>
				<p className="text-base">
					{pageInfo?.about}
				</p>
			</div>
      </SectionParent>
	);
};

export default About;
