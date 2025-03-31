import { create } from "zustand";

interface ProModeStore {
  proMode: boolean;
  toggleProMode: () => void;
}

export const useProMode = create<ProModeStore>((set) => ({
  proMode: false,
  toggleProMode: () => set((state) => ({ proMode: !state.proMode })),
}));