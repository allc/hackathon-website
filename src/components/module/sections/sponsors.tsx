"use client";

import CornerBrackets from "~/components/module/corner-brackets";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import NavbarLayout from "~/components/layout/navbar-layout";
import SectionHeader from "../section-header";

interface SponsorCardProps {
  name: string;
  tier: string;
  number: string;
  logo: string;
  website: string;
  cardRef: React.RefObject<HTMLDivElement>;
}

const sponsorsData = [
  {
    name: "OpenBioSim",
    tier: "Sponsor",
    number: "01",
    logo: "/sponsors/openbiosim.svg",
    website: "https://www.openbiosim.org/",
  },
  {
    name: "School of Physics and Astronomy",
    tier: "Partner",
    number: "02",
    logo: "/sponsors/ph.jpeg",
    website: "https://www.ph.ed.ac.uk",
  },
  {
    name: "Digital Research Services",
    tier: "GPU Provider",
    number: "03",
    logo: "/sponsors/drs.png",
    website: "https://digitalresearchservices.ed.ac.uk/",
  },
];

const SponsorCard = ({
  name,
  tier,
  number,
  website,
  cardRef,
}: SponsorCardProps) => {
  const cornerBracketsRef = useRef<HTMLDivElement>(null);
  const squareIconRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const tierDotRef = useRef<HTMLDivElement>(null);

  const handleCardClick = () => {
    window.open(website, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    const card = cardRef.current;
    const corners = cornerBracketsRef.current;
    const squares = squareIconRef.current;
    const title = titleRef.current;
    const dot = tierDotRef.current;

    if (!card || !corners || !squares || !title || !dot) return;

    const handleMouseEnter = () => {
      // gsap.to(corners.querySelectorAll("div"), {
      //   scale: 1.05,
      //   duration: 0.3,
      //   ease: "power2.out",
      //   stagger: 0.02,
      // });

      gsap.to(squares.querySelectorAll("rect"), {
        fill: "black",
        duration: 0.2,
        ease: "power2.out",
        stagger: 0.02,
      });

      gsap.to(title, {
        x: 5,
        duration: 0.3,
        ease: "power2.out",
      });

      // gsap.to(dot, {
      //   scale: 1.2,
      //   duration: 0.2,
      //   ease: "power2.out",
      // });
    };

    const handleMouseLeave = () => {
      // gsap.to(corners.querySelectorAll("div"), {
      //   scale: 1,
      //   duration: 0.3,
      //   ease: "power2.out",
      //   stagger: 0.02,
      // });

      gsap.to(squares.querySelectorAll("rect"), {
        fill: "none",
        duration: 0.2,
        ease: "power2.out",
        stagger: 0.02,
      });

      gsap.to(title, {
        x: 0,
        duration: 0.3,
        ease: "power2.out",
      });

      // gsap.to(dot, {
      //   scale: 1,
      //   duration: 0.2,
      //   ease: "power2.out",
      // });
    };

    const handleClick = () => {
      // Animate corner brackets inward on click
      const svgs = corners.querySelectorAll("svg");
      gsap.to(svgs, {
        scale: 0.98,
        duration: 0.2,
        ease: "power4.inOut",
        yoyo: true,
        repeat: 1,
        transformOrigin: "center",
      });
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);
    card.addEventListener("click", handleClick);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
      card.removeEventListener("click", handleClick);
    };
  }, [cardRef]);

  return (
    <div
      ref={cardRef}
      className="group relative h-full w-full cursor-pointer px-10 pb-8 pt-7 text-black transition-shadow duration-300"
      onClick={handleCardClick}
    >
      <div ref={cornerBracketsRef}>
        <CornerBrackets />
      </div>

      <div className="mb-6 flex-wrap items-end gap-3 sm:gap-4">
        <h1
          ref={titleRef}
          className="mt-3 flex cursor-pointer items-center gap-3 font-whyte text-3xl font-bold leading-none sm:text-4xl md:text-4xl"
        >
          {name}
        </h1>
        <div className="ml-2 flex items-center gap-2 pt-1">
          <div ref={tierDotRef} className="-mb-1 h-2 w-2 bg-black" />
          <p className="-mb-1 text-xs font-light uppercase tracking-wide sm:text-xs">
            {tier}
          </p>
        </div>
      </div>

      <span className="absolute bottom-5 left-5 inline-block text-[0.6rem] font-light uppercase tracking-wide">
        {number}
      </span>

      <span className="absolute bottom-5 right-5 inline-block text-[0.6rem] font-light uppercase tracking-wide">
        +
      </span>

      <div
        ref={squareIconRef}
        className="absolute right-5 top-5 inline-block text-[0.6rem] font-light uppercase tracking-wide"
      >
        <svg
          width="6"
          height="24"
          viewBox="0 0 6 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0.5" y="0.5" width="5" height="5" stroke="black" />
          <rect x="0.5" y="9.5" width="5" height="5" stroke="black" />
          <rect x="0.5" y="18.5" width="5" height="5" stroke="black" />
        </svg>
      </div>
    </div>
  );
};

