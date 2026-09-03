"use client";

import React, { useState, useEffect, useRef } from "react";

type JourneyStep = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
};

const steps: JourneyStep[] = [
  {
    number: "01",
    title: "Referral",
    subtitle: "The first conversation begins.",
    description:
      "A family, GP or school gets in touch. We listen carefully and gently open the door to support.",
    icon: "/step1.svg",
  },
  {
    number: "02",
    title: "Triage",
    subtitle: "We understand what matters most.",
    description:
      "We understand what matters most and make sure the family receives the right support.",
    icon: "/step2.svg",
  },
  {
    number: "03",
    title: "Assessment",
    subtitle: "A clear, thorough understanding.",
    description:
      "A clear and thorough assessment creates a shared understanding of the child's needs.",
    icon: "/step3.svg",
  },
  {
    number: "04",
    title: "Care Plan",
    subtitle: "A plan shaped around one child.",
    description:
      "A personalised care plan is shaped around the individual child and their family.",
    icon: "/step4.svg",
  },
  {
    number: "05",
    title: "Intervention",
    subtitle: "Support delivered with care.",
    description:
      "Support is delivered with care, consistency and the family involved throughout.",
    icon: "/step5.svg",
  },
  {
    number: "06",
    title: "MDT Review",
    subtitle: "Multiple disciplines review progress together.",
    description:
      "Multiple disciplines come together to review progress and agree the next direction.",
    icon: "/step6.svg",
  },
  {
    number: "07",
    title: "Next Steps",
    subtitle: "A clear path forward.",
    description:
      "A clear path forward is agreed so the family understands what happens next.",
    icon: "/step7.svg",
  },
];

