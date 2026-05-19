export function Skills() {
    const categories = [
        {
            title: "Languages",
            items: [
                { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
                { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
                { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
                { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
                { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
                { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
                { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
            ]
        },
        {
            title: "Frameworks & Libraries",
            items: [
                { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
                { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
                { name: "Express.js", logo: "https://cdn.simpleicons.org/express/1e293b" },
                { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
                { name: "Vite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" },
                { name: "GraphQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" },
            ]
        },
        {
            title: "Databases",
            items: [
                { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
                { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
                { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
            ]
        },
        {
            title: "Tools & Platforms",
            items: [
                { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
                { name: "GitHub", logo: "https://cdn.simpleicons.org/github/1e293b" },
                { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
                { name: "AWS", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/amazonwebservices.svg" },
                { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
                { name: "Vercel", logo: "https://cdn.simpleicons.org/vercel/1e293b" },
                { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
            ]
        }
    ];

    return (
        <section id="skills" className="section-padding">
            <div className="section-container">
                <div className="mb-12 animate-slide-up">
                    <p className="section-kicker">Stack</p>
                    <h2 className="section-title">
                        Skills &amp; Expertise<span className="text-red-500">.</span>
                    </h2>
                    <p className="section-lede">
                        A collection of technologies I'm proficient with, from languages to frameworks and tools
                    </p>
                    <div className="section-heading-line" />
                </div>
                
                <div className="grid gap-5 lg:grid-cols-2">
                    {categories.map((category, idx) => (
                        <div key={idx} className="project-card animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                            <h3 className="mb-5 text-lg font-black text-slate-950">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2.5">
                                {category.items.map((skill, skillIdx) => (
                                    <div 
                                        key={skillIdx}
                                        className="flex items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-3 py-2 transition-colors hover:border-slate-300 hover:bg-white"
                                    >
                                        <img 
                                            src={skill.logo} 
                                            alt={skill.name} 
                                            width="18" 
                                            height="18" 
                                            className="shrink-0" 
                                            loading="lazy"
                                        />
                                        <span className="text-sm font-semibold text-slate-700">{skill.name}</span>
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
