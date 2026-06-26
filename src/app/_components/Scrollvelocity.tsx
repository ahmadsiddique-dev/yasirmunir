import Scroll from "@/components/ScrollVelocity";

const Scrollvelocity = () => {
  return (
    <div className="my-28 w-full overflow-hidden">
      <Scroll
        texts={["META CERTIFIED", "DIGITAL MARKETER"]}
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
