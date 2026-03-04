import { ScrollReveal } from "../components/ScrollReveal";

export default function Case() {
  return (
    <main>
      {/* HERO */}
      <section className="px-[5%] pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-[1312px]">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#c8ff00]">Case</p>
              <h1 className="mb-6 text-4xl tracking-tight md:text-5xl lg:text-6xl" style={{ fontFamily: "var(--font-display)" }}>
                Riktiga sajter åt{" "}
                <span className="italic text-[#c8ff00]">riktiga företag</span>
              </h1>
              <p className="text-lg text-[#f2f2f2] leading-relaxed">
                Varje projekt börjar med att vi förstår företaget – verksamheten, målgruppen och varumärket. Sedan bygger vi något som är 100% unikt.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FRESTA GÅRD */}
      <section id="frestagard" className="scroll-mt-24 border-t border-white/5 px-[5%] py-24 md:py-32">
        <div className="mx-auto max-w-[1312px]">
          <ScrollReveal>
            <div className="mb-12 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[#525E57]/20 px-4 py-1.5 text-sm font-medium" style={{ color: "#8a9b8f" }}>Restaurang</span>
              <span className="rounded-full bg-white/5 px-4 py-1.5 text-sm text-[#f2f2f2]">Kristianstad</span>
              <span className="rounded-full bg-white/5 px-4 py-1.5 text-sm text-[#f2f2f2]">2025</span>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
            <ScrollReveal>
              <div>
                <h2 className="mb-6 text-3xl tracking-tight md:text-4xl lg:text-5xl" style={{ fontFamily: "var(--font-display)" }}>Fresta Gård</h2>
                <p className="mb-6 text-lg text-[#f2f2f2] leading-relaxed">
                  Freddi och Sara Kärsbo startade med två grisar 2020 – idag har de 50+ djur och en restaurang som serverar eget kött i ett fusionskök där Skåne möter Asien och Mexiko. 4.9 av 5 på Google med 83 recensioner.
                </p>

                <div className="mb-8">
                  <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#c8ff00]">Problemet</h3>
                  <p className="text-sm text-[#f2f2f2] leading-relaxed">
                    Fresta Gård hade en generisk Shopify-mall som inte förmedlade vilka de är. Sajten berättade ingenting om gården, djuren eller maten – den kunde lika gärna tillhört vilken restaurang som helst. Gäster som googlade "restaurang Kristianstad" hittade inte dem, och de som hittade sajten fick ingen känsla för upplevelsen som väntade.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#c8ff00]">Vad vi gjorde</h3>
                  <p className="text-sm text-[#f2f2f2] leading-relaxed">
                    Vi byggde en sajt som känns som gården – varm, genuin och inbjudande. Designen speglar deras berättelse: från jord till bord. Sajten lyfter fram vad som gör dem unika – det egna köttet, fusionsköket, platsen i Hammarslund. Gäster ska vilja boka bord redan innan de scrollat klart.
                  </p>
                </div>

                <div>
                  <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#c8ff00]">Resultat</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: "Första intryck", value: "Sajten förmedlar gårdens känsla direkt" },
                      { label: "Google-synlighet", value: "SEO-optimerad för lokala sökningar" },
                      { label: "Mobilupplevelse", value: "Meny och bokning fungerar perfekt" },
                      { label: "Laddtid", value: "Under 1 sekund – snabbare än 95% av sajter" },
                      { label: "Leveranstid", value: "Klar inom 24 timmar" },
                      { label: "Underhåll", value: "Vi sköter allt – inga plugins att uppdatera" },
                    ].map((detail, i) => (
                      <div key={i} className="rounded-xl border border-white/5 bg-[#111] p-3">
                        <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#f2f2f2]/50">{detail.label}</p>
                        <p className="text-xs font-medium">{detail.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Before / After */}
            <ScrollReveal delay={200}>
              <div className="space-y-6">
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <span className="h-px flex-1 bg-red-500/20" />
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400">Före</span>
                    <span className="h-px flex-1 bg-red-500/20" />
                  </div>
                  <div className="overflow-hidden rounded-xl border border-red-500/10">
                    <img src="/case-frestagard-before.png" alt="Fresta Gård – gammal sajt" className="w-full" />
                  </div>
                  <p className="mt-2 text-center text-xs text-[#f2f2f2]/40">Generisk Shopify-mall – ingen personlighet eller lokal känsla</p>
                </div>
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <span className="h-px flex-1 bg-[#c8ff00]/20" />
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c8ff00]">Efter</span>
                    <span className="h-px flex-1 bg-[#c8ff00]/20" />
                  </div>
                  <div className="overflow-hidden rounded-xl border border-[#c8ff00]/20 shadow-[0_0_40px_rgba(200,255,0,0.05)]">
                    <img src="/case-frestagard-after.png" alt="Fresta Gård – ny sajt" className="w-full" />
                  </div>
                  <p className="mt-2 text-center text-xs text-[#f2f2f2]/40">Varm, inbjudande design som berättar gårdens historia</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* TS INSTALLATION */}
      <section id="tsinstallation" className="scroll-mt-24 border-t border-white/5 px-[5%] py-24 md:py-32">
        <div className="mx-auto max-w-[1312px]">
          <ScrollReveal>
            <div className="mb-12 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[#E6222E]/20 px-4 py-1.5 text-sm font-medium text-[#E6222E]">Elektriker</span>
              <span className="rounded-full bg-white/5 px-4 py-1.5 text-sm text-[#f2f2f2]">Hässleholm</span>
              <span className="rounded-full bg-white/5 px-4 py-1.5 text-sm text-[#f2f2f2]">2025</span>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
            <ScrollReveal>
              <div>
                <h2 className="mb-6 text-3xl tracking-tight md:text-4xl lg:text-5xl" style={{ fontFamily: "var(--font-display)" }}>TS Installation AB</h2>
                <p className="mb-6 text-lg text-[#f2f2f2] leading-relaxed">
                  Elinstallationsföretag grundat 2020 med fokus på industri och elkraft. Tre anställda, 100+ genomförda projekt och auktoriserade elektriker med 24h akut felavhjälpning.
                </p>

                <div className="mb-8">
                  <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#c8ff00]">Problemet</h3>
                  <p className="text-sm text-[#f2f2f2] leading-relaxed">
                    TS Installation hade en enkel, ljus Wix-sajt som inte kommunicerade seriositet eller kompetens. En industrikund som jämförde offerter och kollade deras sajt fick intrycket av ett hobbyföretag – inte ett företag med 100+ genomförda projekt och auktoriserade elektriker.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#c8ff00]">Vad vi gjorde</h3>
                  <p className="text-sm text-[#f2f2f2] leading-relaxed">
                    Vi byggde en sajt som utstrålar precis det deras kunder letar efter – professionalism, pålitlighet och teknisk kompetens. Mörk, kraftfull design som signalerar industri. Tydliga siffror som bygger förtroende: 100+ projekt, 24h akutservice, grundat 2020. En offertknapp som alltid finns tillgänglig.
                  </p>
                </div>

                <div>
                  <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#c8ff00]">Resultat</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: "Första intryck", value: "Professionellt och trovärdigt direkt" },
                      { label: "Google-synlighet", value: "SEO-optimerad för \"elektriker Hässleholm\"" },
                      { label: "Offertförfrågningar", value: "Tydlig CTA på varje sida" },
                      { label: "Laddtid", value: "Under 1 sekund – snabbare än 95% av sajter" },
                      { label: "Leveranstid", value: "Klar inom 24 timmar" },
                      { label: "Underhåll", value: "Vi sköter allt – inga plugins att uppdatera" },
                    ].map((detail, i) => (
                      <div key={i} className="rounded-xl border border-white/5 bg-[#111] p-3">
                        <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#f2f2f2]/50">{detail.label}</p>
                        <p className="text-xs font-medium">{detail.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Before / After */}
            <ScrollReveal delay={200}>
              <div className="space-y-6">
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <span className="h-px flex-1 bg-red-500/20" />
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400">Före</span>
                    <span className="h-px flex-1 bg-red-500/20" />
                  </div>
                  <div className="overflow-hidden rounded-xl border border-red-500/10">
                    <img src="/case-ts-before.png" alt="TS Installation – gammal sajt" className="w-full" />
                  </div>
                  <p className="mt-2 text-center text-xs text-[#f2f2f2]/40">Enkel Wix-sajt – såg ut som ett hobbyföretag</p>
                </div>
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <span className="h-px flex-1 bg-[#c8ff00]/20" />
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c8ff00]">Efter</span>
                    <span className="h-px flex-1 bg-[#c8ff00]/20" />
                  </div>
                  <div className="overflow-hidden rounded-xl border border-[#c8ff00]/20 shadow-[0_0_40px_rgba(200,255,0,0.05)]">
                    <img src="/case-ts-after.png" alt="TS Installation – ny sajt" className="w-full" />
                  </div>
                  <p className="mt-2 text-center text-xs text-[#f2f2f2]/40">Professionell, kraftfull sajt som bygger förtroende</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FÖRSKOLAN HARPAN */}
      <section id="harpan" className="scroll-mt-24 border-t border-white/5 px-[5%] py-24 md:py-32">
        <div className="mx-auto max-w-[1312px]">
          <ScrollReveal>
            <div className="mb-12 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[#F7C948]/20 px-4 py-1.5 text-sm font-medium text-[#F7C948]">Förskola</span>
              <span className="rounded-full bg-white/5 px-4 py-1.5 text-sm text-[#f2f2f2]">Hässleholm</span>
              <span className="rounded-full bg-white/5 px-4 py-1.5 text-sm text-[#f2f2f2]">2025</span>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
            <ScrollReveal>
              <div>
                <h2 className="mb-6 text-3xl tracking-tight md:text-4xl lg:text-5xl" style={{ fontFamily: "var(--font-display)" }}>Förskolan Harpan</h2>
                <p className="mb-6 text-lg text-[#f2f2f2] leading-relaxed">
                  Kristen förskola med musikprofil. 31 barn på två avdelningar – Pärlan och Diamanten. Sång, rytmik och instrument som verktyg för lärande.
                </p>
                <div className="mb-8">
                  <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#c8ff00]">Problemet</h3>
                  <p className="text-sm text-[#f2f2f2] leading-relaxed">
                    Harpan hade en föråldrad WordPress-sajt med grön header och rörig navigation. Sajten kommunicerade inte värmen och glädjen som präglar förskolan. Föräldrar som sökte "förskola Hässleholm" hittade inte dem, och de som hittade sajten fick inget intryck av musikprofilen eller miljön.
                  </p>
                </div>
                <div className="mb-8">
                  <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#c8ff00]">Vad vi gjorde</h3>
                  <p className="text-sm text-[#f2f2f2] leading-relaxed">
                    Vi byggde en varm, glad sajt i guld och marinblå som speglar barnens värld och musikprofilen. Tydlig navigation med sex sidor. Enkel att hitta öppettider, kontakt och platssökning. En sajt som får föräldrar att tänka "här vill jag att mitt barn ska gå".
                  </p>
                </div>
                <div>
                  <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#c8ff00]">Resultat</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: "Första intryck", value: "Varm och inbjudande direkt" },
                      { label: "Google-synlighet", value: "SEO-optimerad för lokala sökningar" },
                      { label: "Navigation", value: "Tydlig och enkel – 6 sidor" },
                      { label: "Laddtid", value: "Under 1 sekund" },
                      { label: "Leveranstid", value: "Klar inom 24 timmar" },
                      { label: "Underhåll", value: "Vi sköter allt" },
                    ].map((detail, i) => (
                      <div key={i} className="rounded-xl border border-white/5 bg-[#111] p-3">
                        <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#f2f2f2]/50">{detail.label}</p>
                        <p className="text-xs font-medium">{detail.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="space-y-6">
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <span className="h-px flex-1 bg-red-500/20" />
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400">Före</span>
                    <span className="h-px flex-1 bg-red-500/20" />
                  </div>
                  <div className="overflow-hidden rounded-xl border border-red-500/10">
                    <img src="/case-harpan-before.png" alt="Förskolan Harpan – gammal sajt" className="w-full" />
                  </div>
                  <p className="mt-2 text-center text-xs text-[#f2f2f2]/40">Föråldrad WordPress-sajt med grön header och rörig layout</p>
                </div>
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <span className="h-px flex-1 bg-[#c8ff00]/20" />
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c8ff00]">Efter</span>
                    <span className="h-px flex-1 bg-[#c8ff00]/20" />
                  </div>
                  <div className="overflow-hidden rounded-xl border border-[#c8ff00]/20 shadow-[0_0_40px_rgba(200,255,0,0.05)]">
                    <img src="/case-harpan-after.png" alt="Förskolan Harpan – ny sajt" className="w-full" />
                  </div>
                  <p className="mt-2 text-center text-xs text-[#f2f2f2]/40">Modern, varm design som speglar barnens glädje och musikprofilen</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* BATTERICENTRALEN */}
      <section id="battericentralen" className="scroll-mt-24 border-t border-white/5 px-[5%] py-24 md:py-32">
        <div className="mx-auto max-w-[1312px]">
          <ScrollReveal>
            <div className="mb-12 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[#E8B630]/20 px-4 py-1.5 text-sm font-medium text-[#E8B630]">Batterileverantör</span>
              <span className="rounded-full bg-white/5 px-4 py-1.5 text-sm text-[#f2f2f2]">Hässleholm</span>
              <span className="rounded-full bg-white/5 px-4 py-1.5 text-sm text-[#f2f2f2]">2025</span>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
            <ScrollReveal>
              <div>
                <h2 className="mb-6 text-3xl tracking-tight md:text-4xl lg:text-5xl" style={{ fontFamily: "var(--font-display)" }}>Battericentralen</h2>
                <p className="mb-6 text-lg text-[#f2f2f2] leading-relaxed">
                  Batterileverantör med rikstäckande leveranser. 30+ års erfarenhet, brett sortiment av batterier för fordon, industri, liftar, truckar och fritid.
                </p>
                <div className="mb-8">
                  <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#c8ff00]">Problemet</h3>
                  <p className="text-sm text-[#f2f2f2] leading-relaxed">
                    Battericentralen hade en tung WordPress-sajt byggd av en webbyrå. Sajten var långsam, svår att navigera på mobilen och kommunicerade inte det breda sortimentet eller den professionella servicen. Kunder som jämförde leverantörer valde ofta andra som hade en modernare närvaro.
                  </p>
                </div>
                <div className="mb-8">
                  <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#c8ff00]">Vad vi gjorde</h3>
                  <p className="text-sm text-[#f2f2f2] leading-relaxed">
                    Vi byggde en helt ny sajt med dark/light mode som utstrålar teknisk kompetens och professionalism. Tydlig produktstruktur som gör det enkelt att hitta rätt batteri. Kontaktinformation och öppettider alltid synliga. En sajt som bygger förtroende redan vid första besöket.
                  </p>
                </div>
                <div>
                  <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#c8ff00]">Resultat</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: "Första intryck", value: "Professionellt och modernt" },
                      { label: "Google-synlighet", value: "SEO-optimerad för alla batterityper" },
                      { label: "Unik funktion", value: "Dark/light mode toggle" },
                      { label: "Laddtid", value: "Under 1 sekund" },
                      { label: "Leveranstid", value: "Klar inom 24 timmar" },
                      { label: "Underhåll", value: "Vi sköter allt" },
                    ].map((detail, i) => (
                      <div key={i} className="rounded-xl border border-white/5 bg-[#111] p-3">
                        <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#f2f2f2]/50">{detail.label}</p>
                        <p className="text-xs font-medium">{detail.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="space-y-6">
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <span className="h-px flex-1 bg-red-500/20" />
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400">Före</span>
                    <span className="h-px flex-1 bg-red-500/20" />
                  </div>
                  <div className="overflow-hidden rounded-xl border border-red-500/10">
                    <img src="/case-bc-before.png" alt="Battericentralen – gammal sajt" className="w-full" />
                  </div>
                  <p className="mt-2 text-center text-xs text-[#f2f2f2]/40">Tung WordPress-sajt med standard webbyrå-design</p>
                </div>
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <span className="h-px flex-1 bg-[#c8ff00]/20" />
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c8ff00]">Efter</span>
                    <span className="h-px flex-1 bg-[#c8ff00]/20" />
                  </div>
                  <div className="overflow-hidden rounded-xl border border-[#c8ff00]/20 shadow-[0_0_40px_rgba(200,255,0,0.05)]">
                    <img src="/case-bc-after.png" alt="Battericentralen – ny sajt" className="w-full" />
                  </div>
                  <p className="mt-2 text-center text-xs text-[#f2f2f2]/40">Modern sajt med dark/light mode som utstrålar kompetens</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="border-t border-white/5 px-[5%] py-24 md:py-32">
        <div className="mx-auto max-w-[1312px]">
          <ScrollReveal>
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <h2 className="mb-5 text-3xl tracking-tight md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
                Samma byrå.{" "}
                <span className="italic text-[#c8ff00]">Helt olika sajter.</span>
              </h2>
              <p className="text-[#f2f2f2] leading-relaxed">
                Fyra helt olika branscher, fyra helt olika behov – men samma grund: en sajt som faktiskt fungerar som säljare, dygnet runt.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { name: "Fresta Gård", color: "#8a9b8f", goal: "Fler bordsbokningar", feeling: "\"Här vill jag äta!\"", seo: "restaurang Kristianstad" },
                { name: "TS Installation", color: "#E6222E", goal: "Fler offertförfrågningar", feeling: "\"Det här är proffs.\"", seo: "elektriker Hässleholm" },
                { name: "Förskolan Harpan", color: "#F7C948", goal: "Fler platssökningar", feeling: "\"Här vill jag att mitt barn ska gå.\"", seo: "förskola Hässleholm" },
                { name: "Battericentralen", color: "#E8B630", goal: "Fler kundförfrågningar", feeling: "\"Dem litar jag på.\"", seo: "batterileverantör Hässleholm" },
              ].map((c, i) => (
                <div key={i} className="rounded-2xl border border-white/5 bg-[#111] p-6">
                  <h3 className="mb-4 text-base font-semibold" style={{ color: c.color }}>{c.name}</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#f2f2f2]/40">Mål</p>
                      <p className="text-sm text-[#f2f2f2]">{c.goal}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#f2f2f2]/40">Besökaren tänker</p>
                      <p className="text-sm italic text-[#f2f2f2]">{c.feeling}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#f2f2f2]/40">SEO-fokus</p>
                      <p className="text-sm text-[#f2f2f2]">{c.seo}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden px-[5%] py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-[#c8ff00]/5 via-transparent to-[#00ffc8]/5" />
        <div className="blob" style={{ width: 500, height: 500, background: "#c8ff00", top: "20%", left: "50%", transform: "translateX(-50%)" }} />
        <ScrollReveal>
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-4xl tracking-tight md:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
              Vill du bli nästa{" "}
              <span className="italic text-[#c8ff00]">case?</span>
            </h2>
            <p className="mb-10 text-lg text-[#f2f2f2] leading-relaxed">
              Vi söker fler företag som vill ha en sajt som faktiskt speglar vilka de är. Berätta om ditt företag så visar vi vad vi kan göra.
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
