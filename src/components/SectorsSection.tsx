import { Sun, Radio, Zap, Building2, Shield, Factory, HardHat } from "lucide-react";

const sectors = [
  { icon: Sun, title: "Energia Solar", description: "Inspeção de painéis e usinas" },
  { icon: Radio, title: "Telecom", description: "Torres e infraestrutura de comunicação" },
  { icon: Zap, title: "Utilities / Distribuição", description: "Redes de transmissão e distribuição" },
  { icon: Building2, title: "Smart Cities", description: "Monitoramento urbano inteligente" },
  { icon: Shield, title: "Segurança Patrimonial", description: "Vigilância e proteção de ativos" },
  { icon: Factory, title: "Indústria & Portos", description: "Instalações industriais e portuárias" },
  { icon: HardHat, title: "Infraestrutura", description: "Obras e construção civil" },
];

const SectorsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Onde a automação aérea gera mais impacto
          </h2>
          <p className="text-lg text-muted-foreground">
            Uma mesma arquitetura personalizada para diferentes cenários
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-card-hover hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <sector.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {sector.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {sector.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
