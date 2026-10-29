
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const CartSlice = createSlice({
  name: 'cart',

  initialState,

  reducers: {
    addItem: (state, action) => {
      const plant = action.payload;

      if (!plant || !plant.name) {
        return;
      }

      const existingItem = state.items.find(
        (item) => item.name === plant.name
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...plant,
          cost: Number(plant.cost),
          quantity: 1,
        });
      }
    },

    removeItem: (state, action) => {
      const name =
        typeof action.payload === 'string'
          ? action.payload
          : action.payload?.name;

      state.items = state.items.filter(
        (item) => item.name !== name
      );
    },

    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;

      const item = state.items.find(
        (plant) => plant.name === name
      );

      if (!item) {
        return;
      }

      const newQuantity = Number(quantity);

      if (
        !Number.isFinite(newQuantity) ||
        newQuantity <= 0
      ) {
        state.items = state.items.filter(
          (plant) => plant.name !== name
        );
        return;
      }

      item.quantity = Math.floor(newQuantity);
    },
  },
});

export const {
  addItem,
  removeItem,
  updateQuantity,
} = CartSlice.actions;

export default CartSlice.reducer;
