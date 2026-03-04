import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28 pb-12">
            {/* Background gradient effect */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-grid opacity-40" />
                <div className="absolute -top-20 left-[18%] w-[28rem] h-[28rem] bg-primary/15 rounded-full blur-3xl" />
                <div className="absolute top-[45%] -right-20 w-[24rem] h-[24rem] bg-amber-400/15 rounded-full blur-3xl" />
            </div>

            <div className="section-container text-center">
                <div className="inline-flex mb-7 animate-fade-in">
                    <span className="px-4 py-2 rounded-full border border-border/70 bg-card/85 text-xs md:text-sm tracking-wide text-muted-foreground">
                        Full-Stack Developer
                    </span>
                </div>

                <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
                    <p className="text-primary font-mono text-sm md:text-base mb-4 uppercase tracking-wider">
                        Hi, my name is
                    </p>
                </div>

                <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 leading-none">
                        Bishal
                    </h1>
                </div>

                <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-muted-foreground mb-7">
                        I build things for the web.
                    </h2>
                </div>

                <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
                    <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
                        Full-Stack Developer specializing in creating exceptional digital experiences.
                        Currently focused on building accessible, scalable web applications
                        with modern technologies.
                    </p>
                </div>

                <div
                    className="animate-slide-up flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                    style={{ animationDelay: "0.5s" }}
                >
                    <a href="#projects" className="btn-primary">
                        View My Work
                        <ArrowDown className="w-4 h-4" />
                    </a>
                    <a href="#contact" className="btn-secondary">
                        Get In Touch
                    </a>
                </div>

                <div
                    className="animate-slide-up flex items-center justify-center gap-6"
                    style={{ animationDelay: "0.6s" }}
                >
                    <a
                        href="https://github.com/BishalPaul13"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="GitHub"
                    >
                        <Github className="w-6 h-6" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/bishalpaul23/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a
                        href="mailto:bishalpaul151@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Email"
                    >
                        <Mail className="w-6 h-6" />
                    </a>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <ArrowDown className="w-6 h-6 text-muted-foreground" />
            </div>
        </section>
    );
}
