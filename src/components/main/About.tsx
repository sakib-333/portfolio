
const About = () => {
    return (
        <section className="py-xl bg-background" id="about">
            <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="order-2 md:order-1">
                    <div className="bg-zinc-900 border border-zinc-800 p-2 rounded-2xl rotate-3 shadow-2xl">
                        <div className="bg-zinc-950 p-6 rounded-xl space-y-4 font-mono text-xs text-zinc-500">
                            <div className="flex gap-2"><span className="text-[#2ECC71]">const</span> <span className="text-secondary">philosophy</span> = {`{`}</div>
                            <div className="pl-4">cleanCode: <span className="text-primary-container">true</span>,</div>
                            <div className="pl-4">rigor: <span className="text-primary-container">"absolute"</span>,</div>
                            <div className="pl-4">userCentric: <span className="text-primary-container">true</span>,</div>
                            <div className="pl-4">performance: <span className="text-primary-container">"optimized"</span></div>
                            <div>{`};`}</div>
                            <div className="pt-4 text-zinc-600">// I write code that humans can read</div>
                            <div className="text-zinc-600">// and machines can run efficiently.</div>
                        </div>
                    </div>
                </div>
                <div className="space-y-6 order-1 md:order-2">
                    <h2 className="font-h2 text-h2 text-white">Engineering with <span className="text-primary">Intent</span>.</h2>
                    <div className="space-y-4 text-body-lg text-on-surface-variant">
                        <p>
                            I believe that web development is more than just stacking libraries. It's about structural integrity, performance optimization, and creating intuitive digital paths for users to follow.
                        </p>
                        <p>
                            With over 5 years of experience across the MERN ecosystem, I've transitioned from building simple landing pages to architecting complex enterprise systems that handle thousands of concurrent requests without breaking a sweat.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 pt-4">
                        <div>
                            <p className="text-h2 font-bold text-white mb-1">45+</p>
                            <p className="text-sm text-zinc-500 uppercase tracking-widest">Projects Shipped</p>
                        </div>
                        <div>
                            <p className="text-h2 font-bold text-white mb-1">98%</p>
                            <p className="text-sm text-zinc-500 uppercase tracking-widest">Code Coverage</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
