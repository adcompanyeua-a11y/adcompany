import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const ContactForm = () => {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [segmento, setSegmento] = useState("");
  const [funcionarios, setFuncionarios] = useState("");
  const [faturamento, setFaturamento] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target as HTMLFormElement;

    const payload = {
      nome: (form.elements.namedItem("nome") as HTMLInputElement).value,
      whatsapp: (form.elements.namedItem("whatsapp") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      empresa: (form.elements.namedItem("empresa") as HTMLInputElement).value,
      segmento: segmento || "Não informado",
      funcionarios: funcionarios || "Não informado",
      faturamento: faturamento || "Não informado",
    };

    try {
      const res = await fetch("https://api.agenciaadcompany.com.br/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.ok) {
        toast.success(t.contact.success);
        form.reset();
        setSegmento("");
        setFuncionarios("");
        setFaturamento("");
      } else {
        toast.error(t.contact.errorSend);
      }
    } catch {
      toast.error(t.contact.errorConn);
    } finally {
      setLoading(false);
    }
  };

  const segs = t.contact.segments as Record<string, string>;
  const revs = t.contact.revenues as Record<string, string>;

  return (
    <section id="contato" className="py-24 bg-royal relative overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-brand-yellow/20 blur-[120px]" />
      <div className="container relative mx-auto max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-brand-yellow/10 text-brand-yellow text-sm font-bold tracking-widest mb-4">{t.contact.tag}</span>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              {t.contact.titleStart}<span className="text-gradient-yellow">{t.contact.titleHighlight}</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">{t.contact.subtitle}</p>
            <ul className="space-y-3 text-foreground/80">
              {t.contact.bullets.map(b => <li key={b}>{b}</li>)}
            </ul>
          </div>
          <form onSubmit={onSubmit} className="bg-card-grad p-8 rounded-2xl border border-brand-yellow/20 shadow-card-soft space-y-4">
            <div>
              <Label htmlFor="nome">{t.contact.name}</Label>
              <Input id="nome" name="nome" required placeholder={t.contact.namePh} />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="whatsapp">{t.contact.whatsapp}</Label>
                <Input id="whatsapp" name="whatsapp" required placeholder="(00) 00000-0000" />
              </div>
              <div>
                <Label htmlFor="email">{t.contact.email}</Label>
                <Input id="email" name="email" type="email" required placeholder={t.contact.emailPh} />
              </div>
            </div>
            <div>
              <Label htmlFor="empresa">{t.contact.company}</Label>
              <Input id="empresa" name="empresa" placeholder={t.contact.companyPh} />
            </div>

            <div>
              <Label>{t.contact.segment}</Label>
              <Select value={segmento} onValueChange={setSegmento}>
                <SelectTrigger><SelectValue placeholder={t.contact.segment} /></SelectTrigger>
                <SelectContent>
                  {Object.entries(segs).map(([k, v]) => (
                    <SelectItem key={k} value={k}>{v}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>{t.contact.employees}</Label>
              <Select value={funcionarios} onValueChange={setFuncionarios}>
                <SelectTrigger><SelectValue placeholder={t.contact.employees} /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="00-01">00 - 01</SelectItem>
                  <SelectItem value="02-10">02 - 10</SelectItem>
                  <SelectItem value="11-20">11 - 20</SelectItem>
                  <SelectItem value="21-50">21 - 50</SelectItem>
                  <SelectItem value="51-100">51 - 100</SelectItem>
                  <SelectItem value="+100">+100</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>{t.contact.revenue}</Label>
              <Select value={faturamento} onValueChange={setFaturamento}>
                <SelectTrigger><SelectValue placeholder={t.contact.revenue} /></SelectTrigger>
                <SelectContent>
                  {Object.entries(revs).map(([k, v]) => (
                    <SelectItem key={k} value={k}>{v}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
              {loading ? t.contact.sending : t.contact.submit}
            </Button>
            <p className="text-xs text-muted-foreground text-center">{t.contact.privacy}</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
