"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  totalItems: number;
  subtotal: number;
  addItem: (item: CartItem) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      totalItems: 0,
      subtotal: 0,
      addItem: (item) => {
        const current = get().items;
        const existing = current.find((entry) => entry.id === item.id);

        const items = existing
          ? current.map((entry) =>
              entry.id === item.id
                ? { ...entry, quantity: entry.quantity + item.quantity }
                : entry,
            )
          : [...current, item];

        set({
          items,
          totalItems: items.reduce((sum, entry) => sum + entry.quantity, 0),
          subtotal: items.reduce((sum, entry) => sum + entry.price * entry.quantity, 0),
        });
      },
      updateQuantity: (id, quantity) => {
        const items = get()
          .items.map((entry) =>
            entry.id === id ? { ...entry, quantity: Math.max(quantity, 0) } : entry,
          )
          .filter((entry) => entry.quantity > 0);

        set({
          items,
          totalItems: items.reduce((sum, entry) => sum + entry.quantity, 0),
          subtotal: items.reduce((sum, entry) => sum + entry.price * entry.quantity, 0),
        });
      },
      removeItem: (id) => {
        const items = get().items.filter((entry) => entry.id !== id);
        set({
          items,
          totalItems: items.reduce((sum, entry) => sum + entry.quantity, 0),
          subtotal: items.reduce((sum, entry) => sum + entry.price * entry.quantity, 0),
        });
      },
      clearCart: () => set({ items: [], totalItems: 0, subtotal: 0 }),
    }),
    {
      name: "ibukun-electric-cart",
    },
  ),
);
