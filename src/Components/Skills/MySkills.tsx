import { useEffect, useState } from "react";
import skilBtns from "./skillBtns";
import SkillsStack from "./SkillsStack";

const MySkills = () => {
  const [actvSect, setActvSect] = useState("all skills");
  const [skills, setSkills] = useState(SkillsStack);

  useEffect(() => {
    if (actvSect === "all skills") {
      setSkills(SkillsStack);
    } else {
      setSkills(() =>
        SkillsStack.filter((skill) => skill.category === actvSect)
      );
    }
  }, [actvSect]);

  return (
    <div className="w-full">
      <div className="flex gap-5 justify-center flex-wrap">
        {skilBtns.map((btn) => (
          <button
            key={btn.title}
            className={`btn-primary text-color-4 ${
              actvSect === btn.title ? "bg-color-2" : "bg-color-5/50"
            }`}
            onClick={() => setActvSect(btn.title)}
          >
            <div className="flex items-center gap-2 capitalize">
              <btn.icon /> <span>{btn.title}</span>
            </div>
          </button>
        ))}
      </div>
      <div className="grid mt-16 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="rounded-md bg-color-5/50 relative p-3 space-y-3 hover:-translate-y-1 transition duration-200"
          >
            <div className="flex items-end gap-2">
              <img
                className="h-16 w-16 rounded-sm p-3 bg-color-2/20 object-cover"
                src={skill.icon}
                alt={skill.title}
              />
              <h1 className="text-2xl font-bold text-color-4">{skill.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySkills;
