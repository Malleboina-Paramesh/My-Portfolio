import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

// Import necessary icons from react-icons
import {
    DiHtml5,
    DiCss3,
    DiJavascript1,
    DiJava,
    DiPython,
    DiReact,
    DiMysql,
    DiGit,
    DiGithubBadge,
} from 'react-icons/di';
import { SiTailwindcss, SiC, SiTypescript } from 'react-icons/si';
import { VscTerminalCmd } from 'react-icons/vsc';

// Define TypeScript Interfaces
interface SkillReactIcon {
    name: string;
    icon: React.ElementType;
    color?: string;
}

interface SkillsDataReactIcons {
    [category: string]: SkillReactIcon[];
}

// Skills Data using react-icons
const skillsData: SkillsDataReactIcons = {
    "Languages": [
        { name: "HTML", icon: DiHtml5, color: "#E34F26" },
        { name: "CSS", icon: DiCss3, color: "#1572B6" },
        { name: "JavaScript", icon: DiJavascript1, color: "#F7DF1E" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        // { name: "Dart", icon: SiDart, color: "#0175C2" },
        { name: "Java", icon: DiJava, color: "#007396" },
        { name: "Python", icon: DiPython, color: "#3776AB" },
        { name: "C", icon: SiC, color: "#A8B9CC" },
    ],
    "Frameworks & Libraries": [
        { name: "React", icon: DiReact, color: "#61DAFB" },
        // { name: "Flutter", icon: SiFlutter, color: "#02569B" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Shadcn UI", icon: VscTerminalCmd, color: "#000000" },
    ],
    "Databases": [
        { name: "MySQL", icon: DiMysql, color: "#4479A1" },
    ],
    "Tools & Platforms": [
        { name: "Git", icon: DiGit, color: "#F05032" },
        { name: "GitHub", icon: DiGithubBadge, color: "#181717" },
    ],
};

// --- The Skills Section React Component ---
const Skills: React.FC = () => {
    const categories = Object.keys(skillsData);

    // Define card dimensions
    const cardWidth = 130;
    const cardHeight = 100;
    const borderOffset = 5;
    const borderWidth = cardWidth + borderOffset;
    const borderHeight = cardHeight + borderOffset;

    return (
        <section id="Skills" className="py-8 px-4 md:px-8 text-slate-400 bg-background text-foreground">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-primary">
                    Technical Skills
                </h2>

                {categories.map((category) => (
                    <div key={category} className="mb-8 last:mb-0">
                        <h3 className="text-xl md:text-2xl font-semibold mb-6 text-center md:text-left text-secondary-foreground">
                            {category}
                        </h3>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-x-4 gap-y-8 justify-items-center md:justify-items-start">
                            {skillsData[category].map((skill) => {
                                const IconComponent = skill.icon;

                                return (
                                    <div key={skill.name} className="relative">
                                        <div
                                            className="absolute -top-2.5 -left-2.5 border-t-4 border-l-4 border-border rounded-xl z-0 pointer-events-none"
                                            style={{
                                                width: `${borderWidth}px`,
                                                height: `${borderHeight}px`
                                            }}
                                        ></div>

                                        <Card
                                            className="p-0 flex items-center justify-center relative z-10 bg-card shadow-md transition-transform duration-300 hover:scale-105 border border-transparent hover:border-primary"
                                            style={{
                                                width: `${cardWidth}px`,
                                                height: `${cardHeight}px`
                                            }}
                                        >
                                            <CardContent className="p-1 flex flex-col items-center justify-center text-center space-y-1">
                                                <IconComponent
                                                    className="h-7 w-7 md:h-8 md:w-8"
                                                    style={{ color: skill.color }}
                                                    aria-label={skill.name}
                                                />
                                                <p className="text-xs md:text-sm font-medium text-card-foreground">
                                                    {skill.name}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
