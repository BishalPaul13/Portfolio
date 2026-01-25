import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Full-Stack Developer Intern",
    company: "Tech Startup Inc.",
    duration: "Jun 2024 - Present",
    description:
      "Developing and maintaining web applications using React and Node.js. Collaborating with cross-functional teams to implement new features and improve existing functionality.",
    highlights: [
      "Built RESTful APIs serving 10K+ daily requests",
      "Reduced page load time by 40% through optimization",
      "Implemented CI/CD pipeline using GitHub Actions",
    ],
  },
  {
    type: "work",
    title: "Freelance Web Developer",
    company: "Self-Employed",
    duration: "Jan 2023 - May 2024",
    description:
      "Delivered custom web solutions for small businesses and startups. Managed end-to-end project lifecycle from requirements gathering to deployment.",
    highlights: [
      "Completed 15+ client projects successfully",
      "Maintained 5-star rating on freelance platforms",
      "Specialized in e-commerce and portfolio websites",
    ],
  },
];

const education = [
  {
    type: "education",
    title: "Bachelor of Science in Computer Science",
    company: "State University",
    duration: "2021 - 2025 (Expected)",
    description:
      "Pursuing a comprehensive computer science education with focus on software engineering and web development.",
    highlights: [
      "GPA: 3.8/4.0",
      "Dean's List - All Semesters",
      "Relevant coursework: Data Structures, Algorithms, Database Systems, Web Development",
    ],
  },
  {
    type: "education",
    title: "Web Development Bootcamp",
    company: "Online Academy",
    duration: "2022",
    description:
      "Intensive full-stack web development program covering modern technologies and best practices.",
    highlights: [
      "600+ hours of hands-on training",
      "Built 10+ full-stack projects",
      "Certified in React, Node.js, and MongoDB",
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
          <div className="flex-1 h-px bg-border max-w-xs" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-accent">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Work Experience</h3>
            </div>

            <div className="relative space-y-8 pl-8 border-l-2 border-border">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[25px] w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  <div className="project-card">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h4 className="font-semibold text-foreground">{exp.title}</h4>
                      <span className="text-primary">@</span>
                      <span className="text-primary">{exp.company}</span>
                    </div>
                    <p className="text-sm font-mono text-muted-foreground mb-3">
                      {exp.duration}
                    </p>
                    <p className="text-muted-foreground text-sm mb-4">
                      {exp.description}
                    </p>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li
                          key={hIndex}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="text-primary mt-1">▹</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-accent">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Education</h3>
            </div>

            <div className="relative space-y-8 pl-8 border-l-2 border-border">
              {education.map((edu, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[25px] w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  <div className="project-card">
                    <h4 className="font-semibold text-foreground mb-1">{edu.title}</h4>
                    <p className="text-primary mb-2">{edu.company}</p>
                    <p className="text-sm font-mono text-muted-foreground mb-3">
                      {edu.duration}
                    </p>
                    <p className="text-muted-foreground text-sm mb-4">
                      {edu.description}
                    </p>
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, hIndex) => (
                        <li
                          key={hIndex}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="text-primary mt-1">▹</span>
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
      </div>
    </section>
  );
}
