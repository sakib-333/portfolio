import digitalEvent from "./assets/digital-event.png";
import matrimonyPortal from "./assets/matrimony-portal.png";
import whereisit from "./assets/whereisit.png";
import croudCube from "./assets/croud-cube.png";
import rinterio from "./assets/rinterio.png";
import fitness from "./assets/fitness.png";
import hockey from "./assets/hockey.png";

// Category wise filtering
// 1. language
// 2. library
// 3. framework

const projectsStack = [
  {
    id: "project-1",
    name: "Digital Event Scheduler",
    photo: digitalEvent,
    description: "Schedule your organization's event in a modern way.",
    language: "TypeScript",
    library: "React",
    framework: "N/A",
    technologies: ["TypeScript", "React", "Express", "Mongoose"],
    liveLink: "https://digital-event-scheduler-system.web.app",
    github:
      "https://github.com/sakib-333/digital-event-scheduler-system-client",
  },
  {
    id: "project-2",
    name: "Matrimony Portal",
    photo: matrimonyPortal,
    description: "Find your expected partner from our portal.",
    language: "JavaScript",
    library: "React",
    framework: "N/A",
    technologies: ["JavaScript", "React", "Express", "MongoDB"],
    liveLink: "https://ph-b10-a12.web.app",
    github: "https://github.com/sakib-333/matrimony-platform-client",
  },
  {
    id: "project-3",
    name: "WhereIsIt",
    photo: whereisit,
    description: "Post here what you found or lost to return or get back.",
    language: "JavaScript",
    library: "React",
    framework: "N/A",
    technologies: ["JavaScript", "React", "Express", "MongoDB"],
    liveLink: "https://ph-b10-a11.web.app",
    github: "https://github.com/sakib-333/whereisit-client",
  },
  {
    id: "project-4",
    name: "Croud Cube",
    photo: croudCube,
    description: "Gather donation for various social developments.",
    language: "JavaScript",
    library: "React",
    framework: "N/A",
    technologies: ["JavaScript", "React", "Express", "MongoDB"],
    liveLink: "https://ph-b10-a10.web.app",
    github: "https://github.com/sakib-333/crowdcube-client",
  },
  {
    id: "project-5",
    name: "Rinterio",
    photo: rinterio,
    description: "Get the best design for your sweet home.",
    language: "HTML & CSS",
    library: "N/A",
    framework: "N/A",
    technologies: ["HTML", "CSS", "Tailwind"],
    liveLink: "https://sakib-333.github.io/PH-B10-A3",
    github: "https://github.com/sakib-333/PH-B10-A3",
  },
  {
    id: "project-6",
    name: "Fitness",
    photo: fitness,
    description: "Meet our gym trainer to fit your body.",
    language: "HTML & CSS",
    library: "N/A",
    framework: "N/A",
    technologies: ["HTML", "CSS", "Tailwind"],
    liveLink: "https://sakib-333.github.io/PH-B10-A2",
    github: "https://github.com/sakib-333/PH-B10-A2",
  },
  {
    id: "project-7",
    name: "Hockey",
    photo: hockey,
    description: "Meet all the heroes from the field.",
    language: "HTML & CSS",
    library: "N/A",
    framework: "N/A",
    technologies: ["HTML", "CSS", "Tailwind"],
    liveLink: "https://sakib-333.github.io/hockey",
    github: "https://github.com/sakib-333/hockey",
  },
];

export default projectsStack;
