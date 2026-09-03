
"use client";

import React from "react";

export default function Footer(): React.JSX.Element {
  return (
    <footer className="relative w-full overflow-hidden bg-[#613339]">
      {/* =========================================================
          FULL SECTION BACKGROUND IMAGE
      ========================================================= */}
      <img
        src="/logo 1.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center opacity-[0.15]"
      />

      {/* =========================================================
          FOOTER CONTENT
      ========================================================= */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          h-full
          w-full
          max-w-[1440px]
          flex-col
          px-5
          py-[50px]
          sm:px-6
          md:px-10
          lg:px-[100px]
        "
      >
        {/* =======================================================
            TOP SECTION
        ======================================================= */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* =====================================================
              BRAND + CONTACT
          ===================================================== */}
          <div className="flex max-w-[384px] flex-col lg:col-span-5">
            {/* LOGO */}
            <div className="mb-6 flex items-center gap-3">
              <img
                src="/Group.png"
                alt="Hiba"
                className="h-[28px] w-[28px] object-contain"
              />

              <div className="flex flex-col justify-center">
                <span className="font-manrope text-[32px] font-normal leading-none text-[#FCEFE1]">
                  Hiba
                </span>

                <span className="ml-[18px] mt-1 font-manrope text-[10px] font-normal leading-none text-[#FCEFE1]/70">
                  by Anathalora
                </span>
              </div>
            </div>

            {/* DESCRIPTION */}
            <p className="m-0 font-manrope text-[16px] font-normal leading-[28.8px] tracking-[-0.1px] text-[#FCEFE1]/80">
              A multidisciplinary child and adolescent clinic providing
              personalised mental health and neurodevelopmental care for
              children, young people and their families in Dubai.
            </p>

            {/* CONTACT */}
            <div className="mt-8 flex flex-col gap-2 font-manrope text-[15px] font-normal leading-[26px] tracking-[-0.1px] text-[#FCEFE1]/75">
              <p className="m-0">
                Dubai, United Arab Emirates
              </p>

              <p className="m-0 transition-colors hover:text-[#FCEFE1]">
                <a href="mailto:hello@hibaclinic.ae">
                  hello@hibaclinic.ae
                </a>
              </p>

              <p className="m-0 transition-colors hover:text-[#FCEFE1]">
                <a href="tel:+97140000000">
                  +971 4 000 0000
                </a>
              </p>
            </div>
          </div>

          {/* =====================================================
              RIGHT COLUMNS
          ===================================================== */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:col-span-7 lg:pt-2">
            {/* OUR CARE */}
            <div className="flex flex-col">
              <h4 className="mb-5 font-manrope text-[10px] font-semibold uppercase tracking-[3px] text-[#FCEFE1]/50">
                OUR CARE
              </h4>

              <ul className="m-0 flex list-none flex-col gap-3 p-0 font-manrope text-[14px] font-normal text-[#FCEFE1]/80">
                <li>
                  <a
                    href="#"
                    className="transition-colors hover:text-[#FCEFE1]"
                  >
                    Clinic Services
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="transition-colors hover:text-[#FCEFE1]"
                  >
                    Group Skills Building
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="transition-colors hover:text-[#FCEFE1]"
                  >
                    School Partnerships
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="transition-colors hover:text-[#FCEFE1]"
                  >
                    Clinical Pathway
                  </a>
                </li>
              </ul>
            </div>

            {/* CLINIC */}
            <div className="flex flex-col">
              <h4 className="mb-5 font-manrope text-[10px] font-semibold uppercase tracking-[3px] text-[#FCEFE1]/50">
                CLINIC
              </h4>

              <ul className="m-0 flex list-none flex-col gap-3 p-0 font-manrope text-[14px] font-normal text-[#FCEFE1]/80">
                <li>
                  <a
                    href="#"
                    className="transition-colors hover:text-[#FCEFE1]"
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="transition-colors hover:text-[#FCEFE1]"
                  >
                    Contact
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="transition-colors hover:text-[#FCEFE1]"
                  >
                    Referrals
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="transition-colors hover:text-[#FCEFE1]"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* LEGAL */}
            <div className="flex flex-col">
              <h4 className="mb-5 font-manrope text-[10px] font-semibold uppercase tracking-[3px] text-[#FCEFE1]/50">
                LEGAL
              </h4>

              <ul className="m-0 flex list-none flex-col gap-3 p-0 font-manrope text-[14px] font-normal text-[#FCEFE1]/80">
                <li>
                  <a
                    href="#"
                    className="transition-colors hover:text-[#FCEFE1]"
                  >
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="transition-colors hover:text-[#FCEFE1]"
                  >
                    Terms
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="transition-colors hover:text-[#FCEFE1]"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* =======================================================
            CTA SECTION
        ======================================================= */}
        <div className="mt-[90px] flex flex-col items-start justify-between gap-6  pt-[30px] sm:flex-row sm:items-center">
          <h3 className="m-0 max-w-[600px] font-manrope text-[28px] font-normal leading-tight tracking-[-0.5px] text-[#FCEFE1] sm:text-[34px]">
            Built for How Young Minds Grow
          </h3>

          <a
            href="#"
            className="
              group
              inline-flex
              shrink-0
              items-center
              justify-center
              gap-2
              rounded-full
              bg-[#FCEFE1]
              px-6
              py-3
              font-manrope
              text-[13px]
              font-medium
              leading-none
              text-[#471E24]
              transition-all
              duration-300
              hover:bg-[#B24924]
              hover:text-white
            "
          >
            <span>Book a Consultation</span>

            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>

        {/* =======================================================
            BOTTOM SECTION
        ======================================================= */}
        <div className="mt-[30px] flex flex-col items-center justify-between gap-4 pt-[20px] sm:flex-row">
          <p className="m-0 font-manrope text-[11px] font-normal text-[#FCEFE1]/60">
            © 2026 Hiba by Anathalora. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <a
              href="#"
              className="
                rounded-full
                bg-[#FCEFE1]/10
                px-4
                py-1.5
                font-manrope
                text-[11px]
                font-normal
                text-[#FCEFE1]/80
                transition-colors
                hover:bg-[#B24924]
                hover:text-white
              "
            >
              Instagram
            </a>

            <a
              href="#"
              className="
                rounded-full
                bg-[#FCEFE1]/10
                px-4
                py-1.5
                font-manrope
                text-[11px]
                font-normal
                text-[#FCEFE1]/80
                transition-colors
                hover:bg-[#B24924]
                hover:text-white
              "
            >
              LinkedIn
            </a>

            <a
              href="#"
              className="
                rounded-full
                bg-[#FCEFE1]/10
                px-4
                py-1.5
                font-manrope
                text-[11px]
                font-normal
                text-[#FCEFE1]/80
                transition-colors
                hover:bg-[#B24924]
                hover:text-white
              "
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
