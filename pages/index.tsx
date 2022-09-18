import type { GetStaticProps } from "next";
import Head from "next/head";
import About from "../components/About";
import Experiences from "../components/Experiences";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import {
	fetchExperiences,
	fetchPageInfo,
	fetchProjects,
	fetchSkills,
	fetchSocials,
} from "../utils/fetchData";

type Props = {
	pageInfo: PageInfo;
	experiences: Experience[];
	skills: Skill[];
	projects: Project[];
	socials: Social[];
};

const Home = ({pageInfo, experiences, projects, skills, socials}: Props) => {
	return (
		<div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
			<Head>
				<title>Kashish Jain</title>
				<meta
					name="description"
					content="Kashish Jain | Full Stack Web Developer | Freelancer. Kashish Jain is a Full Stack Software Developer, Freelancer eager to contribute to team success through hard work, attention to detail and excellent organizational skills. Having clear understanding of Javascript, React, Redux, MERN and React Native and currently working on SwiftUI. Motivated to learn and grow in the Dev industry."
				/>
				<link rel="icon" href="/logo.png" />
			</Head>
			<main>
				<Header socials={socials} email={pageInfo.email} />

				<section id="hero" className="snap-start">
					<Hero pageInfo={pageInfo} />
				</section>

				<section id="about" className="snap-center">
					<About pageInfo={pageInfo} />
				</section>

				<section id="experience" className="snap-center">
					<Experiences experiences={experiences} />
				</section>

				<section id="skills" className="snap-center">
					<Skills skills={skills} />
				</section>

				<section id="projects" className="snap-center">
					<Projects projects={projects} />
				</section>

				{/* Contact */}
			</main>
		</div>
	);
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
	const pageInfo: PageInfo = await fetchPageInfo();
	const experiences: Experience[] = await fetchExperiences();
	const skills: Skill[] = await fetchSkills();
	const projects: Project[] = await fetchProjects();
	const socials: Social[] = await fetchSocials();

	return {
		props: {
			pageInfo,
			experiences,
			skills,
			projects,
			socials,
		},
		revalidate: 100
	}
};
