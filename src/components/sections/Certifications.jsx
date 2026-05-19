import { Award, ExternalLink } from "lucide-react";

const certifications = [
    {
        title: "Cloud Computing",
        issuer: "NPTEL",
        date: "2025",
        description:
            "Completed NPTEL's Cloud Computing course covering cloud architectures, deployment models, virtualization, and scalable infrastructure design.",
        link: "https://drive.google.com/file/d/1x00l51WtCCChOm7FPkT-tspWjosE6amw/view?usp=sharing",
    },
    {
        title: "Data Structures & Algorithms using C++",
        issuer: "CipherSchools",
        date: "2024",
        description:
            "Gained in-depth knowledge of core data structures and algorithms - arrays, trees, graphs, sorting, and dynamic programming - implemented in C++.",
        link: "https://drive.google.com/file/d/1vUl32WXjaGFkl1sSggVhtWArcW9OC4iE/view?usp=sharing",
    },
    {
        title: "Mobile App Development using Flutter",
        issuer: "CipherSchools",
        date: "2025",
        description:
            "Built cross-platform mobile applications using Flutter and Dart, covering state management, UI components, and REST API integration.",
        link: "https://drive.google.com/file/d/1wlmtQwwxe1ApvpLXi4oJFZryqSDWnkDh/view?usp=sharing",
    },
    {
        title: "Responsive Web Design",
        issuer: "freeCodeCamp",
        date: "2023",
        description:
            "Earned the freeCodeCamp Responsive Web Design certification, covering HTML, CSS, Flexbox, Grid, and accessibility best practices.",
        link: "https://drive.google.com/file/d/1XdlV7sMjLWKQ3KemBQ1Jg433eCOGJ8Gf/view?usp=sharing",
    },
];

export function Certifications() {
    return (
        <section id="certifications" className="section-padding bg-white">
            <div className="section-container">
                <div className="mb-12">
                    <p className="section-kicker">Credentials</p>
                    <h2 className="section-title">
                        Certifications<span className="text-primary">.</span>
                    </h2>
                    <p className="section-lede">
                        Verified coursework across cloud, algorithms, mobile development, and responsive web fundamentals.
                    </p>
                    <div className="section-heading-line" />
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    {certifications.map((cert, index) => (
                        <a
                            key={index}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-card group flex h-full flex-col no-underline"
                            title="Click to view certificate"
                        >
                            <div className="mb-6 flex items-start justify-between">
                                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-red-200 bg-red-50 text-red-600 transition-colors duration-200 group-hover:bg-red-600 group-hover:text-white">
                                    <Award className="h-6 w-6" />
                                </div>
                                <span className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-mono text-slate-500">
                                    {cert.date}
                                </span>
                            </div>

                            <h3 className="mb-2 text-xl font-black leading-tight text-slate-950 transition-colors duration-200 group-hover:text-primary">
                                {cert.title}
                            </h3>
                            <p className="mb-4 text-sm font-semibold text-primary">
                                {cert.issuer}
                            </p>
                            <p className="mb-6 flex-grow text-sm leading-relaxed text-slate-600">
                                {cert.description}
                            </p>

                            <div className="mt-auto flex items-center justify-between border-t border-slate-200 pt-4">
                                <span className="text-xs font-medium text-slate-400">
                                    Credential link
                                </span>
                                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 transition-colors duration-200 group-hover:text-primary">
                                    View
                                    <ExternalLink className="h-4 w-4" />
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
