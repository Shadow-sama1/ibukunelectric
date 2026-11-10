"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] bg-[#E6F4F2] p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">Contact us</p>
        <h1 className="mt-3 text-4xl font-black text-[#0B4F4A] sm:text-5xl">Contact us</h1>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] bg-[#0B4F4A] p-8 text-white shadow-sm">
          <h2 className="text-2xl font-black">Let&apos;s plan your energy upgrade</h2>
          <div className="mt-8 space-y-4 text-sm text-[#D7E9E6]">
            <p>+234 800 000 0000</p>
            <p>+234 809 000 0000</p>
            <p>+234 702 000 0000</p>
            <p>hello@ibukunelectric.ng</p>
            <p>21 Oke Aro Road, Ikeja, Lagos</p>
            <p>Mon–Fri 9AM–5:30PM | Sat 9AM–2PM</p>
          </div>
        </div>

        <form
          className="rounded-[2rem] border border-[#E7EAE8] bg-white p-6 shadow-sm"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-medium text-[#0F1F1E]">
              Full name
              <input className="mt-2 w-full rounded-xl border border-[#DDEAE7] bg-[#F7F8F8] px-4 py-3 outline-none" type="text" placeholder="Your name" />
            </label>
            <label className="text-sm font-medium text-[#0F1F1E]">
              Email address
              <input className="mt-2 w-full rounded-xl border border-[#DDEAE7] bg-[#F7F8F8] px-4 py-3 outline-none" type="email" placeholder="you@example.com" />
            </label>
            <label className="text-sm font-medium text-[#0F1F1E] sm:col-span-2">
              Phone number
              <input className="mt-2 w-full rounded-xl border border-[#DDEAE7] bg-[#F7F8F8] px-4 py-3 outline-none" type="tel" placeholder="0800 000 0000" />
            </label>
            <label className="text-sm font-medium text-[#0F1F1E] sm:col-span-2">
              Project details
              <textarea className="mt-2 min-h-36 w-full rounded-xl border border-[#DDEAE7] bg-[#F7F8F8] px-4 py-3 outline-none" placeholder="Tell us more about your property and power goals" />
            </label>
          </div>

          <button type="submit" className="mt-6 inline-flex items-center justify-center rounded-full bg-[#D4A017] px-6 py-3 text-sm font-bold text-[#0B4F4A]">
            Send a message
          </button>

          {submitted ? <p className="mt-4 text-sm font-medium text-[#0F766E]">Thanks — our team will contact you shortly.</p> : null}
        </form>
      </div>
    </div>
  );
}
