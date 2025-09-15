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
      description: "Até 70% de comissão + ganhos recorrentes nos melhores produtos"
    },
    {
      icon: Rocket,
      title: "Materiais Prontos",
      description: "Criativos, landing pages e materiais de divulgação inclusos"
    },
    {
      icon: Shield,
      title: "Suporte VIP",
      description: "Atendimento prioritário e mentoria 1:1 personalizada"
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

        {/* Contact Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Solicite Seu <span className="text-gradient-primary">Acesso</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Entre em contato conosco para solicitar seu acesso ao clube exclusivo.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="card-premium text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Acesso Exclusivo + Mentoria 1:1</h3>
              <p className="text-muted-foreground mb-6">
                Faça parte do seleto grupo de afiliados elite e receba mentoria personalizada para maximizar seus resultados.
              </p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 justify-center">
                <Check className="w-5 h-5 text-primary" />
                <span>Acesso a todos os produtos premium</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <Check className="w-5 h-5 text-primary" />
                <span>Comissões até 70% + recorrências</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <Check className="w-5 h-5 text-primary" />
                <span>Mentoria 1:1 personalizada</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <Check className="w-5 h-5 text-primary" />
                <span>Estratégias ocultas de conversão</span>
              </div>
            </div>

            <Button className="btn-hero w-full mb-4">
              Solicitar Acesso via WhatsApp
            </Button>
            <p className="text-sm text-muted-foreground">
              Responda algumas perguntas para avaliarmos seu perfil
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};