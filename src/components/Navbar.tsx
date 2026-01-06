import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
const CDN = "https://cdn.jsdelivr.net/gh/freshlab-web/lp-vision-hub@main/dist/assets/";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logos */}
          <div className="flex items-center gap-4 lg:gap-6">
            <img 
              src={`${CDN}horus-logo-CCzXAl_0.svg`} 
              alt="Horus Smart Detections" 
              className="h-6 lg:h-8 w-auto"
            />
            <div className="hidden sm:block h-6 w-px bg-border" />
            <img 
              src={`${CDN}dji-authorized-BIXBGEAD.png`} 
              alt="DJI Authorized Reseller" 
              className="hidden sm:block h-4 lg:h-5 w-auto opacity-70"
            />
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button variant="hero" size="default" onClick={scrollToForm}>
              Falar com Especialista
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <Button variant="hero" size="lg" className="w-full" onClick={scrollToForm}>
              Falar com Especialista
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
