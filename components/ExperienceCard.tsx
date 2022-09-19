import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
	experience: Experience;
};

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const ExperienceCard = ({ experience }: Props) => {
	return (
		<article className="flex flex-col rounded-lg items-center flex-shrink-0 w-[400px] md:w-[500px] lg:w-[600px] snap-center bg-[#292929] p-8 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
			<motion.img
				initial={{ y: -100, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ duration: 1.2 }}
				viewport={{ once: true }}
				className="w-24 h-24 rounded-full object-contain object-center"
				src={urlFor(experience?.companyImage).url()}
				alt={experience?.company}
			/>
			<div className="px-0 md:px-4">
				<h4 className="text-3xl font-light">{experience?.jobTitle}</h4>
				<p className="font-bold text-xl mt-1">{experience?.company}</p>
				<div className="flex space-x-2 my-2">
					{experience?.technologies?.map((tech) => (
						<img
							key={tech?._id}
							className="h-10 w-10 rounded-full object-contain object-center"
							src={urlFor(tech?.image).url()}
							alt={tech?.title}
						/>
					))}
				</div>
				<p className="uppercase py-5 text-gray-300">
					{months[new Date(experience?.dateStarted).getMonth()] +
						" " +
						new Date(experience?.dateStarted).getFullYear()}{" "}
					-{" "}
					{experience?.isCurrentlyWorkingHere
						? "Present"
						: months[new Date(experience?.dateEnded).getMonth()] +
						  " " +
						  new Date(experience?.dateEnded).getFullYear()}
				</p>
				<ul className="text-left list-disc list-inside space-y-2 md:ml-5 text-lg h-40 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80">
					{experience?.points?.map((point, i) => (
						<li key={i}>{point}</li>
					))}
				</ul>
			</div>
		</article>
	);
};

export default ExperienceCard;
