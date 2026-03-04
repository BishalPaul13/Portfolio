const skills = [
    {
        category: "Languages & Frameworks",
        items: [
            { name: "JavaScript", level: 95 },
            { name: "React.js", level: 95 },
            { name: "Node.js", level: 88 },
            { name: "Express.js", level: 85 },
        ],
    },
    {
        category: "Databases & APIs",
        items: [
            { name: "MongoDB", level: 85 },
            { name: "PostgreSQL", level: 80 },
            { name: "REST APIs", level: 92 },
            { name: "GraphQL", level: 75 },
        ],
    },
    {
        category: "Tools & Methodologies",
        items: [
            { name: "Git & GitHub", level: 90 },
            { name: "Docker", level: 70 },
            { name: "CI/CD", level: 75 },
            { name: "Agile/Scrum", level: 85 },
        ],
    },
    {
        category: "Core Competencies",
        items: [
            { name: "Data Structures", level: 88 },
            { name: "Algorithms", level: 85 },
            { name: "System Design", level: 78 },
            { name: "Problem Solving", level: 92 },
        ],
    },
];

export function Skills() {
    return (
        <section id="skills" className="section-padding">
            <div className="section-container">
                <div className="flex items-center gap-4 mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        <span className="text-primary font-mono text-xl md:text-2xl mr-2">02.</span>
                        Skills & Expertise
                    </h2>
                    <div className="section-heading-line" />
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {skills.map((category, categoryIndex) => (
                        <div
                            key={category.category}
                            className="project-card"
                        >
                            <h3 className="text-lg font-semibold text-foreground mb-6">
                                {category.category}
                            </h3>
                            <div className="space-y-5">
                                {category.items.map((skill, skillIndex) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-muted-foreground font-medium">
                                                {skill.name}
                                            </span>
                                            <span className="text-primary font-mono text-sm">
                                                {skill.level}%
                                            </span>
                                        </div>
                                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                            <div
                                                className="h-full rounded-full transition-all duration-1000 ease-out"
                                                style={{
                                                    width: `${skill.level}%`,
                                                    background: "var(--gradient-primary)",
                                                    animationDelay: `${(categoryIndex * 4 + skillIndex) * 0.1}s`,
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
