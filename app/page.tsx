import { ScrollReveal } from "./components/ScrollReveal";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-[5%] pt-32 pb-24">
        <div className="blob" style={{ width: 600, height: 600, background: "#c8ff00", top: "-10%", right: "-10%" }} />
        <div className="blob" style={{ width: 400, height: 400, background: "#00ffc8", bottom: "10%", left: "-5%", animationDelay: "-7s" }} />

        <div className="relative z-10 mx-auto max-w-[1000px] text-center">
          <div className="animate-fade-in-up mb-8 inline-flex items-center gap-2 rounded-full border border-[#c8ff00]/20 bg-[#c8ff00]/5 px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c8ff00] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#c8ff00]" />
            </span>
            <span className="text-sm text-[#c8ff00]">Tak · VVS · El · Bygg – färre platser kvar</span>
          </div>

          <h1 className="animate-fade-in-up delay-100 mb-6 text-[clamp(2.2rem,6vw,5rem)] leading-[1.05] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            Sveriges snabbaste hemsida för hantverkare.{" "}
            <span className="italic text-[#c8ff00]">Se den innan du betalar.</span>
          </h1>

          <p className="animate-fade-in-up delay-200 mx-auto mb-10 max-w-[580px] text-lg leading-relaxed text-[#f2f2f2]">
            Vi bygger din nya sajt på 24h. Inklusive proffsiig e-post för hela firman och blixtsnabb drift. Du ser resultatet innan du betalar en krona.
          </p>

          <div className="animate-fade-in-up delay-300 flex flex-wrap items-center justify-center gap-4">
            <a href="/kontakt" className="group flex items-center gap-3 rounded-full bg-[#c8ff00] px-8 py-4 text-base font-semibold text-[#0a0a0a] transition-all hover:shadow-[0_0_40px_rgba(200,255,0,0.3)]">
              Få ett gratis designförslag
              <svg className="btn-arrow h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" /></svg>
            </a>
            <a href="#process" className="flex items-center gap-2 rounded-full border border-white/10 px-8 py-4 text-base text-[#f2f2f2] transition-all hover:border-white/30 hover:text-white">
              Se hur det funkar ↓
            </a>
          </div>

          <div className="animate-fade-in-up delay-500 mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-[#f2f2f2]">
            {["Betala bara om du gillar det", "Leverans inom 24h", "Ingen bindningstid"].map((t, i) => (
              <span key={i} className="flex items-center gap-2">
                <svg className="h-4 w-4 text-[#c8ff00]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                {t}
              </span>
            ))}
          </div>

          {/* 3 mobile mockups */}
          <div className="animate-fade-in-up delay-500 mx-auto mt-16 flex items-end justify-center gap-4 px-4">
            {/* Left phone – slightly smaller, tilted left */}
            <div className="relative hidden sm:block w-[160px] shrink-0 -rotate-6 translate-y-6 opacity-70">
              <div className="relative overflow-hidden rounded-[2rem] border-[3px] border-white/10 bg-[#1a1a1a] shadow-2xl" style={{ aspectRatio: "9/19" }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 w-20 rounded-b-xl bg-[#0a0a0a] z-10" />
                <img
                  src="/case-ts-after.png"
                  alt="TS Installation på mobil"
                  className="h-full w-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="rounded-full bg-[#E6222E]/80 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm">Elektriker</span>
                </div>
              </div>
            </div>

            {/* Center phone – main, upright */}
            <div className="relative w-[200px] sm:w-[220px] shrink-0 z-10">
              <div className="relative overflow-hidden rounded-[2.5rem] border-[3px] border-white/20 bg-[#1a1a1a] shadow-[0_0_60px_rgba(200,255,0,0.15)]" style={{ aspectRatio: "9/19" }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 w-20 rounded-b-xl bg-[#0a0a0a] z-10" />
                <img
                  src="/case-bc-after.png"
                  alt="Battericentralen på mobil"
                  className="h-full w-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="rounded-full bg-[#c8ff00]/90 px-2 py-0.5 text-[10px] font-bold text-[#0a0a0a]">Din sajt här</span>
                  <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-white backdrop-blur-sm">24h</span>
                </div>
              </div>
              {/* Glow ring */}
              <div className="absolute -inset-2 rounded-[3rem] border border-[#c8ff00]/20 -z-10" />
            </div>

            {/* Right phone – slightly smaller, tilted right */}
            <div className="relative hidden sm:block w-[160px] shrink-0 rotate-6 translate-y-6 opacity-70">
              <div className="relative overflow-hidden rounded-[2rem] border-[3px] border-white/10 bg-[#1a1a1a] shadow-2xl" style={{ aspectRatio: "9/19" }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 w-20 rounded-b-xl bg-[#0a0a0a] z-10" />
                <img
                  src="/case-harpan-after.png"
                  alt="Harpan på mobil"
                  className="h-full w-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="rounded-full bg-[#F7C948]/80 px-2 py-0.5 text-[10px] font-medium text-[#0a0a0a] backdrop-blur-sm">Förskola</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
      </section>

      {/* MARQUEE */}
      <section className="overflow-hidden border-y border-white/5 py-5">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-6">
              {["Betala bara om du gillar det", "Leverans inom 24h", "Ingen bindningstid", "Mobilanpassad", "SEO-optimerad", "Snabbare än 95% av sajter", "Fri support", "Inga dolda avgifter", "Fria e-postadresser", "Betala bara om du gillar det", "Leverans inom 24h", "Ingen bindningstid", "Mobilanpassad", "SEO-optimerad", "Snabbare än 95% av sajter", "Fri support", "Inga dolda avgifter", "Fria e-postadresser"].map((text, j) => (
                <span key={j} className="text-sm font-medium uppercase tracking-[0.15em] text-[#333]">{text}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="px-[5%] py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-[1312px]">
          <ScrollReveal>
            <div className="mx-auto mb-16 max-w-2xl text-center md:mb-20">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#c8ff00]">Processen</p>
              <h2 className="mb-5 text-4xl tracking-tight md:text-5xl lg:text-6xl" style={{ fontFamily: "var(--font-display)" }}>
                Varför chansa?{" "}
                <span className="italic text-[#c8ff00]">Se resultatet innan du betalar.</span>
              </h2>
              <p className="text-[#f2f2f2] leading-relaxed">Inga långa möten. Inga vaga offerter. Inget risktagande.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { step: "01", title: "Vi bygger", desc: "Vi tar din logga och dina bilder och skapar ett proffsigt utkast – snabbt och skräddarsytt för ditt företag.", icon: <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg> },
              { step: "02", title: "Du granskar", desc: "Vi skickar en länk. Du ser exakt hur din nya sajt ser ut och fungerar – på mobil och dator – innan du tar ett enda beslut.", icon: <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg> },
              { step: "03", title: "Vi lanserar", desc: "Gillar du det du ser? För 4 900 kr gör vi sajten live. Om inte? Då kostar det dig noll kronor.", icon: <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg> },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="card-lift group relative overflow-hidden rounded-2xl border border-white/5 bg-[#111] p-8 md:p-10">
                  <div className="absolute -right-4 -top-4 text-[8rem] font-bold leading-none text-white/[0.02]">{item.step}</div>
                  <div className="relative z-10">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#c8ff00]/10 text-[#c8ff00] transition-colors group-hover:bg-[#c8ff00]/20">{item.icon}</div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#f2f2f2]">Steg {item.step}</p>
                    <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-[#f2f2f2]">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={300}>
            <div className="mt-8 rounded-2xl border border-[#c8ff00]/15 bg-[#c8ff00]/5 px-8 py-6 text-center">
              <p className="text-base text-[#f2f2f2]">
                <span className="font-semibold text-[#c8ff00]">Noll risk.</span>{" "}
                Om du inte är nöjd med förslaget kostar det dig ingenting. Inte en krona.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ALL-INCLUSIVE */}
      <section className="relative px-[5%] py-24 md:py-32">
        <div className="absolute inset-0 diagonal-top bg-[#111]" />
        <div className="relative z-10 mx-auto max-w-[1312px]">
          <ScrollReveal>
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#c8ff00]">All-inclusive</p>
              <h2 className="mb-5 text-4xl tracking-tight md:text-5xl lg:text-6xl" style={{ fontFamily: "var(--font-display)" }}>
                Allt du behöver{" "}
                <span className="italic text-[#c8ff00]">för 299 kr/mån.</span>
              </h2>
              <p className="text-[#f2f2f2] leading-relaxed">Vi har tagit bort alla dolda kostnader. Det här ingår i din månadsprenumeration.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "📧",
                title: "Fria e-postadresser",
                desc: "Sluta använda privat mail. Skapa namn@foretag.se till alla anställda – helt utan extra kostnad. Obegränsat antal.",
                highlight: true,
              },
              {
                icon: "⚡",
                title: "Blixtsnabb drift",
                desc: "Din sajt ligger på världsledande servrar som laddar omedelbart. Snabbare än 95% av alla svenska företagssajter.",
              },
              {
                icon: "🔒",
                title: "SSL-Säkerhet",
                desc: "Det gröna hänglåset ingår självklart – så att dina kunder känner sig trygga och Google rankar dig högre.",
              },
              {
                icon: "🇸🇪",
                title: "Svensk support",
                desc: "Har du frågor? Vi finns ett mail eller samtal bort. Ingen utländsk helpdesk, ingen automatiserad bot.",
              },
              {
                icon: "✏️",
                title: "Fri redigering",
                desc: "Du kan själv ändra texter och bilder när du vill – utan att behöva kontakta oss eller betala timarvode.",
              },
              {
                icon: "🛡️",
                title: "Underhållsfritt",
                desc: "Vi sköter all teknik och säkerhet i bakgrunden. Du fokuserar på jobbet – vi ser till att sajten alltid är uppe.",
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className={`card-lift rounded-2xl border p-7 h-full ${item.highlight ? "border-[#c8ff00]/25 bg-[#c8ff00]/5" : "border-white/5 bg-[#0a0a0a]"}`}>
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-2xl ${item.highlight ? "bg-[#c8ff00]/15" : "bg-[#c8ff00]/10"}`}>{item.icon}</div>
                  <h3 className="mb-2 font-semibold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-[#f2f2f2]">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Value callout */}
          <ScrollReveal delay={300}>
            <div className="mt-8 rounded-2xl border border-[#c8ff00]/20 bg-[#c8ff00]/5 px-8 py-7">
              <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
                <div>
                  <p className="text-base font-semibold text-white">Räkna på det: En firma med 5 anställda sparar ca 500–700 kr/mån bara på e-posten.</p>
                  <p className="mt-1 text-sm text-[#f2f2f2]">Det betyder att ditt Sitecraft-abonnemang på 299 kr inte bara är billigt – det är en <span className="text-[#c8ff00] font-semibold">vinstaffär från dag ett.</span></p>
                </div>
                <a href="/kontakt" className="shrink-0 rounded-full bg-[#c8ff00] px-6 py-3 text-sm font-semibold text-[#0a0a0a] transition-all hover:shadow-[0_0_30px_rgba(200,255,0,0.25)]">
                  Kom igång →
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* THE SWITCH – Comparison */}
      <section className="px-[5%] pt-0 pb-24 md:pb-32">
        <div className="mx-auto max-w-[1312px]">
          <ScrollReveal>
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#c8ff00]">Jämförelse</p>
              <h2 className="mb-5 text-4xl tracking-tight md:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
                Trött på långsamma sajter{" "}
                <span className="italic text-[#c8ff00]">och dyra mailkonton?</span>
              </h2>
              <p className="text-[#f2f2f2] leading-relaxed">Många betalar idag för en hemsida som laddar långsamt och får betala extra per månad för varje ny e-postadress. Vi har vänt på modellen.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mx-auto max-w-[860px] overflow-hidden rounded-2xl border border-white/5">
              {/* Header */}
              <div className="grid grid-cols-3 border-b border-white/5 bg-[#111]">
                <div className="px-6 py-4 text-sm font-semibold text-[#f2f2f2]">Funktion</div>
                <div className="border-l border-white/5 px-6 py-4 text-sm font-semibold text-[#f2f2f2]">Traditionell byrå / Wix</div>
                <div className="border-l border-[#c8ff00]/20 bg-[#c8ff00]/5 px-6 py-4 text-sm font-semibold text-[#c8ff00]">Sitecraft</div>
              </div>

              {[
                { label: "Startavgift", bad: "15 000 – 50 000 kr", good: "4 900 kr" },
                { label: "Laddtid", bad: "3–5 sekunder (Segt)", good: "Under 1 sekund (Blixtsnabb)" },
                { label: "E-post", bad: "Extra kostnad per person/mån", good: "Ingår (Obegränsat)" },
                { label: "Risk", bad: "Betala 50% innan start", good: "0 kr tills du godkänt designen" },
                { label: "Support", bad: "Helpdesk-tickets & väntetid", good: "Direkt kontakt, svenska tider" },
              ].map((row, i) => (
                <div key={i} className={`grid grid-cols-3 border-b border-white/5 last:border-0 ${i % 2 === 0 ? "bg-[#0a0a0a]" : "bg-[#111]"}`}>
                  <div className="px-6 py-4 text-sm font-medium">{row.label}</div>
                  <div className="border-l border-white/5 px-6 py-4 text-sm text-[#888]">
                    <span className="flex items-center gap-2">
                      <svg className="h-4 w-4 shrink-0 text-red-500/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                      {row.bad}
                    </span>
                  </div>
                  <div className="border-l border-[#c8ff00]/20 bg-[#c8ff00]/[0.03] px-6 py-4 text-sm text-white">
                    <span className="flex items-center gap-2">
                      <svg className="h-4 w-4 shrink-0 text-[#c8ff00]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      {row.good}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="border-t border-white/5 px-[5%] pt-16 pb-24 md:pt-20 md:pb-32">
        <div className="mx-auto max-w-[1312px]">
          <ScrollReveal>
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#c8ff00]">Case</p>
              <h2 className="mb-5 text-4xl tracking-tight md:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
                Riktiga sajter.{" "}
                <span className="italic text-[#c8ff00]">Riktiga företag.</span>
              </h2>
              <p className="text-[#f2f2f2] leading-relaxed">Inga mallar. Ingen copy-paste. Varje företag får en sajt som speglar just deras identitet.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {[
              { href: "/case#frestagard", img: "/case-frestagard-after.png", alt: "Fresta Gård", badge: "Restaurang", badgeColor: "bg-[#525E57]/80", badgeText: "text-white", city: "Kristianstad", title: "Fresta Gård", desc: "Från generisk Shopify-mall till en sajt som faktiskt säljer upplevelsen." },
              { href: "/case#tsinstallation", img: "/case-ts-after.png", alt: "TS Installation", badge: "Elektriker", badgeColor: "bg-[#E6222E]/80", badgeText: "text-white", city: "Hässleholm", title: "TS Installation AB", desc: "Från Wix-sajt som såg hobbyig ut till en professionell närvaro som vinner offerter." },
              { href: "/case#harpan", img: "/case-harpan-after.png", alt: "Förskolan Harpan", badge: "Förskola", badgeColor: "bg-[#F7C948]/80", badgeText: "text-[#0a0a0a]", city: "Hässleholm", title: "Förskolan Harpan", desc: "Från föråldrad WordPress-sajt till en varm, modern sajt som förmedlar rätt känsla." },
              { href: "/case#battericentralen", img: "/case-bc-after.png", alt: "Battericentralen", badge: "Batterileverantör", badgeColor: "bg-[#E8B630]/80", badgeText: "text-[#0a0a0a]", city: "Hässleholm", title: "Battericentralen", desc: "Från tung WordPress-sajt till modern, snabb sajt med dark/light mode." },
            ].map((c, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <a href={c.href} className="card-lift group block overflow-hidden rounded-2xl border border-white/5 bg-[#111]">
                  <div className="relative h-[280px] overflow-hidden">
                    <img src={c.img} alt={c.alt} className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex gap-2">
                      <span className={`rounded-full ${c.badgeColor} px-3 py-1 text-xs font-medium ${c.badgeText} backdrop-blur-sm`}>{c.badge}</span>
                      <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-[#f2f2f2] backdrop-blur-sm">{c.city}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="text-lg font-semibold">{c.title}</h3>
                      <span className="text-sm font-medium text-[#c8ff00] opacity-0 transition-opacity group-hover:opacity-100">Se case →</span>
                    </div>
                    <p className="text-sm text-[#f2f2f2]">{c.desc}</p>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={300}>
            <div className="mt-12 text-center">
              <a href="/case" className="group inline-flex items-center gap-3 rounded-full border border-white/10 px-8 py-4 text-base font-semibold text-[#f2f2f2] transition-all hover:border-[#c8ff00]/30 hover:text-white">
                Se alla case
                <svg className="btn-arrow h-4 w-4 transition-colors group-hover:text-[#c8ff00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" /></svg>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* PRICING */}
      <section className="border-t border-white/5 px-[5%] pt-16 pb-24 md:pt-20 md:pb-32">
        <div className="mx-auto max-w-[1312px]">
          <ScrollReveal>
            <div className="mx-auto mb-16 max-w-2xl text-center md:mb-20">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#c8ff00]">Priser</p>
              <h2 className="mb-5 text-4xl tracking-tight md:text-5xl lg:text-6xl" style={{ fontFamily: "var(--font-display)" }}>
                Inga dolda avgifter.{" "}
                <span className="italic text-[#c8ff00]">Inga krångliga avtal.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="mx-auto grid max-w-[860px] grid-cols-1 gap-6 md:grid-cols-2">
            <ScrollReveal>
              <div className="relative overflow-hidden rounded-2xl border border-[#c8ff00]/30 bg-[#111] p-8 md:p-10">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#c8ff00]/5 blur-3xl" />
                <div className="relative z-10">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#c8ff00]">Design & Start</p>
                  <span className="text-4xl font-bold" style={{ fontFamily: "var(--font-display)" }}>4 900 kr</span>
                  <p className="mb-8 mt-2 text-sm text-[#f2f2f2]">Engångskostnad vid godkänd sajt.<br />Betala ingenting förrän du är nöjd.</p>
                  <div className="space-y-3">
                    {["Komplett sajt med upp till 5 sidor", "Mobilanpassad & SEO-optimerad", "Leverans inom 24 timmar", "Du ser sajten innan du betalar", "Noll kostnad om du inte gillar det"].map((f, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#c8ff00]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        <span className="text-sm text-[#aaa]">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-[#111] p-8 md:p-10">
                <div className="relative z-10">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#f2f2f2]">Hosting & Support</p>
                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-bold" style={{ fontFamily: "var(--font-display)" }}>299 kr</span>
                    <span className="mb-1 text-sm text-[#f2f2f2]">/ mån</span>
                  </div>
                  <p className="mb-8 mt-2 text-sm text-[#f2f2f2]">Allt ingår. Inga dolda kostnader.<br />Avsluta när du vill.</p>
                  <div className="space-y-3">
                    {["Hosting & SSL-certifikat", "Fria e-postadresser (namn@foretag.se)", "Teknisk drift i bakgrunden", "Fri redigering av texter & bilder", "Svensk support – ingen bindningstid"].map((f, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#f2f2f2]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        <span className="text-sm text-[#aaa]">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* WHAT'S INCLUDED */}
          <ScrollReveal delay={200}>
            <div className="mx-auto mt-10 max-w-[860px] overflow-hidden rounded-2xl border border-white/5 bg-[#111]">
              <div className="border-b border-white/5 px-8 py-6">
                <h3 className="text-lg font-semibold">Det här ingår i Sitecraft-paketet</h3>
                <p className="mt-1 text-sm text-[#f2f2f2]">Allt du behöver för att synas online och vinna fler kunder.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {[
                  { icon: "🎨", title: "Skräddarsydd design", desc: "Vi bygger sajten efter din grafiska profil och dina bilder. Inget som ser ut som alla andras." },
                  { icon: "🗂️", title: "Sajtkarta (Struktur)", desc: "Hem, Om oss, Tjänster, Galleri och Kontakt. Behöver du fler sidor? 500 kr/st." },
                  { icon: "📱", title: "Mobiloptimering", desc: "Din sajt ser lika proffs ut på byggarbetsplatsen som på kontoret." },
                  { icon: "🔍", title: "Google-vänlig (SEO)", desc: "Vi optimerar tekniken så att dina lokala kunder hittar dig – inte konkurrenten." },
                  { icon: "✏️", title: "Eget publiceringsverktyg", desc: "Lägg till nya referensprojekt och bilder själv med ett klick." },
                  { icon: "✍️", title: "AI-skriven text ingår", desc: "Vi hjälper dig med texterna. Berätta om ditt företag – vi skriver, du faktagranskar." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 border-b border-r-0 border-white/5 px-8 py-6 last:border-0 sm:[&:nth-child(odd)]:border-r sm:[&:nth-child(odd)]:border-white/5">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="mb-1 text-sm font-semibold">{item.title}</p>
                      <p className="text-xs leading-relaxed text-[#f2f2f2]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/5 px-[5%] pt-16 pb-24 md:pt-20 md:pb-32">
        <div className="mx-auto max-w-[800px]">
          <ScrollReveal>
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#c8ff00]">FAQ</p>
              <h2 className="mb-5 text-4xl tracking-tight md:text-5xl" style={{ fontFamily: "var(--font-display)" }}>Vanliga frågor</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="space-y-4">
              {[
                { q: "Hur kan ni vara så snabba?", a: "Vi har byggt ett eget bibliotek med de bästa komponenterna för hantverkare. Kombinerat med modern AI-teknik kan vi kapa produktionstiden med 90% utan att tumma på kvaliteten." },
                { q: "Vad händer om jag inte gillar förslaget?", a: "Då tackar vi för visat intresse och går skilda vägar. Du har inte förlorat en krona. Inga fakturor, inga påminnelser – ingenting." },
                { q: "Vad händer om jag behöver mer än 5 sidor?", a: "Inga problem! 5 sidor täcker 95% av alla småföretags behov, men behöver du fler sidor för specifika tjänster lägger vi till det för en liten engångskostnad på 500 kr per sida." },
                { q: "Måste jag skriva all text själv?", a: "Nej, vi hjälper dig! Vi använder AI för att skriva professionella texter baserat på det du berättar om ditt företag. Du behöver bara faktagranska och godkänna." },
                { q: "Kan jag behålla min gamla e-post om jag flyttar till er?", a: "Absolut! Vi hjälper dig att flytta över dina befintliga adresser eller skapa nya. Det bästa? Hos oss betalar du inte extra för att lägga till fler anställda." },
                { q: "Äger jag min hemsida?", a: "Ja, innehållet är ditt. Vi sköter tekniken och driften så länge du är kund hos oss – precis som en prenumeration på Netflix eller Spotify. Vill du flytta sajten någon annanstans är det inga problem." },
                { q: "Vad ingår i hosting-paketet?", a: "Allt du behöver: snabb hosting, SSL-certifikat, fria e-postadresser, löpande tekniska uppdateringar och svensk support. Inga överraskningsfakturor." },
              ].map((item, i) => (
                <details key={i} className="group rounded-2xl border border-white/5 bg-[#111] px-6 py-5 open:border-[#c8ff00]/20">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold">
                    {item.q}
                    <svg className="h-5 w-5 shrink-0 text-[#c8ff00] transition-transform group-open:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-[#f2f2f2]">{item.a}</p>
                </details>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden px-[5%] py-24 md:py-32 lg:py-40">
        <div className="absolute inset-0 bg-gradient-to-br from-[#c8ff00]/5 via-transparent to-[#00ffc8]/5" />
        <div className="blob" style={{ width: 500, height: 500, background: "#c8ff00", top: "20%", left: "50%", transform: "translateX(-50%)" }} />
        <ScrollReveal>
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-4xl tracking-tight md:text-5xl lg:text-6xl" style={{ fontFamily: "var(--font-display)" }}>
              Beställ ett{" "}
              <span className="italic text-[#c8ff00]">gratis designförslag.</span>
            </h2>
            <p className="mb-10 text-lg text-[#f2f2f2] leading-relaxed">
              Vi bygger en demo med ditt företagsnamn, din logga och dina färger. Du ser exakt vad du får – innan du betalar en krona.
            </p>
            <a href="/kontakt" className="group inline-flex items-center gap-3 rounded-full bg-[#c8ff00] px-10 py-5 text-lg font-semibold text-[#0a0a0a] transition-all hover:shadow-[0_0_60px_rgba(200,255,0,0.3)]">
              Beställ gratis demo
              <svg className="btn-arrow h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" /></svg>
            </a>
            <p className="mt-6 text-sm text-[#f2f2f2]">Svar inom 24 timmar · Noll förpliktelser</p>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
