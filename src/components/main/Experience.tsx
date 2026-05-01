import React from 'react';
import { motion } from 'framer-motion';

interface ExperienceItem {
    role: string;
    company: string;
    companyWebsite: string;
    period: string;
    description: string[];
}

const experiences: ExperienceItem[] = [
    {
        role: "Junior Software Developer",
        company: "Edutechs Limited",
        companyWebsite: "https://edutechs.app/welcome",
        period: "November 2025 - Present",
        description: [
            "Built and maintained secure authentication and real-time sync using Firebase.",
            "Delivered end-to-end features with smooth frontend-backend integration.",
            "Debugged issues and optimized performance for better speed and reliability.",
            "Worked with cross-functional teams and integrated third-party APIs with proper testing."
        ]
    },
    {
        role: "Software Developer Intern",
        company: "Edutechs Limited",
        companyWebsite: "https://edutechs.app/welcome",
        period: "August 2025 - November 2025",
        description: [
            "Built and maintained web applications using React.js, focusing on creating responsive and user-friendly interfaces.",
            "Implemented Firebase Authentication and Realtime Database for secure user management and real-time data synchronization.",
            "Designed and optimized database schemas with Supabase, ensuring efficient data handling and scalability.",
            "Integrated multiple third-party APIs to extend application functionality and improve user experience."
        ]
    },
    {
        role: "Software Developer Intern",
        company: "TwinForce Solutions Limited",
        companyWebsite: "https://twinforce.net",
        period: "May 2025 - July 2025",
        description: [
            "Completed a CRM-focused internship using the Salesforce platform with hands-on real-world experience.",
            "Worked with core Salesforce Admin features including object configuration, permission sets, page layouts, and automation tools.",
            "Gained foundational knowledge in Apex, Lightning Web Components (LWC), and Flow Builder.",
            "Developed and tested custom triggers and components to automate processes and improve user experience."
        ]
    },
];

const Experience: React.FC = () => {
    return (
        <section className="py-xl bg-background relative overflow-hidden" id="experiences">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
                <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-h2 text-h2 text-white mb-4">
                        Professional <span className="text-primary">Experience</span>
                    </h2>
                    <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">
                        A journey through building high-stakes digital products and leading engineering excellence.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Central Timeline Line */}
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-surface-variant/50"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative group">
                                {/* Timeline Dot */}
                                <div className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2 top-0 w-12 h-12 rounded-full bg-surface-container-high border-2 border-surface-variant shadow-xl z-10 group-hover:border-primary/50 group-hover:shadow-primary/10 transition-all duration-500">
                                    <div className="absolute inset-0 rounded-full bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <span className="material-symbols-outlined filled-icon text-2xl text-primary transition-transform duration-500">
                                        work_history
                                    </span>
                                </div>


                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, delay: index * 0.1 }}
                                    className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
                                >
                                    {/* Left Column */}
                                    <div className={`${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:order-2 md:pl-12'}`}>
                                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                                            {exp.role}
                                        </h3>
                                        <a className='w-fit' href={exp.companyWebsite} target="_blank" rel="noopener noreferrer">
                                            <p className="text-primary font-semibold mb-2 hover:text-primary-container hover:underline transition-colors">{exp.company}</p>
                                        </a>
                                        <p className="text-zinc-500 font-mono text-sm uppercase tracking-wider">{exp.period}</p>
                                    </div>

                                    {/* Right Column */}
                                    <div className={`${index % 2 === 0 ? 'md:pl-12' : 'md:order-1 md:text-right md:pr-12'}`}>
                                        <ul className={`space-y-3 text-on-surface-variant ${index % 2 !== 0 ? 'md:flex md:flex-col md:items-end' : ''}`}>
                                            {exp.description.map((item, i) => (
                                                <li key={i} className="flex gap-3 items-start group/item">
                                                    {index % 2 === 0 ? (
                                                        <>
                                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0 group-hover/item:bg-primary transition-colors" />
                                                            <span className="text-lg leading-relaxed">{item}</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <span className="md:order-2 mt-2 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0 group-hover/item:bg-primary transition-colors" />
                                                            <span className="md:order-1 text-lg leading-relaxed">{item}</span>
                                                        </>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
