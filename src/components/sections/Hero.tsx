import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container text-center">
        <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <p className="text-primary font-mono text-sm md:text-base mb-4">
            Hi, my name is
          </p>
        </div>

        <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
            John Developer
          </h1>
        </div>

        <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-muted-foreground mb-6">
            I build things for the web.
          </h2>
        </div>

        <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
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
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:hello@example.com"
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
