import Scroll from "@/components/ScrollVelocity";

const Scrollvelocity = () => {
  return (
    <div className="md:my-28 mt-0 w-full overflow-hidden">
      <Scroll
        texts={["META CERTIFIED", "DIGITAL MARKETER"]}
        velocity={40}
        className="custom-scroll-text"
        numCopies={6}
        damping={50}
        stiffness={400}
      />
    </div>
  );
};

export default Scrollvelocity;
