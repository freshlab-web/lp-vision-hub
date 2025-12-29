import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Loader2, Check } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import heroDrone from "@/assets/hero-drone.jpg";

const pills = [
  "Operação remota",
  "Missões automatizadas", 
  "IA multilayer",
  "Dados estruturados"
];

const HeroSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Solicitação enviada!",
      description: "Nossa equipe entrará em contato em breve.",
    });
    
    setFormData({ name: '', email: '', company: '', phone: '' });
    setIsSubmitting(false);
  };

  return (
    <section className="relative min-h-screen pt-20 lg:pt-24 overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroDrone})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-horus-navy/95 via-horus-navy/85 to-horus-navy/70" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4 animate-fade-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground">
                Sistemas automatizados para{" "}
                <span className="text-primary">inspeção de ativos</span>
              </h1>
              <p className="text-lg lg:text-xl text-primary-foreground/80 max-w-xl">
                Monitoramento remoto com uso de drones, IA e softwares personalizados.
              </p>
            </div>

            {/* Pills */}
            <div className="flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              {pills.map((pill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-medium backdrop-blur-sm"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-primary">10+</div>
                <div className="text-sm text-primary-foreground/60">Anos de experiência</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-primary">500K+</div>
                <div className="text-sm text-primary-foreground/60">Ativos inspecionados</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-primary">27</div>
                <div className="text-sm text-primary-foreground/60">Estados atendidos</div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div 
            id="lead-form"
            className="glass rounded-3xl p-6 lg:p-8 shadow-2xl animate-scale-in"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="text-center mb-6">
              <h2 className="text-xl lg:text-2xl font-bold text-foreground">
                Agende uma reunião técnica
              </h2>
              <p className="text-muted-foreground mt-2">
                Descubra como automatizar suas inspeções
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">Nome</Label>
                <Input
                  id="name"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12 rounded-xl bg-background/50 border-border/50 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">E-mail Corporativo</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@empresa.com.br"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-12 rounded-xl bg-background/50 border-border/50 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-foreground">Empresa</Label>
                <Input
                  id="company"
                  placeholder="Nome da empresa"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  required
                  className="h-12 rounded-xl bg-background/50 border-border/50 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground">Telefone</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="h-12 rounded-xl bg-background/50 border-border/50 focus:border-primary"
                />
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                size="xl" 
                className="w-full mt-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Check className="w-5 h-5" />
                    Agendar reunião técnica
                  </>
                )}
              </Button>
            </form>

            <p className="text-xs text-muted-foreground text-center mt-4">
              Seus dados estão seguros. Não compartilhamos com terceiros.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 100V60C240 20 480 0 720 0C960 0 1200 20 1440 60V100H0Z" fill="hsl(210 20% 98%)" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
