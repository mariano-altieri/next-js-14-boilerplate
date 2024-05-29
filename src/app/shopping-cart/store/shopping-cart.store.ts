import { create } from 'zustand';

export interface ShoppingCardItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export interface ShoppingCardState {
  items: ShoppingCardItem[];
  addItem: (item: ShoppingCardItem) => void;
  removeItem: (id: number) => void;
  addQuantity: (id: number) => void;
  removeQuantity: (id: number) => void;
}

export const useShoppingCardStore = create<ShoppingCardState>()((set, get) => ({
  items: [],
  addItem: (item) => {
    const existingItem = get().items.find((i) => i.id === item.id);

    // if item exists, increase quantity
    if (existingItem) {
      set((state) => ({
        items: state.items.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i)),
      }));
    } else {
      // if item does not exist, add item to the list
      set((state) => ({ items: [...state.items, item] }));
    }
  },
  removeItem: (id) => set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
  addQuantity: (id) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    })),
  removeQuantity: (id) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item,
      ),
    })),
}));
