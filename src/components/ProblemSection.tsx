import { AlertTriangle, DollarSign, Users, Database, Clock, AlertCircle, TrendingUp } from "lucide-react";

const problems = [
  {
    icon: DollarSign,
    title: "Deslocamento caro e recorrente",
    description: "Custos elevados com transporte e equipes em campo"
  },
  {
    icon: Users,
    title: "Baixa padronização entre equipes",
    description: "Resultados inconsistentes e difíceis de comparar"
  },
  {
    icon: Database,
    title: "Dados dispersos em múltiplos sistemas",
    description: "Informações fragmentadas dificultam análises"
  },
  {
    icon: Clock,
    title: "Demora para tomada de decisões",
    description: "Processos lentos impactam a operação"
  },
  {
    icon: AlertCircle,
    title: "Falhas detectadas tarde demais",
    description: "Manutenção corretiva é mais cara e arriscada"
  },
  {
    icon: TrendingUp,
    title: "Custos crescentes com escala",
    description: "Operação não escala de forma eficiente"
  },
];

const ProblemSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-warning/10 text-warning mb-6">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-sm font-medium">O Desafio</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            As inspeções tradicionais não escalam com o tamanho da operação
          </h2>
          <p className="text-lg text-muted-foreground">
            Empresas enfrentam desafios crescentes ao tentar manter a qualidade e eficiência das inspeções
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-card-hover hover:border-warning/30 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-warning/5 rounded-bl-full" />
              
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-warning/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <problem.icon className="w-6 h-6 text-warning" />
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
