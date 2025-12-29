import { Shield, MapPin, BarChart3 } from "lucide-react";

const trustItems = [
  { icon: Shield, text: "Desde 2014 em operações com drones" },
  { icon: MapPin, text: "Ativos críticos em grande escala" },
  { icon: BarChart3, text: "Dados estruturados para decisão" },
];

const TrustBar = () => {
  return (
    <section className="bg-muted/50 py-6 border-y border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 lg:gap-16">
          {trustItems.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 text-muted-foreground"
            >
              <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm lg:text-base font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
