import { useEffect, useRef, useState } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Inc.",
    period: "2021 - Present",
    description: "Led development of cloud-native applications using React, Node.js, and AWS. Mentored junior developers and implemented CI/CD pipelines.",
    achievements: [
      "Reduced application load time by 60%",
      "Led a team of 5 developers",
      "Implemented microservices architecture"
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "2019 - 2021",
    description: "Developed and maintained multiple client projects using modern web technologies. Collaborated with designers and product managers.",
    achievements: [
      "Built 15+ production applications",
      "Improved code quality by 40%",
      "Introduced automated testing practices"
    ]
  },
  {
    title: "Frontend Developer",
    company: "StartupXYZ",
    period: "2018 - 2019",
    description: "Created responsive web applications with React and TypeScript. Focused on performance optimization and user experience.",
    achievements: [
      "Achieved 95+ Lighthouse scores",
      "Reduced bundle size by 50%",
      "Implemented design system"
    ]
  },
  {
    title: "Junior Developer",
    company: "Web Agency Co.",
    period: "2017 - 2018",
    description: "Started my professional journey building websites and learning modern development practices.",
    achievements: [
      "Completed 20+ client projects",
      "Mastered React and TypeScript",
      "Earned multiple certifications"
    ]
  }
];

export const Experience = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = experiences.map((_, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => [...new Set([...prev, index])]);
          }
        },
        { threshold: 0.3 }
      );

      if (itemRefs.current[index]) {
        observer.observe(itemRefs.current[index]!);
      }

      return observer;
    });

    return () => observers.forEach(observer => observer.disconnect());
  }, []);

  return (
    <section id="experience" className="py-20 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="gradient-text text-glow">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            My professional journey and achievements
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                ref={el => itemRefs.current[index] = el}
                className={`relative transition-all duration-700 ${
                  visibleItems.includes(index) 
                    ? 'opacity-100 translate-x-0' 
                    : `opacity-0 ${index % 2 === 0 ? '-translate-x-10' : 'translate-x-10'}`
                }`}
              >
                <div className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}>
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-xl border border-primary/30 card-glow">
                      <div className="flex items-center gap-3 mb-3">
                        <Briefcase className="w-5 h-5 text-primary" />
                        <h3 className="text-2xl font-bold text-foreground">
                          {exp.title}
                        </h3>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-4 text-primary font-medium">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      
                      <p className="text-lg font-semibold text-muted-foreground mb-3">
                        {exp.company}
                      </p>
                      
                      <p className="text-muted-foreground mb-4">
                        {exp.description}
                      </p>

                      <div className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-2">
                            {index % 2 === 0 && <div className="flex-1" />}
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                            <span className="text-sm text-muted-foreground flex-1">
                              {achievement}
                            </span>
                            {index % 2 !== 0 && <div className="flex-1" />}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="relative z-10">
                    <div className="w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50 animate-pulse-glow" />
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden md:block" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
