const additionalSkills = [
  "Problem Solving",
  "Linux",
  "Project Management",
  "Team Collaboration",
  "Code Review",
  "Test-Driven Development",
  "RESTful API",
  "MS Office",
];

const AdditionalSkills = () => {
  return (
    <div className="p-8 bg-color-5/50 rounded-lg">
      <h1 className="text-white text-2xl font-semibold mb-4 text-center">
        Additional Skills
      </h1>
      <div className="flex gap-4 justify-center flex-wrap">
        {additionalSkills.map((skill) => (
          <span
            key={skill}
            className="w-fit px-3 py-1.5 rounded-full text-color-4 transition-colors duration-300 bg-color-2/20 hover:bg-color-3/40"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AdditionalSkills;
