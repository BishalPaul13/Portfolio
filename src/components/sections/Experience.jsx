import { GraduationCap, ChevronRight } from "lucide-react";

const education = [
    {
        type: "education",
        title: "Computer Science & Engineering",
        company: "Lovely Professional University",
        duration: "2023 - 2027 (Expected)",
        description:
            "Pursuing a comprehensive computer science education focusing on software engineering and full-stack web development.",
        highlights: [
            "8.1/10.0 GPA; consistently recognized on the Dean's List.",
            "Core focus on Data Structures, Algorithms, Database Systems, and Architecture.",
        ],
    },
    {
        type: "education",
        title: "Intermediate (Science - PCM)",
        company: "Karim City College, Jamshedpur",
        duration: "2020 - 2022",
        description:
            "Higher Secondary education with a specialization in Physics, Chemistry, and Mathematics.",
        highlights: [
            "Developed a strong analytical and quantitative foundation essential for complex engineering problem-solving.",
        ],
    },
    {
        type: "education",
        title: "Matriculation",
        company: "Kokpara High School, Kokpara",
        duration: "2018 - 2020",
        description:
            "Secondary education emphasizing Science and Mathematics.",
        highlights: [
            "Consistently maintained strong academic performance.",
            "Built early foundational analytical and critical thinking skills.",
        ],
    },
];

export function Experience() {
    return (
        <section id="experience" className="section-padding">
            <div className="section-container">
                <div className="flex items-center gap-6 mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                        Experience & Education<span className="text-primary">.</span>
                    </h2>
                    <div className="section-heading-line" />
                </div>

                <div className="max-w-4xl">
                    <div className="flex flex-wrap items-center gap-4 mb-10">
                        <div className="p-3 rounded-xl bg-zinc-900/50 border border-zinc-800/50">
                            <GraduationCap className="w-6 h-6 text-zinc-300" />
                        </div>
                        <h3 className="text-2xl font-bold text-white tracking-tight">Education</h3>
                        <div className="flex flex-wrap gap-2 text-xs font-mono ml-auto">
                            <span className="badge">Current: B.Tech CSE</span>
                            <span className="badge">GPA 8.1/10</span>
                            <span className="badge">Open to internships</span>
                        </div>
                    </div>

                    <div className="relative space-y-8">
                        <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-red-500/50 via-red-500/10 to-transparent"></div>
                        {education.map((edu, index) => (
                            <div key={index} className="relative pl-10 group animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                                <div className="absolute left-0 top-9 h-[16px] w-[16px] rounded-full border-2 border-red-500 bg-[#0a0a0a] shadow-[0_0_10px_rgba(239,68,68,0.3)] group-hover:bg-red-500 transition-all duration-300" />
                                <div className="project-card hover:shadow-[0_0_30px_rgba(239,68,68,0.1)]">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                                        <h4 className="text-xl font-bold text-white">{edu.title}</h4>
                                        <span className="text-xs px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800 text-zinc-400 font-medium tracking-wide">
                                            {edu.duration}
                                        </span>
                                    </div>
                                    <p className="text-lg text-primary font-medium mb-4">{edu.company}</p>
                                    <p className="text-zinc-400 text-base mb-6 leading-relaxed">{edu.description}</p>
                                    <ul className="space-y-3">
                                        {edu.highlights.map((highlight, hIndex) => (
                                            <li
                                                key={hIndex}
                                                className="flex items-start gap-3 text-sm text-zinc-400"
                                            >
                                                <ChevronRight className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5 group-hover:text-primary transition-colors duration-300" />
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
