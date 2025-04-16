import useInViewSection from "../../Hooks/useInViewSection";

const Education = () => {
  const ref = useInViewSection("education");
  return (
    <div ref={ref} id="education-section" className="min-h-screen text-white">
      <h1 className="text-4xl">Education Component</h1>
    </div>
  );
};

export default Education;
