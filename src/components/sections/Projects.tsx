import { useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with user authentication, product management, shopping cart, and payment integration.",
    longDescription:
      "Built a comprehensive e-commerce solution featuring secure user authentication with JWT, real-time inventory management, shopping cart with persistent state, Stripe payment integration, and an admin dashboard for order tracking. Implemented responsive design and optimized for SEO.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Stripe", "Redux"],
    features: [
      "User authentication & authorization",
      "Product search & filtering",
      "Shopping cart & wishlist",
      "Stripe payment integration",
      "Order tracking system",
      "Admin dashboard",
    ],
    github: "https://github.com",
    live: "https://example.com",
    image: "🛒",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, team collaboration, and progress tracking.",
    longDescription:
      "Developed a Kanban-style task management application supporting real-time collaboration using WebSockets. Features include drag-and-drop task organization, team workspaces, deadline notifications, and detailed analytics dashboard.",
    tech: ["React", "TypeScript", "Socket.io", "PostgreSQL", "Node.js"],
    features: [
      "Drag-and-drop Kanban board",
      "Real-time collaboration",
      "Team workspaces",
      "Deadline notifications",
      "Progress analytics",
      "File attachments",
    ],
    github: "https://github.com",
    live: "https://example.com",
    image: "📋",
  },
  {
    title: "Social Media Dashboard",
    description:
      "An analytics dashboard for tracking social media metrics across multiple platforms with data visualization.",
    longDescription:
      "Created a unified dashboard for monitoring social media performance across platforms. Features include interactive charts, custom date range filtering, automated report generation, and scheduled data exports. Integrated with major social platforms' APIs.",
    tech: ["React", "D3.js", "Node.js", "Express", "MongoDB", "Chart.js"],
    features: [
      "Multi-platform integration",
      "Interactive data visualization",
      "Custom date filtering",
      "Automated reports",
      "Real-time metrics",
      "Export functionality",
    ],
    github: "https://github.com",
    live: null,
    image: "📊",
  },
  {
    title: "Real-Time Chat Application",
    description:
      "A messaging application with real-time communication, file sharing, and group chat functionality.",
    longDescription:
      "Built a real-time messaging platform supporting private and group conversations. Implemented features include message encryption, file sharing, read receipts, typing indicators, and push notifications. Designed for scalability using Redis for pub/sub messaging.",
    tech: ["React", "Socket.io", "Redis", "Node.js", "MongoDB", "Express"],
    features: [
      "Real-time messaging",
      "Group conversations",
      "File sharing",
      "Read receipts",
      "Typing indicators",
      "Push notifications",
    ],
    github: "https://github.com",
    live: "https://example.com",
    image: "💬",
  },
  {
    title: "Weather Forecast App",
    description:
      "A weather application providing real-time forecasts, interactive maps, and location-based alerts.",
    longDescription:
      "Developed a weather application with 7-day forecasts, hourly breakdowns, and severe weather alerts. Features interactive radar maps, location search, and personalized notifications. Integrated with OpenWeatherMap API for accurate data.",
    tech: ["React", "TypeScript", "OpenWeatherMap API", "Leaflet", "Tailwind"],
    features: [
      "7-day weather forecast",
      "Interactive radar maps",
      "Location-based alerts",
      "Hourly breakdowns",
      "UV index & air quality",
      "Favorites & search",
    ],
    github: "https://github.com",
    live: "https://example.com",
    image: "🌤️",
  },
  {
    title: "Blog Platform",
    description:
      "A modern blogging platform with rich text editing, categories, and SEO optimization.",
    longDescription:
      "Created a full-featured blogging platform with a rich text editor supporting markdown, code blocks, and media embedding. Includes user roles, comment moderation, SEO optimization, and RSS feed generation. Built with performance and accessibility in mind.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "TipTap"],
    features: [
      "Rich text editor",
      "Categories & tags",
      "Comment system",
      "SEO optimization",
      "RSS feed",
      "Draft & scheduling",
    ],
    github: "https://github.com",
    live: null,
    image: "✍️",
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="section-container">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            <span className="text-primary font-mono text-xl md:text-2xl mr-2">03.</span>
            Featured Projects
          </h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card cursor-pointer group"
              onClick={() => setSelectedProject(project)}
            >
              <div className="text-5xl mb-4">{project.image}</div>
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono text-primary bg-accent px-2 py-1 rounded"
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-card border border-border rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
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

            <p className="text-muted-foreground mb-6">
              {selectedProject.longDescription}
            </p>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-foreground mb-3">
                Key Features
              </h4>
              <ul className="grid grid-cols-2 gap-2">
                {selectedProject.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-muted-foreground text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
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

            <div className="flex gap-4">
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
