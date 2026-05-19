import { ChevronRight, GraduationCap } from "lucide-react";

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
                <div className="mb-12">
                    <p className="section-kicker">CV Snapshot</p>
                    <h2 className="section-title">
                        Experience & Education<span className="text-primary">.</span>
                    </h2>
                    <p className="section-lede">
                        Academic foundation, current credentials, and the signals recruiters need to scan quickly.
                    </p>
                    <div className="section-heading-line" />
                </div>

                <div className="mb-8 flex flex-col gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-slate-950 text-white">
                        <GraduationCap className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-black text-slate-950">Education</h3>
                        <p className="mt-1 text-sm leading-6 text-slate-600">Open to internships and entry-level software engineering roles.</p>
                    </div>
                    <div className="flex flex-wrap gap-2 sm:ml-auto">
                        <span className="badge">Current: B.Tech CSE</span>
                        <span className="badge">GPA 8.1/10</span>
                        <span className="badge">Open to internships</span>
                    </div>
                </div>

                <div className="relative space-y-5">
                    <div className="absolute left-4 top-4 hidden h-[calc(100%-2rem)] w-px bg-slate-200 md:block" />
                    {education.map((edu, index) => (
                        <article key={index} className="relative md:pl-12">
                            <div className="absolute left-[9px] top-7 hidden h-3 w-3 rounded-full border-2 border-primary bg-white md:block" />
                            <div className="project-card">
                                <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                    <div>
                                        <h4 className="text-xl font-black text-slate-950">{edu.title}</h4>
                                        <p className="mt-2 text-base font-semibold text-primary">{edu.company}</p>
                                    </div>
                                    <span className="w-fit rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                                        {edu.duration}
                                    </span>
                                </div>
                                <p className="mb-5 text-base leading-relaxed text-slate-600">{edu.description}</p>
                                <ul className="space-y-3">
                                    {edu.highlights.map((highlight, hIndex) => (
                                        <li key={hIndex} className="flex items-start gap-3 text-sm leading-6 text-slate-600">
                                            <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-primary" />
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
