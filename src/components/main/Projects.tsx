import { motion } from 'framer-motion';

const Projects = () => {
    return (
        <section className="py-xl bg-background" id="projects">
            <div className="max-w-7xl mx-auto px-8">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
                >
                    <div>
                        <h2 className="font-h2 text-h2 text-white mb-4">Selected Works</h2>
                        <p className="text-on-surface-variant text-ellipsis">A collection of engineering-first digital products.</p>
                    </div>
                    <a 
                        className="text-primary font-semibold flex items-center gap-2 hover:underline px-4 py-2 border border-primary-container rounded-lg hover:bg-primary-container/10 transition-all text-sm" 
                        href="https://github.com/sakib-333?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View All Repository 
                        <span className="material-symbols-outlined ml-1">open_in_new</span>
                    </a>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto">
                    {/* Project 1: Tourify */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="md:col-span-6 bg-surface-container border border-zinc-800 rounded-2xl overflow-hidden group hover:border-primary/30 transition-all duration-300"
                    >
                        <div className="aspect-video overflow-hidden">
                            <img 
                                alt="Tourify" 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                                src="/project-images/tourify.png"
                            />
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-primary-container/20 text-primary text-[10px] font-bold uppercase tracking-wider rounded">Next.js</span>
                                <span className="px-2 py-1 bg-primary-container/20 text-primary text-[10px] font-bold uppercase tracking-wider rounded">Node.js</span>
                                <span className="px-2 py-1 bg-primary-container/20 text-primary text-[10px] font-bold uppercase tracking-wider rounded">Supabase</span>
                                <span className="px-2 py-1 bg-primary-container/20 text-primary text-[10px] font-bold uppercase tracking-wider rounded">Shadcn UI</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2 font-space-grotesk">Tourify</h3>
                                <p className="text-on-surface-variant text-sm">Tourify is a comprehensive travel and tourism platform that streamlines tour planning and booking for both travelers and tour operators.</p>
                            </div>
                            <div className="flex items-center gap-3 pt-2">
                                <a 
                                    className="flex-1 bg-primary-container text-white py-2 rounded-lg text-center text-sm font-bold hover:shadow-[0_0_15px_rgba(0,98,57,0.4)] transition-all" 
                                    href="https://tourify-theta.vercel.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Live Demo
                                </a>
                                <a 
                                    className="flex-1 border border-zinc-700 text-white py-2 rounded-lg text-center text-sm font-bold hover:bg-zinc-800 transition-all" 
                                    href="https://github.com/sakib-333"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Source Code
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Project 2: Hocky's */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="md:col-span-6 bg-surface-container border border-zinc-800 rounded-2xl overflow-hidden group hover:border-primary/30 transition-all duration-300"
                    >
                        <div className="aspect-video overflow-hidden bg-zinc-900 flex items-center justify-center">
                            <span className="material-symbols-outlined text-primary text-6xl opacity-20">sports_hockey</span>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-primary-container/20 text-primary text-[10px] font-bold uppercase tracking-wider rounded">HTML</span>
                                <span className="px-2 py-1 bg-primary-container/20 text-primary text-[10px] font-bold uppercase tracking-wider rounded">CSS</span>
                                <span className="px-2 py-1 bg-primary-container/20 text-primary text-[10px] font-bold uppercase tracking-wider rounded">Tailwind</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2 font-space-grotesk">Hocky's</h3>
                                <p className="text-on-surface-variant text-sm">Enterprise-grade file synchronization service with end-to-end encryption using MongoDB GridFS.</p>
                            </div>
                            <div className="flex items-center gap-3 pt-2">
                                <a 
                                    className="flex-1 bg-primary-container text-white py-2 rounded-lg text-center text-sm font-bold hover:shadow-[0_0_15px_rgba(0,98,57,0.4)] transition-all" 
                                    href="https://sakib-333.github.io/hockey"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Live Demo
                                </a>
                                <a 
                                    className="flex-1 border border-zinc-700 text-white py-2 rounded-lg text-center text-sm font-bold hover:bg-zinc-800 transition-all" 
                                    href="https://github.com/sakib-333/hockey"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Source Code
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Project 3: Matrimony */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="md:col-span-6 bg-surface-container border border-zinc-800 rounded-2xl overflow-hidden group hover:border-primary/30 transition-all duration-300"
                    >
                        <div className="aspect-video overflow-hidden">
                            <img 
                                alt="Matrimony" 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                                src="/project-images/matrimony.png"
                            />
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-primary-container/20 text-primary text-[10px] font-bold uppercase tracking-wider rounded">React</span>
                                <span className="px-2 py-1 bg-primary-container/20 text-primary text-[10px] font-bold uppercase tracking-wider rounded">Express</span>
                                <span className="px-2 py-1 bg-primary-container/20 text-primary text-[10px] font-bold uppercase tracking-wider rounded">MongoDB</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2 font-space-grotesk">Matrimony</h3>
                                <p className="text-on-surface-variant text-sm">Matrimony is a comprehensive matrimonial platform designed to help individuals find their perfect life partner.</p>
                            </div>
                            <div className="flex items-center gap-3 pt-2">
                                <a 
                                    className="flex-1 bg-primary-container text-white py-2 rounded-lg text-center text-sm font-bold hover:shadow-[0_0_15px_rgba(0,98,57,0.4)] transition-all" 
                                    href="https://ph-b10-a12.web.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Live Demo
                                </a>
                                <a 
                                    className="flex-1 border border-zinc-700 text-white py-2 rounded-lg text-center text-sm font-bold hover:bg-zinc-800 transition-all" 
                                    href="https://github.com/sakib-333"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Source Code
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Project 4: FitPulse App */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="md:col-span-6 bg-surface-container border border-zinc-800 rounded-2xl overflow-hidden group hover:border-primary/30 transition-all duration-300"
                    >
                        <div className="aspect-video overflow-hidden bg-zinc-900 flex items-center justify-center">
                            <span className="material-symbols-outlined text-primary text-6xl opacity-20">health_metrics</span>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-primary-container/20 text-primary text-[10px] font-bold uppercase tracking-wider rounded">Next.js</span>
                                <span className="px-2 py-1 bg-primary-container/20 text-primary text-[10px] font-bold uppercase tracking-wider rounded">Chart.js</span>
                                <span className="px-2 py-1 bg-primary-container/20 text-primary text-[10px] font-bold uppercase tracking-wider rounded">PostgreSQL</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2 font-space-grotesk">FitPulse App</h3>
                                <p className="text-on-surface-variant text-sm">Personal fitness tracking with algorithmic meal planning and progress visualization.</p>
                            </div>
                            <div className="flex items-center gap-3 pt-2">
                                <a 
                                    className="flex-1 bg-primary-container text-white py-2 rounded-lg text-center text-sm font-bold hover:shadow-[0_0_15px_rgba(0,98,57,0.4)] transition-all" 
                                    href="https://sakib-333.github.io/PH-B10-A2"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Live Demo
                                </a>
                                <a 
                                    className="flex-1 border border-zinc-700 text-white py-2 rounded-lg text-center text-sm font-bold hover:bg-zinc-800 transition-all" 
                                    href="https://github.com/sakib-333/PH-B10-A2"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Source Code
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
