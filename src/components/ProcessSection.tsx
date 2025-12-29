import { Button } from "@/components/ui/button";
import { Radio, Plane, Brain, FileText, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Radio,
    title: "Captura e coleta",
    description: "Dock + rede de pilotos / Drones, DJI Dock ou rede pilotos"
  },
  {
    number: "02",
    icon: Plane,
    title: "Voo automático",
    description: "Missões recorrentes programadas"
  },
  {
    number: "03",
    icon: Brain,
    title: "IA & Multilayer",
    description: "Detecção e classificação das anomalias via Monitora Technology™"
  },
  {
    number: "04",
    icon: FileText,
    title: "Relatórios e integração",
    description: "Informação pronta para tomada de decisão integrada ao sistema"
  },
];

const ProcessSection = () => {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Fluxo da Arquitetura
          </h2>
          <p className="text-lg text-muted-foreground">
            Da captura à decisão em um fluxo integrado e automatizado
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-primary/20 z-0" style={{ width: 'calc(100% - 2rem)' }} />
              )}
              
              <div className="relative z-10 p-6 rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-card-hover hover:border-primary/30 transition-all duration-300 h-full">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl font-bold text-primary/20">{step.number}</span>
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-glow">
                    <step.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="xl" onClick={scrollToForm}>
            Agendar reunião técnica
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
