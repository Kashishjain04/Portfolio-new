interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string; 
}
interface Image {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}
export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  name: string;
  about: string;
  email: string;
  heroImage: Image;
  phoneNumber: string;
  profilePic: Image;
  resume: string;
  taglines: string[];
  socials: Social[];
}
export interface Skill extends SanityBody {
  _type: "skill";
  title: string;
  image: Image;
  documentation: string;
}
export interface Project extends SanityBody {
  _type: "project";
  title: string;
  image: Image;
  summary: string;
  technologies: Skill[];
  demo: string;
  sourceCode: string;
}
export interface Experience extends SanityBody {
  _type: "experience";
  company: string;
  companyImage: Image;
  dateStarted: date;
  dateEnded: date;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  technologies: Skill[];
}