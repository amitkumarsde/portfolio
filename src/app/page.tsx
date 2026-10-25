// Home page: puts all the sections together in order.
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Certifications from "@/components/sections/Certifications";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Marquee />
                <About />
                <Skills />
                <Certifications />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
