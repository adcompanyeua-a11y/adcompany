import prova1 from "@/assets/leads/prova1.webp";
import prova2 from "@/assets/leads/prova2.webp";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Zap } from "lucide-react";

const LeadsProof = () => {
  const gridRef = useScrollReveal();

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Glow center */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-yellow-400/5 blur-[160px] pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="container relative mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-14 md:mb-18 max-w-2xl mx-auto">
          <div className="section-label mx-auto mb-5">
            <Zap className="h-3 w-3" />
            PROVA REAL
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl mb-5">
            Veja os leads chegando em{" "}
            <span className="text-gradient-yellow">tempo real</span>
          </h2>
          <p className="text-white/50 text-lg leading-relaxed">
            Essa é a automação que instalamos para cada cliente — cada mensagem é um americano querendo contratar o serviço.
          </p>
        </div>

        {/* Screenshots */}
        <div ref={gridRef} className="grid sm:grid-cols-2 gap-5 md:gap-6 max-w-4xl mx-auto">
          {[prova1, prova2].map((src, i) => (
            <div
              key={i}
              className="stagger-item group rounded-2xl overflow-hidden border border-white/6 bg-card-grad hover:border-yellow-400/25 transition-all duration-200 hover:shadow-[0_8px_40px_-8px_hsl(46_100%_52%/0.12)]"
            >
              {/* Top bar */}
              <div className="flex items-center gap-2.5 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="text-[11px] font-bold text-green-400 tracking-[0.1em] uppercase">AO VIVO</span>
                <span className="ml-auto text-[10px] text-white/20">WhatsApp Automation</span>
              </div>

              {/* Image */}
              <img
                src={src}
                alt={`Print de leads recebidos via WhatsApp ${i + 1}`}
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Call-out strip */}
        <div className="mt-10 max-w-3xl mx-auto">
          <div className="rounded-2xl border border-yellow-400/15 bg-yellow-400/[0.04] px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Zap className="h-5 w-5 text-yellow-400 shrink-0" />
            <p className="text-sm md:text-base text-white/70">
              Leads chegando direto no WhatsApp do cliente — com nome, telefone, tipo de serviço e agendamento.{" "}
              <span className="text-yellow-400 font-bold">Nós entregamos, você fecha.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadsProof;
