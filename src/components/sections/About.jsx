import { Code2, Database, Wrench } from "lucide-react";

const techCategories = [
    {
        title: "Frontend",
        icon: Code2,
        skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    },
    {
        title: "Backend",
        icon: Database,
        skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL"],
    },
    {
        title: "Tools & Others",
        icon: Wrench,
        skills: ["Git", "GitHub", "VS Code", "Vercel", "Figma", "Linux"],
    },
];

export function About() {
    return (
        <section id="about" className="section-padding bg-secondary/25">
            <div className="section-container">
                <div className="flex items-center gap-4 mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        <span className="text-primary font-mono text-xl md:text-2xl mr-2">01.</span>
                        About Me
                    </h2>
                    <div className="section-heading-line" />
                </div>

                <div className="grid lg:grid-cols-5 gap-12">
                    <div className="lg:col-span-3 space-y-6">
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Hello! I'm a passionate Full-Stack Developer and Computer Science student
                            with a keen interest in building web applications that are both functional
                            and beautifully designed. My journey in software development started with
                            curiosity about how websites work, and it has evolved into a deep commitment
                            to crafting exceptional digital experiences.
                        </p>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            I specialize in creating scalable, user-centric applications using modern
                            technologies. I believe in writing clean, maintainable code and following
                            best practices to deliver products that make a real impact.
                        </p>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            When I'm not coding, you can find me exploring new technologies,
                            contributing to open-source projects, or solving algorithmic challenges
                            to sharpen my problem-solving skills.
                        </p>
                    </div>

                    <div className="lg:col-span-2">
                        <div className="relative">
                            <div className="aspect-square rounded-2xl overflow-hidden bg-card border border-border shadow-card">
                                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 via-primary/10 to-amber-200/20">
                                    <span className="text-7xl">{"\u{1F468}\u200D\u{1F4BB}"}</span>
                                </div>
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/60 rounded-2xl -z-10" />
                        </div>
                    </div>
                </div>

                <div className="mt-16 grid md:grid-cols-3 gap-6">
                    {techCategories.map((category, index) => (
                        <div
                            key={category.title}
                            className="project-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-accent">
                                    <category.icon className="w-5 h-5 text-primary" />
                                </div>
                                <h3 className="font-semibold text-foreground">{category.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span key={skill} className="badge text-sm">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
