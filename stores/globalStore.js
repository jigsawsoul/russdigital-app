import { create } from "zustand";

export const useGlobalStore = create((set) => ({
  isNavShown: false,
  toggleNav: () => set((state) => ({ isNavShown: !state.isNavShown })),
}));
