
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-glow opacity-30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-glow opacity-20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Nikita Sinha
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Embedded Engineer
          </p>
          <p className="text-lg md:text-xl text-muted-foreground italic">
            "Embedded Engineer who is turning real-time challenges into real-world solutions"
          </p>
          <div className="flex justify-center gap-4 pt-6 flex-wrap">
            <Button variant="outline" asChild>
              <a href="https://github.com/nikita-sinhaa" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://www.linkedin.com/in/nikita-sinhaa/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="mailto:nikitaa.sinhaa@gmail.com">
                <Mail className="mr-2 h-4 w-4" /> Email
              </a>
            </Button>
            <Button variant="default" asChild>
              <a href="https://drive.google.com/file/d/12PafDLQuNIJJTCDmBNTZnlXn5xv0uXKn/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" /> Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
