import { GraduationCap, ChevronRight } from "lucide-react";

const education = [
    {
        type: "education",
        title: "Computer Science & Engineering",
        company: "Lovely Professional University",
        duration: "2023 - 2027 (Expected)",
        description:
            "Pursuing a comprehensive computer science education with focus on software engineering and web development.",
        highlights: [
            "GPA: 8.1/10.0",
            "Dean's List - All Semesters",
            "Relevant coursework: Data Structures, Algorithms, Database Systems, Web Development",
        ],
    },
    {
        type: "education",
        title: "Intermediate (Science - PCM)",
        company: "Karim City College, Jamshedpur",
        duration: "2020 - 2022",
        description:
            "Completed Higher Secondary education with a specialization in Physics, Chemistry, and Mathematics (PCM), building a strong analytical and problem-solving foundation essential for engineering and technical disciplines.",
        highlights: [
            "Core subjects: Physics, Chemistry, Mathematics",
            "Developed strong analytical and quantitative reasoning skills",
            "Participated in practical laboratory experiments and project work",
            "Built foundational knowledge for engineering and technology fields",
        ],
    },
    {
        type: "education",
        title: "Matriculation",
        company: "Kokpara High School, Kokpara",
        duration: "2018 - 2020",
        description:
            "Completed secondary education with a focus on Science and Mathematics, establishing a strong academic foundation in core subjects and analytical reasoning.",
        highlights: [
            "Core subjects: Mathematics, Science, English, Social Studies",
            "Developed foundational problem-solving and critical thinking skills",
            "Participated in academic projects and practical science activities",
            "Consistently maintained strong academic performance",
        ],
    },
];

export function Experience() {
    return (
        <section id="experience" className="section-padding">
            <div className="section-container">
                <div className="flex items-center gap-4 mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        <span className="text-primary font-mono text-xl md:text-2xl mr-2">04.</span>
                        Experience & Education
                    </h2>
                    <div className="section-heading-line" />
                </div>

                <div className="max-w-4xl">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-2 rounded-lg bg-accent">
                            <GraduationCap className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">Education</h3>
                    </div>

                    <div className="relative space-y-8 pl-8 border-l-2 border-border/80">
                        {education.map((edu, index) => (
                            <div key={index} className="relative">
                                <div className="absolute -left-[25px] w-4 h-4 rounded-full bg-primary border-4 border-background" />
                                <div className="project-card">
                                    <h4 className="font-semibold text-foreground mb-1">{edu.title}</h4>
                                    <p className="text-primary mb-2">{edu.company}</p>
                                    <p className="text-sm font-mono text-muted-foreground mb-3">
                                        {edu.duration}
                                    </p>
                                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                                        {edu.description}
                                    </p>
                                    <ul className="space-y-2">
                                        {edu.highlights.map((highlight, hIndex) => (
                                            <li
                                                key={hIndex}
                                                className="flex items-start gap-2 text-sm text-muted-foreground"
                                            >
                                                <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
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
