import { Button } from "@/components/ui/button";
import { Crown, Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-primary to-primary-glow rounded-lg animate-glow-pulse">
              <Crown className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gradient-primary">DIGITAL BOSS</h1>
              <p className="text-xs text-muted-foreground">CLUB</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#produtos" className="text-foreground hover:text-primary transition-colors">
              Produtos
            </a>
            <a href="#infoprodutos" className="text-foreground hover:text-primary transition-colors">
              Infoprodutos
            </a>
            <a href="#beneficios" className="text-foreground hover:text-primary transition-colors">
              Benefícios
            </a>
            <Button variant="outline" size="sm">
              Entrar no Clube
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 border-t border-border pt-4">
            <a href="#produtos" className="block text-foreground hover:text-primary transition-colors">
              Produtos
            </a>
            <a href="#infoprodutos" className="block text-foreground hover:text-primary transition-colors">
              Infoprodutos
            </a>
            <a href="#beneficios" className="block text-foreground hover:text-primary transition-colors">
              Benefícios
            </a>
            <Button variant="outline" size="sm" className="w-full">
              Entrar no Clube
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};