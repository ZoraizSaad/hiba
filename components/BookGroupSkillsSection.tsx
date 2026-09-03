"use client";

import React from "react";
import BookWorkshopButton from "@/components/BookWorkshopButton";

export default function BookGroupSkillsSection(): React.JSX.Element {
  return (
    <section className="relative flex h-[850px] w-full items-center justify-center overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <img
        src="/begin.jpg"
        alt="Book a Group Skills Building Class"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* SECTION COLOR OVERLAY */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-[#B24924]/40 via-[#B24924]/70 to-[#B24924]/25" />

      {/* CENTER FLOATING GLASS CARD */}
      <div className="relative z-10 flex w-full justify-center px-5">
        <div className="relative flex w-full max-w-[936px] flex-col items-center justify-center rounded-[63px] border-[0.75px] border-white/60 bg-[linear-gradient(135deg,rgba(252,239,221,0.78)_0%,rgba(252,239,221,0.46)_58%,rgba(245,226,203,0.5)_100%)] px-6 py-[60px] text-center shadow-[0_40.5px_81px_-33.75px_rgba(90,41,50,0.3),0_13.5px_31.5px_-15.75px_rgba(90,41,50,0.2)] md:px-[72px] md:py-[90px]">
          {/* SUBTITLE TAG */}
          <p className="mb-3 font-sofia text-[10px] font-normal uppercase tracking-[4px] text-[#471E24]/75">
            WHERE TO BEGIN
          </p>

          {/* MAIN HEADING */}
          <h2 className="text-center font-monarcha text-[72px] font-normal leading-[72px] tracking-[-1.5px] text-[#613339]">
            Book a Group Skills{" "}
            <span className="block text-center font-monarcha italic text-[72px] font-normal leading-[72px] tracking-[-1.5px] text-[#B24924]">
              Building Class
            </span>
          </h2>

          {/* PARAGRAPH (Line break after child's, open text spacing) */}
          <p className="mt-6 text-center font-sofia text-[20px] font-normal leading-[30px] tracking-[0px] text-[#8A5C62]">
            Choose one workshop or book multiple sessions based on your child&apos;s
            <br />
            age and interests.
          </p>

          {/* REUSABLE BOOK WORKSHOP BUTTON */}
          <div className="mt-9">
            <BookWorkshopButton
              variant="primary"
              size="lg"
              showIcon={true}
              iconType="step6"
              href="#"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
