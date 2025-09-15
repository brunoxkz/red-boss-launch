import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Crown, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-hero-gradient">
      <div className="text-center max-w-md mx-auto px-6">
        <div className="mb-8">
          <div className="p-4 bg-gradient-to-r from-primary to-primary-glow rounded-full w-20 h-20 mx-auto mb-6 animate-glow-pulse">
            <Crown className="w-12 h-12 text-primary-foreground mx-auto" />
          </div>
          <h1 className="text-6xl font-black text-gradient-primary mb-4">404</h1>
          <h2 className="text-2xl font-bold mb-4">Página Não Encontrada</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Ops! A página que você procura não existe ou foi movida. 
            Volte para o clube e continue sua jornada como Digital Boss.
          </p>
        </div>
        
        <Button className="btn-hero group">
          <Home className="w-4 h-4 mr-2" />
          Voltar ao Clube
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
