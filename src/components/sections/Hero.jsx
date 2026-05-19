import { ArrowRight, Copy, Check, Download, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export function Hero() {
    const [copied, setCopied] = useState(false);
    
    const handleCopyEmail = () => {
        navigator.clipboard.writeText("bishalpaul151@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="hero" className="relative overflow-hidden pt-32 md:pt-36">
            <div className="absolute inset-x-0 top-0 h-48 border-b border-slate-200/70 bg-[linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-[size:32px_32px] opacity-50" aria-hidden="true" />

            <div className="section-container relative">
                <div className="grid min-h-[calc(100vh-9rem)] items-center gap-10 pb-16 md:grid-cols-[1.05fr_0.95fr] md:pb-20">
                    <div className="animate-slide-up">
                        <div className="mb-6 flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-600">
                            <span className="rounded-md border border-red-200 bg-red-50 px-3 py-1.5 text-red-700">
                                Full Stack Developer
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                                <MapPin className="h-4 w-4 text-slate-400" />
                                Jalandhar, Punjab
                            </span>
                        </div>

                        <p className="section-kicker">Hey, I'm</p>
                        <h1 className="max-w-3xl text-5xl font-black leading-[0.98] text-slate-950 sm:text-6xl md:text-7xl lg:text-8xl">
                            Bishal Paul
                        </h1>
                        <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-600 sm:text-2xl sm:leading-9">
                            I build and craft digital experiences that deliver{" "}
                            <span className="font-semibold text-slate-950">real impact</span>.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <a href="#contact" className="btn-primary">
                                Let's Connect
                                <ArrowRight className="h-4 w-4" />
                            </a>
                            <a
                                href="/Bishal-Paul-Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary"
                            >
                                <Download className="h-4 w-4" />
                                Resume
                            </a>
                        </div>

                        <button
                            onClick={handleCopyEmail}
                            className="mt-6 inline-flex items-center gap-2 rounded-md text-sm font-semibold text-slate-600 transition-colors hover:text-slate-950"
                        >
                            <Mail className="h-4 w-4 text-primary" />
                            bishalpaul151@gmail.com
                            {copied ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4 text-slate-400" />}
                        </button>
                    </div>

                    <div className="animate-slide-up md:justify-self-end" style={{ animationDelay: "0.08s" }}>
                        <div className="relative mx-auto max-w-sm">
                            <div className="overflow-hidden rounded-lg border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-900/10">
                                <img
                                    src="/profile-enhanced.png"
                                    alt="Bishal Paul portrait"
                                    className="aspect-[2/3] w-full rounded-md bg-slate-50 object-contain"
                                />
                            </div>
                            <div className="absolute -bottom-5 left-5 right-5 rounded-lg border border-slate-200 bg-white/95 p-4 shadow-lg shadow-slate-900/10 backdrop-blur">
                                <div className="grid grid-cols-3 divide-x divide-slate-200 text-center">
                                    <div>
                                        <p className="text-lg font-black text-slate-950">4</p>
                                        <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">Projects</p>
                                    </div>
                                    <div>
                                        <p className="text-lg font-black text-slate-950">8.1</p>
                                        <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">GPA</p>
                                    </div>
                                    <div>
                                        <p className="text-lg font-black text-slate-950">MERN</p>
                                        <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">Stack</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
