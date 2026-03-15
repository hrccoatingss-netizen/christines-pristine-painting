"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className={`overflow-hidden rounded-xl border transition-all duration-300 ${
            openIndex === i
              ? "border-accent/20 bg-white shadow-md"
              : "border-gray-100 bg-white shadow-sm hover:shadow-md"
          }`}
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors"
            aria-expanded={openIndex === i}
          >
            <span className="pr-4 text-base font-semibold text-primary sm:text-lg">
              {item.question}
            </span>
            <div
              className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                openIndex === i
                  ? "bg-accent text-white rotate-180"
                  : "bg-primary/5 text-primary"
              }`}
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === i ? "max-h-96 pb-6" : "max-h-0"
            }`}
          >
            <div className="px-6">
              <div className="mb-4 h-px bg-gradient-to-r from-accent/20 via-accent/10 to-transparent" />
              <p className="text-gray-500 leading-relaxed">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
