import { useState, useEffect } from 'react';

interface NavbarProps {
    activeSection?: string;
    handleScroll: (sectionId: string) => void;
}

const Navbar = ({ activeSection, handleScroll }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const navLinks = [
        { name: 'Home', id: 'home' },
        { name: 'Experiences', id: 'experiences' },
        { name: 'Skills', id: 'skills' },
        { name: 'Projects', id: 'projects' },
        { name: 'Education', id: 'education' },
        { name: 'About', id: 'about' },
        { name: 'Contact', id: 'contact' },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 font-space-grotesk tracking-tight">
            <div className="flex justify-between items-center h-16 px-6 md:px-12 max-w-7xl mx-auto">
                <span className="text-2xl font-bold text-white tracking-tighter cursor-pointer"
                    style={{
                        fontFamily: "'Playwrite NO', cursive",
                        letterSpacing: "0.15em"
                    }}
                    onClick={() => handleScroll('home')}
                >Sakib</span>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-3">
                    {navLinks.map((link) => {
                        const isActive = link.id === activeSection;
                        return (
                            <button
                                key={link.name}
                                className={`text-xs rounded-md px-2 py-1 transition-all cursor-pointer ${
                                    isActive 
                                    ? "text-primary bg-primary-container/50" 
                                    : "text-zinc-400 hover:text-white hover:bg-zinc-900/50"
                                }`}
                                onClick={() => handleScroll(link.id)}
                            >
                                {link.name}
                            </button>
                        );
                    })}
                </div>

                <div className="flex items-center gap-4">
                    <a 
                        href="/resume_frontend_developer.pdf" 
                        download 
                        className="bg-primary-container text-white px-6 py-2 gap-2 rounded-lg font-semibold active:scale-95 transition-transform duration-150 hover:shadow-[0_0_15px_rgba(0,98,57,0.4)] cursor-pointer flex items-center"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                        <span>Resume</span>
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white p-2 hover:bg-zinc-900/50 rounded-md transition-colors cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`fixed inset-0 top-16 w-full h-[calc(100vh-4rem)] bg-zinc-950/98 backdrop-blur-xl md:hidden transition-all duration-500 ease-in-out ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
                <div className="flex flex-col items-center justify-center h-full gap-8 px-6 overflow-scroll">
                    {navLinks.map((link, index) => {
                        const isActive = link.id === activeSection;
                        return (
                            <button
                                key={link.name}
                                className={`transition-all text-2xl font-medium tracking-tight hover:scale-110 active:scale-95 cursor-pointer ${
                                    isActive ? "text-white scale-110 font-bold" : "text-zinc-400 hover:text-white"
                                }`}
                                style={{ transitionDelay: isOpen ? `${index * 50}ms` : '0ms' }}
                                onClick={() => {
                                    handleScroll(link.id);
                                    setIsOpen(false);
                                }}
                            >
                                {link.name}
                            </button>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
