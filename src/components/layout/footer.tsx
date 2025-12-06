"use client";

import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import React from "react";

if (typeof window !== "undefined" && !(gsap as any)._footerPlugins) {
  gsap.registerPlugin(ScrambleTextPlugin);
  (gsap as any)._footerPlugins = true;
}

const FooterSection = ({
  title,
  items,
  className = "",
}: {
  title: string;
  items: {
    label: string;
    href: string;
  }[];
  className?: string;
}) => {
  const handleEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget;
    const bg = el.querySelector(".footerlink-bg") as HTMLElement | null;
    const text = el.querySelector(".footerlink-text") as HTMLElement | null;
    if (bg) {
      gsap.killTweensOf(bg);
      gsap.fromTo(
        bg,
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 0.25, ease: "power2.out" }
      );
    }
    if (text) {
      if (!text.dataset.originalLabel)
        text.dataset.originalLabel = text.textContent || "";
      gsap.killTweensOf(text);
      gsap.to(text, { color: "#000", duration: 0.2, ease: "power2.out" });
      gsap.to(text, {
        duration: 0.5,
        scrambleText: {
          text: text.dataset.originalLabel || "",
          chars: "upperCase",
          revealDelay: 0,
          speed: 0.6,
        },
      });
    }
  };
  const handleLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget;
    const bg = el.querySelector(".footerlink-bg") as HTMLElement | null;
    const text = el.querySelector(".footerlink-text") as HTMLElement | null;
    if (bg) {
      gsap.killTweensOf(bg);
      gsap.to(bg, {
        scaleX: 0,
        transformOrigin: "right center",
        duration: 0.25,
        ease: "power2.in",
      });
    }
    if (text) {
      gsap.killTweensOf(text);
      if (text.dataset.originalLabel) {
        text.textContent = text.dataset.originalLabel;
      }
      gsap.to(text, { color: "#fff", duration: 0.2, ease: "power2.out" });
    }
  };

  return (
    <div
      className={`flex flex-col justify-between px-0 py-2 pl-2 ${className}`}
    >
      <div className="mb-7 flex items-center gap-2 pt-2 md:mb-0">
        <div className="h-1.5 w-1.5 bg-white sm:h-1 sm:w-1" />
        <p className="text-[0.5rem] uppercase text-white">{title}</p>
      </div>
      <div className="md:h-aut mb-1 flex flex-col gap-2">
        {items.map((item, index) => (
          <a
            href={item.href}
            key={index}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            className="group relative inline-block w-fit text-[0.7rem] uppercase text-white no-underline"
          >
            <span className="footerlink-bg pointer-events-none absolute inset-0 -z-10 origin-left scale-x-0 bg-white" />
            <span className="footerlink-text relative z-[1]">{item.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

import { NAV_LINKS, SOCIAL_LINKS } from "~/lib/constants/navigation";
import { COPYRIGHT_TEXT } from "~/lib/constants/site";

const Footer = () => {
  return (
    <div className="relative z-50 grid w-full gap-4 bg-black p-5 sm:p-6 md:h-96 md:grid-cols-4 md:grid-rows-5">
      <div className="flex items-center justify-center border-zinc-800 px-0 md:col-span-2 md:row-span-4 md:border-b-0 md:border-r">
        <div className="select-none font-bold text-white md:ml-5 md:mr-7">
          BioHackathon Edinburgh 2026
          <br />
          <span className="mt-2 text-[0.6rem] font-thin uppercase text-white opacity-50">
            Building a Collaborative Bio-AI Innovation Community
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 md:hidden">
        <FooterSection title="Discover" items={NAV_LINKS} />
        <FooterSection title="Contact" items={SOCIAL_LINKS} />
      </div>

      <FooterSection
        title="Discover"
        items={NAV_LINKS}
        className="hidden md:col-start-3 md:row-span-4 md:flex md:px-5 md:pl-1"
      />
      <FooterSection
        title="Contact"
        items={SOCIAL_LINKS}
        className="hidden border-zinc-800 md:col-start-4 md:row-span-4 md:flex md:border-l md:px-5"
      />

      <div className="flex flex-col items-center justify-center gap-2 border-t border-zinc-800 px-5 py-3 sm:flex-row sm:justify-between sm:px-10 md:col-span-4 md:row-start-5">
        <div className="hidden text-[0.6rem] uppercase text-white opacity-50 md:block">
          MADE WITH &lt;3 BY:{" "}
            Jinxuan
          {" "} | Thanks to <a href="https://hacktheburgh.com" className="underline">Hack The Burgh</a> for kindly letting us adapt their website design and code.
        </div>
        {/* <div className="text-[0.6rem] uppercase text-white">
          <a
            href="/documents/HTB-Privacy-Policy.pdf"
            className="underline opacity-50 hover:opacity-100"
          >
            HTB Privacy Policy
          </a>{" "}
          <span className="opacity-50">|</span>{" "}
          <a
            href="/documents/HTB-Code-of-Conduct.pdf"
            className="underline opacity-50 hover:opacity-100"
          >
            Code Of Conduct
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
