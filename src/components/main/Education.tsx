const Education = () => {
    return (
        <section className="py-xl bg-zinc-950/30" id="education">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center mb-16">
                    <h2 className="text-2xl text-white mb-4">Academic Foundation</h2>
                    <p className="text-on-surface-variant max-w-2xl mx-auto">The theoretical roots of my practical engineering expertise.</p>
                </div>
                <div className="max-w-3xl mx-auto">
                    <div className="bg-surface-container border border-zinc-800 p-10 rounded-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <span className="material-symbols-outlined text-8xl text-primary">school</span>
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-white mb-2">B.Sc&#40;Engg.&#41; in Computer Science and Engineering&#40;CSE&#41;</h3>
                            <p className="text-primary text-lg font-medium mb-4">Gopalganj Science and Technology University</p>
                            <p className="text-zinc-500 font-mono mb-6">2019 — 2024</p>
                            <div className="space-y-4 text-on-surface-variant">
                                <p>Specialized in Systems and Software Engineering with practical experience in designing and developing scalable web applications. Built multiple full-stack projects using React, Node.js, Express, and MongoDB, focusing on performance, clean architecture, and user experience. Strengthened core knowledge in algorithms, database systems, and modern web technologies.</p>
                                <div className="flex flex-wrap gap-3 pt-2">
                                    <span className="px-3 py-1 bg-zinc-900 rounded-full text-xs border border-zinc-800 text-zinc-400">Data Structure</span>

                                    <span className="px-3 py-1 bg-zinc-900 rounded-full text-xs border border-zinc-800 text-zinc-400">Algorithm</span>

                                    <span className="px-3 py-1 bg-zinc-900 rounded-full text-xs border border-zinc-800 text-zinc-400">Problem Solving</span>

                                    <span className="px-3 py-1 bg-zinc-900 rounded-full text-xs border border-zinc-800 text-zinc-400">DBMS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
