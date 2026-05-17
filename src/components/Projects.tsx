import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/adatku.webp";
import project2 from "@/assets/iwakqu.webp";
import project3 from "@/assets/ahmad.webp";

const projects = [
  {
    title: "Adatku",
    description:
      "A state-of-the-art traditional clothing rental platform equipped with an AI chatbot. The platform features an interactive product catalog, product management, and a payment gateway.",
    image: project1,
    tags: ["Laravel", "JavaScript", "Tailwind", "Python"],
    github: "https://github.com",
    live: "https://adatku.my.id/",
  },
  {
    title: "IwakQu",
    description:
      "A modern fish sales app that offers a seamless shopping experience. Its features include a product catalog, shopping cart management, payment integration, and order tracking.",
    image: project2,
    tags: ["Laravel", "JavaScript", "Tailwind", "MySql"],
    github: "https://github.com",
    live: "https://iwakqu.biz.id",
  },
  {
    title: "Ahmad Abdu Elektronik",
    description:
      "Ahmad Abdu Electronics is an electronics repair service that repairs various types of household appliances, such as LED TVs, refrigerators, and washing machines",
    image: project3,
    tags: ["HTML", "CSS"],
    github: "https://github.com",
    live: "https://ahmad-abdu-elektronik.vercel.app",
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
                    ? "card-glow scale-105"
                    : "hover:border-primary/50"
                }`}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      hoveredIndex === index ? "scale-110" : "scale-100"
                    }`}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent transition-opacity duration-300 ${
                      hoveredIndex === index ? "opacity-90" : "opacity-70"
                    }`}
                  />

                  {/* Floating Action Buttons */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center gap-3 transition-all duration-300 ${
                      hoveredIndex === index
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-primary/50 hover:bg-primary/10 hover:border-primary backdrop-blur-xl"
                      asChild
                    >
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
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
