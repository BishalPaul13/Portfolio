export function About() {
    return (
        <section id="about" className="section-padding">
            <div className="section-container">
                <div className="flex items-center gap-6 mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                        About Me<span className="text-primary">.</span>
                    </h2>
                    <div className="section-heading-line" />
                </div>

                <div className="grid lg:grid-cols-5 gap-12 items-center">
                    <div className="lg:col-span-3 space-y-6">
                        <p className="text-zinc-400 text-lg leading-relaxed">
                            A software engineer who builds <span className="text-white font-medium">things that matter</span>, not just things that work. From <span className="text-primary font-medium">Connectly</span>, a real-time chat platform built for scale, to a <span className="text-primary font-medium">power distribution system</span> for agriculture — two very different domains, same obsession: <span className="text-white font-medium px-2 py-0.5 bg-primary/10 rounded-md">depth over surface</span>. I specialize in the <span className="text-white font-medium">MERN stack</span>, but what drives me is the <span className="text-white font-medium">system design thinking</span> behind the code.
                        </p>
                        <p className="text-zinc-400 text-lg leading-relaxed">
                            Currently a <span className="text-white font-medium">CS student</span>, with my sights set on building products that <span className="text-primary font-medium">scale to millions</span> or tools that developers swear by.
                        </p>
                        <div className="pt-4">
                            <blockquote className="text-zinc-400 text-lg leading-relaxed border-l-2 border-primary/50 pl-4 italic">
                                "When the screen is off, you'll find me lost in a book — less for the answers, more for the <span className="text-white font-medium not-italic">questions they leave behind</span>."
                            </blockquote>
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <div className="relative max-w-sm mx-auto lg:ml-auto group">
                            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-900/50 border border-zinc-800/50 shadow-xl transition-all duration-500 group-hover:border-zinc-700/50 group-hover:-translate-y-2">
                                <img
                                    src="/profile.jpg"
                                    alt="Bishal Paul portrait"
                                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                                    style={{ objectPosition: "center 30%" }}
                                    loading="lazy"
                                />
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border border-zinc-800/50 -z-10 transition-all duration-500 group-hover:-bottom-6 group-hover:-right-6 group-hover:border-zinc-700/50" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
