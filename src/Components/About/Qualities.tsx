import { FaBook, FaCode } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import { LuBrainCircuit } from "react-icons/lu";

const qualities = [
  {
    id: "quality-1",
    icon: <FaCode />,
    title: "Problem Solver",
    description:
      "Approaching complex coding challenges with analytical thinking and persistence.",
  },
  {
    id: "quality-2",
    icon: <FaBook />,
    title: "Continuous Learner",
    description:
      "Passionate about staying updated with the latest technologies and best practices.",
  },
  {
    id: "quality-3",
    icon: <LuBrainCircuit />,
    title: "Creative Thinker",
    description: "Finding innovative solutions by thinking outside the box.",
  },
  {
    id: "quality-4",
    icon: <HiAcademicCap />,
    title: "Academic Focus",
    description:
      "Achived B.Sc (Engg.) degree in Computer Science & Engineering.",
  },
];

const Qualities = () => {
  return qualities.map((quality) => (
    <div
      className="p-6 bg-color-5/50 space-y-2 rounded-lg transition duration-300 hover:-translate-y-1"
      key={quality.id}
    >
      <p className="text-3xl text-color-2 w-fit p-3 bg-color-3/10 rounded-md">
        {quality.icon}
      </p>
      <h1 className="text-xl text-color-4 font-semibold">{quality.title}</h1>
      <p className="text-color-4/80">{quality.description}</p>
    </div>
  ));
};

export default Qualities;
