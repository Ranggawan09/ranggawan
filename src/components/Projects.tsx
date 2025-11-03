import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

const projects = [
  {
    title: "Analytics Dashboard",
    description: "A powerful data visualization platform with real-time analytics, built with React, D3.js, and Node.js. Features interactive charts, custom reporting, and AI-powered insights.",
    image: project1,
    tags: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "E-Commerce Mobile App",
    description: "Modern e-commerce application with seamless shopping experience. Includes product catalog, cart management, payment integration, and order tracking.",
    image: project2,
    tags: ["React Native", "Redux", "Firebase", "Stripe"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "AI Content Platform",
    description: "Content generation platform powered by AI with advanced natural language processing. Features content planning, generation, and optimization tools.",
    image: project3,
    tags: ["Next.js", "OpenAI", "Tailwind CSS", "Prisma"],
    github: "https://github.com",
    live: "https://example.com",
  },
];

export const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="gradient-text text-glow">Featured Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Some of my recent work and side projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div 
                className={`relative rounded-2xl bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-xl border border-primary/30 overflow-hidden transition-all duration-500 ${
                  hoveredIndex === index 
                    ? 'card-glow scale-105' 
                    : 'hover:border-primary/50'
                }`}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      hoveredIndex === index ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent transition-opacity duration-300 ${
                    hoveredIndex === index ? 'opacity-90' : 'opacity-70'
                  }`} />
                  
                  {/* Floating Action Buttons */}
                  <div className={`absolute inset-0 flex items-center justify-center gap-3 transition-all duration-300 ${
                    hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}>
                    <Button
                      size="sm"
                      className="bg-primary/90 hover:bg-primary text-primary-foreground shadow-lg shadow-primary/50"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-primary/50 hover:bg-primary/10 hover:border-primary backdrop-blur-xl"
                      asChild
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
