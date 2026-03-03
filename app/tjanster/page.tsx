import { ScrollReveal } from "../components/ScrollReveal";

export default function Tjanster() {
  return (
    <main>
      <section className="px-[5%] pb-24 pt-32 md:pb-32 md:pt-40">
        <div className="mx-auto max-w-[1312px]">
          <ScrollReveal>
            <div className="mx-auto mb-20 max-w-3xl text-center">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#c8ff00]">Tjänster</p>
              <h1 className="mb-6 text-4xl tracking-tight md:text-5xl lg:text-6xl" style={{ fontFamily: "var(--font-display)" }}>
                Allt du behöver för att{" "}
                <span className="italic text-[#c8ff00]">synas online</span>
              </h1>
              <p className="text-lg text-[#888] leading-relaxed">Vi tar hand om allt – från design och utveckling till hosting och support. Du fokuserar på ditt företag.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Hemsida på en dag", desc: "En komplett, modern hemsida med upp till 5 sidor. Mobilanpassad, snabb och SEO-optimerad. Byggd med riktig kod, inte mallar.", icon: <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg> },
              { title: "Hosting & drift", desc: "Ultrasnabb hosting via Vercel med SSL, CDN och automatisk skalning. 99.9% uptime. Allt ingår i månadskostnaden.", icon: <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" /></svg> },
              { title: "SEO-optimering", desc: "Varje sajt byggs med teknisk SEO i grunden – snabb laddtid, rätt metadata, semantisk HTML och mobilanpassning.", icon: <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" /></svg> },
              { title: "Ändringar & support", desc: "Behöver du uppdatera texter, bilder eller lägga till en ny sektion? Mindre ändringar ingår i din månadskostnad.", icon: <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384-3.115A1.003 1.003 0 005.5 13.14v5.72a1.003 1.003 0 00.536.886l5.384 3.114a1.003 1.003 0 001.06 0l5.384-3.114a1.003 1.003 0 00.536-.886v-5.72a1.003 1.003 0 00-.536-.886l-5.384-3.114a1.003 1.003 0 00-1.06 0z" /></svg> },
              { title: "Branschpaket", desc: "Skräddarsydda lösningar för din bransch. Bygg, restaurang, frisör, PT – med sektioner som passar just ditt företag.", icon: <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" /></svg> },
              { title: "White label", desc: "Är du en byrå eller frilansare? Vi levererar sajter under ditt varumärke. Du säljer, vi bygger.", icon: <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg> },
            ].map((service, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="card-lift group h-full rounded-2xl border border-white/5 bg-[#111] p-8">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#c8ff00]/10 text-[#c8ff00] transition-colors group-hover:bg-[#c8ff00]/20">
                    {service.icon}
                  </div>
                  <h3 className="mb-3 text-lg font-semibold">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-[#888]">{service.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5 px-[5%] py-24 md:py-32">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-5 text-3xl tracking-tight md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>Osäker på vad du behöver?</h2>
            <p className="mb-8 text-[#888] leading-relaxed">Hör av dig så hjälper vi dig hitta rätt. Ingen förpliktelse.</p>
            <a href="/kontakt" className="group inline-flex items-center gap-3 rounded-full bg-[#c8ff00] px-8 py-4 text-base font-semibold text-[#0a0a0a] transition-all hover:shadow-[0_0_40px_rgba(200,255,0,0.25)]">
              Kontakta oss
              <svg className="btn-arrow h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10"/></svg>
            </a>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
