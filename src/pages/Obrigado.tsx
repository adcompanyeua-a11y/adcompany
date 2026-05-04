import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    fbq?: any;
  }
}

const Obrigado = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.fbq) {
      window.fbq('track', 'LeadAgendamento');
      window.fbq('track', 'Lead');
    }
  }, []);

  return (
    <section className="min-h-screen bg-hero flex items-center justify-center">
      <div className="container mx-auto text-center space-y-8 px-4">
        <div className="flex justify-center">
          <div className="inline-flex h-24 w-24 items-center justify-center rounded-full bg-brand-yellow/20">
            <CheckCircle className="h-12 w-12 text-brand-yellow" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-black">
          Agendamento <span className="text-gradient-yellow">Confirmado!</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Sua consulta foi agendada com sucesso. Você receberá um email de confirmação com o link do Google Meet.
        </p>
        <Button variant="hero" size="xl" onClick={() => navigate("/")}>
          Voltar para o início
        </Button>
      </div>
    </section>
  );
};

export default Obrigado;
