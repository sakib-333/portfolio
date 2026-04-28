const Contact = () => {
    return (
        <section className="py-xl" id="contact">
            <div className="max-w-7xl mx-auto px-8">
                <div className="bg-surface-container rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl grid grid-cols-1 md:grid-cols-2">
                    <div className="p-12 md:p-20 bg-zinc-950 border-r border-zinc-800">
                        <h2 className="font-h2 text-h2 text-white mb-6">Start a Project.</h2>
                        <p className="text-on-surface-variant mb-12">Have a technical challenge or a product idea? Let's discuss how we can build it with rigor and precision.</p>
                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center group-hover:bg-primary-container transition-colors">
                                    <span className="material-symbols-outlined text-white">add_call</span>
                                </div>
                                <div>
                                    <p className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">Phone</p>
                                    <p className="text-white font-medium">+8801955207333</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center group-hover:bg-primary-container transition-colors">
                                    <span className="material-symbols-outlined text-white">alternate_email</span>
                                </div>
                                <div>
                                    <p className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">Email Me</p>
                                    <p className="text-white font-medium">sakib.cse.333@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center group-hover:bg-primary-container transition-colors">
                                    <span className="material-symbols-outlined text-white" data-weight="fill">location_on</span>
                                </div>
                                <div>
                                    <p className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">Current Location</p>
                                    <p className="text-white font-medium">Dhaka, Bangladesh</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-20 flex gap-4">
                            <a className="w-10 h-10 rounded-lg border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-primary hover:border-primary transition-all" href="#">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.61-4.041-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                            </a>
                            <a className="w-10 h-10 rounded-lg border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-primary hover:border-primary transition-all" href="#">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                            </a>
                            <a className="w-10 h-10 rounded-lg border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-primary hover:border-primary transition-all" href="#">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
                            </a>
                        </div>
                    </div>
                    <div className="p-12 md:p-20">
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-semibold uppercase text-zinc-500 tracking-widest">Your Name</label>
                                <input className="w-full bg-zinc-900 border-zinc-800 rounded-lg py-3 px-4 text-white focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all" placeholder="John Doe" type="text" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-semibold uppercase text-zinc-500 tracking-widest">Email Address</label>
                                <input className="w-full bg-zinc-900 border-zinc-800 rounded-lg py-3 px-4 text-white focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all" placeholder="john@example.com" type="email" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-semibold uppercase text-zinc-500 tracking-widest">Subject</label>
                                <select className="w-full bg-zinc-900 border-zinc-800 rounded-lg py-3 px-4 text-white focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all">
                                    <option>Full-stack Project</option>
                                    <option>Technical Consultation</option>
                                    <option>Career Opportunity</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-semibold uppercase text-zinc-500 tracking-widest">Message</label>
                                <textarea className="w-full bg-zinc-900 border-zinc-800 rounded-lg py-3 px-4 text-white focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all" placeholder="How can I help you?" rows={4}></textarea>
                            </div>
                            <button className="w-full bg-primary-container text-white py-4 rounded-lg font-bold text-lg hover:shadow-[0_0_20px_rgba(0,98,57,0.3)] active:scale-[0.98] transition-all" type="submit">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
