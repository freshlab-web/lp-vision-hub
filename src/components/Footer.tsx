import { Button } from "@/components/ui/button";
import horusLogo from "@/assets/horus-logo.svg";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="gradient-primary py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* CTA Section */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Solicite uma reunião técnica
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Preencha o formulário e nossa equipe técnica entrará em contato
          </p>
          <Button 
            variant="glass" 
            size="xl" 
            onClick={scrollToForm}
            className="bg-white/20 text-primary-foreground border-white/30 hover:bg-white/30"
          >
            Solicitar Proposta
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <img 
              src={horusLogo} 
              alt="Horus Smart Detections" 
              className="h-6 brightness-0 invert opacity-80"
            />
            <p className="text-sm text-primary-foreground/60">
              © 2026 Horus Smart Detections. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
