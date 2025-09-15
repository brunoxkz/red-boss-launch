import { Button } from "@/components/ui/button";
import { ArrowRight, Crown, Trophy, Zap } from "lucide-react";
import heroImg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-hero-gradient relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImg} 
          alt="Digital Boss Club Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Crown className="w-8 h-8 text-primary glow-red" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
        <Trophy className="w-10 h-10 text-primary glow-red" />
      </div>
      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '4s' }}>
        <Zap className="w-6 h-6 text-primary glow-red" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card/80 border border-primary/30 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
            <Crown className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Clube Exclusivo de Afiliados</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            SEJA UM
            <span className="block text-gradient-primary animate-glow-pulse">
              DIGITAL BOSS
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Acesso exclusivo aos melhores <strong className="text-primary">encapsulados</strong> e 
            <strong className="text-primary"> infoprodutos</strong> do Brasil e mundo. 
            Transforme sua vida financeira conosco.
          </p>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="card-premium text-center">
              <h3 className="text-3xl font-bold text-primary mb-2">500+</h3>
              <p className="text-muted-foreground">Produtos Premium</p>
            </div>
            <div className="card-premium text-center">
              <h3 className="text-3xl font-bold text-primary mb-2">10k+</h3>
              <p className="text-muted-foreground">Membros Ativos</p>
            </div>
            <div className="card-premium text-center">
              <h3 className="text-3xl font-bold text-primary mb-2">R$ 1M+</h3>
              <p className="text-muted-foreground">Em Comissões</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="btn-hero group">
              Entrar no Clube Agora
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="btn-secondary">
              Ver Produtos
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-60">
            <span className="text-sm">✓ Pagamento Seguro</span>
            <span className="text-sm">✓ Suporte 24/7</span>
            <span className="text-sm">✓ Garantia de Resultados</span>
          </div>
        </div>
      </div>
    </section>
  );
};