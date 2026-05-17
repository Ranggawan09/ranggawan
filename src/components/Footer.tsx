import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-6 border-t border-primary/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Rangga Hermawan
            </h3>
            <p className="text-muted-foreground">
              Full Stack Developer passionate about creating exceptional digital
              experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/Ranggawan09"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ranggawan/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/ranggawan._"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:ranggawan09@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-primary/20 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Rangga Hermawan. Built with React, TypeScript, and
            Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};
