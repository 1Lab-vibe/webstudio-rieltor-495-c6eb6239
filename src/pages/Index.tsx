import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  Phone, Mail, MapPin, ShieldCheck, FileSignature, Award, Building2,
  Search, Calculator, Handshake, ScrollText, Star, ArrowRight, Check,
} from "lucide-react";
import agent from "@/assets/agent.jpg";
import apt1 from "@/assets/apt1.jpg";
import apt2 from "@/assets/apt2.jpg";
import apt3 from "@/assets/apt3.jpg";
import keys from "@/assets/keys.jpg";
import moscow from "@/assets/moscow.jpg";

const listings = [
  { img: apt1, title: "2-комн., ЖК «Садовые кварталы»", area: "68 м²", price: "31 500 000 ₽", metro: "м. Фрунзенская, 7 мин" },
  { img: apt2, title: "3-комн., Патриаршие пруды", area: "94 м²", price: "58 900 000 ₽", metro: "м. Маяковская, 5 мин" },
  { img: apt3, title: "Студия в новостройке, ЗАО", area: "29 м²", price: "12 800 000 ₽", metro: "м. Аминьевская, 4 мин" },
];

const services = [
  { icon: Search, title: "Подбор квартиры", text: "Закрытая база и проверенные объекты под ваш бюджет и район." },
  { icon: Building2, title: "Продажа недвижимости", text: "Оценка, профессиональные фото, реклама на всех площадках." },
  { icon: Calculator, title: "Ипотека и рассрочка", text: "Подберём программу в банках‑партнёрах, поможем со ставкой." },
  { icon: ScrollText, title: "Юридическое сопровождение", text: "Проверка истории, чистоты сделки, регистрация в Росреестре." },
];

const cases = [
  { title: "Продали 2‑комн. на Соколе за 19 дней", text: "Покупатель внёс аванс на третьем показе. Цена — выше первоначальной оценки на 4%." },
  { title: "Подобрали семейную квартиру в ЗАО", text: "5 вариантов за неделю, торг −1,2 млн ₽, ипотека под 6,8% по господдержке." },
  { title: "Вышли из «зависшей» сделки", text: "Сняли обременение, согласовали новую цепочку, закрыли сделку за 11 дней." },
];

const reviews = [
  { name: "Анна К.", text: "Спокойно объяснили все этапы. Договор прозрачный, без скрытой комиссии. Получили ключи через 6 недель." },
  { name: "Сергей М.", text: "Помогли продать «трёшку» по адекватной цене и выйти на встречную покупку. Без нервов." },
  { name: "Ирина Д.", text: "Подобрали квартиру в нужном районе и школе. Сопровождали до регистрации права." },
];

