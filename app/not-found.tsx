import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">Page not found</p>
      <h1 className="mt-4 text-5xl font-black text-[#0B4F4A]">We could not find that page.</h1>
      <p className="mt-4 text-base text-[#4B5A58]">The page you requested may have moved, or the URL could be incorrect.</p>
      <Link href="/" className="mt-8 inline-flex items-center justify-center rounded-full bg-[#D4A017] px-6 py-3 text-sm font-bold text-[#0B4F4A]">
        Return home
      </Link>
    </div>
  );
}
