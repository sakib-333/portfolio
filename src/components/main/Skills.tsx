import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
    name: string;
    icon: string;
}

const skills: Skill[] = [
    { name: "C Program", icon: "/skills-icons/c-logo.png" },
    { name: "C++", icon: "/skills-icons/cpp-logo.png" },
    { name: "JavaScript", icon: "/skills-icons/js-logo.png" },
    { name: "TypeScript", icon: "/skills-icons/ts-logo.png" },
    { name: "HTML", icon: "/skills-icons/html-logo.png" },
    { name: "CSS", icon: "/skills-icons/css-logo.png" },
    { name: "Tailwind CSS", icon: "/skills-icons/tailwind-logo.png" },
    { name: "Material UI", icon: "/skills-icons/mui-logo.png" },
    { name: "Shadcn UI", icon: "/skills-icons/shadcn-ui-logo.png" },
    { name: "React", icon: "/skills-icons/react-logo.png" },
    { name: "Next.js", icon: "/skills-icons/nextjs-logo.png" },
    { name: "Ant Design", icon: "/skills-icons/ant-design-logo.png" },
    { name: "Expo", icon: "/skills-icons/expo-logo.png" },
    { name: "Node", icon: "/skills-icons/nodejs-logo.png" },
    { name: "Express", icon: "/skills-icons/express-logo.png" },
    { name: "MongoDB", icon: "/skills-icons/mongodb-logo.png" },
    { name: "MySQL", icon: "/skills-icons/mysql-logo.png" },
    { name: "Supabase", icon: "/skills-icons/supabase-logo.png" },
    { name: "Git", icon: "/skills-icons/git-logo.png" },
    { name: "VS Code", icon: "/skills-icons/vs-code-logo.png" },
    { name: "Redux", icon: "/skills-icons/redux-logo.png" },
];

const Skills: React.FC = () => {
    return (
        <section className="py-xl bg-zinc-950/50" id="skills">
            <div className="max-w-7xl mx-auto px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-h2 font-h2 text-white mb-4">Core <span className="text-primary">Technology Stack</span></h2>
                    <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">Precision-engineered tools for modern full-stack development.</p>
                </motion.div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            whileHover={{ transition: { duration: 0.2 } }}
                            className="bg-surface-container border border-zinc-800 p-4 rounded-xl skill-gradient hover:border-primary-container transition-all group flex flex-col items-center justify-center text-center"
                        >
                            <div className="w-14 h-14 bg-zinc-900/50 rounded-lg flex items-center justify-center mb-3 border border-zinc-800 group-hover:scale-110 group-hover:border-primary/50 transition-all duration-300 overflow-hidden p-2">
                                <img
                                    src={skill.icon}
                                    alt={skill.name}
                                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                            <span className="text-white text-sm font-medium tracking-wide group-hover:text-primary transition-colors">{skill.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
