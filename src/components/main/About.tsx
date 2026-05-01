const About = () => {
    return (
        <section className="py-xl bg-background" id="about">
            <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* Code Philosophy Card */}
                <div className="order-2 md:order-1">
                    <div className="bg-zinc-900 border border-zinc-800 p-2 rounded-2xl rotate-3 shadow-2xl">
                        <div className="bg-zinc-950 p-6 rounded-xl space-y-4 font-mono text-xs text-zinc-500">
                            <div className="flex gap-2">
                                <span className="text-[#2ECC71]">const</span>
                                <span className="text-secondary">developer</span> = {`{`}
                            </div>

                            <div className="pl-4">
                                cleanUI: <span className="text-primary-container">true</span>,
                            </div>

                            <div className="pl-4">
                                responsiveDesign: <span className="text-primary-container">true</span>,
                            </div>

                            <div className="pl-4">
                                performanceFocused: <span className="text-primary-container">true</span>,
                            </div>

                            <div className="pl-4">
                                continuousLearning: <span className="text-primary-container">"always"</span>
                            </div>

                            <div>{`};`}</div>

                            <div className="pt-4 text-zinc-600">
                                // Building scalable and user-friendly
                            </div>

                            <div className="text-zinc-600">
                                // web & mobile applications with modern technologies.
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="space-y-6 order-1 md:order-2">

                    <h2 className="font-h2 text-h2 text-white">
                        Building Modern Applications with <span className="text-primary">Purpose</span>.
                    </h2>

                    <div className="space-y-4 text-body-lg text-on-surface-variant">

                        <p>
                            I'm a Frontend Developer specializing in React, TypeScript, and modern JavaScript technologies, focused on building responsive, scalable, and user-friendly web applications.
                        </p>

                        <p>
                            Over the past year, I’ve worked on both web and mobile applications using React, Next.js, and React Native while continuously improving my understanding of clean architecture, performance optimization, and modern development workflows.
                        </p>

                        <p>
                            I enjoy transforming ideas into intuitive digital experiences and continuously exploring new technologies to improve both development efficiency and user experience.
                        </p>

                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-8 pt-4">

                        <div>
                            <p className="text-h2 font-bold text-white mb-1">1+</p>
                            <p className="text-sm text-zinc-500 uppercase tracking-widest">
                                Experience
                            </p>
                        </div>

                        <div>
                            <p className="text-h2 font-bold text-white mb-1">3+</p>
                            <p className="text-sm text-zinc-500 uppercase tracking-widest">
                                Full-Stack Projects
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;