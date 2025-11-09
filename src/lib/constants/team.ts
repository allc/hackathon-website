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
    bio: "",
    image: "/team/ian.jpg",
  },
  {
    name: "Adriana",
    role: "Events",
    bio: "",
    image: "/team/adriana.jpg",
  },
  {
    name: "Apple",
    role: "",
    bio: "",
    image: "/team/apple.jpg",
  },
  {
    name: "Jinxuan",
    role: "Tech",
    bio: "meow",
    image: "/team/jinxuan.png",
    link: "https://www.cjxol.com/",
  },
];
