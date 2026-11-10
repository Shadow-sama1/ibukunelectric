"use client";

import { useMemo, useState } from "react";

const applianceLoad = [
  { label: "Fans", watts: 80 },
  { label: "LED lights", watts: 15 },
  { label: "TV", watts: 120 },
  { label: "Fridge", watts: 220 },
  { label: "Air conditioner", watts: 950 },
  { label: "Water pump", watts: 500 },
  { label: "Laptop", watts: 90 },
  { label: "Microwave", watts: 1000 },
];

export default function CalculatorPage() {
  const [selected, setSelected] = useState<Record<string, number>>({
    Fans: 3,
    "LED lights": 8,
    TV: 1,
    Fridge: 1,
    "Air conditioner": 1,
    "Water pump": 1,
    Laptop: 2,
    Microwave: 1,
  });

  const totalLoad = useMemo(() => {
    return Object.entries(selected).reduce((sum, [label, qty]) => {
      const item = applianceLoad.find((entry) => entry.label === label);
      return sum + (item ? item.watts * qty : 0);
    }, 0);
  }, [selected]);

  const recommendedKva = totalLoad > 6000 ? 6 : totalLoad > 3500 ? 4 : totalLoad > 1800 ? 2 : 1;

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] bg-[#E6F4F2] p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">Load calculator</p>
        <h1 className="mt-3 text-4xl font-black text-[#0B4F4A] sm:text-5xl">Load calculator</h1>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-[#E7EAE8] bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black text-[#0B4F4A]">Estimate your household load</h2>
          <div className="mt-6 space-y-5">
            {applianceLoad.map((item) => (
              <div key={item.label} className="flex items-center justify-between gap-4 rounded-2xl bg-[#F7F8F8] p-4">
                <div>
                  <p className="font-semibold text-[#0F1F1E]">{item.label}</p>
                  <p className="text-xs text-[#4B5A58]">{item.watts}W each</p>
                </div>
                <input
                  type="number"
                  min={0}
                  value={selected[item.label] ?? 0}
                  onChange={(e) => setSelected((current) => ({ ...current, [item.label]: Number(e.target.value) || 0 }))}
                  className="w-20 rounded-xl border border-[#DDEAE7] bg-white px-3 py-2 text-center text-sm font-semibold text-[#0F1F1E] outline-none"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] bg-[#0B4F4A] p-8 text-white shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F5D77A]">Recommended system</p>
          <h2 className="mt-4 text-3xl font-black">{recommendedKva}kVA</h2>
          <div className="mt-6 grid gap-4 text-sm text-[#D7E9E6]">
            <div className="rounded-2xl bg-white/5 p-4">
              <p className="text-[#F5D77A]">Estimated total load</p>
              <p className="mt-2 text-2xl font-black text-white">{totalLoad.toLocaleString()}W</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-4">
              <p className="text-[#F5D77A]">Suggested battery</p>
              <p className="mt-2 text-xl font-black text-white">5.5kWh</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-4">
              <p className="text-[#F5D77A]">Suggested panels</p>
              <p className="mt-2 text-xl font-black text-white">2 units</p>
            </div>
          </div>
          <p className="mt-6 text-sm leading-7 text-[#D7E9E6]">
            This estimate is intended for preliminary planning. A site visit helps confirm the exact solar panel arrangement, panel count and battery specification.
          </p>
        </div>
      </div>
    </div>
  );
}
