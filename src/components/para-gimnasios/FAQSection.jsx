"use client";

import { useState } from "react";
import { PARA_GIMNASIOS_FAQS } from "@/data/paraGimnasiosFaqs";
import { ChevronDown } from "lucide-react";

/* ───────────────────────────────────────────────────────────
   10. FAQ
   ─────────────────────────────────────────────────────────── */
export default function FAQSection() {
  const faqs = PARA_GIMNASIOS_FAQS;

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section style={{ padding: "100px 24px", background: "var(--bg-darker)" }}>
      <div style={{ maxWidth: 820, margin: "0 auto" }}>
        <div className="aparece" style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ fontSize: "var(--fs-h2)", fontWeight: 800, lineHeight: 1.2 }}>
            Preguntas frecuentes
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {faqs.map((f, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                className={`aparece pg-faq ${isOpen ? "pg-faq-open" : ""}`}
                key={i}
            >
                <button
                  type="button"
                  className="pg-faq-q"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                >
                  {f.q}
                  <ChevronDown className="pg-chev" aria-hidden="true" />
                </button>
                <div className="pg-faq-a">
                  <div>
                    <p>{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
