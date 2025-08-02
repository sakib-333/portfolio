import Heading from "../Heading/Heading";
import MyExperience from "./MyExperience";

const Experience = () => {
  return (
    <div id="experience" className="mt-20 pb-20 px-4 mx-auto">
      <Heading title="Experience" />
      <p className="max-w-2xl mt-4 mx-auto text-center text-color-4/80">
        A summary of my professional experiences that have enhanced my practical
        skills, problem-solving abilities, and industry knowledge.
      </p>
      <div className="mt-16">
        <MyExperience />
      </div>
    </div>
  );
};

export default Experience;
