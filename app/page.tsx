import Hero from "@/components/Hero";
import ProgrammeSection from "@/components/ProgrammeSection";
import WorkshopSection from "@/components/WorkshopSection";
import OurWorkshop from "@/components/OurWorkshop";
import FeaturedWorkshop from "@/components/FeaturedWorkshop";
import ExpectSection from "@/components/ExpertSection";
import ProfessionalOversightSection from "@/components/ProfesionalOversightSection";
import ChoosingWorkshop from "@/components/ChoosingWorkshopSection";
import CareJourney from "@/components/CareJourney";
import MeetOurTeam from "@/components/MeetOurTeam";
import BookGroupSkillsSection from "@/components/BookGroupSkillsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative flex w-[1400px] flex-col bg-[#FCEFDD]">
      
      <div className="relative w-[1400px] h-[796px] overflow-hidden">
        <img
          src="/lowerhero.png"
          alt=""
          className="absolute inset-0 z-0 h-full w-full object-cover"
        />
        <img
          src="/herobg.png"
          alt=""
          className="absolute inset-0 z-[1] h-full w-full object-cover"
        />
        <div className="relative z-[2] w-full h-full">
          <Hero />
        </div>
      </div>
      <ProgrammeSection />
      <WorkshopSection />
      <OurWorkshop />
      <FeaturedWorkshop/>
      <ExpectSection/>
      <ProfessionalOversightSection/>
      <ChoosingWorkshop/>
      <CareJourney/>
      <MeetOurTeam/>
      <BookGroupSkillsSection/>
      <Footer/>
    </main>
  );
}