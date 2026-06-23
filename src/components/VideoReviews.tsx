import { useLanguage } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const videos = [
  {
    name: "Juliana",
    id: "Fjujm8dqZlM",
  },
  {
    name: "Gabriela",
    id: "bSgF-_oNpEA",
  },
];

const VideoReviews = () => {
  const { lang } = useLanguage();
  const tag = lang === "pt" ? "DEPOIMENTOS" : "TESTIMONIOS";
  const titleStart = lang === "pt" ? "O que nossos " : "Lo que nuestros ";
  const titleHighlight = lang === "pt" ? "clientes dizem" : "clientes dicen";
  const subtitle =
    lang === "pt"
      ? "Histórias reais de quem confiou na AD Company para escalar seu negócio."
      : "Historias reales de quienes confiaron en AD Company para escalar su negocio.";

  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="container relative mx-auto">
        <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1 rounded-full bg-brand-yellow/10 text-brand-yellow text-sm font-bold tracking-widest mb-4">
            {tag}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            {titleStart}
            <span className="text-gradient-yellow">{titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">{subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {videos.map((v) => (
            <div
              key={v.name}
              className="relative rounded-2xl overflow-hidden border border-brand-yellow/20 bg-brand-navy/60 backdrop-blur hover:border-brand-yellow transition-smooth group"
            >
              <div className="w-full aspect-square bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}?rel=0&modestbranding=1`}
                  title={`Depoimento ${v.name}`}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
              <div className="p-4 text-center">
                <p className="font-bold text-lg">{v.name}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 md:mt-12 flex justify-center px-4">
          <Button
            variant="hero"
            size="xl"
            className="w-full sm:w-auto"
            data-cal-link="adcompany.eua-gmail.com/45min"
            data-cal-namespace="45min"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
          >
            <Calendar className="mr-2 h-5 w-5" /> AGENDAR REUNIÃO AGORA
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoReviews;
