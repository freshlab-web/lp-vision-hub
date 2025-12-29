const VideoSection = () => {
  return (
    <section className="py-16 lg:py-24 gradient-navy">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-foreground mb-4">
            Veja a operação em ação
          </h2>
          <p className="text-lg text-secondary-foreground/70">
            Automação remota para operações contínuas
          </p>
        </div>

        {/* Video */}
        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-video rounded-3xl overflow-hidden bg-secondary/50 border border-white/10 shadow-2xl">
            <video 
              className="w-full h-full object-cover"
              controls
              poster=""
            >
              <source src="https://horus.global/wp-content/uploads/2025/11/720.mp4" type="video/mp4" />
              Seu navegador não suporta vídeos HTML5.
            </video>

            {/* Corner decorations */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/50 rounded-tl-lg pointer-events-none" />
            <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary/50 rounded-tr-lg pointer-events-none" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-primary/50 rounded-bl-lg pointer-events-none" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/50 rounded-br-lg pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
