import { useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";

const projects = [
    {
        title: "Power Distribution in Agriculture",
        description:
            "An intelligent power distribution management system designed to optimize electricity allocation for agricultural usage.",
        longDescription:
            "Built a smart power management system to optimize electricity allocation using React, Node.js, and MongoDB. Implemented real-time tracking, automated load scheduling, and an analytics dashboard to reduce power wastage.",
        tech: ["React", "Node.js", "Express", "MongoDB", "REST APIs", "Chart.js"],
        features: [
            "Real-time power consumption monitoring",
            "Zone-wise electricity allocation",
            "Automated load scheduling system",
            "Energy usage analytics dashboard",
            "Admin control panel for grid management",
            "Alerts for overload and power outages",
        ],
        impact: "Cut projected wastage by ~18% in simulations across 4 regions.",
        status: "Live",
        github: "https://github.com/BishalPaul13/Power-Distribution-in-Agriculture.git",
        live: "https://power-distribution-in-agriculture.vercel.app/",
        image: "\u{1F33E}",
    },
    {
        title: "Connectly-Chat",
        description:
            "A real-time chat application enabling seamless one-to-one and/or group messaging with modern web tech.",
        longDescription:
            "Developed a real-time chat application supporting instant 1:1 and group messaging using the MERN stack. Integrated WebSockets (Socket.io) for bidirectional communication, online/offline presence, and real-time typing indicators.",
        tech: ["React", "Node.js", "Express", "Socket.io", "MongoDB", "Tailwind CSS", "Vite"],
        features: [
            "Real-time messaging with WebSockets",
            "User signup & login",
            "Online/offline presence indicators",
            "Typing status",
            "Responsive UI",
            "Deployed live with CI/CD",
        ],
        impact: "Sustained 2k concurrent socket connections in load tests.",
        status: "Live",
        github: "https://github.com/BishalPaul13/Connectly-Chat",
        live: "https://connectly-chat.vercel.app",
        image: "\u{1F4AC}",
    },
    {
        title: "Ballistic Recognition Tool",
        description:
            "A web-based forensic ballistic evidence management and recognition system for handling bullet/cartridge case data.",
        longDescription:
            "Created a full-stack forensic evidence management system using PHP and MySQL to manage and compare ballistic records. Designed interactive dashboards for investigators to generate detailed case reports and overview evidence seamlessly.",
        tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        features: [
            "Evidence upload and management interface",
            "Case report generation",
            "Search and comparison of ballistic records",
            "Responsive frontend with interactive data displays",
            "Structured database for evidence & metadata",
            "Modular file handling and backend routing",
        ],
        impact: "Reduced evidence lookup time from minutes to seconds in demo runs.",
        status: "Code",
        github: "https://github.com/BishalPaul13/Ballistic-Recognition-Tool",
        live: null,
        image: "\u{1F50D}",
    },
    {
        title: "AI Virtual Physical Therapy Assistant",
        description:
            "An AI-powered assistant that provides guided physical therapy support, exercise recommendations, and interactive session capabilities.",
        longDescription:
            "Engineered an AI-driven assistant utilizing computer vision to analyze user motion and provide real-time feedback. Built a responsive dashboard to track user repetitions, ensure correct form, and offer personalized therapy guidance.",
        tech: ["HTML", "CSS", "JavaScript", "Python", "OpenCV", "Flask"],
        features: [
            "Interactive exercise guidance interface",
            "Real-time motion analysis and feedback loop",
            "Repetition counting and performance tracking",
            "AI-based therapy recommendations",
            "Responsive frontend dashboard",
            "Modular backend for future expansion",
        ],
        impact: "Tracked reps with >92% pose-detection accuracy on sample set.",
        status: "Code",
        github: "https://github.com/BishalPaul13/AI-Virtual-Physical-Therapy-Assistant",
        live: null,
        image: "\u{1F9E0}",
    },
];

export function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="section-padding">
            <div className="section-container">
                <div className="flex items-center gap-6 mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                        Featured Projects<span className="text-primary">.</span>
                    </h2>
                    <div className="section-heading-line" />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="project-card cursor-pointer group"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className="text-4xl transition-all duration-300">{project.image}</div>
                                <span
                                    className={`px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide ${
                                        project.status === "Live"
                                            ? "bg-zinc-900 border border-zinc-800 text-primary"
                                            : "bg-zinc-900 border border-zinc-800 text-zinc-400"
                                    }`}
                                >
                                    {project.status === "Live" ? "Live Demo" : "Source Code"}
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-zinc-400 text-base mb-6 line-clamp-2 leading-relaxed">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-xs font-mono text-zinc-400 bg-zinc-900/50 border border-zinc-800/50 px-3 py-1.5 rounded-lg"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Project Modal */}
            {selectedProject && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
                    onClick={() => setSelectedProject(null)}
                >
                    <div
                        className="bg-zinc-950 border border-zinc-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 animate-slide-up shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-start mb-8 gap-4">
                            <div className="flex items-center gap-4">
                                <span className="text-4xl">{selectedProject.image}</span>
                                <h3 className="text-3xl font-extrabold text-white tracking-tight">
                                    {selectedProject.title}
                                </h3>
                            </div>
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="p-2.5 rounded-xl hover:bg-zinc-900 border border-transparent hover:border-zinc-800 transition-colors text-zinc-400 hover:text-white"
                                aria-label="Close modal"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <p className="text-zinc-400 mb-8 text-lg leading-relaxed">
                            {selectedProject.longDescription}
                        </p>

                        <div className="mb-8">
                            <h4 className="text-lg font-bold text-white mb-3">
                                Impact
                            </h4>
                            <p className="text-sm font-mono text-primary bg-primary/10 border border-primary/20 rounded-xl px-4 py-3">
                                {selectedProject.impact}
                            </p>
                        </div>

                        <div className="mb-8">
                            <h4 className="text-lg font-bold text-white mb-4">
                                Key Features
                            </h4>
                            <ul className="grid md:grid-cols-2 gap-3">
                                {selectedProject.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex items-start gap-3 text-zinc-400 text-sm"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 mt-2" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mb-10">
                            <h4 className="text-lg font-bold text-white mb-4">
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

                        <div className="flex flex-wrap gap-4 pt-6 border-t border-zinc-900">
                            <a
                                href={selectedProject.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary"
                            >
                                <Github className="w-4 h-4" />
                                View Source
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
