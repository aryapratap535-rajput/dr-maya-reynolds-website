import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import WhoWeHelp from '@/components/WhoWeHelp';
import HowWeWork from '@/components/HowWeWork';
import Expertise from '@/components/Expertise';
import OurOffice from '@/components/OurOffice';
import FAQs from '@/components/FAQs';
import BookingCTA from '@/components/BookingCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <WhoWeHelp />
      <HowWeWork />
      <Expertise />
      <OurOffice />
      <FAQs />
      <BookingCTA />
    </>
  );
}