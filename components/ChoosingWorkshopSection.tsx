"use client";

import React from "react";
import BookWorkshopButton from "@/components/BookWorkshopButton";

export default function ChoosingWorkshop() {
  return (
    <section className="relative flex h-[733px] w-full items-center justify-center overflow-hidden bg-[#B85428]">

      {/* Main Content Wrapper */}
      <div className="relative flex h-full w-full flex-row items-end justify-center gap-[100px] pb-[110px]">

        {/* LEFT: Image Container */}
        <div className="flex w-[502px] shrink-0 items-center ">
          <div className="relative h-[550px] w-[400px]">

            {/* Image - clipped to arch */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                borderTopLeftRadius: "291.66px",
                borderTopRightRadius: "291.66px",
              }}
            >
              <img
                src="/ChoosingWorkshop.jpg"
                alt="Choosing A Workshop"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Blurred border ring on top */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                borderTopLeftRadius: "291.66px",
                borderTopRightRadius: "291.66px",
                border: "16px solid rgba(255, 248, 242, 0.2)",
                filter: "blur(1px)",
              }}
            />
          </div>
        </div>

        {/* RIGHT: Text Container */}
        <div className="flex w-[502px] shrink-0 flex-col items-start justify-end">

          {/* Workshop Introduction */}
          <div className="w-full">

            {/* Small Heading */}
            <div className="flex h-[16px]">
              <p className="m-0 whitespace-nowrap font-sofia text-[12px] font-[400] uppercase leading-[16px] tracking-[3.5px] text-[#FCEFDD]">
                Choosing a Workshop
              </p>
            </div>

            {/* Main Heading */}
            <div className="w-full pt-2">
              <h2 className="m-0 font-monarcha text-[60px] font-[400] leading-[60px] tracking-[-1.5px] text-[#FCEFDD]">
                Find the Right
                <br />
                Workshop for Your{" "}
                <span className="font-monarcha-italic italic text-[#FCEFDD]">
                  Child
                </span>
              </h2>
            </div>
          </div>

          {/* Paragraph 1 */}
          <div className="w-full pt-4">
            <p className="m-0 font-sofia text-[16px] font-[400] leading-[24px] tracking-[0px] text-[#FCEFDD]">
              Choose workshops according to your child’s age, interests and the{" "}
              <br />
              skills they would like to practise. You can book one class or select{" "}
              <br />
              multiple sessions within the same booking.
            </p>
          </div>

          {/* Paragraph 2 */}
          <div className="w-full pt-4">
            <p className="m-0 font-sofia text-[16px] font-[400] leading-[24px] tracking-[0px] text-[#FCEFDD]">
              Each workshop will clearly display its age range, date, time,
              <br />
              duration, price and availability.
            </p>
          </div>

          {/* Paragraph 3 */}
          <div className="w-full pt-4">
            <p className="m-0 font-sofia text-[16px] font-[400] leading-[24px] tracking-[0px] text-[#FCEFDD]">
              Participation in a workshop does not constitute a clinical{" "}
              <br />
              assessment, diagnosis or treatment.
            </p>
          </div>

          {/* Book Workshop Button */}
          <div className="w-full pt-6">
            <BookWorkshopButton
              variant="secondary"
              size="md"
              href="#"
            />
          </div>

        </div>
      </div>
    </section>
  );
}