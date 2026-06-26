import Hero from "./_components/Hero";
import Logos from "./_components/Logos";
import Carousel from "./_components/Carousel";
import TimelineShowcaseCard from "./_components/TimelineShowcaseCard";
import Scrollvelocity from "./_components/Scrollvelocity";

export default function Home() {
  return (
    <>
      <Hero />
      <Scrollvelocity />
      <Carousel />
      {/* <TimelineShowcaseCard /> */}
      <Logos />
    </>
  );
}
