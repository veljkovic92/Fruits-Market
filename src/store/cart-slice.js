import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    changed: false,
  },
  reducers: {
    removeCart(state) {
      state.totalQuantity = 0;
      state.items = [];
    },
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addToCart(state, action) {
      state.changed = true;
      const newItems = state.items.slice();
      const existingItem = newItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.totalAmount++;
        existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
      } else {
        const newItem = {
          id: action.payload.id,
          name: action.payload.title,
          price: action.payload.price,
          totalAmount: 1,
          totalPrice: action.payload.price,
        };
        newItems.push(newItem);
      }
      state.items = newItems;
      state.totalQuantity++;
    },
    removeFromCart(state, action) {
      state.changed = true;
      const newItems = state.items.slice();
      const existingItem = newItems.find((item) => item.id === action.payload);
      state.totalQuantity--;

      if (existingItem.totalAmount === 1) {
        const filteredArray = newItems.filter(
          (item) => item.id !== action.payload
        );
        state.items = filteredArray;
      } else {
        existingItem.totalAmount--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
