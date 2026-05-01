
const Projects = () => {
    return (
        <section className="py-xl bg-background" id="projects">
            <div className="max-w-7xl mx-auto px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="font-h2 text-h2 text-white mb-4">Selected Works</h2>
                        <p className="text-on-surface-variant">A collection of engineering-first digital products.</p>
                    </div>
                    <a className="text-primary font-semibold flex items-center gap-2 hover:underline"
                        href="https://github.com/sakib-333?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View All Repository
                        <span className="material-symbols-outlined">open_in_new</span>
                    </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[900px]">
                    {/* Project-1 */}
                    <div className="md:col-span-8 bg-surface-container border border-zinc-800 rounded-2xl overflow-hidden relative group">
                        <img
                            alt="tourify"
                            className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                            src="/project-images/tourify.png"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent p-10 flex flex-col justify-end">
                            <div className="flex gap-2 mb-4">
                                <span className="px-3 py-1 bg-zinc-900/80 rounded text-xs text-secondary font-mono">NextJs</span>
                                <span className="px-3 py-1 bg-zinc-900/80 rounded text-xs text-secondary font-mono">Node.js</span>
                                <span className="px-3 py-1 bg-zinc-900/80 rounded text-xs text-secondary font-mono">Supabase</span>
                                <span className="px-3 py-1 bg-zinc-900/80 rounded text-xs text-secondary font-mono">Shandcn UI</span>
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-2">Tourify</h3>
                            <p className="text-zinc-300 mb-6">Tourify is a comprehensive travel and tourism platform that streamlines tour planning and booking for both travelers and tour operators.</p>
                            <a className="inline-flex items-center text-primary font-bold group/link"
                                href="https://tourify-theta.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Project
                                <span className="material-symbols-outlined ml-2 group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                            </a>
                        </div>
                    </div>

                    {/* Project-2 */}
                    <div className="md:col-span-4 bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden p-8 flex flex-col justify-between hover:border-primary-container transition-colors">
                        <div>
                            <div className="w-12 h-12 bg-primary-container/20 rounded-lg flex items-center justify-center mb-8">
                                <span className="material-symbols-outlined">sports_and_outdoors</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Hocky's</h3>
                            <p className="text-zinc-400 mb-6">Enterprise-grade file synchronization service with end-to-end encryption using MongoDB GridFS.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-0.5 bg-zinc-800 rounded text-xs text-secondary font-mono">HTML</span>
                                <span className="px-2 py-0.5 bg-zinc-800 rounded text-xs text-secondary font-mono">CSS</span>
                                <span className="px-2 py-0.5 bg-zinc-800 rounded text-xs text-secondary font-mono">Tailwind CSS</span>
                            </div>
                            <a className="text-primary font-bold flex items-center gap-2"
                                href="https://sakib-333.github.io/hockey"
                                target="_blank"
                                rel="noopener noreferrer"
                            >Explore <span className="material-symbols-outlined text-sm">north_east</span></a>
                        </div>
                    </div>

                    {/* Project-3 */}
                    <div className="md:col-span-6 bg-surface-container border border-zinc-800 rounded-2xl overflow-hidden relative group cursor-pointer"
                        onClick={() => window.open('https://ph-b10-a12.web.app/', '_blank')}
                    >
                        <img
                            alt="matrimony.png"
                            className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                            src={'/project-images/matrimony.png'}
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent p-8 flex flex-col justify-end">
                            <h3 className="text-2xl font-bold text-white mb-2">Matrimony</h3>
                            <p className="text-zinc-400 mb-4">Matrimony is a comprehensive matrimonial platform designed to help individuals find their perfect life partner.</p>
                            <div className="flex gap-4">
                                <span className="text-secondary font-mono text-xs">React</span>
                                <span className="text-secondary font-mono text-xs">Express</span>
                                <span className="text-secondary font-mono text-xs">MongoDB</span>
                            </div>
                        </div>
                    </div>

                    {/* Project-4 */}
                    <div className="md:col-span-6 bg-[#141414] border border-[#222222] rounded-2xl p-8 hover:border-primary-container transition-all hover:-translate-y-1 shadow-lg group">
                        <div className="flex justify-between items-start mb-8">
                            <span className="material-symbols-outlined text-4xl text-primary">exercise</span>
                            <span className="text-zinc-600 font-mono text-sm">2024 Project</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Fitness</h3>
                        <p className="text-zinc-400 mb-8">Personal fitness tracking with algorithmic meal planning and progress visualization.</p>
                        <div className="flex items-center gap-4">
                            <a className="bg-zinc-900 border border-zinc-800 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-zinc-800 transition-colors"
                                href="https://github.com/sakib-333/PH-B10-A2"
                                target="_blank"
                                rel="noopener noreferrer"
                            >Source Code</a>
                            <a className="text-primary font-bold flex items-center gap-1 group/btn"
                                href="https://sakib-333.github.io/PH-B10-A2"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Live Demo
                                <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-0.5 transition-transform">arrow_outward</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
