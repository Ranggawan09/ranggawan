import { useEffect, useRef, useState } from "react";
import { Code2, Palette, Rocket, Trophy } from "lucide-react";

const stats = [
  { icon: Code2, label: "Projects Completed", value: "50+" },
  { icon: Trophy, label: "Years Experience", value: "5+" },
  { icon: Palette, label: "Happy Clients", value: "30+" },
  { icon: Rocket, label: "Code Commits", value: "10K+" },
];

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              <span className="gradient-text text-glow">About Me</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Passionate about creating exceptional digital experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6 animate-slide-in-left">
              <h3 className="text-3xl font-bold text-foreground">
                Creative Developer & Problem Solver
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a full-stack developer with a passion for creating beautiful, functional, 
                and user-centered digital experiences. With over 5 years of experience in the 
                industry, I've had the privilege of working on diverse projects ranging from 
                e-commerce platforms to AI-powered applications.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My approach combines technical expertise with creative problem-solving, 
                ensuring that every project not only meets but exceeds expectations. I believe 
                in writing clean, maintainable code and staying up-to-date with the latest 
                technologies and best practices.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me contributing to open-source projects, 
                writing technical articles, or exploring new technologies. I'm always eager 
                to take on new challenges and collaborate with talented teams.
              </p>
            </div>

            <div className="space-y-6 animate-slide-in-right">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-xl border border-primary/30 card-glow">
                <h4 className="text-xl font-semibold mb-6 text-primary">What I Bring</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <span className="text-muted-foreground">
                      5+ years of full-stack development experience
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <span className="text-muted-foreground">
                      Expertise in React, Node.js, TypeScript, and modern web technologies
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <span className="text-muted-foreground">
                      Strong focus on performance optimization and scalability
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <span className="text-muted-foreground">
                      Experience with cloud platforms (AWS, Azure, GCP)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <span className="text-muted-foreground">
                      Agile methodology and collaborative team player
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="p-6 rounded-xl bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-xl border border-primary/20 hover:border-primary/50 transition-all card-glow text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
