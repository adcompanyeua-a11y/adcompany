import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { supabase } from "@/integrations/supabase/client";

// Lê cookies do Meta Pixel (_fbp/_fbc) para deduplicação de eventos
const getCookie = (name: string): string | undefined => {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : undefined;
};

// Envia o evento de Lead para o Meta pela API de Conversões (servidor)
const sendCapiLead = (payload: { nome: string; whatsapp: string; email: string }) => {
  const [first_name, ...rest] = payload.nome.trim().split(/\s+/);
  const eventId = `lead_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
  // Dispara também no pixel do navegador com o mesmo event_id (deduplicação)
  (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq?.("track", "Lead", {}, { eventID: eventId });
  void supabase.functions.invoke("meta-capi", {
    body: {
      event_name: "Lead",
      email: payload.email,
      phone: payload.whatsapp,
      first_name,
      last_name: rest.join(" ") || undefined,
      event_source_url: window.location.href,
      fbp: getCookie("_fbp"),
      fbc: getCookie("_fbc"),
      event_id: eventId,
    },
  }).catch(() => { /* falha silenciosa: não bloqueia o lead */ });
};

// ✅ Validação anti-bot
const isValidLead = (nome: string, whatsapp: string): boolean => {
  if (!nome || !whatsapp) return false;
  if (!nome.includes(' ')) return false;
  if (/^[A-Z][a-z]+([A-Z][a-z]+)+$/.test(nome)) return false;
  if (nome.length > 40) return false;
  if (!/^[\d\s\+\-\(\)]+$/.test(whatsapp)) return false;
  if (whatsapp.replace(/\D/g, '').length < 10) return false;
  return true;
};

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

    const nomeValue = (form.elements.namedItem("nome") as HTMLInputElement).value;
    const whatsappValue = (form.elements.namedItem("whatsapp") as HTMLInputElement).value;

    // ✅ Bloqueia bot
    if (!isValidLead(nomeValue, whatsappValue)) {
      toast.error("Por favor, preencha nome completo e WhatsApp válido.");
      setLoading(false);
      return;
    }

    // ✅ Selects obrigatórios
    if (!segmento) {
      toast.error("Por favor, selecione o seu segmento.");
      setLoading(false);
      return;
    }

    if (!funcionarios) {
      toast.error("Por favor, selecione o número de funcionários.");
      setLoading(false);
      return;
    }

    if (!faturamento) {
      toast.error("Por favor, selecione o faturamento médio mensal.");
      setLoading(false);
      return;
    }

    const payload = {
      nome: nomeValue,
      whatsapp: whatsappValue,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      empresa: (form.elements.namedItem("empresa") as HTMLInputElement).value,
      segmento,
      funcionarios,
      faturamento,
    };

    try {
      const [resApi] = await Promise.allSettled([
        fetch("https://api.agenciaadcompany.com.br/contato", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }),
        fetch("https://nextplaytv-n8n.8qr4sb.easypanel.host/webhook/contato-site", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }),
      ]);

      const data =
        resApi.status === "fulfilled"
          ? await resApi.value.json()
          : { ok: true };

      if (data.ok) {
        toast.success(t.contact.success);
        sendCapiLead(payload);
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
    <section id="contato" className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Glows */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 h-[500px] w-[600px] rounded-full bg-yellow-400/6 blur-[140px] pointer-events-none" />

      <div className="container relative mx-auto px-4 md:px-6 max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-start">

          {/* Left — copy */}
          <div className="lg:sticky lg:top-28 text-center lg:text-left space-y-6">
            <div className="section-label mx-auto lg:mx-0">{t.contact.tag}</div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl">
              {t.contact.titleStart}
              <span className="text-gradient-yellow block">{t.contact.titleHighlight}</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed">{t.contact.subtitle}</p>
            <ul className="space-y-2 text-sm text-white/50">
              {t.contact.bullets.map(b => (
                <li key={b} className="flex items-start gap-2 justify-center lg:justify-start">
                  <span className="text-yellow-400 mt-0.5">✓</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — form */}
          <form onSubmit={onSubmit} className="bg-background border border-white/6 p-6 sm:p-8 rounded-2xl space-y-4 shadow-[0_2px_40px_-8px_hsl(220_28%_4%/0.5)]">
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
              <Label>
                {t.contact.segment}
                <span className="text-red-500 ml-1">*</span>
              </Label>
              <Select value={segmento} onValueChange={setSegmento}>
                <SelectTrigger className={!segmento ? "border-muted" : ""}>
                  <SelectValue placeholder={t.contact.segment} />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(segs).map(([k, v]) => (
                    <SelectItem key={k} value={k}>{v}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>
                {t.contact.employees}
                <span className="text-red-500 ml-1">*</span>
              </Label>
              <Select value={funcionarios} onValueChange={setFuncionarios}>
                <SelectTrigger className={!funcionarios ? "border-muted" : ""}>
                  <SelectValue placeholder={t.contact.employees} />
                </SelectTrigger>
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
              <Label>
                {t.contact.revenue}
                <span className="text-red-500 ml-1">*</span>
              </Label>
              <Select value={faturamento} onValueChange={setFaturamento}>
                <SelectTrigger className={!faturamento ? "border-muted" : ""}>
                  <SelectValue placeholder={t.contact.revenue} />
                </SelectTrigger>
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
      </div>
    </section>
  );
};

export default ContactForm;
