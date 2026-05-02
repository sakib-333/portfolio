import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";


const roles = ["React Developer", "Web Developer", "React Native Developer"];

interface HomeProps {
    handleScroll?: (sectionId: string) => void;
}

const Home = ({ handleScroll }: HomeProps) => {
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.section
            id="home"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 relative"
        >
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full pt-24 md:pt-0">

                {/* Left */}
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 mb-4">
                        <div className="relative flex items-center justify-center">
                            <span className="w-2 h-2 rounded-full bg-primary-container relative z-10"></span>
                            <motion.span
                                animate={{
                                    scale: [1, 2.5, 1],
                                    opacity: [0.9, 0],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeOut",
                                    delay: 1.5,
                                }}
                                className="absolute w-2 h-2 rounded-full bg-primary-container"
                            ></motion.span>
                        </div>
                        <span className="text-label-sm text-secondary tracking-widest uppercase">Available for work</span>
                    </div>

                    <h1 className="text-5xl font-bold text-white">
                        Architecting Scalable <span className="text-primary">MERN</span> Apps
                    </h1>

                    <p className="mt-4 text-zinc-400 text-justify">
                        Motivated frontend developer with a strong track record of successfully completing various projects. Proficient in various programming languages and technologies, including C, C++, and web development technologies (HTML, CSS, JavaScript, TypeScript, and React). Strong problem-solving abilities and a solid understanding of frontend development principles. Committed to continuous learning and delivering high-quality solutions. Ready to contribute expertise to new challenges.
                    </p>

                    <div className="mt-6 flex gap-4">
                        <button 
                            onClick={() => handleScroll?.('projects')}
                            className="group bg-primary-container px-6 py-3 rounded-lg text-white flex items-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(0,98,57,0.3)] cursor-pointer"
                        >
                            <span>View My Work</span>
                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                            </span>
                        </button>

                        <button 
                            onClick={() => handleScroll?.('contact')}
                            className="border px-6 py-3 rounded-lg text-white border-zinc-700 hover:bg-zinc-900 transition-colors cursor-pointer"
                        >
                            Contact
                        </button>
                    </div>
                </div>

                {/* Right */}
                <div className="flex justify-center">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full"></div>
                        <img
                            src="/hero-section-image.png"
                            alt="MERN Stack Developer"
                            className="rounded-2xl w-80 h-96 object-cover relative z-10 border border-zinc-800"
                        />
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 w-max py-2">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={roles[roleIndex]}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-primary font-medium"
                                >
                                    {roles[roleIndex]}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                    </div>
                </div>

            </div>
        </motion.section>
    );
};

export default Home;
