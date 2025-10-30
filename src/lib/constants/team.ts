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
    name: "Jinxuan",
    role: "Tech",
    bio: "meow",
    image: "/team/jinxuan.png",
    link: "https://www.cjxol.com/",
  },
];
