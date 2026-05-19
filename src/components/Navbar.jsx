import { useState, useEffect, useRef } from "react";
import { FileText, Menu, X } from "lucide-react";

const navLinks = [
    { name: "Home", href: "#hero", id: "hero" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Certifications", href: "#certifications", id: "certifications" },
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
            className={`fixed left-1/2 z-50 w-[calc(100%-1.5rem)] max-w-6xl -translate-x-1/2 transition-all duration-300 print:hidden ${
                isScrolled ? "top-3" : "top-4 md:top-5"
            }`}
        >
            <nav className="rounded-lg border border-slate-200/90 bg-white/90 px-4 py-3 shadow-lg shadow-slate-900/5 backdrop-blur-xl md:px-5">
                <div className="flex items-center justify-between">
                    <a href="#hero" className="flex items-center gap-2 text-base font-black text-slate-950" aria-label="Bishal Paul home">
                        <span className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-950 text-sm font-black text-white">
                            BP
                        </span>
                        Bishal<span className="text-red-500">.</span>
                    </a>

                    <div className="hidden md:flex items-center gap-1 relative">
                        <div
                            className="pointer-events-none absolute z-0 rounded-md border border-red-200 bg-red-50 transition-all duration-300 ease-out"
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
                                    className={`relative z-10 rounded-md px-3 py-1.5 text-sm font-semibold transition-colors ${
                                        isActive
                                            ? "text-red-600"
                                            : "text-slate-500 hover:text-slate-950"
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
                            className="z-10 ml-2 inline-flex items-center gap-1.5 rounded-md bg-slate-950 px-3 py-1.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-slate-800"
                        >
                            <FileText className="h-4 w-4" />
                            Resume
                        </a>
                    </div>

                    <div className="flex md:hidden items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="rounded-md p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-red-600"
                            aria-label="Toggle menu"
                            aria-expanded={isMobileMenuOpen}
                        >
                            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>
                </div>
            </nav>

            {isMobileMenuOpen && (
                <div className="md:hidden mt-2">
                    <div className="flex flex-col gap-1 rounded-lg border border-slate-200 bg-white/95 p-2 shadow-lg shadow-slate-900/10 backdrop-blur-xl">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.id;
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`rounded-md border px-3 py-2 text-sm font-semibold transition-colors ${
                                        isActive
                                            ? "border-red-200 bg-red-50 text-red-600"
                                            : "border-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-950"
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
                            className="mt-1 inline-flex items-center gap-2 rounded-md bg-slate-950 px-3 py-2 text-sm font-semibold text-white"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <FileText className="h-4 w-4" />
                            Resume
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
