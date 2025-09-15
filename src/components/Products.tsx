import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Star, TrendingUp } from "lucide-react";
import supplementsImg from "@/assets/supplements.jpg";
import digitalProductsImg from "@/assets/digital-products.jpg";

export const Products = () => {
  return (
    <section id="produtos" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Star className="w-4 h-4 mr-2" />
            Produtos Premium
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossos <span className="text-gradient-primary">Produtos</span> Exclusivos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tenha acesso aos melhores encapsulados e infoprodutos com as maiores comissões do mercado.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Encapsulados */}
          <div className="card-product group">
            <div className="relative overflow-hidden">
              <img 
                src={supplementsImg} 
                alt="Produtos Encapsulados Premium" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4">
                <Badge className="bg-primary text-primary-foreground">
                  Até 60% Comissão
                </Badge>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-5 h-5 text-primary" />
                <h3 className="text-2xl font-bold">Encapsulados Premium</h3>
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Suplementos de alta qualidade, testados e aprovados. Produtos para emagrecimento, 
                ganho de massa, saúde e bem-estar com as melhores comissões do mercado.
              </p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Produtos com registro na ANVISA</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Laboratórios certificados</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Entrega em todo Brasil</span>
                </div>
              </div>
              
              <Button className="w-full group">
                Ver Catálogo
                <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Infoprodutos */}
          <div className="card-product group">
            <div className="relative overflow-hidden">
              <img 
                src={digitalProductsImg} 
                alt="Infoprodutos Digitais" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4">
                <Badge className="bg-primary text-primary-foreground">
                  Até 80% Comissão
                </Badge>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-5 h-5 text-primary" />
                <h3 className="text-2xl font-bold">Infoprodutos Digitais</h3>
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Cursos online, e-books, mentorias e produtos digitais dos melhores especialistas 
                do Brasil e mundo. Nichos variados com alta conversão.
              </p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Produtos globais e nacionais</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Materiais de divulgação inclusos</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Suporte completo ao afiliado</span>
                </div>
              </div>
              
              <Button className="w-full group">
                Ver Produtos
                <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="card-premium max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para Começar a <span className="text-gradient-primary">Lucrar?</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Junte-se aos milhares de afiliados que já faturam alto conosco.
            </p>
            <Button className="btn-hero">
              Quero Ser um Digital Boss
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};