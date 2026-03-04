"use client";

import { useState, useEffect } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { title: "Tjänster", url: "/tjanster" },
    { title: "Om oss", url: "/om" },
    { title: "FAQ", url: "/faq" },
    { title: "Kontakt", url: "/kontakt" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1312px] items-center justify-between px-[5%]">
        <a
          href="/"
          className="flex items-center gap-2"
        >
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
            <span className="font-light text-[#c8ff00]" style={{ fontFamily: "var(--font-display)" }}>craft</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              className="link-underline text-sm text-[#f2f2f2] transition-colors hover:text-white"
            >
              {link.title}
            </a>
          ))}
          <a
            href="/kontakt"
            className="group flex items-center gap-2 rounded-full bg-[#c8ff00] px-5 py-2.5 text-sm font-semibold text-[#0a0a0a] transition-all hover:bg-[#d4ff33] hover:shadow-[0_0_30px_rgba(200,255,0,0.25)]"
          >
            Kom igång
            <svg
              className="btn-arrow h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 17L17 7M17 7H7M17 7v10"
              />
            </svg>
          </a>
        </div>

        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block h-[1.5px] w-5 bg-white transition-all duration-300 ${
              isOpen ? "translate-y-[6.5px] -rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-5 bg-white transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-5 bg-white transition-all duration-300 ${
              isOpen ? "-translate-y-[6.5px] rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          isOpen ? "max-h-[400px] pb-8" : "max-h-0"
        }`}
      >
        <div className="px-[5%]">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              className="block border-b border-white/5 py-4 text-lg text-[#f2f2f2] transition-colors hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {link.title}
            </a>
          ))}
          <a
            href="/kontakt"
            className="mt-6 flex items-center justify-center gap-2 rounded-full bg-[#c8ff00] px-6 py-3 text-base font-semibold text-[#0a0a0a]"
            onClick={() => setIsOpen(false)}
          >
            Kom igång
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
};