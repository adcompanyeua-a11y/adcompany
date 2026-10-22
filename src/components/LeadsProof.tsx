import prova1 from "@/assets/leads/prova1.webp";
import prova2 from "@/assets/leads/prova2.webp";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const LeadsProof = () => {
  const gridRef = useScrollReveal();
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-64 md:h-96 md:w-96 rounded-full bg-brand-yellow/10 blur-[80px] md:blur-[120px]" />
      <div className="container relative mx-auto">
        <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1 rounded-full bg-brand-yellow/10 text-brand-yellow text-sm font-bold tracking-widest mb-4">
            PROVA REAL
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            Veja os leads chegando em{" "}
            <span className="text-gradient-yellow">tempo real</span> para nossos clientes
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Essa é a automação que instalamos para cada cliente — cada mensagem é um americano querendo contratar o serviço.
          </p>
        </div>

        <div ref={gridRef} className="grid sm:grid-cols-2 gap-5 md:gap-8 max-w-4xl mx-auto">
          {[prova1, prova2].map((src, i) => (
            <div
              key={i}
              className="stagger-item rounded-xl overflow-hidden border border-brand-yellow/20 bg-brand-navy/60 hover:border-brand-yellow/50 transition-transform duration-200 hover:scale-[1.01]"
            >
              <div className="flex items-center gap-2 px-4 py-2 border-b border-brand-yellow/10 bg-brand-navy/80">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-bold text-green-400 tracking-widest">AO VIVO</span>
              </div>
              <img
                src={src}
                alt={`Prints de leads recebidos via WhatsApp ${i + 1}`}
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-foreground/80 max-w-3xl mx-auto text-sm sm:text-base md:text-lg px-2">
          🔔 Leads chegando direto no WhatsApp do nosso cliente — com nome, telefone, tipo de serviço e agendamento.{" "}
          <span className="text-brand-yellow font-bold">Nós entregamos, você fecha.</span>
        </p>
      </div>
    </section>
  );
};

export default LeadsProof;
