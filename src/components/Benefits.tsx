import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Crown, Flame, Rocket, Shield, Trophy, Zap } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    {
      icon: Crown,
      title: "Acesso Exclusivo",
      description: "Produtos premium selecionados a dedo para máxima conversão"
    },
    {
      icon: Trophy,
      title: "Maiores Comissões",
      description: "Até 80% de comissão nos melhores produtos do mercado"
    },
    {
      icon: Rocket,
      title: "Materiais Prontos",
      description: "Criativos, landing pages e materiais de divulgação inclusos"
    },
    {
      icon: Shield,
      title: "Suporte VIP",
      description: "Atendimento prioritário e mentoria para afiliados"
    },
    {
      icon: Zap,
      title: "Pagamentos Rápidos",
      description: "Receba suas comissões em até 7 dias úteis"
    },
    {
      icon: Flame,
      title: "Treinamentos Exclusivos",
      description: "Lives e cursos exclusivos para membros do clube"
    }
  ];

  const plans = [
    {
      name: "Iniciante",
      price: "GRÁTIS",
      period: "",
      description: "Perfeito para começar",
      features: [
        "Acesso a produtos básicos",
        "Comissões até 30%",
        "Suporte via email",
        "Materiais básicos"
      ],
      cta: "Começar Grátis",
      popular: false
    },
    {
      name: "VIP Boss",
      price: "R$ 97",
      period: "/mês",
      description: "Para afiliados sérios",
      features: [
        "Acesso a TODOS os produtos",
        "Comissões até 80%",
        "Suporte prioritário 24/7",
        "Materiais premium",
        "Treinamentos exclusivos",
        "Mentoria em grupo"
      ],
      cta: "Ser VIP Agora",
      popular: true
    },
    {
      name: "Elite Boss",
      price: "R$ 297",
      period: "/mês",
      description: "Máximo nível",
      features: [
        "Tudo do VIP Boss",
        "Produtos em pré-lançamento",
        "Comissões especiais",
        "Mentoria 1:1",
        "Eventos exclusivos",
        "Suporte WhatsApp direto"
      ],
      cta: "Elite Access",
      popular: false
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-card-gradient">
      <div className="container mx-auto px-6">
        {/* Benefits Section */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Trophy className="w-4 h-4 mr-2" />
            Vantagens Exclusivas
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Por que Escolher o <span className="text-gradient-primary">Digital Boss Club?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mais que um clube de afiliados, uma comunidade de vencedores.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="card-premium text-center group hover:border-primary/50 transition-all duration-300"
            >
              <div className="mb-4 mx-auto w-12 h-12 bg-gradient-to-r from-primary to-primary-glow rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <benefit.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Pricing Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Escolha Seu <span className="text-gradient-primary">Plano</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comece grátis ou acelere seus resultados com nossos planos VIP.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`card-premium relative ${plan.popular ? 'border-primary shadow-[var(--shadow-glow)] scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-primary to-primary-glow px-4 py-1">
                    <Crown className="w-4 h-4 mr-1" />
                    MAIS POPULAR
                  </Badge>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-black text-primary">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                className={`w-full ${plan.popular ? 'btn-hero' : 'btn-secondary'}`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};