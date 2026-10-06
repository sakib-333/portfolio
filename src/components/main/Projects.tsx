import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Project {
    title: string;
    image: string;
    tech: string[];
    description: string;
    demo: string;
    repositories: {
        frontend: string;
        backend?: string;
    };
    details: string[];
}

const Projects = () => {
    const projects: Project[] = [
        {
            title: "Quizzen AI",
            image: "/project-images/quizzen-ai.png",
            tech: ["React", "NestJS", "Convex", "Shadcn UI"],
            description:
                "Quizzen AI is a TypeScript-powered quiz platform that uses AI to generate engaging assessments, personalize questions, and simplify the learning experience for both creators and learners.",
            demo: "https://quizzen-ai.vercel.app",
            repositories: {
                frontend: "https://github.com/sakib-333/quizzen-ai",
                backend: "https://github.com/sakib-333/quizzen-ai-server",
            },
            details: [
                "Built a prompt-based quiz experience with configurable question count, difficulty, and duration.",
                "Implemented timed quiz sessions with question navigation, progress tracking, answer review, and explanations.",
                "Added Firebase authentication, protected routes, password recovery, and Google sign-in support.",
                "Built a NestJS backend with Groq-powered quiz generation, Firebase authentication, and Convex persistence.",
            ],
        },
        {
            title: "Digital Event Scheduler System",
            image: "/project-images/digital-event-scheduler-system.png",
            tech: ["React", "TanStack Router", "Supabase", "Shadcn UI"],
            description:
                "A modern solution for organizing and managing digital events with seamless integration and user-friendly interface.",
            demo: "https://digital-event-scheduler-system.web.app",
            repositories: {
                frontend:
                    "https://github.com/sakib-333/digital-event-scheduler-system",
            },
            details: [
                "Built public landing, event discovery, FAQ, and contact experiences for an academic event platform.",
                "Implemented authenticated event creation, editing, deletion, detail views, and join or leave actions.",
                "Added admin approval workflows, user management, notifications, analytics, and calendar-based scheduling.",
                "Integrated Firebase, Supabase, EmailJS, translation, theme support, and responsive dashboard layouts.",
            ],
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
            repositories: {
                frontend: "https://github.com/sakib-333/handy-kit",
            },
            details: [
                "Created a responsive directory of browser-based utilities for developers and everyday users.",
                "Implemented tools for JSON, passwords, QR codes, UUIDs, Markdown, colors, Base64, text, URLs, units, math, and images.",
                "Organized utilities with TanStack Router and route-level code splitting for focused, fast experiences.",
                "Added contact functionality, persisted light and dark themes, and reusable responsive UI components.",
            ],
        },
        {
            title: "Matrimony",
            image: "/project-images/matrimony.png",
            tech: ["React", "Express", "MongoDB"],
            description:
                "Matrimony is a comprehensive matrimonial platform designed to help individuals find their perfect life partner.",
            demo: "https://ph-b10-a12.web.app/",
            repositories: {
                frontend:
                    "https://github.com/sakib-333/matrimony-platform-client",
                backend:
                    "https://github.com/sakib-333/matrimony-platform-server",
            },
            details: [
                "Built biodata creation, editing, filtering, pagination, favorites, and similar-profile suggestions.",
                "Added Firebase authentication, success stories, premium membership, and Stripe-protected contact details.",
                "Implemented admin workflows for managing users, approving premium accounts, and approving contact requests.",
                "Built an Express and MongoDB API with JWT authentication, CORS, cookie handling, and Stripe integration.",
            ],
        },
    ];

    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const detailsButtonRefs = useRef<Record<string, HTMLButtonElement | null>>({});
    const previousOverflow = useRef("");

    const closeModal = useCallback(() => {
        const projectTitle = selectedProject?.title;
        setSelectedProject(null);

        if (projectTitle) {
            window.setTimeout(() => detailsButtonRefs.current[projectTitle]?.focus(), 0);
        }
    }, [selectedProject]);

    useEffect(() => {
        if (!selectedProject) {
            return;
        }

        previousOverflow.current = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                closeModal();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = previousOverflow.current;
        };
    }, [closeModal, selectedProject]);

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

                                    <button
                                        type="button"
                                        className="flex-1 border border-zinc-700 text-white py-2 rounded-lg text-center text-sm font-bold hover:bg-zinc-800 transition-all cursor-pointer"
                                        onClick={() => setSelectedProject(project)}
                                        ref={(button) => {
                                            detailsButtonRefs.current[project.title] = button;
                                        }}
                                    >
                                        Details
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {selectedProject && (
                <div
                    className="fixed inset-0 z-[60] flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-sm"
                    role="presentation"
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) {
                            closeModal();
                        }
                    }}
                >
                    <div
                        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-zinc-700 bg-surface-container-high p-6 shadow-2xl md:p-8"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="project-details-title"
                    >
                        <div className="flex items-start justify-between gap-6">
                            <div>
                                <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                                    Project Details
                                </p>
                                <h3
                                    id="project-details-title"
                                    className="font-space-grotesk text-2xl font-bold text-white"
                                >
                                    {selectedProject.title}
                                </h3>
                            </div>

                            <button
                                type="button"
                                className="rounded-md p-2 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white cursor-pointer"
                                onClick={closeModal}
                                aria-label="Close project details"
                            >
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>

                        <ul className="mt-6 space-y-3 text-sm leading-relaxed text-on-surface-variant">
                            {selectedProject.details.map((detail) => (
                                <li key={detail} className="flex gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                    <span>{detail}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 flex flex-col gap-3 border-t border-zinc-700 pt-6 sm:flex-row">
                            <a
                                className="flex-1 rounded-lg bg-primary-container px-4 py-2 text-center text-sm font-bold text-white transition-all hover:shadow-[0_0_15px_rgba(0,98,57,0.4)]"
                                href={selectedProject.repositories.frontend}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Frontend Repository
                            </a>

                            {selectedProject.repositories.backend && (
                                <a
                                    className="flex-1 rounded-lg border border-zinc-700 px-4 py-2 text-center text-sm font-bold text-white transition-all hover:bg-zinc-800"
                                    href={selectedProject.repositories.backend}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Backend Repository
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};


export default Projects;