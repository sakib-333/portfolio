import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Skill {
    name: string;
    icon: string;
    category: 'frontend' | 'backend' | 'dbms' | 'tools';
}

const skills: Skill[] = [
    { name: "C Program", icon: "/skills-icons/c-logo.png", category: "backend" },
    { name: "C++", icon: "/skills-icons/cpp-logo.png", category: "backend" },

    { name: "JavaScript", icon: "/skills-icons/js-logo.png", category: "frontend" },
    { name: "TypeScript", icon: "/skills-icons/ts-logo.png", category: "frontend" },

    { name: "HTML", icon: "/skills-icons/html-logo.png", category: "frontend" },
    { name: "CSS", icon: "/skills-icons/css-logo.png", category: "frontend" },
    { name: "Tailwind CSS", icon: "/skills-icons/tailwind-logo.png", category: "frontend" },
    { name: "Material UI", icon: "/skills-icons/mui-logo.png", category: "frontend" },
    { name: "Shadcn UI", icon: "/skills-icons/shadcn-ui-logo.png", category: "frontend" },
    { name: "React", icon: "/skills-icons/react-logo.png", category: "frontend" },
    { name: "Next.js", icon: "/skills-icons/nextjs-logo.png", category: "frontend" },
    { name: "Ant Design", icon: "/skills-icons/ant-design-logo.png", category: "frontend" },
    { name: "Redux", icon: "/skills-icons/redux-logo.png", category: "frontend" },

    { name: "Expo", icon: "/skills-icons/expo-logo.png", category: "tools" },

    { name: "Node", icon: "/skills-icons/nodejs-logo.png", category: "backend" },
    { name: "Express", icon: "/skills-icons/express-logo.png", category: "backend" },

    { name: "MongoDB", icon: "/skills-icons/mongodb-logo.png", category: "dbms" },
    { name: "MySQL", icon: "/skills-icons/mysql-logo.png", category: "dbms" },
    { name: "Supabase", icon: "/skills-icons/supabase-logo.png", category: "dbms" },

    { name: "Git", icon: "/skills-icons/git-logo.png", category: "tools" },
    { name: "VS Code", icon: "/skills-icons/vs-code-logo.png", category: "tools" },
    { name: "Antigravity", icon: "/skills-icons/antigravity-logo.png", category: "tools" },
    { name: "Cursor", icon: "/skills-icons/cursor-logo.png", category: "tools" },
];

const categories = ["All", "frontend", "backend", "dbms", "tools"] as const;

const Skills: React.FC = () => {
    const [activeTab, setActiveTab] = useState<typeof categories[number]>("All");

    const filteredSkills = activeTab === "All"
        ? skills
        : skills.filter(skill => skill.category === activeTab);

    return (
        <section className="py-xl bg-zinc-950/50" id="skills">
            <div className="max-w-7xl mx-auto px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-h2 font-h2 text-white mb-4">Core <span className="text-primary">Technology Stack</span></h2>
                    <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">Precision-engineered tools for modern full-stack development.</p>
                </motion.div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveTab(cat)}
                            className={`px-6 py-2.5 rounded-full border transition-all duration-300 text-sm font-semibold uppercase tracking-wide ${
                                activeTab === cat
                                    ? "bg-primary text-on-primary border-primary shadow-[0_0_20px_rgba(134,216,164,0.25)] scale-105"
                                    : "bg-surface-container border-zinc-800 text-on-surface-variant hover:border-zinc-700 hover:text-white"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 min-h-[350px] items-start"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredSkills.map((skill) => (
                            <motion.div
                                key={skill.name}
                                layout
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                className="bg-surface-container border border-zinc-800 p-4 rounded-xl skill-gradient hover:border-primary/40 transition-all group flex flex-col items-center justify-center text-center relative overflow-hidden aspect-square"
                            >
                                <div className="w-14 h-14 bg-zinc-900/50 rounded-lg flex items-center justify-center mb-3 border border-zinc-800 group-hover:scale-110 group-hover:border-primary/50 transition-all duration-300 overflow-hidden p-2">
                                    <img
                                        src={skill.icon}
                                        alt={skill.name}
                                        className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                                    />
                                </div>
                                <span className="text-white text-sm font-medium tracking-wide group-hover:text-primary transition-colors">{skill.name}</span>
                                
                                {/* Subtle background glow on hover */}
                                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;

