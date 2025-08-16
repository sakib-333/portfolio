import experienceStack from "./experienceStack";

const MyExperience = () => {
  return (
    <div>
      {experienceStack.map((exp) => (
        <div
          key={exp.id}
          className="p-6 bg-color-5/50 rounded-lg space-y-1.5 mt-12"
        >
          <a
            href={exp.companyURL}
            target="_blank"
            className="text-xl hover:text-color-2 transition-all duration-200 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-color-2 to-color-3"
          >
            {exp.companyName}
          </a>
          <p className="text-color-4/80 text-sm">{exp.position}</p>
          <p className="text-color-4/80 text-sm italic">{exp.duration}</p>
          <div className="mt-4">
            <ul className="text-color-4 list-disc space-y-2 pl-3.5">
              {exp.responsibilities.map((res) => (
                <li key={res.id}>{res.responsibility}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyExperience;
