import { HiAcademicCap } from "react-icons/hi";
import Heading from "../Heading/Heading";
import educationStack from "./educationStack";

const Education = () => {
  return (
    <div id="education" className="mt-20 pb-20 px-4 mx-auto">
      <Heading title="Education" />
      <p className="max-w-2xl mt-4 mx-auto text-center text-color-4/80">
        My academic background and educational qualifications that have shaped
        my skills and knowledge.
      </p>
      <ul className="mt-4 timeline timeline-snap-icon max-md:timeline-compact timeline-vertical space-y-3">
        {educationStack.map((edu, indx) => (
          <li
            key={edu.id}
            className="border-l-3 border-color-2 rounded-md md:border-none"
          >
            <div className="timeline-middle hidden md:block text-xl text-color-2 border border-color-2 rounded-full">
              <HiAcademicCap />
            </div>
            <div
              className={`${
                indx % 2 ? "timeline-end" : "timeline-start"
              } md:text-end p-5 w-full rounded-md bg-color-5/50 m-0`}
            >
              <div className="text-lg font-black text-color-4">
                {edu.degree}
              </div>
              <p className="text-color-4/80">{edu.institute}</p>
              <time className="font-mono italic text-color-4">{edu.year}</time>
            </div>
            <hr className="bg-gradient-to-b hidden md:block from-color-2 to-color-3" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;
