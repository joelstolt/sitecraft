import { ScrollReveal } from "./components/ScrollReveal";
import { FAQ } from "./components/FAQ";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-[5%]">
        <div className="blob" style={{ width: 600, height: 600, background: "#c8ff00", top: "-10%", right: "-10%" }} />
        <div className="blob" style={{ width: 400, height: 400, background: "#00ffc8", bottom: "10%", left: "-5%", animationDelay: "-7s" }} />

        <div className="relative z-10 mx-auto max-w-[900px] text-center">
          <div className="animate-fade-in-up mb-8 inline-flex items-center gap-2 rounded-full border border-[#c8ff00]/20 bg-[#c8ff00]/5 px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c8ff00] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#c8ff00]" />
            </span>
            <span className="text-sm text-[#c8ff00]">Early access – 10 platser kvar</span>
          </div>

          <h1 className="animate-fade-in-up delay-100 mb-6 text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.05] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            Din hemsida.{" "}
            <span className="italic text-[#c8ff00]">Klar imorgon.</span>
          </h1>

          <p className="animate-fade-in-up delay-200 mx-auto mb-10 max-w-[540px] text-lg leading-relaxed text-[#888]">
            Vi bygger din hemsida med riktig kod – inte mallar. Du ser den färdig med ditt företagsnamn innan du bestämmer dig.
          </p>

          <div className="animate-fade-in-up delay-300 flex flex-wrap items-center justify-center gap-4">
            <a href="/kontakt" className="group flex items-center gap-3 rounded-full bg-[#c8ff00] px-8 py-4 text-base font-semibold text-[#0a0a0a] transition-all hover:shadow-[0_0_40px_rgba(200,255,0,0.3)]">
              Boka gratis demo
              <svg className="btn-arrow h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" /></svg>
            </a>
            <a href="#process" className="flex items-center gap-2 rounded-full border border-white/10 px-8 py-4 text-base text-[#888] transition-all hover:border-white/30 hover:text-white">
              Så funkar det
            </a>
          </div>

          <div className="animate-fade-in-up delay-500 mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-[#555]">
            {["Leverans inom 24h", "Ingen bindningstid", "Se sajten innan du betalar"].map((t, i) => (
              <span key={i} className="flex items-center gap-2">
                <svg className="h-4 w-4 text-[#c8ff00]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
      </section>

      {/* MARQUEE */}
      <section className="overflow-hidden border-y border-white/5 py-5">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-6">
              {["Klar inom 24h", "Ingen bindningstid", "Se sajten innan du betalar", "Mobilanpassad", "SEO-optimerad", "SSL & hosting ingår", "Obegränsade ändringar", "Support ingår", "Klar inom 24h", "Ingen bindningstid", "Se sajten innan du betalar", "Mobilanpassad", "SEO-optimerad", "SSL & hosting ingår", "Obegränsade ändringar", "Support ingår"].map((text, j) => (
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
              <h2 className="mb-5 text-4xl tracking-tight md:text-5xl lg:text-6xl" style={{ fontFamily: "var(--font-display)" }}>Tre steg till din nya sajt</h2>
              <p className="text-[#888] leading-relaxed">Inga långa möten eller vaga offerter. Du berättar, vi bygger, du godkänner.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { step: "01", title: "Du berättar", desc: "Fyll i ett kort formulär med ditt företagsnamn, bransch, texter och önskemål. Det tar 5 minuter.", icon: <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg> },
              { step: "02", title: "Vi bygger", desc: "Inom 24 timmar har vi byggt din sajt med riktig kod – inte mallar. Du får en länk att granska.", icon: <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg> },
              { step: "03", title: "Du lanserar", desc: "Godkänn, ge feedback eller be om ändringar. När du är nöjd publicerar vi sajten live.", icon: <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg> },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="card-lift group relative overflow-hidden rounded-2xl border border-white/5 bg-[#111] p-8 md:p-10">
                  <div className="absolute -right-4 -top-4 text-[8rem] font-bold leading-none text-white/[0.02]">{item.step}</div>
                  <div className="relative z-10">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#c8ff00]/10 text-[#c8ff00] transition-colors group-hover:bg-[#c8ff00]/20">{item.icon}</div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#555]">Steg {item.step}</p>
                    <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-[#888]">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* DEMOS */}
      <section className="relative px-[5%] py-24 md:py-32 lg:py-40">
        <div className="absolute inset-0 diagonal-top bg-[#111]" />
        <div className="relative z-10 mx-auto max-w-[1312px]">
          <ScrollReveal>
            <div className="mx-auto mb-16 max-w-2xl text-center md:mb-20">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#c8ff00]">Portfolio</p>
              <h2 className="mb-5 text-4xl tracking-tight md:text-5xl lg:text-6xl" style={{ fontFamily: "var(--font-display)" }}>Sajter vi byggt</h2>
              <p className="text-[#888] leading-relaxed">Riktiga sajter åt riktiga företag. Varje levererad inom 24 timmar.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {[
              { title: "DFT Bygg AB", category: "Byggföretag", desc: "Komplett företagssajt med tjänstesidor, offertformulär och Google Maps-integration.", url: "https://dft-bygg-demo.vercel.app", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80" },
              { title: "Wok House", category: "Restaurang", desc: "Elegant restaurangsajt med meny, öppettider och kontaktformulär i mörkt tema.", url: "https://restaurang-demo-z7ze.vercel.app", img: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&q=80" },
            ].map((project, i) => (
              <ScrollReveal key={i} delay={i * 200}>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="card-lift group block overflow-hidden rounded-2xl border border-white/5 bg-[#0a0a0a]">
                  <div className="relative h-[280px] overflow-hidden">
                    <img src={project.img} alt={project.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60" />
                    <div className="absolute bottom-4 left-4 rounded-full bg-[#c8ff00]/10 px-3 py-1 text-xs font-medium text-[#c8ff00] backdrop-blur-sm">{project.category}</div>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <svg className="btn-arrow h-5 w-5 text-[#555] transition-colors group-hover:text-[#c8ff00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
                    </div>
                    <p className="text-sm leading-relaxed text-[#888]">{project.desc}</p>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="px-[5%] py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-[1312px]">
          <ScrollReveal>
            <div className="mx-auto mb-16 max-w-2xl text-center md:mb-20">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#c8ff00]">Priser</p>
              <h2 className="mb-5 text-4xl tracking-tight md:text-5xl lg:text-6xl" style={{ fontFamily: "var(--font-display)" }}>Enkelt och transparent</h2>
              <p className="text-[#888] leading-relaxed">Inga dolda avgifter. Inga överraskningar.</p>
            </div>
          </ScrollReveal>

          <div className="mx-auto grid max-w-[900px] grid-cols-1 gap-6 md:grid-cols-2">
            {/* Early Access */}
            <ScrollReveal>
              <div className="relative overflow-hidden rounded-2xl border border-[#c8ff00]/30 bg-[#111] p-8 md:p-10">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#c8ff00]/5 blur-3xl" />
                <div className="relative z-10">
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#c8ff00]/10 px-3 py-1">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c8ff00] opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#c8ff00]" />
                    </span>
                    <span className="text-xs font-semibold text-[#c8ff00]">Early access</span>
                  </div>
                  <h3 className="mb-2 text-3xl" style={{ fontFamily: "var(--font-display)" }}>0 kr</h3>
                  <p className="mb-6 text-sm text-[#888]">Hemsidan gratis (värde 5 990 kr).<br />Du betalar bara <span className="font-semibold text-white">290 kr/mån</span> för hosting & support.</p>
                  <div className="mb-8 space-y-3">
                    {["Komplett hemsida med upp till 5 sidor", "Mobilanpassad & SEO-optimerad", "Leverans inom 24 timmar", "Hosting, SSL & support ingår", "Du ger oss en recension i utbyte"].map((f, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#c8ff00]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        <span className="text-sm text-[#aaa]">{f}</span>
                      </div>
                    ))}
                  </div>
                  <a href="/kontakt" className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#c8ff00] px-6 py-4 text-base font-semibold text-[#0a0a0a] transition-all hover:shadow-[0_0_40px_rgba(200,255,0,0.25)]">
                    Ansök om early access
                    <svg className="btn-arrow h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                  </a>
                  <p className="mt-4 text-center text-xs text-[#555]">Bara 10 platser – sedan stängs erbjudandet</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Standard */}
            <ScrollReveal delay={150}>
              <div className="rounded-2xl border border-white/5 bg-[#111] p-8 md:p-10">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1">
                  <span className="text-xs font-semibold text-[#888]">Ordinarie pris</span>
                </div>
                <h3 className="mb-2 text-3xl" style={{ fontFamily: "var(--font-display)" }}>5 990 kr</h3>
                <p className="mb-6 text-sm text-[#888]">Engångspris för hemsidan.<br />Sedan <span className="font-semibold text-white">290 kr/mån</span> för hosting & support.</p>
                <div className="mb-8 space-y-3">
                  {["Komplett hemsida med upp till 5 sidor", "Mobilanpassad & SEO-optimerad", "Leverans inom 24 timmar", "Hosting, SSL & support ingår", "Obegränsade mindre ändringar"].map((f, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#555]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      <span className="text-sm text-[#aaa]">{f}</span>
                    </div>
                  ))}
                </div>
                <a href="/kontakt" className="flex w-full items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-4 text-base font-semibold text-white transition-all hover:border-white/30">
                  Kom igång
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/5 px-[5%] py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-[800px]">
          <ScrollReveal>
            <div className="mx-auto mb-16 max-w-2xl text-center md:mb-20">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#c8ff00]">FAQ</p>
              <h2 className="mb-5 text-4xl tracking-tight md:text-5xl lg:text-6xl" style={{ fontFamily: "var(--font-display)" }}>Vanliga frågor</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <FAQ limit={5} />
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="mt-10 text-center">
              <a href="/faq" className="group inline-flex items-center gap-2 text-sm font-semibold text-[#888] transition-colors hover:text-[#c8ff00]">
                Se alla frågor
                <svg className="btn-arrow h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10"/></svg>
              </a>
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
              Redo att få en sajt du är{" "}
              <span className="italic text-[#c8ff00]">stolt över?</span>
            </h2>
            <p className="mb-10 text-lg text-[#888] leading-relaxed">
              Vi bygger en demo med ditt företagsnamn, dina texter och dina färger. Helt gratis, helt utan förpliktelser.
            </p>
            <a href="/kontakt" className="group inline-flex items-center gap-3 rounded-full bg-[#c8ff00] px-10 py-5 text-lg font-semibold text-[#0a0a0a] transition-all hover:shadow-[0_0_60px_rgba(200,255,0,0.3)]">
              Boka gratis demo
              <svg className="btn-arrow h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" /></svg>
            </a>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}