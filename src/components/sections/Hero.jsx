import { ArrowRight, Copy, Check, ArrowDown } from "lucide-react";
import { useState } from "react";

export function Hero() {
    const [copied, setCopied] = useState(false);
    
    const handleCopyEmail = () => {
        navigator.clipboard.writeText("bishalpaul151@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="hero" className="relative flex min-h-screen items-center justify-center px-4 md:px-6 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <div className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] pointer-events-none" style={{background:"radial-gradient(circle, rgba(239,68,68,0.4) 0%, rgba(249,115,22,0.3) 40%, transparent 70%)",left:"50%",top:"50%",transform:"translateX(-50%) translateY(-50%)"}}></div>
                <div className="absolute w-[300px] h-[300px] rounded-full opacity-15 blur-[80px] pointer-events-none" style={{background:"radial-gradient(circle, rgba(249,115,22,0.5) 0%, rgba(239,68,68,0.2) 50%, transparent 70%)",left:"60%",top:"40%",transform:"translateX(-50%) translateY(-50%)"}}></div>
            </div>
            
            <div className="absolute inset-x-0 bottom-0 h-[40vh] bg-gradient-to-t from-red-500/5 to-transparent pointer-events-none z-[1]"></div>
            
            <div className="relative z-10 mx-auto max-w-4xl text-center flex flex-col items-center animate-slide-up">
                <p className="text-lg text-[#a1a1aa]">Hey, I'm</p>
                <h1 className="mt-2 text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#fafafa] leading-[1.1] uppercase" style={{textShadow:"0 0 60px rgba(239, 68, 68, 0.2)"}}>BISHAL PAUL</h1>
                <div className="mt-4 flex justify-center">
                    <span className="inline-flex items-center bg-red-500 text-white px-4 py-1.5 rounded-full text-sm font-medium">Full Stack Developer</span>
                </div>
                <p className="mt-6 text-xl sm:text-2xl text-[#a1a1aa] leading-relaxed">
                    I build and craft digital experiences
                    <br className="hidden sm:block"/>
                    {" "}that deliver{" "}
                    <span className="font-serif italic" style={{background:"linear-gradient(135deg, #ef4444, #f97316)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>real impact</span>
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-500 text-white text-sm font-medium shadow-lg shadow-red-500/25 transition-all duration-300 hover:bg-red-600">
                        Let's Connect
                        <ArrowRight className="w-4 h-4" />
                    </a>
                    <button 
                        onClick={handleCopyEmail}
                        className="inline-flex items-center gap-2 text-[#a1a1aa] text-sm hover:text-[#fafafa] active:scale-95 active:text-[#fafafa] transition-colors cursor-pointer"
                    >
                        bishalpaul151@gmail.com
                        {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                </div>
            </div>

            <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2 z-20 text-zinc-500 hover:text-red-400 transition-colors cursor-none md:cursor-pointer">
                <ArrowDown className="w-6 h-6" />
            </a>
        </section>
    );
}
