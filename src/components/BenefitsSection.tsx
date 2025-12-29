import { Check } from "lucide-react";

const benefitsLeft = [
  "Redução de custos com visitas em campo",
  "Padronização nacional de processos",
  "Histórico temporal consolidado",
  "Detecção precoce de anomalias",
];

const benefitsRight = [
  "Relatórios para diretoria e operação",
  "Dados para planejamento e investimento",
  "Suporte ao compliance e ESG",
  "Base sólida para expansão",
];

const BenefitsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Benefícios para a operação e para o negócio
          </h2>
          <p className="text-lg text-muted-foreground">
            Impacto real em eficiência, custos e tomada de decisão
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column */}
            <div className="space-y-4">
              {benefitsLeft.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-success/30 hover:shadow-card transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-success" />
                  </div>
                  <span className="text-foreground font-medium pt-1">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {benefitsRight.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-success/30 hover:shadow-card transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-success" />
                  </div>
                  <span className="text-foreground font-medium pt-1">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
