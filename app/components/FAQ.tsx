"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const defaultFAQs: FAQItem[] = [
  {
    question: "Hur snabbt levererar ni?",
    answer:
      "Inom 24 timmar från att vi fått ditt material. Du får en länk till en förhandsversion som du kan granska och ge feedback på innan vi publicerar.",
  },
  {
    question: "Vad ingår i månadskostnaden?",
    answer:
      "Hosting via Vercel med SSL-certifikat, CDN, automatisk skalning och 99.9% uptime. Dessutom ingår löpande support och mindre ändringar som textuppdateringar och bildbyten.",
  },
  {
    question: "Är jag bunden till ett avtal?",
    answer:
      "Nej, ingen bindningstid. Du kan säga upp din månadskostnad när som helst. Din sajt fortsätter fungera tills perioden löper ut.",
  },
  {
    question: "Vad menas med 'kodbaserad' hemsida?",
    answer:
      "Till skillnad från drag-and-drop-verktyg som Wix och Squarespace bygger vi med riktig kod – Next.js, React och Tailwind CSS. Det ger snabbare laddtider, bättre SEO och en sajt som är helt unik för ditt företag.",
  },
  {
    question: "Kan jag redigera sajten själv?",
    answer:
      "Just nu hanterar vi alla ändringar åt dig – det ingår i månadskostnaden. Vi utforskar möjligheten att lägga till ett CMS längre fram.",
  },
  {
    question: "Vad händer om jag inte är nöjd med resultatet?",
    answer:
      "Du ser sajten innan du betalar. Om du inte är nöjd efter förhandsvisningen kan du ge feedback så justerar vi, eller så går vi skilda vägar utan kostnad.",
  },
  {
    question: "Vad innebär early access-erbjudandet?",
    answer:
      "De 10 första kunderna får hemsidan helt gratis (värde 5 990 kr) och betalar bara 290 kr/mån för hosting och support. I utbyte ber vi om en ärlig recension som vi kan använda som referens.",
  },
  {
    question: "Vilka branscher jobbar ni med?",
    answer:
      "Vi bygger sajter åt alla typer av småföretag, men har specialpaket för bygg & hantverk, restaurang & café, frisör & skönhet, hälsa & träning, samt konsult & redovisning.",
  },
];

const FAQAccordion = ({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <div
      className={`rounded-2xl border transition-colors duration-300 ${
        isOpen
          ? "border-[#c8ff00]/20 bg-[#c8ff00]/[0.02]"
          : "border-white/5 bg-[#111] hover:border-white/10"
      }`}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 p-6 text-left md:p-8"
      >
        <span className="text-base font-semibold leading-snug md:text-lg">
          {item.question}
        </span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
            isOpen
              ? "bg-[#c8ff00] text-[#0a0a0a] rotate-45"
              : "bg-white/5 text-[#f2f2f2]"
          }`}
        >
          <svg
            width="14"
            height="14"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 5v14m7-7H5"
            />
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-sm leading-relaxed text-[#f2f2f2] md:px-8 md:pb-8">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export const FAQ = ({
  items = defaultFAQs,
  limit,
}: {
  items?: FAQItem[];
  limit?: number;
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const displayItems = limit ? items.slice(0, limit) : items;

  return (
    <div className="flex flex-col gap-3">
      {displayItems.map((item, i) => (
        <FAQAccordion
          key={i}
          item={item}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
};
