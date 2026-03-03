export const Footer = () => {
  return (
    <footer className="border-t border-white/5 px-[5%] py-12 md:py-16">
      <div className="mx-auto max-w-[1312px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="36" height="36" rx="8" fill="#c8ff00"/>
                <rect x="9" y="12" width="14" height="18" rx="2" fill="#0a0a0a" opacity="0.2"/>
                <rect x="12" y="9" width="14" height="18" rx="2" fill="#0a0a0a" opacity="0.5"/>
                <rect x="15" y="6" width="14" height="18" rx="2" fill="#0a0a0a"/>
                <line x1="19" y1="11" x2="25" y2="11" stroke="#c8ff00" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="19" y1="14.5" x2="25" y2="14.5" stroke="#c8ff00" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
                <line x1="19" y1="18" x2="23" y2="18" stroke="#c8ff00" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
              </svg>
              <span className="text-lg tracking-tight">
                <span className="font-bold">Site</span>
                <span className="italic text-[#c8ff00]" style={{ fontFamily: "var(--font-display)" }}>craft</span>
              </span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-[#555]">
              Vi bygger moderna, snabba hemsidor åt svenska småföretag.
              Kodbaserad kvalitet – levererad på under 24 timmar.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#555]">
              Sidor
            </h4>
            <div className="flex flex-col gap-3">
              <a href="/tjanster" className="text-sm text-[#888] transition-colors hover:text-white">Tjänster</a>
              <a href="/om" className="text-sm text-[#888] transition-colors hover:text-white">Om oss</a>
              <a href="/faq" className="text-sm text-[#888] transition-colors hover:text-white">FAQ</a>
              <a href="/kontakt" className="text-sm text-[#888] transition-colors hover:text-white">Kontakt</a>
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#555]">
              Kontakt
            </h4>
            <div className="flex flex-col gap-3 text-sm text-[#888]">
              <span>Hässleholm, Sverige</span>
              <a href="mailto:hej@sitecraft.se" className="transition-colors hover:text-white">hej@sitecraft.se</a>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <p className="text-xs text-[#333]">
            © 2025 Sitecraft. Alla rättigheter förbehållna.
          </p>
          <p className="text-xs text-[#333]">
            Byggd med Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};