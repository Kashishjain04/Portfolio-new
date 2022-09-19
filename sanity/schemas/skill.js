export default {
	name: "skill",
	title: "Skill",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			description: "Title of the skill",
			type: "string",
		},
		{
			name: "image",
			title: "Image",
			type: "image",
			options: {
				hotspot: true,
			},
		},
		{
			name: "documentation",
			title: "Documentation",
			type: "url",
		},
		{
			name: "proficiency",
			title: "Proficiency",
			type: "number",
			validation: (Rule) => Rule.min(0).max(100),
		}
	],
};
