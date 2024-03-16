import React from "react";
import type { Skill } from "../typings";
import SectionParent from "./SectionParent";
import SkillCard from "./Skill";

type Props = {
	skills: Skill[];
};

const Skills = ({ skills }: Props) => {
	return (
		<SectionParent>
			<h3 className="sectionHead">Skills</h3>

			<div className="grid grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5">
				{skills?.map((skill, i) => (
					<SkillCard swipeLeft={i > skills.length/2} key={skill?._id} skill={skill} />
				))}
				{/* {skills?.slice(skills?.length/2, skills?.length)?.map((skill, i) => (
					<SkillCard swipeLeft={i > skills.length/2} key={skill?._id} skill={skill} />
				))} */}
			</div>
		</SectionParent>
	);
};

export default Skills;
