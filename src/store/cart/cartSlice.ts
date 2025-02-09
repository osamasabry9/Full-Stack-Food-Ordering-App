import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { TCartItem } from "@/types";

// Define the CartState type
type CartState = {
  items: TCartItem[];
};

const safelyInitializeCart = (): TCartItem[] => {
  if (typeof window === 'undefined') return []; // Server-side
  try {
    const items = localStorage.getItem("cartItems");
    return items ? JSON.parse(items) : [];
  } catch (error) {
    console.error("Error loading cart from localStorage:", error);
    return [];
  }
};


// Initial state
const initialState: CartState = {
  items: safelyInitializeCart(),
};

// Helper function to find an item index by ID
const findItemIndex = (items: TCartItem[], id: string) =>
  items.findIndex((item) => item.id === id);

// Create the cart slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add or update a cart item
    addCartItem: (state, action: PayloadAction<TCartItem>) => {
      const { id } = action.payload;
      const itemIndex = findItemIndex(state.items, id);

      if (itemIndex !== -1) {
        // Update existing item
        state.items[itemIndex] = {
          ...state.items[itemIndex],
          quantity: (state.items[itemIndex].quantity || 0) + 1,
          size: action.payload.size,
          extras: action.payload.extras,
        };
      } else {
        // Add new item
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    // Decrease the quantity of a cart item or remove it if quantity reaches 0
    removeCartItem: (state, action: PayloadAction<{ id: string }>) => {
      const itemIndex = findItemIndex(state.items, action.payload.id);

      if (itemIndex !== -1) {
        const updatedQuantity = (state.items[itemIndex].quantity || 0) - 1;

        if (updatedQuantity > 0) {
          state.items[itemIndex].quantity = updatedQuantity;
        } else {
          state.items.splice(itemIndex, 1); // Remove the item
        }
      }
    },

    // Remove an item entirely from the cart
    removeItemFromCart: (state, action: PayloadAction<{ id: string }>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },

    // Clear the entire cart
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// Export actions
export const { addCartItem, removeCartItem, removeItemFromCart, clearCart } =
  cartSlice.actions;

// Selector to access cart items
export const selectCartItems = (state: RootState) => state.cart.items;

// Export reducer
export default cartSlice.reducer;
