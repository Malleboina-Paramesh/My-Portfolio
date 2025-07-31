import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Nutrition Analysis",
    description: "Predicts health impact of carbs using ML algorithms like Logistic Regression, SVM, KNN, etc.",
    techStack: ["Python", "Scikit-Learn", "Pandas"],
    github: "#",
    demo: "#",
  },
  {
    title: "Online Eye Testing Portal",
    description: "Conducts tests like color vision, text intensity, and number recognition digitally.",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "#",
    demo: "#",
  },
 {
  title: "OpportunityHUB",
  description: "A dynamic platform that allows admins to post company profiles with job and hackathon opportunities, enabling students to discover and apply easily.",
  techStack: ["Node.js", "Express.js", "React", "MySQL", "Tailwind CSS"],
  github: "#", // <-- update this if actual repo link differs
  demo: "#", // add actual deployed link or keep "#" if not deployed
},

{
  title: "Personal Finance & Budget Management",
  description: "A console-based C application that tracks income, expenses, and budgets in real-time using data structures And Algorithms",
  techStack: ["C", "Data Structures"],
  github: "#", // <-- update if actual repo differs
  demo: "#", // for CLI apps, you can leave this as "#" or link a demo video if 
},

];

const cardWidth = 300;
const cardHeight = 240;
const borderOffset = 8;

const Projects: React.FC = () => {
  return (
    <section id="Projects" className="py-16 px-4 text-slate-400 md:px-8 bg-background text-foreground">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project, index) => (
            <div key={index} className="relative">
              {/* Border */}
              <div
                className="absolute -top-2 -left-2 border-t-4 border-l-4 border-border rounded-xl z-0 pointer-events-none"
                style={{
                  width: `${cardWidth + borderOffset}px`,
                  height: `${cardHeight + borderOffset}px`,
                }}
              ></div>

              {/* Card */}
              <Card
                className="relative z-10 bg-card border border-transparent hover:border-primary shadow-md transition-transform hover:scale-105"
                style={{ width: `${cardWidth}px`, height: `${cardHeight}px` }}
              >
                <CardContent className="p-4 flex flex-col justify-between h-full space-y-3">
                  <div>
                    <h3 className="text-lg font-semibold text-primary">{project.title}</h3>
                    <p className="text-sm text-card-foreground mt-2">{project.description}</p>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    <strong>Tech:</strong> {project.techStack.join(", ")}
                  </div>
                  <div className="flex justify-between gap-2 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="cursor-pointer text-xs px-3 flex items-center gap-1 hover:text-slate-600"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="cursor-pointer text-xs px-3 flex items-center gap-1 hover:text-slate-600"
                      onClick={() => window.open(project.demo, "_blank")}
                    >
                      Live Demo
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
