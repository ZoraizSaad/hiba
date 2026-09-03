"use client";

interface Feature {
  id: string | number;
  number: string | number;
  title: string[];
  description?: string;
  variant?: "default" | "highlight";
}

interface Notice {
  heading: string;
  text: string;
  boldSpan?: string;
  smallNote: string;
}

interface ExpectSectionProps {
  title?: string;
  featuredText?: string;
  subtitle?: string;
  features?: Feature[];
  notice?: Notice;
}

const defaultFeatures: Feature[] = [
  {
    id: 1,
    number: "01",
    title: ["Practical, activity-based", "learning"],
    variant: "highlight",
  },
  {
    id: 2,
    number: "02",
    title: ["Age-appropriate group", "challenges"],
    variant: "default",
  },
  {
    id: 3,
    number: "03",
    title: ["Opportunities for teamwork", "and communication"],
    variant: "default",
  },
  {
    id: 4,
    number: "04",
    title: [
      "Guidance from an appropriately qualified",
      "facilitator",
    ],
    variant: "default",
  },
  {
    id: 5,
    number: "05",
    title: [
      "Strategies that can be applied to",
      "everyday situations",
    ],
    variant: "default",
  },
  {
    id: 6,
    number: "06",
    title: [
      "A welcoming and supportive group",
      "environment",
    ],
    variant: "default",
  },
];

export default function ExpectSection({
  title = "Interactive, Structured and Age-Appropriate",
  featuredText = "WHAT TO EXPECT",
  subtitle = "Each workshop is designed around a clear skill-building objective and may include:",
  features = defaultFeatures,
  notice = {
    heading: "IMPORTANT NOTICE",
    text: "The activities, level of challenge and group format will vary according to the workshop and age range. ",
    boldSpan:
      "We also offer gender-segregated classes (e.g., girls only, boys only).*",
    smallNote:
      "*Segregated classes are only offered if demand allows us to.",
  },
}: ExpectSectionProps) {
  const parts = title.split("Age-Appropriate");

  return (
    <section className="w-full bg-[#FCEFDD]">
      <div className="mx-auto w-full max-w-[1240px] py-[100px]">

        {/* ================= HEADER ================= */}
        <div className="mb-[40px] w-full">

          {/* Eyebrow */}
          <div
            className="
              mb-[2px]
              font-monarcha
              text-[12px]
              font-normal
              uppercase
              leading-[18px]
              tracking-[1.5px]
              text-[#B24924]
            "
          >
            {featuredText}
          </div>

          {/* Heading */}
          <h2
            className="
              m-0
              font-monarcha
              text-[60px]
              font-normal
              leading-[60px]
              tracking-[-1.5px]
              text-[#613339]
            "
          >
            <span>{parts[0]}</span>

            <em
              className="
                ml-2
                font-monarcha
                text-[60px]
                font-normal
                leading-[60px]
                tracking-[-1.5px]
                text-[#B24924]
              "
            >
              {parts[1] ? "Age-Appropriate" : ""}
            </em>
          </h2>

          {/* Subtitle */}
          <p
            className="
              m-0
              mt-[4px]
              max-w-[600px]
              font-sofia
              text-[16px]
              font-normal
              leading-[24px]
              tracking-[0px]
              text-[#613339]
            "
          >
            {subtitle}
          </p>
        </div>

        {/* ================= FEATURE CARDS ================= */}
        <div className="grid w-full grid-cols-3 gap-[24px]">
          {features.map((feature) => {
            const isHighlight = feature.variant === "highlight";

            return (
              <div
                key={feature.id}
                className="
                  group
                  relative
                  flex
                  h-[115.33px]
                  w-[397px]
                  cursor-pointer
                  flex-col
                  justify-between
                  rounded-[24px]
                  border-[0.67px]
                  border-[#61333926]
                  bg-[#F6E3C9]
                  px-[16px]
                  py-[16px]
                  transition-all
                  duration-300
                  hover:bg-[#B24924]
                "
              >
                {/* Top Row */}
                <div
                  className="
                    flex
                    w-full
                    items-start
                    justify-between
                  "
                >
                  {/* Number */}
                  <span
                    className="
                      shrink-0
                      font-sofia
                      text-[13px]
                      font-normal
                      leading-[20px]
                      text-[#B79A8B]
                      transition-colors
                      duration-300
                      group-hover:text-[#FCEFDD]
                    "
                  >
                    {String(feature.number).padStart(2, "0")}
                  </span>

                  {/* Arrow */}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="
                      shrink-0
                      text-[#613339]
                      opacity-40
                      transition-colors
                      duration-300
                      group-hover:text-[#FCEFDD]
                    "
                  >
                    <path
                      d="M2.5 11.5L11.5 2.5"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />

                    <path
                      d="M5 2.5H11.5V9"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Bottom Row / Title */}
                <span
                  className="
                    block
                    w-full
                    font-sofia
                    text-[16px]
                    font-normal
                    leading-[24px]
                    tracking-[0px]
                    text-[#613339]
                    transition-colors
                    duration-300
                    group-hover:text-[#FCEFDD]
                  "
                >
                  {feature.title.map((line, index) => (
                    <span key={index}>
                      {line}
                      {index < feature.title.length - 1 && <br />}
                    </span>
                  ))}
                </span>
              </div>
            );
          })}
        </div>

        {/* ================= IMPORTANT NOTICE ================= */}
        <div className="mt-[24px] w-full">

          {/* Notice Card */}
          <div
            className="
              flex
              h-[115px]
              w-full
              flex-col
              justify-center
              gap-[8px]
              rounded-[24px]
              border-[0.67px]
              border-[#61333926]
              bg-[#EDC692]
              px-[16px]
              py-[20px]
            "
          >
            {/* Notice Heading */}
            <div
              className="
                font-sofia
                text-[16px]
                font-semibold
                leading-[24px]
                tracking-[0px]
                text-[#613339]
              "
            >
              {notice.heading}
            </div>

            {/* Notice Body */}
            <div
              className="
                font-sofia
                text-[16px]
                font-normal
                leading-[24px]
                tracking-[0px]
                text-[#613339]
              "
            >
              {notice.text}

              {notice.boldSpan && (
                <strong className="font-semibold">
                  {notice.boldSpan}
                </strong>
              )}
            </div>
          </div>

          {/* Footnote */}
          <div
            className="
              mt-[8px]
              font-sofia
              text-[16px]
              font-normal
              italic
              leading-[21.53px]
              tracking-[0px]
              text-[#8A5C62]
            "
          >
            {notice.smallNote}
          </div>
        </div>
      </div>
    </section>
  );
}