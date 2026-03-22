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
                { name: "Express.js", logo: "https://cdn.simpleicons.org/express/white" },
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
                { name: "GitHub", logo: "https://cdn.simpleicons.org/github/white" },
                { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
                { name: "AWS", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/amazonwebservices.svg" },
                { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
                { name: "Vercel", logo: "https://cdn.simpleicons.org/vercel/white" },
                { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
            ]
        }
    ];

    return (
        <section id="skills" className="py-[60px] md:py-[120px] px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
                <div className="mb-16 text-center animate-slide-up">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#fafafa]">
                        Skills &amp; Expertise<span className="text-red-500">.</span>
                    </h2>
                    <p className="mt-3 text-lg text-[#a1a1aa]">
                        A collection of technologies I'm proficient with, from languages to frameworks and tools
                    </p>
                </div>
                
                <div className="space-y-10">
                    {categories.map((category, idx) => (
                        <div key={idx} className="animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                            <h3 className="mb-4 text-lg font-semibold text-zinc-200">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.items.map((skill, skillIdx) => (
                                    <div 
                                        key={skillIdx}
                                        className="flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-3 py-2 transition-colors hover:bg-white/10 hover:border-white/20"
                                    >
                                        <img 
                                            src={skill.logo} 
                                            alt={skill.name} 
                                            width="18" 
                                            height="18" 
                                            className="shrink-0" 
                                            loading="lazy"
                                        />
                                        <span className="text-sm font-medium text-zinc-200">{skill.name}</span>
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
