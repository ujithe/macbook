import { create } from "zustand";

const useMacbookStore = create((set) => ({
  color: "silver",
  size: '14"',
  setColor: (color) => set({ color }),
  setSize: (size) => set({ size }),
}));

export default useMacbookStore;
