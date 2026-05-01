const Education = () => {
    return (
        <section className="py-xl bg-linear-to-b from-background to-zinc-950/50" id="education">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center mb-16">
                    <h2 className="font-h2 text-h2 text-white mb-4">Academic Foundation</h2>
                    <p className="text-on-surface-variant max-w-2xl mx-auto">The theoretical roots of my practical engineering expertise.</p>
                </div>
                <div className="max-w-5xl mx-auto">
                    <div className="bg-surface-container/40 backdrop-blur-sm border border-zinc-800/50 rounded-3xl relative overflow-hidden group hover:border-primary/30 transition-all duration-500">
                        <div className="absolute -right-16 -top-16 w-64 h-64 bg-primary/5 rounded-full blur-[80px] group-hover:bg-primary/10 transition-colors"></div>
                        <div className="p-8 md:p-12 relative z-10">
                            <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                                {/* Icon Column */}
                                <div className="shrink-0">
                                    <div className="w-20 h-20 rounded-2xl bg-primary-container/20 border border-primary/20 flex items-center justify-center text-primary shadow-[0_0_20px_rgba(134,216,164,0.1)]">
                                        <span className="material-symbols-outlined text-4xl">school</span>
                                    </div>
                                </div>
                                {/* Content Column */}
                                <div className="grow">
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                                        <div>
                                            <h3 className="text-h3 text-2xl text-white mb-1 tracking-tight font-space-grotesk">B.Sc&#40;Engg.&#41; in Computer Science & Engineering</h3>
                                            <p className="text-primary font-bold text-lg font-space-grotesk">Gopalganj Science and Technology University</p>
                                        </div>
                                        <div className="md:text-right">
                                            <span className="inline-block px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 font-mono text-xs">
                                                2019 - 2024
                                            </span>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-4">
                                            <p className="text-on-surface-variant leading-relaxed">
                                                Built a strong foundation in core Computer Science principles including Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, and Software Engineering while actively exploring modern development technologies and tools.
                                            </p>
                                        </div>
                                        <div className="space-y-4">
                                            <p className="text-xs font-bold uppercase text-zinc-500 tracking-[0.2em] mb-2">
                                                Academic Focus
                                            </p>

                                            <div className="flex flex-wrap gap-2">
                                                <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded text-xs text-primary font-medium">
                                                    Computer Science Fundamentals
                                                </span>

                                                <span className="px-3 py-1 bg-zinc-800/50 border border-zinc-700/50 rounded text-xs text-zinc-400 font-medium">
                                                    Software Engineering
                                                </span>

                                                <span className="px-3 py-1 bg-zinc-800/50 border border-zinc-700/50 rounded text-xs text-zinc-400 font-medium">
                                                    Problem Solving
                                                </span>

                                                <span className="px-3 py-1 bg-zinc-800/50 border border-zinc-700/50 rounded text-xs text-zinc-400 font-medium">
                                                    Web Technologies
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Bottom Accent Line */}
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
