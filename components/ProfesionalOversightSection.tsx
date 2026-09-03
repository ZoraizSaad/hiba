"use client";

export default function ProfessionalOversightSection() {
  return (
    <section className="relative flex h-[733px] w-full items-center justify-center bg-[#F6E3C9] overflow-hidden">
      {/* Programme Front Image */}
      <img
         src="/programmeFront.png"
        alt=""
        className="pointer-events-none absolute left-0 top-0 h-full w-full object-cover"
      />

      {/* Main Content Wrapper */}
      <div className="relative flex h-full w-full flex-row items-end justify-center gap-[100px] pb-[110px]">
        {/* LEFT: Image Container */}
       

        {/* RIGHT: Text Container */}
        <div className="flex w-[502px] shrink-0 flex-col items-start justify-end">
          {/* Programme Introduction */}
          <div className="w-full">
            <div className="flex h-[16px]">
              <p className="m-0 whitespace-nowrap font-sofia text-[12px] font-[400] uppercase leading-[16px] tracking-[3.5px] text-[#613339]">
                Professional Oversight

              </p>
            </div>

            {/* Heading */}
            <div className="w-full pt-2">
              <h2 className="m-0 font-monarcha text-[60px] font-[400] leading-[60px] tracking-[-1.5px] text-[#613339]">
                Developed With 

                <br />
                Multidisciplinary 
                <span className="font-monarcha-italic italic text-[#B85428]">
                  Input
                 
                </span>
              </h2>
            </div>
          </div>

          {/* Paragraph 1 */}
          <div className="w-full pt-4">
            <p className="m-0 font-sofia text-[16px] font-[400] leading-[24px] tracking-[0px] text-[#8A5C62]">
             Programmes are developed or overseen with input from Hiba by , <br />
              Anthalora’s multidisciplinary team.
 </p>
            
          </div>

          {/* Paragraph 2 */}
          <div className="w-full pt-4">
            <p className="m-0 font-sofia text-[16px] font-[400] leading-[24px] tracking-[0px] text-[#8A5C62]">
               Depending on the workshop, sessions may be facilitated or
 <br />
               informed by professionals from psychology, occupational therapy, speech and language therapy,
               <br/>
             
             mental health nursing, education or another relevant discipline. 
            </p>
          </div>
           {/* Paragraph 2 */}
          <div className="w-full pt-4">
            <p className="m-0 font-sofia text-[16px] font-[400] leading-[24px] tracking-[0px] text-[#8A5C62]">
This helps ensure each workshop follows appropriate, evidence
 <br />
             -informed skill-building principles while remaining practical and <br/> engaging.
             
             
            </p>
          </div>

        </div>
         <div className="flex w-[502px] shrink-0 items-end justify-center ml-[50px]">
          <div className="relative h-[512px] w-[400px] overflow-hidden rounded-[9999px_9999px_28px_28px] bg-[#D3ADB5]">
            <img
              width={502}
              src="/ProfessionalOversight.jpg"
              alt="Children building skills"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}