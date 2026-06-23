import prova1 from "@/assets/leads/prova1.webp";
import prova2 from "@/assets/leads/prova2.webp";

const LeadsProof = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-brand-yellow/10 blur-[120px]" />
      <div className="container relative mx-auto">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1 rounded-full bg-brand-yellow/10 text-brand-yellow text-sm font-bold tracking-widest mb-4">
            PROVA REAL
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Veja os leads chegando em{" "}
            <span className="text-gradient-yellow">tempo real</span> para nossos clientes
          </h2>
          <p className="text-muted-foreground text-lg">
            Essa é a automação que instalamos para cada cliente — cada mensagem é um americano querendo contratar o serviço.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {[prova1, prova2].map((src, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden border border-brand-yellow/20 bg-brand-navy/60 backdrop-blur shadow-card-soft hover:border-brand-yellow transition-smooth"
            >
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

        <p className="mt-8 text-center text-foreground/80 max-w-3xl mx-auto text-base md:text-lg">
          🔔 Leads chegando direto no WhatsApp do nosso cliente — com nome, telefone, tipo de serviço e agendamento.{" "}
          <span className="text-brand-yellow font-bold">Você fecha, a gente entrega.</span>
        </p>
      </div>
    </section>
  );
};

export default LeadsProof;
