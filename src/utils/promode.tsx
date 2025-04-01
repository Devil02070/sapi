import { create } from "zustand";

interface ProModeStore {
  proMode: boolean;
  toggleProMode: () => void;
}

// Create Zustand store with localStorage persistence
export const useProMode = create<ProModeStore>((set) => {
  let storedProMode = false;

  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("proMode");
    storedProMode = saved ? JSON.parse(saved) : false;
  }

  return {
    proMode: storedProMode,
    toggleProMode: () =>
      set((state) => {
        const newProMode = !state.proMode;
        localStorage.setItem("proMode", JSON.stringify(newProMode));
        return { proMode: newProMode };
      }),
  };
});
