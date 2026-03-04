import { useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";

const projects = [
    {
        title: "Power Distribution in Agriculture",
        description:
            "An intelligent power distribution management system designed to optimize electricity allocation for agricultural usage.",
        longDescription:
            "Developed a smart power distribution system focused on improving electricity management in agricultural sectors. The system monitors energy consumption, prioritizes supply based on demand and availability, and ensures fair distribution among multiple zones. Implemented real-time data tracking, automated load scheduling, and analytics dashboards to reduce power wastage and enhance efficiency. Designed with scalability in mind to support rural grid infrastructures and future IoT integration.",
        tech: ["React", "Node.js", "Express", "MongoDB", "REST APIs", "Chart.js"],
        features: [
            "Real-time power consumption monitoring",
            "Zone-wise electricity allocation",
            "Automated load scheduling system",
            "Energy usage analytics dashboard",
            "Admin control panel for grid management",
            "Alerts for overload and power outages",
        ],
        github: "https://github.com/BishalPaul13/Power-Distribution-in-Agriculture.git",
        live: "https://power-distribution-in-agriculture.vercel.app/",
        image: "\u{1F33E}",
    },
    {
        title: "Connectly-Chat",
        description:
            "A real-time chat application enabling seamless one-to-one and/or group messaging with modern web tech.",
        longDescription:
            "Built a full-stack real-time chat platform using the MERN stack (MongoDB, Express, React, Node.js). The app supports instant messaging with WebSockets (Socket.io) for bidirectional communication, user authentication, and dynamic UI updates. Designed with Tailwind CSS/Vite for responsive, fast frontend experiences, and structured backend APIs for scalable message handling and user management. Integrated real-time typing indicators, online/offline status updates, and a smooth deployment setup (e.g., Vercel).",
        tech: ["React", "Node.js", "Express", "Socket.io", "MongoDB", "Tailwind CSS", "Vite"],
        features: [
            "Real-time messaging with WebSockets",
            "User signup & login",
            "Online/offline presence indicators",
            "Typing status",
            "Responsive UI",
            "Deployed live with CI/CD",
        ],
        github: "https://github.com/BishalPaul13/Connectly-Chat",
        live: "https://connectly-chat.vercel.app",
        image: "\u{1F4AC}",
    },
    {
        title: "Ballistic Recognition Tool",
        description:
            "A web-based forensic ballistic evidence management and recognition system for handling bullet/cartridge case data.",
        longDescription:
            "Developed a full-stack ballistic recognition tool that helps forensic investigators upload and manage ballistic evidence, compare uploaded images against a reference database, and generate detailed case reports. The system features a clean, responsive frontend with HTML/CSS/JavaScript, backend logic in PHP, MySQL database integration for evidence storage, and interactive dashboards for case overview and reporting. Designed with scalability in mind to support future enhancements such as secure authentication, advanced analytics, and AI-powered matching.",
        tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        features: [
            "Evidence upload and management interface",
            "Case report generation",
            "Search and comparison of ballistic records",
            "Responsive frontend with interactive data displays",
            "Structured database for evidence & metadata",
            "Modular file handling and backend routing",
        ],
        github: "https://github.com/BishalPaul13/Ballistic-Recognition-Tool",
        live: null,
        image: "\u{1F50D}",
    },
    {
        title: "AI Virtual Physical Therapy Assistant",
        description:
            "An AI-powered assistant that provides guided physical therapy support, exercise recommendations, and interactive session capabilities.",
        longDescription:
            "Built an AI-driven virtual physical therapy assistant aimed at improving rehabilitative outcomes and accessibility for users. The system integrates computer vision and machine learning techniques (via Python/OpenCV or similar) to analyze user motion, offer exercise guidance, count repetitions, and ensure correct form during therapeutic routines. Structured with a clean web interface (HTML/CSS/JS) to allow users to input exercises and receive real-time feedback and progress tracking. Designed with modularity in mind to support future enhancements like adaptive recommendations, personalized therapy plans, and secure user profiles.",
        tech: ["HTML", "CSS", "JavaScript", "Python", "OpenCV / AI frameworks", "Flask"],
        features: [
            "Interactive exercise guidance interface",
            "Real-time motion analysis and feedback loop",
            "Repetition counting and performance tracking",
            "AI-based therapy recommendations",
            "Responsive frontend dashboard",
            "Modular backend for future expansion",
        ],
        github: "https://github.com/BishalPaul13/AI-Virtual-Physical-Therapy-Assistant",
        live: null,
        image: "\u{1F9E0}\u{1F4AA}",
    },
];

export function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="section-padding bg-secondary/25">
            <div className="section-container">
                <div className="flex items-center gap-4 mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        <span className="text-primary font-mono text-xl md:text-2xl mr-2">03.</span>
                        Featured Projects
                    </h2>
                    <div className="section-heading-line" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="project-card cursor-pointer group"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="text-5xl mb-4">{project.image}</div>
                            <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.slice(0, 4).map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-xs font-mono text-primary bg-accent/60 border border-border/70 px-2.5 py-1 rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                                {project.tech.length > 4 && (
                                    <span className="text-xs font-mono text-muted-foreground">
                                        +{project.tech.length - 4}
                                    </span>
                                )}
                            </div>
                            <div className="flex gap-4">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                    onClick={(e) => e.stopPropagation()}
                                    aria-label="View source code"
                                >
                                    <Github className="w-5 h-5" />
                                </a>
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                        onClick={(e) => e.stopPropagation()}
                                        aria-label="View live demo"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Project Modal */}
            {selectedProject && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
                    onClick={() => setSelectedProject(null)}
                >
                    <div
                        className="bg-card border border-border rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 animate-slide-up shadow-lg"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-start mb-6 gap-4">
                            <div className="flex items-center gap-4">
                                <span className="text-4xl">{selectedProject.image}</span>
                                <h3 className="text-2xl font-bold text-foreground">
                                    {selectedProject.title}
                                </h3>
                            </div>
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="p-2 rounded-lg hover:bg-secondary transition-colors"
                                aria-label="Close modal"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            {selectedProject.longDescription}
                        </p>

                        <div className="mb-6">
                            <h4 className="text-lg font-semibold text-foreground mb-3">
                                Key Features
                            </h4>
                            <ul className="grid md:grid-cols-2 gap-2">
                                {selectedProject.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex items-start gap-2 text-muted-foreground text-sm"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mb-6">
                            <h4 className="text-lg font-semibold text-foreground mb-3">
                                Tech Stack
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {selectedProject.tech.map((tech) => (
                                    <span key={tech} className="badge">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href={selectedProject.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary"
                            >
                                <Github className="w-4 h-4" />
                                View Code
                            </a>
                            {selectedProject.live && (
                                <a
                                    href={selectedProject.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
