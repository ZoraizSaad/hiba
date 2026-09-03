"use client";

import React, { useState } from "react";
import BookWorkshopButton from "@/components/BookWorkshopButton";

const workshops = [
  {
    id: 1,
    title: "Memory Boost Lab",
    image: "/FeaturedWorkshopLeft.jpg",
    description:
      "A cognitive challenge where participants practise listening, retaining and recalling detailed information through interactive briefings and activities. Strategies include visualisation, association, repetition, chunking and categorisation.",
    details: {
      "Age group": "13–18 years",
      Duration: "60 minutes",
      "Skills practised":
        "Working memory, attention, recall, listening and mental organisation",
    },
  },
  {
    id: 2,
    title: "The Decision Lab",
    image: "/FeaturedWorkshopRight.jpg",
    description:
      "Interactive team challenge to manage a fictional city, balance priorities and respond to changing circumstances; opportunity to consider options and explain reasoning.",
    details: {
      "Age group": "13–18 years",
      Duration: "60 minutes",
      Facilitator: "Psychologist",
      "Skills practised":
        "Critical thinking, decision-making, problem-solving, planning and teamwork",
    },
  },
];

export default function FeaturedWorkshop() {
  const [hoveredBtn, setHoveredBtn] = useState<number | null>(null);

  return (
    <section
      className="
        w-full
        bg-[#B85428]
        px-[24px]
        py-[100px]
      "
    >
      {/* Main Container */}
      <div className="mx-auto w-full max-w-[1172px]">

        {/* Header */}
        <div className="w-full">
          {/* Featured Label */}
          <p
            className="
              m-0
              w-max
              whitespace-nowrap
              font-sofia
              text-[12px]
              font-normal
              uppercase
              leading-[16px]
              tracking-[3.5px]
              text-[#FCEFDD]
              opacity-60
            "
          >
            FEATURED WORKSHOPS
          </p>

          {/* Heading */}
          <h1
            className="
              m-0
              mt-[4px]
              text-left
              font-monarcha
              text-[60px]
              font-normal
              leading-[60px]
              tracking-[-1.5px]
              text-[#FCEFDD]
            "
          >
            What Happens During a Workshop?
          </h1>
        </div>

        {/* Workshop Cards */}
        <div
          className="
            mt-[40px]
            grid
            grid-cols-2
            gap-[60px]
          "
        >
          {workshops.map((workshop) => (
            <div
              key={workshop.id}
              className="
                flex
                h-[761px]
                w-[556px]
                flex-col
                overflow-hidden
                rounded-[28px]
                border-t-2
                border-t-[#B2492440]
                bg-[#FCEFDD]
              "
            >
              {/* Workshop Image */}
              <div
                className="
                  h-[288px]
                  w-full
                  shrink-0
                  overflow-hidden
                  rounded-tl-[28px]
                  rounded-tr-[28px]
                "
              >
                <img
                  src={workshop.image}
                  alt={workshop.title}
                  className="
                    h-full
                    w-full
                    object-cover
                  "
                />
              </div>

              {/* Card Content */}
              <div
                className="
                  flex
                  flex-1
                  flex-col
                  px-[24px]
                  pb-[24px]
                  pt-[32px]
                "
              >
                {/* Workshop Title */}
                <h3
                  className="
                    m-0
                    w-full
                    text-left
                    font-monarcha
                    text-[24px]
                    font-normal
                    leading-[32px]
                    tracking-[-0.5px]
                    text-[#613339]
                  "
                >
                  {workshop.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    m-0
                    mt-[24px]
                    w-full
                    text-left
                    font-sofia
                    text-[16px]
                    font-normal
                    leading-[24px]
                    tracking-[0.2px]
                    text-[#8A5C62]
                  "
                >
                  {workshop.description}
                </p>

                {/* Details */}
                <div className="mt-[32px] w-full">
                  {Object.entries(workshop.details).map(([key, value]) => (
                    <div
                      key={key}
                      className="
                        flex
                        w-full
                        items-start
                        gap-[12px]
                        border-t-[0.67px]
                        border-t-[#B2492440]
                        py-[10px]
                      "
                    >
                      {/* Left Label */}
                      <div
                        className="
                          w-[40%]
                          shrink-0
                          font-sofia
                          text-[14px]
                          font-normal
                          leading-[20px]
                          text-[#8A5C62]
                          opacity-60
                        "
                      >
                        {key}
                      </div>

                      {/* Right Value */}
                      <div
                        className="
                          flex-1
                          font-sofia
                          text-[14px]
                          font-normal
                          leading-[20px]
                          text-[#8A5C62]
                        "
                      >
                        {value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Book Button */}
                <div className="mt-auto mr-auto">
                  <BookWorkshopButton
                    variant="terracotta"
                    size="sm"
                    iconType="plus"
                    showIcon={true}
                    showArrow={false}
                    href="#"
                  >
                    Book Workshop
                  </BookWorkshopButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
