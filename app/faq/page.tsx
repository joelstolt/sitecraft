import { ScrollReveal } from "../components/ScrollReveal";
import { FAQ } from "../components/FAQ";

export default function FAQPage() {
  return (
    <main>
      <section className="px-[5%] pb-24 pt-32 md:pb-32 md:pt-40">
        <div className="mx-auto max-w-[800px]">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#c8ff00]">
                FAQ
              </p>
              <h1
                className="mb-6 text-4xl tracking-tight md:text-5xl lg:text-6xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Vanliga{" "}
                <span className="italic text-[#c8ff00]">frågor</span>
              </h1>
              <p className="text-lg text-[#888] leading-relaxed">
                Hittar du inte svaret du letar efter? Hör av dig så hjälper vi
                dig.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <FAQ />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5 px-[5%] py-24 md:py-32">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="mb-5 text-3xl tracking-tight md:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Fortfarande osäker?
            </h2>
            <p className="mb-8 text-[#888] leading-relaxed">
              Boka en gratis demo så visar vi hur din sajt kan se ut – utan
              förpliktelser.
            </p>
            <a
              href="/kontakt"
              className="group inline-flex items-center gap-3 rounded-full bg-[#c8ff00] px-8 py-4 text-base font-semibold text-[#0a0a0a] transition-all hover:shadow-[0_0_40px_rgba(200,255,0,0.25)]"
            >
              Kontakta oss
              <svg
                className="btn-arrow h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 17L17 7M17 7H7M17 7v10"
                />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
