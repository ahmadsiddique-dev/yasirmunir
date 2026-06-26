import dynamic from "next/dynamic";
import Hero from "./_components/Hero";

const Scrollvelocity = dynamic(() => import("./_components/Scrollvelocity"));
const Carousel = dynamic(() => import("./_components/Carousel"));
const Logos = dynamic(() => import("./_components/Logos"));
const Contact = dynamic(() => import("./_components/Contact"));

export default function Home() {
  return (
    <>
      <Hero />
      <Scrollvelocity />
      <Carousel />
      <Logos />
      <Contact />
    </>
  );
}
