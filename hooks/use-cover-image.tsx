import { create } from "zustand";

type CoverImageStoreProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useCoverImageStore = create<CoverImageStoreProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
