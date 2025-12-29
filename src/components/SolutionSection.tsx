import { Button } from "@/components/ui/button";
import { 
  Check, 
  Plane, 
  Radio, 
  Camera, 
  Brain, 
  Monitor, 
  Map, 
  LineChart,
  ArrowRight
} from "lucide-react";

const features = [
  {
    icon: Plane,
    title: "Drones + rede de pilotos",
    description: "Por todo território nacional"
  },
  {
    icon: Radio,
    title: "DJI Dock",
    description: "Para operações remotas automatizadas"
  },
  {
    icon: Camera,
    title: "Sensores RGB e Termográficos",
    description: "Em fotografias ou vídeo"
  },
  {
    icon: Brain,
    title: "Inteligência Artificial",
    description: "Para detectar e automatizar inspeções"
  },
  {
    icon: Monitor,
    title: "Software personalizado",
    description: "Centralização dos relatórios e dados gerados"
  },
  {
    icon: Map,
    title: "Histórico temporal",
    description: "Em mapas interativos e dashboards"
  },
  {
    icon: LineChart,
    title: "Informações técnicas e executivas",
    description: "Para melhor tomada de decisão"
  },
];

const SolutionSection = () => {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 lg:py-24 gradient-navy text-secondary-foreground overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-6">
            <Check className="w-4 h-4" />
            <span className="text-sm font-medium">A Solução</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Uma arquitetura contínua que conecta{" "}
            <span className="text-white">captura, automação e inteligência</span>
          </h2>
          <p className="text-lg text-secondary-foreground/70">
            Plataforma integrada para inspeções automatizadas de ponta a ponta
          </p>
        </div>

        {/* Flow visualization */}
        <div className="relative mb-12">
          <div className="hidden lg:flex items-center justify-center gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center shadow-glow mb-3">
                <Plane className="w-10 h-10 text-primary-foreground" />
              </div>
              <span className="text-sm font-medium">Drones</span>
            </div>
            <ArrowRight className="w-8 h-8 text-primary" />
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center shadow-glow mb-3">
                <Radio className="w-10 h-10 text-primary-foreground" />
              </div>
              <span className="text-sm font-medium">Dock</span>
            </div>
            <ArrowRight className="w-8 h-8 text-primary" />
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center shadow-glow mb-3">
                <Brain className="w-10 h-10 text-primary-foreground" />
              </div>
              <span className="text-sm font-medium">IA</span>
            </div>
            <ArrowRight className="w-8 h-8 text-primary" />
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center shadow-glow mb-3">
                <Monitor className="w-10 h-10 text-primary-foreground" />
              </div>
              <span className="text-sm font-medium">Dashboard</span>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-5 rounded-2xl glass-dark hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-secondary-foreground/60">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="hero" size="xl" onClick={scrollToForm}>
            Ver fluxo da operação
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
