import { Award, ExternalLink } from "lucide-react";

// 🔗 Replace each `link` value below with your actual certificate URL
const certifications = [
    {
        title: "Cloud Computing",
        issuer: "NPTEL",
        date: "2025",
        description:
            "Completed NPTEL's Cloud Computing course covering cloud architectures, deployment models, virtualization, and scalable infrastructure design.",
        link: "https://drive.google.com/file/d/1x00l51WtCCChOm7FPkT-tspWjosE6amw/view?usp=sharing", // ← Replace with your NPTEL certificate link
    },
    {
        title: "Data Structures & Algorithms using C++",
        issuer: "CipherSchools",
        date: "2024",
        description:
            "Gained in-depth knowledge of core data structures and algorithms — arrays, trees, graphs, sorting, and dynamic programming — implemented in C++.",
        link: "https://drive.google.com/file/d/1vUl32WXjaGFkl1sSggVhtWArcW9OC4iE/view?usp=sharing", // ← Replace with your CipherSchools certificate link
    },
    {
        title: "Mobile App Development using Flutter",
        issuer: "CipherSchools",
        date: "2025",
        description:
            "Built cross-platform mobile applications using Flutter and Dart, covering state management, UI components, and REST API integration.",
        link: "https://drive.google.com/file/d/1wlmtQwwxe1ApvpLXi4oJFZryqSDWnkDh/view?usp=sharing", // ← Replace with your CipherSchools certificate link
    },
    {
        title: "Responsive Web Design",
        issuer: "freeCodeCamp",
        date: "2023",
        description:
            "Earned the freeCodeCamp Responsive Web Design certification, covering HTML, CSS, Flexbox, Grid, and accessibility best practices.",
        link: "https://drive.google.com/file/d/1XdlV7sMjLWKQ3KemBQ1Jg433eCOGJ8Gf/view?usp=sharing", // ← Replace with your fCC certificate link
    },
];

export function Certifications() {
    return (
        <section id="certifications" className="section-padding">
            <div className="section-container">
                <div className="flex items-center gap-6 mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                        Certifications<span className="text-primary">.</span>
                    </h2>
                    <div className="section-heading-line" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {certifications.map((cert, index) => (
                        <a
                            key={index}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-card flex flex-col h-full hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] group animate-slide-up relative overflow-hidden cursor-pointer no-underline"
                            style={{ animationDelay: `${index * 0.15}s` }}
                            title="Click to view certificate"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className="p-3 rounded-xl bg-red-500/10 text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300">
                                    <Award className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-mono text-zinc-500 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800">
                                    {cert.date}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-red-400 transition-colors duration-300">
                                {cert.title}
                            </h3>
                            <p className="text-primary font-medium text-sm mb-4">
                                {cert.issuer}
                            </p>
                            <p className="text-zinc-400 text-sm mb-6 flex-grow leading-relaxed">
                                {cert.description}
                            </p>

                            <div className="mt-auto pt-4 border-t border-zinc-800/50 flex items-center justify-between">
                                <span className="text-xs text-zinc-500 italic">
                                    Click card to view certificate
                                </span>
                                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-400 group-hover:text-red-400 transition-colors duration-300">
                                    View Credential
                                    <ExternalLink className="w-4 h-4" />
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
