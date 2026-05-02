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
                        <p className="text-on-surface-variant">A collection of engineering-first digital products.</p>
                    </div>
                    <a className="text-primary font-semibold flex items-center gap-2 hover:underline"
                        href="https://github.com/sakib-333?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View All Repository
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
                                <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/>
                            </svg>
                        </span>
                    </a>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[900px]">
                    {/* Project-1 */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="md:col-span-8 bg-surface-container border border-zinc-800 rounded-2xl overflow-hidden relative group"
                    >
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
                                <span className="group-hover/link:translate-x-1 transition-transform duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Project-2 */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="md:col-span-4 bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden p-8 flex flex-col justify-between hover:border-primary-container transition-colors"
                    >
                        <div>
                            <div className="w-12 h-12 bg-primary-container/20 rounded-lg flex items-center justify-center mb-2">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
                                        <path d="m137-160-57-56 164-164q31-31 42.5-77.5T298-600q0-58 26-114t74-104q91-91 201-103t181 61q72 72 60 182T738-478q-48 48-104 74t-114 26q-97 0-142 11t-77 43L137-160Zm275-334q47 46 127 34t143-75q64-64 76.5-143.5T724-803q-48-48-125.5-36T456-763q-63 63-76.5 142.5T412-494ZM607-87q-47-47-47-113t47-113q47-47 113-47t113 47q47 47 47 113T833-87q-47 47-113 47T607-87Zm169.5-56.5Q800-167 800-200t-23.5-56.5Q753-280 720-280t-56.5 23.5Q640-233 640-200t23.5 56.5Q687-120 720-120t56.5-23.5ZM720-200Z"/>
                                    </svg>
                                </span>
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
                            >
                                <span>Explore</span>
                                <span className="text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
                                        <path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z"/>
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Project-3 */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="md:col-span-6 bg-surface-container border border-zinc-800 rounded-2xl overflow-hidden relative group cursor-pointer"
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
                    </motion.div>

                    {/* Project-4 */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="md:col-span-6 bg-[#141414] border border-[#222222] rounded-2xl p-8 hover:border-primary-container transition-all hover:-translate-y-1 shadow-lg group"
                    >
                        <div className="flex justify-between items-start mb-8">
                             <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
                                        <path d="m826-585-56-56 30-31-128-128-31 30-57-57 30-31q23-23 57-22.5t57 23.5l129 129q23 23 23 56.5T857-615l-31 30ZM346-104q-23 23-56.5 23T233-104L104-233q-23-23-23-56.5t23-56.5l30-30 57 57-31 30 129 129 30-31 57 57-30 30Zm397-336 57-57-303-303-57 57 303 303ZM463-160l57-58-302-302-58 57 303 303Zm-6-234 110-109-64-64-109 110 63 63Zm63 290q-23 23-57 23t-57-23L104-406q-23-23-23-57t23-57l57-57q23-23 56.5-23t56.5 23l63 63 110-110-63-62q-23-23-23-57t23-57l57-57q23-23 56.5-23t56.5 23l303 303q23 23 23 56.5T857-441l-57 57q-23 23-57 23t-57-23l-62-63-110 110 63 63q23 23 23 56.5T577-161l-57 57Z"/>
                                    </svg>
                                </span>
                            <span className="text-zinc-600 font-mono text-sm">2024 Project</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Fitness</h3>
                        <p className="text-zinc-400 mb-8">Personal fitness tracking with algorithmic meal planning and progress visualization.</p>
                        <div className="items-center flex gap-4">
                            <a className="bg-zinc-900 border border-zinc-800 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-zinc-800 transition-colors"
                                href="https://github.com/sakib-333/PH-B10-A2"
                                target="_blank"
                                rel="noopener noreferrer"
                            >Source Code</a>
                            <a className="text-primary font-bold flex items-center gap-1"
                                href="https://sakib-333.github.io/PH-B10-A2"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Live Demo
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
