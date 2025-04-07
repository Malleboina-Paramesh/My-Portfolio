import { useEffect, useState } from "react";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {/* Loading animation bar */}
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-0.5 z-50 overflow-hidden">
          <div className="h-full w-1/3 bg-blue-500 animate-slide" />
        </div>
      )}

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-40 bg-white shadow text-slate-400 py-4 px-6 flex justify-between items-center">
        <h1
          onClick={() => {
            const section = document.getElementById("hero");
            if (section) section.scrollIntoView({ behavior: "smooth" });
          }}
          className="text-2xl sm:text-3xl font-bold text-slate-600 cursor-pointer"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          &lt; Malleboina Paramesh /&gt;
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li><a href="#About" className="hover:text-slate-700">About</a></li>
          <li><a href="#Skills" className="hover:text-slate-700">Skills</a></li>
          <li><a href="#Projects" className="hover:text-slate-700">Projects</a></li>
          <li><a href="#Certificates" className="hover:text-slate-700">Certificates</a></li>
          <li><a href="#Contact" className="hover:text-slate-700">Contact</a></li>
          <ModeToggle />
        </ul>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <ul className="md:hidden flex flex-col space-y-4 px-6 pt-16 pb-4 bg-white shadow-md fixed top-0 left-0 w-full z-30 text-slate-600">
          <li><a href="#About" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#Skills" onClick={() => setIsOpen(false)}>Skills</a></li>
          <li><a href="#Projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#Certificates" onClick={() => setIsOpen(false)}>Certificates</a></li>
          <li><a href="#Contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          <ModeToggle />
        </ul>
      )}

      {/* Keyframes for slide animation */}
      <style>
        {`
          @keyframes slide {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          .animate-slide {
            animation: slide 1.5s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Navbar;
