import { motion } from "framer-motion";

const About = () => {
    return (
        <motion.section
            id="about"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 relative"
        >
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">

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
                        <a href="#projects" className="group bg-primary-container px-6 py-3 rounded-lg text-white flex items-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(0,98,57,0.3)]">
                            <span>View My Work</span>
                            <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1">
                                arrow_forward
                            </span>
                        </a>

                        <a href="#contact" className="border px-6 py-3 rounded-lg text-white border-zinc-700 hover:bg-zinc-900 transition-colors">
                            Contact
                        </a>
                    </div>
                </div>

                {/* Right */}
                <div className="flex justify-center">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full"></div>
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvjh2cZN4wM2H7pqLdFJ-9a3KQdd5uZmGbqntnx3Iv7XcxaBdKgtVliwU9m0d_FN3MuJrTlUA4LyEyPEO3Sp3fD67g8fO6nE2zrVHuH_BF1K_qmsHD74ANfFJhHldETFua9Y2ChnVeLRxmO0VTGYWUVocICez0zV0er6jcll_iZivVGtcDfm6BZ6CnNkcIqe-G75WAVVoFfbIu2R73tQSOnxgK1kpCmaf9XhezQnf3jkyZ5MrrWvm2GOnb-x_LXKbghIdW9uIy"
                            alt="MERN Stack Developer"
                            className="rounded-2xl w-80 h-96 object-cover relative z-10 border border-zinc-800"
                        />
                    </div>
                </div>

            </div>
        </motion.section>
    );
};

export default About;
