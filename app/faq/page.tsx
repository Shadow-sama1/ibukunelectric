import { faqItems } from "@/app/lib/site-data";

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] bg-[#E6F4F2] p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">FAQ</p>
        <h1 className="mt-3 text-4xl font-black text-[#0B4F4A] sm:text-5xl">Frequently asked questions</h1>
      </div>

      <div className="mt-10 space-y-4">
        {faqItems.map((item) => (
          <div key={item.question} className="rounded-[1.5rem] border border-[#E7EAE8] bg-white p-5 shadow-sm">
            <h2 className="text-xl font-black text-[#0B4F4A]">{item.question}</h2>
            <p className="mt-3 text-sm leading-7 text-[#4B5A58]">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