export default function CareJourney(): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [dotYPositions, setDotYPositions] = useState<number[]>([]);

  const updateTimeline = () => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();

    const centers = itemRefs.current.map((item) => {
      if (!item) return 0;
      const rect = item.getBoundingClientRect();
      return rect.top - containerRect.top + rect.height / 2;
    });

    setDotYPositions(centers);
  };

  useEffect(() => {
    updateTimeline();

    if (typeof window !== "undefined" && "ResizeObserver" in window) {
      const resizeObserver = new ResizeObserver(() => {
        updateTimeline();
      });

      if (containerRef.current) {
        resizeObserver.observe(containerRef.current);
      }

      itemRefs.current.forEach((item) => {
        if (item) resizeObserver.observe(item);
      });

      window.addEventListener("resize", updateTimeline);

      return () => {
        resizeObserver.disconnect();
        window.removeEventListener("resize", updateTimeline);
      };
    }
  }, []);

  const topDotY = dotYPositions[0] ?? 0;
  const bottomDotY = dotYPositions[dotYPositions.length - 1] ?? 0;
  const svgHeight = Math.max(0, bottomDotY - topDotY);

  // Path coordinates relative to the SVG container starting at topDotY
  const generatePath = () => {
    if (dotYPositions.length < 2 || svgHeight === 0) return "";
    const relativeY = dotYPositions.map((y) => y - topDotY);

    let d = `M 35 0`;
    for (let i = 0; i < relativeY.length - 1; i++) {
      const yStart = relativeY[i];
      const yEnd = relativeY[i + 1];
      const dy = yEnd - yStart;
      const curveX = i % 2 === 0 ? 48 : 22;
      d += ` C ${curveX} ${yStart + dy * 0.35}, ${curveX} ${
        yStart + dy * 0.65
      }, 35 ${yEnd}`;
    }
    return d;
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#471E24] px-5 py-[100px] md:px-10 lg:px-[100px]">
      <div className="relative mx-auto w-full max-w-[1440px]">
        {/* HEADER */}
        <div className="mx-auto mb-[54px] w-full max-w-[970px] text-center">
          <p className="mb-[12px] font-sofia text-[9px] font-normal uppercase tracking-[4px] text-[#FCEFE1]/70">
            THE CLINICAL PATHWAY
          </p>

          <h2 className="m-0 font-monarcha text-[44px] font-normal leading-[1.1] tracking-[-1.2px] text-[#FCEFE1] sm:text-[54px] md:text-[60px]">
            The Care <span className="text-[#B24924]">Journey</span>
          </h2>

          <p className="mx-auto mt-[10px] max-w-[620px] font-sofia text-[14px] font-normal leading-[24px] tracking-[0px] text-[#FCEFE1]/80">
            Every family receives a clear and structured journey, from the
            first referral through to personalised intervention and ongoing
            progress reviews.
          </p>
        </div>

        {/* JOURNEY CONTAINER */}
        <div className="relative mx-auto w-full max-w-[970px]">
          <div ref={containerRef} className="relative w-full">
            {/* SVG TIMELINE LINE (Strictly bounded from top dot center to bottom dot center) */}
            {dotYPositions.length >= 2 && svgHeight > 0 && (
              <div
                className="pointer-events-none absolute left-0 hidden w-[70px] md:block z-10"
                style={{
                  top: `${topDotY}px`,
                  height: `${svgHeight}px`,
                }}
              >
                <svg
                  className="h-full w-full overflow-visible"
                  style={{ height: `${svgHeight}px` }}
                >
                  <path
                    d={generatePath()}
                    fill="none"
                    stroke="#A86D72"
                    strokeWidth="1.3"
                    strokeOpacity="0.6"
                  />
                </svg>
              </div>
            )}

            {/* CARDS LIST */}
            <div className="relative ml-0 flex w-full flex-col gap-4 md:ml-[70px] md:w-[calc(100%-70px)]">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  className="group relative"
                >
                  {/* TIMELINE DOT (Exact alignment at x=35px and glow ring hover matching user image) */}
                  <div className="pointer-events-none absolute left-[-35px] top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center md:flex w-[32px] h-[32px]">
                    <div className="flex items-center justify-center rounded-full bg-transparent transition-all duration-[400ms] ease-out group-hover:w-[28px] group-hover:h-[28px] group-hover:bg-[#FCEFE1]/25">
                      <div className="h-[10px] w-[10px] rounded-full bg-[#FCEFE1] transition-all duration-[400ms] ease-out group-hover:h-[13px] group-hover:w-[13px]" />
                    </div>
                  </div>

                  {/* CARD */}
                  <JourneyCard step={step} />
                </div>
              ))}
            </div>
          </div>

          {/* BUTTON */}
          <div className="mt-10 flex justify-center">
            <a
              href="#"
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-[#FCEFE1]/10
                px-6
                py-[12px]
                font-sofia
                text-[11px]
                font-medium
                tracking-wide
                text-[#FCEFE1]
                transition-all
                duration-300
                hover:bg-[#B24924]
              "
            >
              <span>View Our Clinical Pathway</span>
              <span
                aria-hidden="true"
                className="
                  inline-block
                  transition-transform
                  duration-300
                  ease-out
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CARD COMPONENT
========================================================= */

interface JourneyCardProps {
  step: JourneyStep;
}

function JourneyCard({ step }: JourneyCardProps): React.JSX.Element {
  return (
    <article
      className="
        relative
        flex
        h-[98px]
        w-full
        cursor-pointer
        flex-col
        justify-center
        overflow-hidden
        rounded-[28px]
        border-[0.67px]
        border-[#471E24]/[0.08]
        bg-[#D3ADB5]
        px-[28px]
        py-[22px]
        transition-all
        duration-[600ms]
        ease-[cubic-bezier(0.16,1,0.3,1)]
        group-hover:h-[180px]
        group-hover:bg-[#B24924]
      "
    >
      {/* MAIN ROW */}
      <div className="flex min-h-0 items-center gap-[16px]">
        {/* ICON */}
        <div
          className="
            flex
            h-[44px]
            w-[44px]
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-[#471E24]/[0.08]
            transition-all
            duration-[500ms]
            ease-[cubic-bezier(0.16,1,0.3,1)]
            group-hover:bg-[#FCEFE1]
          "
        >
          <img
            src={step.icon}
            alt=""
            aria-hidden="true"
            className="
              h-[20px]
              w-[20px]
              object-contain
              transition-all
              duration-[500ms]
              ease-[cubic-bezier(0.16,1,0.3,1)]
            "
          />
        </div>

        {/* TEXT CONTENT */}
        <div className="flex flex-col justify-center min-w-0">
          {/* TITLE ROW */}
          <div className="flex items-baseline gap-[6px]">
            <span
              className="
                font-monarcha
                italic
                text-[15px]
                text-[#471E24]/70
                transition-colors
                duration-500
                group-hover:text-[#FCEFE1]/80
              "
            >
              {step.number}
            </span>

            <h3
              className="
                m-0
                font-monarcha
                text-[22px]
                md:text-[24px]
                font-normal
                leading-[28px]
                tracking-[-0.3px]
                text-[#471E24]
                transition-colors
                duration-500
                group-hover:text-[#FCEFE1]
              "
            >
              {step.title}
            </h3>
          </div>

          {/* SUBTITLE (Single line: whitespace-nowrap) */}
          <p
            className="
              m-0
              mt-[2px]
              font-sofia
              text-[13px]
              md:text-[14px]
              font-normal
              leading-[20px]
              text-[#471E24]/80
              whitespace-nowrap
              transition-colors
              duration-500
              group-hover:text-[#FCEFE1]/90
            "
          >
            {step.subtitle}
          </p>
        </div>
      </div>

      {/* DESCRIPTION (REVEALED ON HOVER) */}
      <div
        className="
          ml-[60px]
          mt-[14px]
          max-h-0
          max-w-[650px]
          translate-y-[-6px]
          overflow-hidden
          opacity-0
          transition-all
          duration-[500ms]
          ease-[cubic-bezier(0.16,1,0.3,1)]
          group-hover:max-h-[80px]
          group-hover:translate-y-0
          group-hover:opacity-100
        "
      >
        <p className="m-0 font-sofia text-[14px] font-normal leading-[22px] text-[#FCEFE1]">
          {step.description}
        </p>
      </div>
    </article>
  );
}