const Index = () => {
  const [form, setForm] = useState({ name: "", phone: "", task: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Укажите имя и телефон");
      return;
    }
    toast.success("Заявка отправлена. Перезвоним в течение 15 минут.");
    setForm({ name: "", phone: "", task: "" });
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-background/80 border-b border-border">
        <div className="container flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground font-bold">Р</span>
            <span className="font-semibold tracking-tight">Риэлтор 495<span className="text-muted-foreground font-normal"> · Москва</span></span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <a href="#listings" className="hover:text-foreground">Объекты</a>
            <a href="#services" className="hover:text-foreground">Услуги</a>
            <a href="#cases" className="hover:text-foreground">Кейсы</a>
            <a href="#about" className="hover:text-foreground">Об агенте</a>
            <a href="#contact" className="hover:text-foreground">Контакты</a>
          </nav>
          <a href="tel:+74951234567" className="hidden sm:inline-flex items-center gap-2 text-sm font-medium">
            <Phone className="h-4 w-4 text-primary" /> +7 (495) 123‑45‑67
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="container grid lg:grid-cols-2 gap-10 py-14 lg:py-20 items-center">
          <div className="fade-up">
            <div className="inline-flex items-center gap-2 rounded-full surface px-3 py-1 text-xs text-muted-foreground mb-6">
              <span className="h-2 w-2 rounded-full bg-primary pulse-dot" />
              Принимаем заявки сегодня · ответ за 15 минут
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
              Недвижимость в Москве — <span className="text-gradient-gold">с человеком, который отвечает</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl">
              Подберём квартиру, проверим документы и сопроводим сделку до получения ключей.
              Без давления, прозрачная комиссия, договор с первого дня.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 ring-gold">
                <a href="#contact">Получить подборку объектов <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border bg-transparent hover:bg-secondary">
                <a href="#valuation">Узнать стоимость моей квартиры</a>
              </Button>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { k: "12+", v: "лет опыта в Москве" },
                { k: "320+", v: "закрытых сделок" },
                { k: "РГР", v: "членство и стандарты" },
              ].map((s) => (
                <div key={s.k}>
                  <dt className="text-2xl font-semibold text-gradient-gold">{s.k}</dt>
                  <dd className="text-xs text-muted-foreground mt-1">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative fade-up">
            <div className="relative rounded-2xl overflow-hidden surface ring-gold">
              <img src={agent} alt="Агент по недвижимости в Москве" width={1280} height={1600} className="w-full h-[460px] lg:h-[560px] object-cover" />
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-background/95 to-transparent">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/20 grid place-items-center text-primary font-semibold">АН</div>
                  <div>
                    <div className="font-semibold">Алексей Никитин</div>
                    <div className="text-xs text-muted-foreground">Ведущий агент · ЦАО, ЗАО, ЮЗАО</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -left-4 -bottom-6 hidden md:block surface rounded-xl p-4 w-60 shadow-[var(--shadow-soft)]">
              <div className="flex items-center gap-2 text-sm">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span>Договор · юр. сопровождение</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">Все условия фиксируем письменно. Без скрытых платежей.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-border bg-secondary/30">
        <div className="container py-6 flex flex-wrap items-center justify-between gap-6 text-sm text-muted-foreground">
          {[
            { icon: Award, t: "Опыт агента 12+ лет" },
            { icon: FileSignature, t: "Договор с первого дня" },
            { icon: ShieldCheck, t: "Член РГР" },
            { icon: MapPin, t: "Реальные сделки в районе" },
          ].map(({ icon: I, t }) => (
            <div key={t} className="flex items-center gap-2">
              <I className="h-4 w-4 text-primary" /> {t}
            </div>
          ))}
        </div>
      </section>

      {/* Listings */}
      <section id="listings" className="container py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Свежие объекты</h2>
            <p className="text-muted-foreground mt-2">Подборка обновляется каждую неделю. Полная база — по запросу.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex text-sm text-primary hover:underline">Запросить полную подборку →</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {listings.map((l) => (
            <article key={l.title} className="surface rounded-xl overflow-hidden group">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={l.img} alt={l.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="text-xs text-muted-foreground">{l.metro}</div>
                <h3 className="font-semibold mt-1">{l.title}</h3>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm text-muted-foreground">{l.area}</span>
                  <span className="font-semibold text-gradient-gold">{l.price}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-y border-border bg-secondary/20">
        <div className="container py-20">
          <h2 className="text-3xl sm:text-4xl font-bold max-w-2xl">Услуги — закрываем сделку под ключ</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {services.map(({ icon: I, title, text }) => (
              <div key={title} className="surface rounded-xl p-6 hover:border-primary/40 transition-colors">
                <div className="h-11 w-11 rounded-lg bg-primary/10 grid place-items-center text-primary mb-4">
                  <I className="h-5 w-5" />
                </div>
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          {/* Animated process */}
          <div className="mt-14 surface rounded-2xl p-8">
            <h3 className="font-semibold mb-6">Как мы ведём сделку</h3>
            <svg viewBox="0 0 800 120" className="w-full h-auto animate-draw" fill="none" stroke="currentColor">
              <line x1="60" y1="60" x2="740" y2="60" className="text-border" strokeWidth="2" strokeDasharray="6 6" style={{ animation: 'none' }} />
              {[60, 230, 400, 570, 740].map((x, i) => (
                <g key={x}>
                  <circle cx={x} cy="60" r="14" className="text-primary" strokeWidth="2" fill="hsl(var(--background))" />
                  <text x={x} y="65" textAnchor="middle" className="fill-primary" style={{ font: '600 12px Manrope', stroke: 'none' }}>{i + 1}</text>
                </g>
              ))}
            </svg>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mt-4 text-xs sm:text-sm text-muted-foreground">
              {["Бриф 15 минут", "Подбор объектов", "Показы и торг", "Договор и проверка", "Сделка и ключи"].map((s) => (
                <div key={s} className="text-center">{s}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section id="cases" className="container py-20">
        <h2 className="text-3xl sm:text-4xl font-bold">Кейсы сделок</h2>
        <p className="text-muted-foreground mt-2">Короткие истории клиентов — как реально проходят сделки.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {cases.map((c, i) => (
            <div key={c.title} className="surface rounded-xl p-6 relative overflow-hidden">
              <div className="text-5xl font-bold text-primary/15 absolute top-2 right-4">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="font-semibold relative">{c.title}</h3>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed relative">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-y border-border bg-secondary/20">
        <div className="container py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden surface">
            <img src={keys} alt="Передача ключей от квартиры" loading="lazy" className="w-full h-[420px] object-cover" />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Об агенте</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Алексей Никитин — практикующий риелтор с 2013 года. Специализация: вторичное жильё и новостройки
              в ЦАО, ЗАО и ЮЗАО Москвы. 320+ закрытых сделок, член Российской Гильдии Риелторов,
              сертификация по стандартам РГР.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Личное участие на каждом этапе — от показа до Росреестра",
                "Связки в банках‑партнёрах: Сбер, Альфа, ВТБ, Дом.РФ",
                "Прозрачная комиссия — фиксируем в договоре",
                "Юрист в штате: проверка истории, рисков, обременений",
              ].map((t) => (
                <li key={t} className="flex gap-3"><Check className="h-5 w-5 text-primary shrink-0" />{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="container py-20">
        <h2 className="text-3xl sm:text-4xl font-bold">Отзывы клиентов</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {reviews.map((r) => (
            <div key={r.name} className="surface rounded-xl p-6">
              <div className="flex gap-0.5 text-primary mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary" />)}
              </div>
              <p className="text-sm text-foreground/90 leading-relaxed">«{r.text}»</p>
              <div className="text-xs text-muted-foreground mt-4">— {r.name}, клиент</div>
            </div>
          ))}
        </div>
      </section>

      {/* Guarantees */}
      <section className="border-y border-border bg-secondary/20">
        <div className="container py-20 grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Гарантии и договор</h2>
            <p className="mt-3 text-muted-foreground">Никаких устных договорённостей. Всё, что важно — в письменном виде.</p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                { icon: FileSignature, t: "Договор оказания услуг", d: "Этапы, сроки, ответственность сторон." },
                { icon: ShieldCheck, t: "Прозрачная комиссия", d: "Размер и порядок оплаты — заранее." },
                { icon: ScrollText, t: "Юридическая проверка", d: "История объекта, ЕГРН, обременения, наследники." },
                { icon: Handshake, t: "Сопровождение сделки", d: "Аванс, банк, регистрация, передача ключей." },
              ].map(({ icon: I, t, d }) => (
                <div key={t} className="surface rounded-xl p-5">
                  <I className="h-5 w-5 text-primary mb-3" />
                  <div className="font-semibold">{t}</div>
                  <div className="text-sm text-muted-foreground mt-1">{d}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden surface">
            <img src={moscow} alt="Москва на закате" loading="lazy" className="w-full h-[420px] object-cover" />
          </div>
        </div>
      </section>

      {/* Contact + Form */}
      <section id="contact" className="container py-20">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 id="valuation" className="text-3xl sm:text-4xl font-bold">Заявка на подбор или оценку</h2>
            <p className="text-muted-foreground mt-3 max-w-md">
              Оставьте контакт — перезвоним в течение 15 минут, уточним задачу и пришлём первую подборку
              или ориентир по цене вашей квартиры.
            </p>

            <div className="mt-8 space-y-4 text-sm">
              <a href="tel:+74951234567" className="flex items-center gap-3 hover:text-primary">
                <span className="h-10 w-10 rounded-lg bg-primary/10 grid place-items-center"><Phone className="h-4 w-4 text-primary" /></span>
                +7 (495) 123‑45‑67
              </a>
              <a href="mailto:info@rieltor495.ru" className="flex items-center gap-3 hover:text-primary">
                <span className="h-10 w-10 rounded-lg bg-primary/10 grid place-items-center"><Mail className="h-4 w-4 text-primary" /></span>
                info@rieltor495.ru
              </a>
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 rounded-lg bg-primary/10 grid place-items-center"><MapPin className="h-4 w-4 text-primary" /></span>
                Москва · работаем по всем округам
              </div>
            </div>
          </div>

          <form onSubmit={submit} className="surface rounded-2xl p-6 sm:p-8">
            <div className="space-y-4">
              <div>
                <label className="text-sm text-muted-foreground">Имя</label>
                <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Как к вам обращаться" className="mt-1 bg-background border-border" />
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Телефон</label>
                <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+7 (___) ___‑__‑__" className="mt-1 bg-background border-border" />
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Задача</label>
                <Textarea value={form.task} onChange={(e) => setForm({ ...form, task: e.target.value })} rows={4} placeholder="Например: ищу 2‑комн. до 25 млн в ЗАО, рядом школа" className="mt-1 bg-background border-border" />
              </div>
              <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Получить подборку объектов
              </Button>
              <p className="text-xs text-muted-foreground">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.
              </p>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Риэлтор 495 · Москва</div>
          <div>Член РГР · Договор · Юридическое сопровождение</div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
