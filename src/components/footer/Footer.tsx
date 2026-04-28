const Footer = () => {
    return (
        <footer className="w-full bg-zinc-950 font-space-grotesk text-sm py-12 border-t border-zinc-800">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <span className="text-lg font-bold text-emerald-500">Sakib</span>
                    <p className="text-zinc-500">
                        © {new Date().getFullYear()} MERN Architect. Engineered for performance.
                    </p>
                </div>
                <div className="flex gap-8">
                    <a
                        className="text-zinc-500 hover:text-emerald-400 transition-colors opacity-80 hover:opacity-100"
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                    <a
                        className="text-zinc-500 hover:text-emerald-400 transition-colors opacity-80 hover:opacity-100"
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                    <a
                        className="text-zinc-500 hover:text-emerald-400 transition-colors opacity-80 hover:opacity-100"
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Facebook
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
