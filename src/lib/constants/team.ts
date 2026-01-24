export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
  gif?: string;
  link?: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Ian Yang",
    role: "Director",
    bio: "Click to email Ian",
    image: "/team/ian.jpg",
    link: "mailto:ian.yang@ed.ac.uk",
  },
  {
    name: "Adriana",
    role: "Events",
    bio: "",
    image: "/team/adriana.jpg",
  },
  {
    name: "Apple",
    role: "Events",
    bio: "Click to email Apple",
    image: "/team/apple.jpg",
    link: "mailto:y.chew@ed.ac.uk",
  },
  {
    name: "Horace",
    role: "Events",
    bio: "",
    image: "/team/horace.jpg",
  },
  {
    name: "Javi",
    role: "Events",
    bio: "",
    image: "/team/javi.jpg",
  },
  {
    name: "Elena",
    role: "Design/Marketing",
    bio: "A 1st year PhD student in Neuroscience with a background in Molecular Genetics and interested in how we can use science to improve our understanding of the natural world and apply this to develop better targeted & efficient therapeutics as well as sustainable solutions in production and manufacturing",
    image: "/team/elena.jpg",
  },
  {
    name: "Zunaira",
    role: "Logistics",
    bio: "",
    image: "/team/zunaira.jpg",
  },
  {
    name: "Saurav",
    role: "Logistics",
    bio: "",
    image: "/team/saurav.jpg",
  },
  {
    name: "Hari",
    role: "Logistics",
    bio: "",
    image: "/team/hari.jpeg",
  },
  {
    name: "Connor",
    role: "Logistics",
    bio: "",
    image: "/team/connor.jpeg",
  },
  {
    name: "Jinxuan",
    role: "Tech",
    bio: "meow",
    image: "/team/jinxuan.png",
    link: "https://www.cjxol.com/",
  },
  {
    name: "Davide Michieletto",
    role: "Advisor",
    bio: "",
    image: "/team/davide.jpg",
  },
  {
    name: "Tanmay",
    role: "External Judge",
    bio: "",
    image: "/team/tanmay.jpg",
  },
];
