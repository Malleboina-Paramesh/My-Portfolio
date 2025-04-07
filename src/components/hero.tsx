import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <div>
      <section
        id="hero"
        className="min-h-screen px-4 py-8 flex items-center justify-center"
      >
        <main className="flex flex-col items-center justify-center text-center max-w-3xl w-full">
          {/* Greeting */}
          <div className="mb-2 text-primary font-mono text-xs sm:text-sm md:text-base text-slate-400 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Welcome aboard! I'm
          </div>

          {/* Name */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-slate-500 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300">
            Malleboina Paramesh,
          </h1>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-slate-400 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-450">
            Aspiring Software Developer
          </h2>

          {/* Description */}
          <p className="mb-8 text-xs sm:text-sm md:text-base px-2 text-slate-400 animate-in fade-in slide-in-from-bottom-7 duration-700 delay-600">
            I'm a self-motivated frontend developer with hands-on experience
            building real-world projects outside of internships. I love bringing
            ideas to life through clean, responsive, and interactive user
            interfaces. Currently looking for full-time opportunities to grow and
            contribute in a fast-paced tech environment.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
            <a href="#Contact">
              <Button
                size="lg"
                variant="outline"
                className="w-44 text-slate-400 hover:text-slate-600 hover:border-slate-600"
              >
                Contact me!
              </Button>
            </a>
            <a href="/Paramesh_Resume.pdf" download>
              <Button
                size="lg"
                variant="outline"
                className="w-44 flex justify-center items-center gap-2 text-slate-400 hover:text-slate-600 hover:border-slate-600"
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