export const SponsorsGrid = () => {
  const cardRefs = useRef<Array<React.RefObject<HTMLDivElement>>>(
    sponsorsData.map(() => React.createRef<HTMLDivElement>())
  );

  return (
    <div className="h-full w-full px-4 sm:px-8">
      <div className="block lg:hidden">
        <div className="grid grid-cols-1 gap-8 sm:gap-12">
          {sponsorsData.map((sponsor, index) => (
            <div key={index} className="relative">
              <button
                type="button"
                className="relative flex h-40 w-full items-center justify-center p-4 pt-1 sm:h-48 sm:p-6"
                aria-controls={`mobile-sponsor-${index}`}
              >
                <div data-corner-brackets>
                  <CornerBrackets />
                </div>
                <a href={sponsor.website} target="_blank" rel="noopener noreferrer">

                  <Image
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    width={160}
                    height={100}
                    className="max-h-24 max-w-full object-contain sm:max-h-28"
                  />
                </a>
                <span
                  className="absolute bottom-4 left-4 px-1 text-[0.6rem] font-medium uppercase tracking-wide sm:text-sm"
                  // style={{
                  //   color:
                  //     TIER_COLORS[sponsor.tier as keyof typeof TIER_COLORS],
                  // }}
                >
                  {sponsor.tier}
                </span>
                <span className="absolute right-4 top-4 inline-block text-[0.6rem] font-light uppercase tracking-wide">
                  <svg
                    width="4"
                    height="24"
                    viewBox="0 0 6 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="0.5" y="0.5" width="5" height="5" stroke="black" />
                    <rect x="0.5" y="9.5" width="5" height="5" stroke="black" />
                    <rect
                      x="0.5"
                      y="18.5"
                      width="5"
                      height="5"
                      stroke="black"
                    />
                  </svg>
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {sponsorsData.map((sponsor, index) => (
        <div key={index}>
          <div className="hidden flex-col gap-8 lg:flex lg:flex-row lg:gap-12 pb-8">
            <div className="lg:sticky lg:top-28 lg:w-80 lg:self-start">
              <div
                className="flex items-center justify-center overflow-hidden p-8"
                style={{ height: "200px" }} // Initial height
              >
                <CornerBrackets />
                <div className="flex items-center justify-center">
                  <a href={sponsor.website} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      width={200}
                      height={120}
                      className="max-h-32 max-w-full object-contain"
                    />
                  </a>
                </div>
                <span className="absolute bottom-4 left-4 flex items-center gap-2 text-[0.6rem] font-light uppercase tracking-wide">
                  <div className="h-2 w-2 bg-black" />
                  [{sponsor.name}]
                </span>
              </div>
            </div>
            <div className="flex-1">
              <div className="max-w-6xl space-y-8"  style={{ height: "200px" }}>
                <SponsorCard
                  name={sponsor.name}
                  tier={sponsor.tier}
                  number={sponsor.number}
                  logo={sponsor.logo}
                  website={sponsor.website}
                  cardRef={cardRefs.current[index]!}
                />
              </div>
            </div>
          </div>
        </div>
      ))}

    </div>
  );
};

export default function Sponsors() {
  return (
    <NavbarLayout className="relative min-h-screen w-full py-16 sm:py-24">
      <SectionHeader
        title="Sponsor & Partners"
        subtitle="Meet the organizations making this hackathon possible"
        className="mb-10"
      />
      <SponsorsGrid />
    </NavbarLayout>
  );
}
