import { create } from "zustand";

interface MyState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const useStore = create<MyState>((set) => ({
  count: 0,
  increment: () =>
    set((state: { count: number }) => ({ count: state.count + 1 })),
  decrement: () =>
    set((state: { count: number }) => ({ count: state.count - 1 })),
}));

export default useStore;
