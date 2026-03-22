import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "Home", href: "#hero", id: "hero" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Contact", href: "#contact", id: "contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");

    const [activeRect, setActiveRect] = useState({ left: 0, top: 0, width: 0, height: 0, opacity: 0 });
    const navRefs = useRef({});

    const updateIndicator = () => {
        const currentEl = navRefs.current[activeSection];
        if (currentEl) {
            setActiveRect({
                left: currentEl.offsetLeft,
                top: currentEl.offsetTop,
                width: currentEl.offsetWidth,
                height: currentEl.offsetHeight,
                opacity: 1,
            });
        } else {
            setActiveRect((prev) => ({ ...prev, opacity: 0 }));
        }
    };

    // Update indicator whenever activeSection changes
    useEffect(() => {
        updateIndicator();
        window.addEventListener("resize", updateIndicator);
        return () => window.removeEventListener("resize", updateIndicator);
    }, [activeSection]);

    // Handle scroll and setup IntersectionObserver
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);

        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -80% 0px", // Trigger when section hits the upper fifth of screen
            threshold: 0,
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        navLinks.forEach((link) => {
            const section = document.getElementById(link.id);
            if (section) observer.observe(section);
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            navLinks.forEach((link) => {
                const section = document.getElementById(link.id);
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    // Extra effect to layout the slider correctly initially after paint
    useEffect(() => {
        setTimeout(updateIndicator, 100);
    }, []);

    return (
        <header
            className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[calc(100%-2rem)] max-w-[850px] ${
                isScrolled ? "top-4" : "top-4 md:top-6"
            }`}
        >
            <nav className="rounded-2xl bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 px-4 py-3 md:px-6 shadow-lg shadow-black/25">
                <div className="flex items-center justify-between">
                    <a href="#hero" className="text-lg font-extrabold text-white">
                        Bishal<span className="text-red-500">.</span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1 relative">
                        {/* Smooth sliding reddish pill */}
                        <div
                            className="absolute bg-red-500/10 border border-red-500/20 rounded-xl transition-all duration-300 ease-out z-0 pointer-events-none shadow-sm shadow-red-500/5"
                            style={{
                                left: activeRect.left,
                                top: activeRect.top,
                                width: activeRect.width,
                                height: activeRect.height,
                                opacity: activeRect.opacity,
                            }}
                        />

                        {navLinks.map((link) => {
                            const isActive = activeSection === link.id;
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    ref={(el) => (navRefs.current[link.id] = el)}
                                    className={`relative z-10 px-3 py-1.5 text-sm font-medium rounded-xl transition-colors ${
                                        isActive
                                            ? "text-red-400"
                                            : "text-zinc-400 hover:text-zinc-200"
                                    }`}
                                >
                                    <span>{link.name}</span>
                                </a>
                            );
                        })}
                        <a
                            href="/Bishal-Paul-Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 text-sm font-medium rounded-xl text-red-500 bg-red-500/10 hover:bg-red-500/20 transition-colors ml-2 z-10"
                        >
                            Resume
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-zinc-400 hover:text-red-400 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden mt-2">
                    <div className="bg-zinc-900/95 backdrop-blur-xl border border-zinc-800 rounded-2xl p-4 flex flex-col gap-2 shadow-lg shadow-black/50">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.id;
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`px-3 py-2 text-sm font-medium rounded-xl transition-colors border ${
                                        isActive
                                            ? "text-red-400 bg-red-500/10 border-red-500/20 shadow-sm shadow-red-500/5"
                                            : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5 border-transparent"
                                    }`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            );
                        })}
                        <a
                            href="/Bishal-Paul-Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-2 text-sm font-medium text-red-400 hover:bg-red-500/10 rounded-xl flex"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Resume
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
