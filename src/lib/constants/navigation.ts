export type NavLink = {
  href: string;
  label: string;
};

export const NAV_LINKS: NavLink[] = [
  { href: "/#about", label: "ABOUT" },
  { href: "/#overview", label: "OVERVIEW" },
  { href: "/#tracks", label: "TRACKS" },
  { href: "/#structure", label: "STRUCTURE" },
  { href: "/#schedule", label: "SCHEDULE" },
  { href: "/#team", label: "TEAM" },
  { href: "/#sponsors", label: "SPONSOR" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#faq-sponsors", label: "FOR SPONSORS" },
];

export const SOCIAL_LINKS: NavLink[] = [
  { label: "REGISTER INTEREST", href: "https://forms.office.com/e/Wm4nmLv3px" },
  { label: "Submit a Challenge", href: "https://forms.office.com/e/kZaw6FTEYR" },
  { label: "Email", href: "mailto:ian.yang@ed.ac.uk" },
];
