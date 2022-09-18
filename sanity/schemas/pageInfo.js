export default {
	name: "pageInfo",
	title: "PageInfo",
	type: "document",
	fields: [
		{
			name: "name",
			title: "Name",
			type: "string",
		},
		{
			name: "taglines",
			title: "Taglines",
			type: "array",
			of: [{ type: "string" }],
		},
		{
			name: "heroImage",
			title: "Hero Image",
			type: "image",
			options: {
				hotspot: true,
			},
		},
		{
			name: "about",
			title: "About",
			type: "string",
		},
		{
			name: "profilePic",
			title: "Profile Picture",
			type: "image",
			options: {
				hotspot: true,
			},
		},
    {
      name: "phoneNumber",
      title: "Phone Number",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "socials",
      title: "Socials",
      type: "array",
      of: [{ type: "reference", to: { type: "social" } }],
    }
	],
};
