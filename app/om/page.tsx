import { ScrollReveal } from "../components/ScrollReveal";

export default function Om() {
  return (
    <main>
      <section className="px-[5%] pb-24 pt-32 md:pb-32 md:pt-40">
        <div className="mx-auto max-w-[1312px]">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <ScrollReveal>
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#c8ff00]">Om oss</p>
                <h1 className="mb-6 text-4xl tracking-tight md:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
                  Vi tror att varje företag förtjänar en{" "}
                  <span className="italic text-[#c8ff00]">riktigt bra</span> hemsida
                </h1>
                <div className="space-y-4 text-[#f2f2f2] leading-relaxed">
                  <p>
                    Sitecraft startades ur en enkel frustration: svenska småföretag betalar tiotusentals kronor för hemsidor som tar veckor att leverera. Eller så bygger de själva i Wix och Squarespace och får något som ser ut som alla andras.
                  </p>
                  <p>
                    Vi bestämde oss för att det måste finnas ett bättre sätt. Genom att kombinera modern webbutveckling med AI-driven produktion kan vi leverera kodbaserade, professionella sajter på en bråkdel av tiden och till en bråkdel av priset.
                  </p>
                  <p>
                    Resultatet? Hemsidor som är snabba, unika och byggda för att prestera – levererade inom 24 timmar.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#c8ff00]/10 to-transparent blur-2xl" />
                <div className="relative overflow-hidden rounded-2xl border border-white/5">
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="Team" className="h-full w-full object-cover" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-white/5 px-[5%] py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-[1312px]">
          <ScrollReveal>
            <div className="mx-auto mb-16 max-w-2xl text-center md:mb-20">
              <h2 className="mb-5 text-3xl tracking-tight md:text-4xl lg:text-5xl" style={{ fontFamily: "var(--font-display)" }}>Vad som driver oss</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              { title: "Hastighet", desc: "En hemsida ska inte ta veckor. Med vår process levererar vi inom 24 timmar – utan att kompromissa med kvaliteten." },
              { title: "Transparens", desc: "Inga dolda avgifter, inga vaga offerter. Du vet exakt vad du betalar och vad du får. Du ser sajten innan du bestämmer dig." },
              { title: "Kvalitet", desc: "Vi bygger med riktig kod – Next.js, React, Tailwind CSS. Inte drag-and-drop-mallar. Det ger snabbare laddtider, bättre SEO och en sajt som håller." },
              { title: "Tillgänglighet", desc: "Professionell webbutveckling ska inte kosta tiotusentals kronor. Vi har hittat ett sätt att leverera byrå-kvalitet till en femtedel av priset." },
            ].map((value, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="rounded-2xl border border-white/5 bg-[#111] p-8 md:p-10">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#c8ff00]/10">
                    <span className="text-lg font-bold text-[#c8ff00]">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-[#f2f2f2]">{value.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-[5%] py-24 md:py-32">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-5 text-3xl tracking-tight md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>Vill du veta mer?</h2>
            <p className="mb-8 text-[#f2f2f2]">Vi berättar gärna mer om hur vi jobbar och vad vi kan göra för just ditt företag.</p>
            <a href="/kontakt" className="group inline-flex items-center gap-3 rounded-full bg-[#c8ff00] px-8 py-4 text-base font-semibold text-[#0a0a0a] transition-all hover:shadow-[0_0_40px_rgba(200,255,0,0.25)]">
              Hör av dig
              <svg className="btn-arrow h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10"/></svg>
            </a>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
