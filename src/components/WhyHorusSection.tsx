import { Button } from "@/components/ui/button";
import { Award, MapPin, Target, ArrowRight } from "lucide-react";

const highlights = [
  {
    icon: Award,
    title: "Experiência de Mercado",
    points: ["Desde 2014", "Especialistas em IA"]
  },
  {
    icon: MapPin,
    title: "Cobertura Nacional",
    points: ["Rede de pilotos certificados", "Arquitetura end-to-end"]
  },
  {
    icon: Target,
    title: "Experts em Ativos",
    points: ["Soluções personalizadas", "Operações críticas"]
  },
];

const WhyHorusSection = () => {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Por que a Horus
          </h2>
          <p className="text-lg text-muted-foreground">
            Mais de uma década de experiência em operações com drones
          </p>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="relative p-8 rounded-3xl bg-card border border-border/50 shadow-card hover:shadow-card-hover hover:border-primary/30 transition-all duration-300 overflow-hidden group"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
              
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-transform duration-300">
                  <highlight.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {highlight.title}
                </h3>
                
                <ul className="space-y-2">
                  {highlight.points.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="xl" onClick={scrollToForm}>
            Falar com um especialista Horus
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyHorusSection;
