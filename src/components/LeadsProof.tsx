import prova1 from "@/assets/leads/prova1.webp";
import prova2 from "@/assets/leads/prova2.webp";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const LeadsProof = () => {
  const gridRef = useScrollReveal();

  return (
    <section className="py-28 md:py-36 relative" style={{ background: "var(--bg)" }}>
      <div className="rule-gold" />

      <div className="max-w-6xl mx-auto px-5 md:px-8 pt-20">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="label mb-6">PROVA REAL</div>
          <h2 className="text-[clamp(2.2rem,5vw,3.8rem)] mb-5" style={{ color: "var(--text)" }}>
            Veja os leads chegando em{" "}
            <span className="text-gradient-yellow">tempo real</span>
          </h2>
          <p className="text-[14px] leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Essa é a automação que instalamos para cada cliente — cada mensagem é um americano querendo contratar o serviço.
          </p>
        </div>

        {/* Screenshots */}
        <div ref={gridRef} className="grid sm:grid-cols-2 gap-5 md:gap-6 max-w-3xl">
          {[prova1, prova2].map((src, i) => (
            <div
              key={i}
              className="stagger-item group rounded-2xl overflow-hidden"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                transition: "border-color 0.2s ease",
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(245,196,0,0.2)")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")}
            >
              {/* Barra status */}
              <div
                className="flex items-center gap-2.5 px-4 py-3"
                style={{
                  borderBottom: "1px solid var(--border)",
                  background: "rgba(255,255,255,0.015)",
                }}
              >
                <span className="relative flex h-2 w-2">
                  <span
                    className="absolute inline-flex h-full w-full rounded-full opacity-75"
                    style={{ background: "#22c55e", animation: "ping-slow 1.4s cubic-bezier(0,0,0.2,1) infinite" }}
                  />
                  <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "#22c55e" }} />
                </span>
                <span className="text-[10px] font-bold tracking-[0.12em] uppercase" style={{ color: "#22c55e" }}>
                  AO VIVO
                </span>
                <span className="ml-auto text-[10px]" style={{ color: "var(--text-dim)" }}>WhatsApp Automation</span>
              </div>
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

        {/* Callout */}
        <div className="mt-10 max-w-3xl">
          <div
            className="rounded-xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4"
            style={{
              background: "rgba(245,196,0,0.04)",
              border: "1px solid rgba(245,196,0,0.12)",
            }}
          >
            <div className="dot-gold shrink-0" />
            <p className="text-[13px] leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Leads chegando direto no WhatsApp do cliente — com nome, telefone, tipo de serviço e agendamento.{" "}
              <span style={{ color: "var(--gold)", fontWeight: 600 }}>Nós entregamos, você fecha.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadsProof;
