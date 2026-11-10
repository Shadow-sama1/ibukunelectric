"use client";

import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCartStore } from "@/app/lib/cart-store";

export default function CartPage() {
  const items = useCartStore((state) => state.items);
  const subtotal = useCartStore((state) => state.subtotal);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const clearCart = useCartStore((state) => state.clearCart);

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black text-[#0B4F4A]">Your cart is empty</h1>
        <p className="mt-4 text-base text-[#4B5A58]">Add a package to get started with your solar installation.</p>
        <Link href="/packages" className="mt-6 inline-flex items-center justify-center rounded-full bg-[#D4A017] px-6 py-3 text-sm font-bold text-[#0B4F4A]">
          Browse packages
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] bg-[#E6F4F2] p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">Cart</p>
        <h1 className="mt-3 text-4xl font-black text-[#0B4F4A]">Your selected packages</h1>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5">
          {items.map((item) => (
            <div key={item.id} className="flex flex-col gap-5 rounded-[1.75rem] border border-[#E7EAE8] bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-black text-[#0B4F4A]">{item.name}</h2>
                <p className="mt-2 text-lg font-bold text-[#0F766E]">₦{(item.price * item.quantity).toLocaleString("en-NG")}</p>
              </div>

              <div className="flex items-center gap-3">
                <button type="button" onClick={() => updateQuantity(item.id, item.quantity - 1)} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#DDEAE7] bg-[#F7F8F8] text-[#0B4F4A]">
                  <Minus size={16} />
                </button>
                <span className="w-8 text-center text-sm font-bold text-[#0F1F1E]">{item.quantity}</span>
                <button type="button" onClick={() => updateQuantity(item.id, item.quantity + 1)} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#DDEAE7] bg-[#F7F8F8] text-[#0B4F4A]">
                  <Plus size={16} />
                </button>
                <button type="button" onClick={() => removeItem(item.id)} className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#F7F8F8] text-[#B91C1C]">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <aside className="rounded-[2rem] bg-[#0B4F4A] p-6 text-white shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F5D77A]">Summary</p>
          <div className="mt-6 space-y-3 text-sm text-[#D7E9E6]">
            <div className="flex items-center justify-between">
              <span>Subtotal</span>
              <span>₦{subtotal.toLocaleString("en-NG")}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Delivery</span>
              <span>Calculated after review</span>
            </div>
          </div>
          <button type="button" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#D4A017] px-5 py-3 text-sm font-bold text-[#0B4F4A]">
            Proceed to checkout
          </button>
          <button type="button" onClick={() => clearCart()} className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white">
            Clear cart
          </button>
        </aside>
      </div>
    </div>
  );
}
