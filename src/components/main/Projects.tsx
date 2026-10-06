import { motion } from "framer-motion";

const Projects = () => {
    const projects = [
        {
            title: "Quizzen AI",
            image: "/project-images/quizzen-ai.png",
            tech: ["React", "NestJS", "Convex", "Shadcn UI"],
            description:
                "Quizzen AI is a TypeScript-powered quiz platform that uses AI to generate engaging assessments, personalize questions, and simplify the learning experience for both creators and learners.",
            demo: "https://quizzen-ai.vercel.app",
            github: "https://github.com/sakib-333/quizzen-ai",
        },
        {
            title: "Digital Event Scheduler System",
            image: "/project-images/digital-event-scheduler-system.png",
            tech: ["React", "TanStack Router", "Supabase", "Shadcn UI"],
            description:
                "A modern solution for organizing and managing digital events with seamless integration and user-friendly interface.",
            demo: "https://digital-event-scheduler-system.web.app",
            github:
                "https://github.com/sakib-333/digital-event-scheduler-system",
        },
        {
            title: "Handy Kit",
            image: "/project-images/handy-kit.png",
            tech: [
                "React",
                "TypeScript",
                "TanStack Router",
                "Firebase",
                "Shadcn UI",
            ],
            description:
                "Developed a React and TypeScript web application providing free browser-based utilities, including developer tools, calculators, converters, text helpers, image tools, and productivity features.",
            demo: "https://handy-kit.web.app",
            github: "https://github.com/sakib-333/handy-kit",
        },
        {
            title: "Matrimony",
            image: "/project-images/matrimony.png",
            tech: ["React", "Express", "MongoDB"],
            description:
                "Matrimony is a comprehensive matrimonial platform designed to help individuals find their perfect life partner.",
            demo: "https://ph-b10-a12.web.app/",
            github:
                "https://github.com/sakib-333/matrimony-platform-client",
        },
    ];

    return (
        <section className="py-xl bg-background" id="projects">
            <div className="max-w-7xl mx-auto px-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
                >
                    <div>
                        <h2 className="font-h2 text-h2 text-white mb-4">
                            Selected Works
                        </h2>

                        <p className="text-on-surface-variant text-ellipsis">
                            A collection of engineering-first digital products.
                        </p>
                    </div>

                    <a
                        className="text-primary font-semibold flex items-center gap-2 hover:underline px-4 py-2 border border-primary-container rounded-lg hover:bg-primary-container/10 transition-all text-sm"
                        href="https://github.com/sakib-333?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View All Repository

                        <span className="material-symbols-outlined ml-1">
                            open_in_new
                        </span>
                    </a>

                </motion.div>


                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                            }}
                            className="md:col-span-6 bg-surface-container border border-zinc-800 rounded-2xl overflow-hidden group hover:border-primary/30 transition-all duration-300 flex flex-col">

                            {/* Image */}
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-1">
                                {/* Tech */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((item) => (
                                        <span
                                            key={item}
                                            className="px-2 py-1 bg-primary-container/20 text-primary text-[10px] font-bold uppercase tracking-wider rounded"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>

                                {/* Title + Description */}
                                <div className="min-h-[120px]">

                                    <h3 className="text-xl font-bold text-white mb-2 font-space-grotesk">
                                        {project.title}
                                    </h3>
                                    <p className="text-on-surface-variant text-sm leading-relaxed">
                                        {project.description}
                                    </p>

                                </div>
                                {/* Buttons */}
                                <div className="flex items-center gap-3 mt-auto pt-6">
                                    <a
                                        className="flex-1 bg-primary-container text-white py-2 rounded-lg text-center text-sm font-bold hover:shadow-[0_0_15px_rgba(0,98,57,0.4)] transition-all"
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Live Demo
                                    </a>

                                    <a
                                        className="flex-1 border border-zinc-700 text-white py-2 rounded-lg text-center text-sm font-bold hover:bg-zinc-800 transition-all"
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Source Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default Projects;