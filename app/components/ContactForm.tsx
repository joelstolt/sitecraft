"use client";

import { useState, FormEvent } from "react";

export const ContactForm = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xbdandzg", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-[#c8ff00]/20 bg-[#c8ff00]/5 p-12 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#c8ff00]/10">
          <svg
            className="h-8 w-8 text-[#c8ff00]"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h3
          className="mb-2 text-2xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Tack för din förfrågan!
        </h3>
        <p className="text-sm text-[#f2f2f2]">
          Vi återkommer inom ett par timmar.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-[#aaa]">
            Namn
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full rounded-xl border border-white/10 bg-[#111] p-4 text-white outline-none transition-colors focus:border-[#c8ff00]/50"
            placeholder="Ditt namn"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-[#aaa]">
            Företag
          </label>
          <input
            type="text"
            name="company"
            className="w-full rounded-xl border border-white/10 bg-[#111] p-4 text-white outline-none transition-colors focus:border-[#c8ff00]/50"
            placeholder="Företagsnamn"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-[#aaa]">
            E-post
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full rounded-xl border border-white/10 bg-[#111] p-4 text-white outline-none transition-colors focus:border-[#c8ff00]/50"
            placeholder="din@epost.se"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-[#aaa]">
            Telefon
          </label>
          <input
            type="tel"
            name="phone"
            className="w-full rounded-xl border border-white/10 bg-[#111] p-4 text-white outline-none transition-colors focus:border-[#c8ff00]/50"
            placeholder="070 000 00 00"
          />
        </div>
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-[#aaa]">
          Bransch
        </label>
        <select
          name="industry"
          className="w-full appearance-none rounded-xl border border-white/10 bg-[#111] p-4 text-[#f2f2f2] outline-none transition-colors focus:border-[#c8ff00]/50"
        >
          <option value="">Välj bransch</option>
          <option value="bygg">Bygg &amp; Hantverk</option>
          <option value="restaurang">Restaurang &amp; Café</option>
          <option value="frisor">Frisör &amp; Skönhet</option>
          <option value="halsa">Hälsa &amp; Träning</option>
          <option value="konsult">Konsult &amp; Redovisning</option>
          <option value="annan">Annan</option>
        </select>
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-[#aaa]">
          Berätta mer
        </label>
        <textarea
          name="message"
          className="min-h-[150px] w-full resize-none rounded-xl border border-white/10 bg-[#111] p-4 text-white outline-none transition-colors focus:border-[#c8ff00]/50"
          placeholder="Beskriv kort vad du behöver..."
        />
      </div>

      {status === "error" && (
        <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4 text-center text-sm text-red-400">
          Något gick fel. Försök igen eller maila oss på{" "}
          <a
            href="mailto:hej@sitecraft.se"
            className="underline hover:text-red-300"
          >
            hej@sitecraft.se
          </a>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#c8ff00] px-8 py-4 text-base font-semibold text-[#0a0a0a] transition-all hover:shadow-[0_0_40px_rgba(200,255,0,0.25)] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <>
            <svg
              className="h-5 w-5 animate-spin"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Skickar...
          </>
        ) : (
          <>
            Skicka förfrågan
            <svg
              className="btn-arrow h-5 w-5"
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
          </>
        )}
      </button>
    </form>
  );
};
