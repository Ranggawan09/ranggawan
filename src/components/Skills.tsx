import { useEffect, useRef, useState } from "react";
import { Code2, Database, Palette, Server, Smartphone, Wrench } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend",
    skills: [
      { name: "React/Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Vue.js", level: 80 },
    ]
  },
  {
    icon: Server,
    title: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "Express/Fastify", level: 88 },
      { name: "GraphQL", level: 82 },
    ]
  },
  {
    icon: Database,
    title: "Database",
    skills: [
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB", level: 85 },
      { name: "Redis", level: 80 },
      { name: "Prisma", level: 90 },
    ]
  },
  {
    icon: Smartphone,
    title: "Mobile",
    skills: [
      { name: "React Native", level: 85 },
      { name: "Flutter", level: 75 },
      { name: "iOS Development", level: 70 },
      { name: "Android Development", level: 70 },
    ]
  },
  {
    icon: Wrench,
    title: "DevOps",
    skills: [
      { name: "Docker/K8s", level: 85 },
      { name: "AWS/GCP", level: 88 },
      { name: "CI/CD", level: 90 },
      { name: "Terraform", level: 75 },
    ]
  },
  {
    icon: Palette,
    title: "Design",
    skills: [
      { name: "Figma", level: 85 },
      { name: "UI/UX Design", level: 80 },
      { name: "Responsive Design", level: 95 },
      { name: "Animation", level: 85 },
    ]
  },
];

export const Skills = () => {
  const [visibleCategories, setVisibleCategories] = useState<number[]>([]);
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = skillCategories.map((_, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCategories(prev => [...new Set([...prev, index])]);
          }
        },
        { threshold: 0.2 }
      );

      if (categoryRefs.current[index]) {
        observer.observe(categoryRefs.current[index]!);
      }

      return observer;
    });

    return () => observers.forEach(observer => observer.disconnect());
  }, []);

  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="gradient-text text-glow">Skills & Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              ref={el => categoryRefs.current[categoryIndex] = el}
              className={`p-6 rounded-2xl bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-xl border border-primary/30 card-glow transition-all duration-700 ${
                visibleCategories.includes(categoryIndex)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${categoryIndex * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-xs text-primary font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out ${
                          visibleCategories.includes(categoryIndex)
                            ? 'opacity-100'
                            : 'opacity-0'
                        }`}
                        style={{
                          width: visibleCategories.includes(categoryIndex)
                            ? `${skill.level}%`
                            : '0%',
                          transitionDelay: `${(categoryIndex * 100) + (skillIndex * 100)}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
