import { navItems } from "@/constants";
import { create } from "zustand";

type StoreType = {
  activeSection: string;
  setActiveSection: (value: string) => void;
  lastTimeClicked: Date;
  setLastTimeClicked: (value: Date) => void;
};

export const useActiveSectionStore = create<StoreType>((set) => ({
  activeSection: "Home",
  setActiveSection: (value: string) => set({ activeSection: value }),
  lastTimeClicked: new Date(),
  setLastTimeClicked: (value: Date) => set({ lastTimeClicked: value }),
}));
