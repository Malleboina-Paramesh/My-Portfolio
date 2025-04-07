import { useEffect, useState } from "react";
import { ModeToggle } from "@/components/ui/mode-toggle";

const Navbar: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

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
          className="text-3xl font-bold text-slate-600 cursor-pointer"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          &lt; Malleboina Paramesh /&gt;
        </h1>
        <ul className="flex space-x-8">
          <li><a href="#About" className="hover:text-slate-700">About</a></li>
          <li><a href="#Skills" className="hover:text-slate-700">Skills</a></li>
          <li><a href="#Projects" className="hover:text-slate-700">Projects</a></li>
          <li><a href="#Certificates" className="hover:text-slate-700">Certificates</a></li>
          {/* <li><a href="#Blogs" className="hover:text-slate-700">Blogs</a></li> */}
          <li><a href="#Contact" className="hover:text-slate-700">Contact</a></li>
          <ModeToggle />
        </ul>
      </nav>

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
