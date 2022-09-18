import React from "react";
import { Experience } from "../typings";
import ExperienceCard from "./ExperienceCard";
import SectionParent from "./SectionParent";

type Props = {
	experiences: Experience[];
};

const Experiences = ({ experiences }: Props) => {
	return (
		<SectionParent>
			<h3 className="sectionHead">Experience</h3>

			<div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
				{experiences.map((experience) => (
					<ExperienceCard key={experience._id} experience={experience} />
				))}
			</div>
		</SectionParent>
	);
};

export default Experiences;
