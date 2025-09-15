import { Crown, Instagram, Mail, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-primary to-primary-glow rounded-lg">
                <Crown className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gradient-primary">DIGITAL BOSS</h1>
                <p className="text-xs text-muted-foreground">CLUB</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              O clube exclusivo de afiliados que transforma vidas através dos melhores 
              produtos e as maiores comissões do mercado.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Produtos</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Encapsulados</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Infoprodutos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cursos Online</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">E-books</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-primary">Suporte</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Digital Boss Club. Todos os direitos reservados.</p>
          <p className="mt-2">Transformando afiliados em verdadeiros bosses digitais.</p>
        </div>
      </div>
    </footer>
  );
};