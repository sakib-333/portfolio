
const Projects = () => {
    return (
        <section className="py-xl bg-background" id="projects">
            <div className="max-w-7xl mx-auto px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="font-h2 text-h2 text-white mb-4">Selected Works</h2>
                        <p className="text-on-surface-variant">A collection of engineering-first digital products.</p>
                    </div>
                    <a className="text-primary font-semibold flex items-center gap-2 hover:underline" href="#">
                        View All Repository
                        <span className="material-symbols-outlined">open_in_new</span>
                    </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[900px]">
                    <div className="md:col-span-8 bg-surface-container border border-zinc-800 rounded-2xl overflow-hidden relative group">
                        <img
                            alt="E-commerce Analytics"
                            className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNYESBXGcEJEYyUmB0TapKp74QtiLgsuAG0W3-Mcw_mB4HtLGbviZhQ6uTLzEFum3WrraNUOsTAwA1Z7Wn-qGWvlo0p3DGCqOdyuvSvLT4x9t895IyK3xUUxNXgwTq6pjzGJmlKMtge3lsAOp_2WqE3rmGemBXG0twRlagdSOnsGT0CNbkf3bS5lLPB9Jiitl9-tP0KBfF7nGXK6_XbvHwnlzMHqQbrUOpGAHnkswOZLSBzzw53kLJNGRqd3cab_CHAmXJCzqS"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent p-10 flex flex-col justify-end">
                            <div className="flex gap-2 mb-4">
                                <span className="px-3 py-1 bg-zinc-900/80 rounded text-xs text-secondary font-mono">React</span>
                                <span className="px-3 py-1 bg-zinc-900/80 rounded text-xs text-secondary font-mono">Node.js</span>
                                <span className="px-3 py-1 bg-zinc-900/80 rounded text-xs text-secondary font-mono">Socket.io</span>
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-2">OmniDash Pro</h3>
                            <p className="text-zinc-300 mb-6">Real-time inventory management and analytics platform for high-volume retailers.</p>
                            <a className="inline-flex items-center text-primary font-bold group/link" href="#">
                                View Project
                                <span className="material-symbols-outlined ml-2 group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                            </a>
                        </div>
                    </div>
                    <div className="md:col-span-4 bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden p-8 flex flex-col justify-between hover:border-primary-container transition-colors">
                        <div>
                            <div className="w-12 h-12 bg-primary-container/20 rounded-lg flex items-center justify-center mb-8">
                                <span className="material-symbols-outlined text-primary">cloud_done</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">CloudSync</h3>
                            <p className="text-zinc-400 mb-6">Enterprise-grade file synchronization service with end-to-end encryption using MongoDB GridFS.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-0.5 bg-zinc-800 rounded text-xs text-secondary font-mono">Express</span>
                                <span className="px-2 py-0.5 bg-zinc-800 rounded text-xs text-secondary font-mono">Redis</span>
                            </div>
                            <a className="text-primary font-bold flex items-center gap-2" href="#">Explore <span className="material-symbols-outlined text-sm">north_east</span></a>
                        </div>
                    </div>
                    <div className="md:col-span-6 bg-surface-container border border-zinc-800 rounded-2xl overflow-hidden relative group">
                        <img
                            alt="Code Snippet Sharing"
                            className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_VEOicPAYznhMLmh4xCkfqSqSvDZZJiAQTZiBKYfnjvCOl48huaLDh1q5tSyFFJOj5sX3Fn5lPSsxAf7dUi8kGEEejWAQi3ARIwktsbY0rV4NUDzCMDSCQWcUUlTimiWmrvPUeaj0ePtt0vaC8R7paEKRfAML2rSjUd9nsGGpp1Si5-aglyE6BVHTDxSog3VUsie7oj9uw3In_hrKKSKl16hIDghfjXz5uCX57KPhO2Ltv12kcMG6Gohg8VI5qFUnAPWYFbBI"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent p-8 flex flex-col justify-end">
                            <h3 className="text-2xl font-bold text-white mb-2">DevSnippet</h3>
                            <p className="text-zinc-400 mb-4">Social platform for developers to share and collaborate on reusable logic components.</p>
                            <div className="flex gap-4">
                                <span className="text-secondary font-mono text-xs">React</span>
                                <span className="text-secondary font-mono text-xs">Firebase</span>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-6 bg-[#141414] border border-[#222222] rounded-2xl p-8 hover:border-primary-container transition-all hover:-translate-y-1 shadow-lg group">
                        <div className="flex justify-between items-start mb-8">
                            <span className="material-symbols-outlined text-4xl text-primary">health_metrics</span>
                            <span className="text-zinc-600 font-mono text-sm">2024 Project</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">FitPulse App</h3>
                        <p className="text-zinc-400 mb-8">Personal fitness tracking with algorithmic meal planning and progress visualization.</p>
                        <div className="flex items-center gap-4">
                            <a className="bg-zinc-900 border border-zinc-800 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-zinc-800 transition-colors" href="#">Source Code</a>
                            <a className="text-primary font-bold flex items-center gap-1 group/btn" href="#">
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
