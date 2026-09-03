
"use client";

import React from "react";

type TeamMember = {
  id: string;
  name: string;
  role: string;
  tag: string;
  image: string;
};

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Dr. Leyla Karim",
    role: "Lead Clinical Psychologist",
    tag: "Neurodevelopmental · CBT",
    image: "/m1.jpg",
  },
  {
    id: "2",
    name: "Dr. Omar Rashid",
    role: "Senior Occupational Therapist",
    tag: "Sensory · Fine Motor",
    image: "/m2.jpg",
  },
  {
    id: "3",
    name: "Liza Reed",
    role: "Speech & Language Pathologist",
    tag: "Social Comm · MDT",
    image: "/m3.jpg",
  },
  {
    id: "4",
    name: "Dr. Nadia Hassan",
    role: "Consultant Child Psychiatrist",
    tag: "DHA Licensed · Medication Mgmt",
    image: "/m4.jpg",
  },
];

export default function MeetOurTeam(): React.JSX.Element {
  return (
    <section className="relative w-full border-t border-[#613339]/25 bg-[#FCEFDD] px-5 py-[80px] sm:px-6 md:px-10 lg:px-[100px] lg:py-[100px]">
      <div className="mx-auto w-full max-w-[1440px]">

        {/* HEADER */}
        <div className="mb-[40px] flex w-full flex-col gap-6 md:flex-row md:items-end md:justify-between">

          {/* LEFT TITLE */}
          <div>
            <p className="mb-[6px] font-sofia text-[9px] font-bold uppercase tracking-[4px] text-[#62343A]">
              PEOPLE AT HIBA
            </p>

            <h2 className="m-0 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-left">
              <span className="font-monarcha text-[56px] font-normal leading-[0.95] tracking-[-1.5px] text-[#613339] sm:text-[64px] lg:text-[72px]">
                Meet the
              </span>

              <span className="font-sofia text-[56px] font-normal italic leading-[0.95] tracking-[-3px] text-[#B24924] sm:text-[64px] lg:text-[72px]">
                Team
              </span>
            </h2>
          </div>

          {/* BUTTON */}
          <a
            href="#"
            className="
              group
              inline-flex
              w-fit
              shrink-0
              items-center
              justify-center
              gap-2
              rounded-full
              border
              border-[#471E24]/15
              bg-[#FCEFDD]
              px-6
              py-3
              font-sofia
              text-[14px]
              font-medium
              leading-none
              text-[#613339]
              transition-all
              duration-300
              hover:border-[#471E24]
              hover:bg-[#471E24]
              hover:text-[#FCEFE1]
              md:px-7
              md:py-[13px]
              md:text-[15px]
            "
          >
            <span>Meet Our Team</span>

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* TEAM CARDS */}
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="
                group
                flex
                min-w-0
                w-full
                flex-col
                overflow-hidden
                rounded-[32px]
                bg-[#FCEFE1]
                shadow-[0_36px_72px_-30px_rgba(90,41,50,0.30),0_12px_28px_-14px_rgba(90,41,50,0.20)]
                transition-all
                duration-300
                hover:-translate-y-1.5
              "
            >
              {/* IMAGE */}
              <div className="relative h-[300px] w-full shrink-0 overflow-hidden rounded-t-[32px] sm:h-[280px] lg:h-[300px]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="
                    block
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />
              </div>

              {/* CARD CONTENT */}
              <div className="flex min-h-[142px] flex-1 flex-col justify-between p-6">
                
                {/* NAME + ROLE */}
                <div className="min-w-0">
                  <h3 className="m-0 font-sofia text-[13px] font-semibold leading-[21px] text-[#471E24]">
                    {member.name}
                  </h3>

                  <p className="m-0 mt-[2px] font-['Sofia_Pro'] text-[12px] font-light leading-[17px] text-[#8A5C62]">
                    {member.role}
                  </p>
                </div>

                {/* TAG */}
                <div className="mt-5">
                  <span
                    className="
                      inline-flex
                      max-w-full
                      items-center
                      rounded-full
                      bg-[#62343A]/[0.18]
                      px-3
                      py-[6px]
                      font-['Poppins']
                      text-[8px]
                      font-normal
                      leading-[12px]
                      tracking-normal
                      text-[#471E24]
                    "
                  >
                    {member.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
