import Hero from '@/components/hero';
import About from '@/components/about';
import Footer from '@/components/footer'; // Create this file if you haven’t
import Contact from '@/components/contact'; 
import Certificates from '@/components/certificates';
import Skills from '@/components/skills'; 
import Projects from '@/components/projects'; 

const Body: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex-grow">
        <Hero />
        <About />
        <Skills/>
        <Projects/>
        <Certificates />
        <Contact/>
        
       
      </div>
      <Footer />
    </div>
  );
};

export default Body;
