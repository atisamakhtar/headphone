"use client";

import { useState } from "react";
import { FINISHES, PRODUCT_NAME, PRODUCT_SHORT } from "@/lib/product";

export default function FinishStudio() {
  const [selected, setSelected] = useState(FINISHES[0].id);
  const finish = FINISHES.find((item) => item.id === selected) ?? FINISHES[0];

  return (
    <div className="rounded-[28px] bg-gradient-to-br from-sony/80 via-white/15 to-cyan/70 p-px">
      <div className="rounded-[27px] bg-[#07080c]/95 px-7 py-8 md:px-9 md:py-10">
        <p className="text-[12px] uppercase tracking-[0.24em] text-white/40">Finish</p>
        <div className="mt-5 flex gap-3" role="radiogroup" aria-label="Finish">
          {FINISHES.map((item) => {
            const active = item.id === finish.id;
            return (
              <button
                key={item.id}
                type="button"
                role="radio"
                aria-checked={active}
                aria-label={item.name}
                onClick={() => setSelected(item.id)}
                className={`finish-swatch ${active ? "is-selected" : ""}`}
                style={{ background: item.swatch }}
              />
            );
          })}
        </div>
        <p className="mt-6 text-[28px] font-semibold tracking-tight text-white/95">{finish.name}</p>
        <p className="mt-2 text-[15px] text-white/75">{finish.line}</p>
        <p className="mt-3 text-[15px] leading-relaxed text-white/55">{finish.body}</p>
        <p className="btn-primary mt-8 h-12 w-full text-[15px]">Experience {PRODUCT_SHORT}</p>
        <p className="mt-4 text-center text-[12px] leading-relaxed text-white/35">{PRODUCT_NAME}</p>
      </div>
    </div>
  );
}
