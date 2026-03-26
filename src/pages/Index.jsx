import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { FloatingBubbles } from "@/components/FloatingBubbles";
import { CustomCursor } from "@/components/CustomCursor";

const Index = () => {
    return (
        <div className="min-h-screen bg-background">
            <CustomCursor />
            <FloatingBubbles />
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Certifications />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default Index;
