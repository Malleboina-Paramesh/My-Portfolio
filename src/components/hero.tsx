import { Button } from "@/components/ui/button";
import { Download } from "lucide-react"; // Import the download icon

const Hero: React.FC = () => {
    return (
        <div>
            <section id="hero" className="h-screen px-2 flex items-center justify-center">
                <main className="flex flex-1 flex-col items-center justify-center text-center p-4">
                    {/* Greeting */}
                    <div className="text-1xl mb-3 text-primary font-mono text-sm sm:text-base text-slate-400 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
                        Welcome aboard! I'm
                    </div>

                    {/* Name */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 text-slate-500 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300">
                        Malleboina Paramesh,
                    </h1>

                    {/* Title */}
                    <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-6 text-slate-400 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-450">
                        Aspiring Software Developer
                    </h2>

                    {/* Description */}
                    <p className="mb-8 max-w-xl text-slate-400 text-sm sm:text-base animate-in fade-in slide-in-from-bottom-7 duration-700 delay-600">
                        I'm a self-motivated frontend developer with hands-on experience building real-world projects outside of internships. I love bringing ideas to life through clean, responsive, and interactive user interfaces. Currently looking for full-time opportunities to grow and contribute in a fast-paced tech environment.
                    </p>

                    {/* Buttons */}
                    
                    <div className="flex gap-6">
                    <a href="#Contact" className="mb-4">
                    <Button size="lg" variant="outline" className="cursor-pointer text-slate-400 hover:text-slate-600 hover:border-slate-600">
                     Contact me!
                    </Button>
                    </a>
                    <a href="/Paramesh_Resume.pdf" download>
                    <Button
                    size="lg"
                    variant="outline"
                    className="flex items-center gap-2 cursor-pointer text-slate-400 hover:text-slate-600 hover:border-slate-600"
                    >
                    <Download className="w-4 h-4 text-slate-400" />
                    Resume
                    </Button>
                    </a>

                    </div>
                </main>
            </section>
        </div>
    );
};

export default Hero;
