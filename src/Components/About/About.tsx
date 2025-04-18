import useInViewSection from "../../Hooks/useInViewSection";
import Heading from "../Heading/Heading";
import Qualities from "./Qualities";

const About = () => {
  const ref = useInViewSection("about");
  return (
    <div ref={ref} id="about-section" className="mt-20 pb-20 px-4">
      <Heading title="About Me" />
      <div className="w-full mt-16 flex flex-col lg:flex-row gap-10 relative">
        <div className="w-full lg:w-7/12 p-6 bg-color-5/50 rounded-lg">
          <h1 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-color-2 to-color-3">
            Who am I
          </h1>
          <p className="text-color-4/80 text-justify">
            As a Frontend Developer with a background in Computer Science &#38;
            Engineering &#40;CSE&#41;, I have proper knowledge in web
            development and conversational English skills under my belt. I have
            completed my B.Sc &#40;Engg.&#41; degree from Gopalganj Science and
            Technology University in 2024. Coding and problem-solving through
            code are my passions, and I am excited to collaborate with talented
            programmers and expand my knowledge even more!
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          <Qualities />
        </div>
      </div>
    </div>
  );
};

export default About;
