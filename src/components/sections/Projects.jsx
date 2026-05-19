import { useState } from "react";
import { Brain, ExternalLink, Github, Leaf, MessageCircle, Search, X } from "lucide-react";

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
        Icon: Leaf,
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
        Icon: MessageCircle,
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
        Icon: Search,
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
        Icon: Brain,
    },
];

export function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="section-padding bg-white">
            <div className="section-container">
                <div className="mb-12">
                    <p className="section-kicker">Selected Work</p>
                    <h2 className="section-title">
                        Featured Projects<span className="text-primary">.</span>
                    </h2>
                    <p className="section-lede">
                        Practical full-stack projects with clear domains, measurable outcomes, and production links where available.
                    </p>
                    <div className="section-heading-line" />
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                            onSelect={() => setSelectedProject(project)}
                        />
                    ))}
                </div>
            </div>

            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    );
}

function ProjectCard({ project, onSelect }) {
    const Icon = project.Icon;

    return (
        <div
            className="project-card group flex cursor-pointer flex-col"
            onClick={onSelect}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    onSelect();
                }
            }}
        >
            <div className="mb-6 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-slate-200 bg-slate-50 text-slate-700 transition-all duration-200 group-hover:border-red-200 group-hover:bg-red-50 group-hover:text-red-600">
                    <Icon className="h-6 w-6" />
                </div>
                <span
                    className={`rounded-md px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] ${
                        project.status === "Live"
                            ? "border border-emerald-200 bg-emerald-50 text-emerald-700"
                            : "border border-slate-200 bg-slate-50 text-slate-500"
                    }`}
                >
                    {project.status === "Live" ? "Live Demo" : "Source Code"}
                </span>
            </div>
            <h3 className="mb-3 text-2xl font-black leading-tight text-slate-950 transition-colors group-hover:text-primary">
                {project.title}
            </h3>
            <p className="mb-6 line-clamp-3 flex-1 text-base leading-relaxed text-slate-600">
                {project.description}
            </p>
            <p className="mb-5 rounded-md border border-red-100 bg-red-50 px-3 py-2 text-sm font-semibold text-red-700">
                {project.impact}
            </p>
            <div className="mt-auto flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                    <span
                        key={tech}
                        className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1.5 font-mono text-xs text-slate-600"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}

function ProjectModal({ project, onClose }) {
    const Icon = project.Icon;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-md"
            onClick={onClose}
        >
            <div
                className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg border border-slate-200 bg-white p-6 shadow-2xl animate-slide-up md:p-8"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="mb-8 flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <span className="flex h-12 w-12 items-center justify-center rounded-md border border-slate-200 bg-slate-50 text-slate-700">
                            <Icon className="h-6 w-6" />
                        </span>
                        <h3 className="text-2xl font-black leading-tight text-slate-950 md:text-3xl">
                            {project.title}
                        </h3>
                    </div>
                    <button
                        onClick={onClose}
                        className="rounded-md border border-transparent p-2.5 text-slate-500 transition-colors hover:border-slate-200 hover:bg-slate-100 hover:text-slate-900"
                        aria-label="Close modal"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <p className="mb-8 text-lg leading-relaxed text-slate-600">
                    {project.longDescription}
                </p>

                <div className="mb-8">
                    <h4 className="mb-3 text-lg font-black text-slate-950">
                        Impact
                    </h4>
                    <p className="rounded-md border border-primary/20 bg-primary/10 px-4 py-3 font-mono text-sm text-primary">
                        {project.impact}
                    </p>
                </div>

                <div className="mb-8">
                    <h4 className="mb-4 text-lg font-black text-slate-950">
                        Key Features
                    </h4>
                    <ul className="grid gap-3 md:grid-cols-2">
                        {project.features.map((feature) => (
                            <li
                                key={feature}
                                className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                            >
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-300" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mb-10">
                    <h4 className="mb-4 text-lg font-black text-slate-950">
                        Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                            <span key={tech} className="badge">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex flex-wrap gap-3 border-t border-slate-200 pt-6">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                    >
                        <Github className="w-4 h-4" />
                        View Source
                    </a>
                    {project.live && (
                        <a
                            href={project.live}
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
    );
}
