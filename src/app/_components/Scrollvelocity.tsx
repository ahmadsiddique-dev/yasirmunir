import Scroll from "@/components/ScrollVelocity";

const Scrollvelocity = () => {
  return (
    <div className="my-8 w-full overflow-hidden">
      <Scroll
        texts={["Multan, Top Digital Marketer", "Scroll Down"]}
        velocity={100}
        className="custom-scroll-text"
        numCopies={6}
        damping={50}
        stiffness={400}
      />
    </div>
  );
};

export default Scrollvelocity;
