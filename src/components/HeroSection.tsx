import heroDrone from "@/assets/hero-drone.jpg";
import { useEffect } from "react";

const pills = [
  "Operação remota",
  "Missões automatizadas", 
  "IA multilayer",
  "Dados estruturados"
];

const HeroSection = () => {
  useEffect(() => {
    const formId = "formulario-sistemas-automatizados-para-inspecao-de-ativos-ed9b46dbf9ff1f2566a6";
    const src = "https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js";
    const existing = document.querySelector(`script[src="${src}"]`) as HTMLScriptElement | null;
    const init = () => {
      if ((window as any).RDStationForms && document.getElementById(formId)) {
        new (window as any).RDStationForms(formId, "UA-61384495-1").createForm();
      }
    };
    if (existing) {
      if ((window as any).RDStationForms) init();
      else existing.addEventListener("load", init, { once: true });
    } else {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.onload = init;
      document.body.appendChild(script);
    }
  }, []);
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Sistemas automatizados para{" "}
                <span className="text-white">inspeção de ativos</span>
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
                  className="px-4 py-2 rounded-full bg-white/20 text-white border border-white/30 text-sm font-medium backdrop-blur-sm"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-white">10+</div>
                <div className="text-sm text-white/60">Anos de experiência</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-white">500K+</div>
                <div className="text-sm text-white/60">Ativos inspecionados</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-white">+10</div>
                <div className="text-sm text-white/60">Países atendidos</div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div 
            id="lead-form"
            className="rounded-3xl p-6 lg:p-8 shadow-2xl animate-scale-in overflow-hidden bg-[#c5c7cd]"
            style={{ animationDelay: '0.3s' }}
          >
            <div role="main" id="formulario-sistemas-automatizados-para-inspecao-de-ativos-ed9b46dbf9ff1f2566a6" />
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
