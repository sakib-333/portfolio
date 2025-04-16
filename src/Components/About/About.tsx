import useInViewSection from "../../Hooks/useInViewSection";

const About = () => {
  const ref = useInViewSection("about");
  return (
    <div ref={ref} id="about-section" className="min-h-screen text-white">
      <h1 className="text-4xl">About Component</h1>
    </div>
  );
};

export default About;
