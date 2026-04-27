const About = () => {
    return (
        <section id="about" className="min-h-screen flex items-center px-6 md:px-12 py-20">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* Left */}
                <div>
                    <h1 className="text-5xl font-bold text-white">
                        Architecting Scalable <span className="text-primary">MERN</span> Apps
                    </h1>

                    <p className="mt-4 text-zinc-400 text-justify">
                        Motivated frontend developer with a strong track record of successfully completing various projects. Proficient in various programming languages and technologies, including C, C++, and web development technologies (HTML, CSS, JavaScript, TypeScript, and React). Strong problem-solving abilities and a solid understanding of frontend development principles. Committed to continuous learning and delivering high-quality solutions. Ready to contribute expertise to new challenges.
                    </p>

                    <div className="mt-6 flex gap-4">
                        <a href="#projects" className="bg-primary-container px-6 py-3 rounded-lg text-white flex items-center gap-2">
                            <span>View My Work</span>
                            <span className="material-symbols-outlined">
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
        </section>
    );
};

export default About;
