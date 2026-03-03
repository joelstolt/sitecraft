import { ScrollReveal } from "../components/ScrollReveal";
import { ContactForm } from "../components/ContactForm";

export default function Kontakt() {
  return (
    <main>
      <section className="px-[5%] pb-24 pt-32 md:pb-32 md:pt-40">
        <div className="mx-auto max-w-[1312px]">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <ScrollReveal>
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#c8ff00]">Kontakt</p>
                <h1 className="mb-6 text-4xl tracking-tight md:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
                  Berätta om ditt{" "}
                  <span className="italic text-[#c8ff00]">projekt</span>
                </h1>
                <p className="mb-10 text-lg text-[#888] leading-relaxed">
                  Fyll i formuläret så återkommer vi inom ett par timmar. Eller maila oss direkt.
                </p>

                <ContactForm />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="flex flex-col gap-6 lg:pt-24">
                {[
                  { label: "E-post", value: "hej@sitecraft.se", href: "mailto:hej@sitecraft.se", icon: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg> },
                  { label: "Plats", value: "Hässleholm, Sverige", href: null, icon: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg> },
                  { label: "Svarstid", value: "Inom ett par timmar", href: null, icon: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
                ].map((item, i) => (
                  <div key={i} className="rounded-2xl border border-white/5 bg-[#111] p-6">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#c8ff00]/10 text-[#c8ff00]">
                      {item.icon}
                    </div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#555]">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-lg font-medium text-white transition-colors hover:text-[#c8ff00]">{item.value}</a>
                    ) : (
                      <p className="text-lg font-medium">{item.value}</p>
                    )}
                  </div>
                ))}

                <div className="mt-4 rounded-2xl border border-[#c8ff00]/20 bg-[#c8ff00]/5 p-6">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c8ff00] opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#c8ff00]" />
                    </span>
                    <span className="text-sm font-semibold text-[#c8ff00]">Early access</span>
                  </div>
                  <p className="text-sm text-[#aaa] leading-relaxed">
                    Just nu söker vi 10 företag som vill vara först. Du får hemsidan gratis (värde 5 990 kr) – du betalar bara 290 kr/mån. I utbyte ger du oss en ärlig recension.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
