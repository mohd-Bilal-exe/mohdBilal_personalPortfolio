import { create } from "zustand";

// Create the zustand store
const useStore = create((set) => ({
  navSelected: "Everything", // Initial state for navigation
  whatsClicked: "Nothing", // Initial state for what's clicked

  setNavSelected: (navSelected) => set({ navSelected }),
  setWhatsClicked: (whatsClicked) => set({ whatsClicked }),
}));

export default useStore;
