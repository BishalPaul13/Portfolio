export function About() {
    return (
        <section id="about" className="section-padding bg-white">
            <div className="section-container">
                <div className="mb-12">
                    <p className="section-kicker">Profile</p>
                    <h2 className="section-title">
                        About Me<span className="text-primary">.</span>
                    </h2>
                    <p className="section-lede">
                        Full-stack engineering with a practical product mindset, from real-time systems to domain-heavy applications.
                    </p>
                    <div className="section-heading-line" />
                </div>

                <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                    <div className="project-card space-y-6 p-7 md:p-8">
                        <p className="text-lg leading-relaxed text-slate-600">
                            A software engineer who builds <span className="font-semibold text-slate-900">things that matter</span>, not just things that work. From <span className="font-semibold text-primary">Connectly</span>, a real-time chat platform built for scale, to a <span className="font-semibold text-primary">power distribution system</span> for agriculture - two very different domains, same obsession: <span className="rounded-md bg-primary/10 px-2 py-0.5 font-semibold text-slate-900">depth over surface</span>. I specialize in the <span className="font-semibold text-slate-900">MERN stack</span>, but what drives me is the <span className="font-semibold text-slate-900">system design thinking</span> behind the code.
                        </p>
                        <p className="text-lg leading-relaxed text-slate-600">
                            Currently a <span className="font-semibold text-slate-900">CS student</span>, with my sights set on building products that <span className="font-semibold text-primary">scale to millions</span> or tools that developers swear by.
                        </p>
                        <blockquote className="border-l-4 border-primary bg-slate-50 px-5 py-4 text-lg italic leading-relaxed text-slate-600">
                            "When the screen is off, you'll find me lost in a book - less for the answers, more for the <span className="font-semibold not-italic text-slate-900">questions they leave behind</span>."
                        </blockquote>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                        <div className="project-card">
                            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Focus</p>
                            <p className="mt-3 text-xl font-black text-slate-950">MERN stack, system design, real-time products</p>
                        </div>
                        <div className="project-card">
                            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Current</p>
                            <p className="mt-3 text-xl font-black text-slate-950">CS student building internship-ready work</p>
                        </div>
                        <div className="project-card">
                            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Direction</p>
                            <p className="mt-3 text-xl font-black text-slate-950">Products that scale, tools developers value</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
