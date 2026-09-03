"use client";

export default function ChoosingWorkshop() {
  return (
    <section className="relative flex h-[733px] w-full items-center justify-center bg-[#B85428] overflow-hidden">
    

      {/* Main Content Wrapper */}
      <div className="relative flex h-full w-full flex-row items-end justify-center gap-[100px] pb-[110px]">
        {/* LEFT: Image Container */}
        <div className="flex w-[502px] shrink-0 items-end justify-center ml-[50px]">
<div
  className="
    relative
    h-[550px]
    w-[400px]
   
  "
>  <img
              width={502}
              src="/ChoosingWorkshop.jpg"
              alt="Choosing A Workshops"
              className="h-full w-full object-cover "
            />
          </div>
        </div>

        {/* RIGHT: Text Container */}
        <div className="flex w-[502px] shrink-0 flex-col items-start justify-end">
          {/* Programme Introduction */}
          <div className="w-full">
            <div className="flex h-[16px]">
              <p className="m-0 whitespace-nowrap font-sofia text-[12px] font-[400] uppercase leading-[16px] tracking-[3.5px] text-[#FCEFDD]">
                Choosing a Workshop

              </p>
            </div>

            {/* Heading */}
            <div className="w-full pt-2">
              <h2 className="m-0 font-monarcha text-[60px] font-[400] leading-[60px] tracking-[-1.5px] text-[#FCEFDD]">
                Find the Right 

                <br />
                Workshop for Your 
{" "}
                <span className="font-monarcha-italic italic text-[#FCEFDD]">
                Child
                  
                </span>
              </h2>
            </div>
          </div>

          {/* Paragraph 1 */}
          <div className="w-full pt-4">
            <p className="m-0 font-sofia text-[16px] font-[400] leading-[24px] tracking-[0px] text-[#FCEFDD]">
             Choose workshops according to your child’s age, interests and the <br/> skills they would like to practise. You can book one class or select <br/> multiple sessions within the same booking.

            </p>
          </div>

          {/* Paragraph 2 */}
          <div className="w-full pt-4">
            <p className="m-0 font-sofia text-[16px] font-[400] leading-[24px] tracking-[0px] text-[#FCEFDD]">
             Each workshop will clearly display its age range, date, time,<br/> duration, price and availability.

            </p>
          </div>
          <div className="w-full pt-4">
            <p className="m-0 font-sofia text-[16px] font-[400] leading-[24px] tracking-[0px] text-[#FCEFDD]">
Participation in a workshop does not constitute a clinical <br/> assessment, diagnosis or treatment.

            </p>
          </div>
        </div>
      </div>
    </section>
  );
}