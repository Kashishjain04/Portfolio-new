import React from "react";
import { motion } from "framer-motion";
import SectionParent from "./SectionParent";
import { Project } from "../typings";
import { urlFor } from "../sanity";

type Props = {
	projects: Project[];
};

const Projects = ({ projects }: Props) => {
	return (
		<SectionParent className="max-w-full z-0">
			<h3 className="sectionHead">Projects</h3>

			<div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
				{projects.map((project) => (
					<div
						key={project?._id}
						className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
					>
						<motion.img
							initial={{ y: -300, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ duration: 1.2 }}
							viewport={{ once: true }}
							className="w-96"
							src={urlFor(project?.image).url()}
							alt="covid19"
						/>
						<div className="space-y-10 px-0 md:px-10 max-w-6xl">
							<h4 className="text-4xl font-semibold text-center">{project?.title}</h4>
							<p className="text-lg text-center md:text-left">
								{project?.summary}
								<br />
								<span className="font-semibold">Tech used: </span>{" "}
								{project?.technologies.flatMap((tech) => tech.title).join(", ")}
								API
							</p>
							<div className="flex items-center space-x-5">
								{project?.demo && (
									<a href={project?.demo} target="_blank" rel="noopener noreferrer">
										<button className="px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-200 transition-all hover:border-[#F7AB0A] hover:text-[#F7AB0A]">
											Demo
										</button>
									</a>
								)}
								{project?.sourceCode && (
									<a href={project?.sourceCode} target="_blank" rel="noopener noreferrer">
										<button className="px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-200 transition-all hover:border-[#F7AB0A] hover:text-[#F7AB0A]">
											Source Code
										</button>
									</a>
								)}
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
		</SectionParent>
	);
};

export default Projects;
