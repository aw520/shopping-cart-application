import { createSlice } from '@reduxjs/toolkit';
// cart operations
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const product = action.payload;
      const existing = state.items.find((item) => item.id === product.id);
      if (existing) {//check existence first, avoid duplicate adding
        existing.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
      state.totalQuantity += 1;
      state.totalPrice += product.price;
      state.totalPrice = Math.round(state.totalPrice * 100) / 100
      //console.log(state);
    },

    increaseItemQuantity(state, action) {
      const product = state.items.find((item) => item.id === action.payload.id);
      product.quantity += 1;
      state.totalQuantity += 1;
      state.totalPrice += action.payload.price;
      state.totalPrice = Math.round(state.totalPrice * 100) / 100
      //console.log(action);
    },
    decreaseItemQuantity(state, action) {
      const product = state.items.find((item) => item.id === action.payload.id);
      if (product.quantity > 0) {
        product.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalPrice -= action.payload.price;
        state.totalPrice = Math.round(state.totalPrice * 100) / 100
      }
      if(product.quantity == 0){
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },
    removeItemFromCart(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.totalQuantity -= action.payload.quantity;
      state.totalPrice -= action.payload.price * action.payload.quantity;
      state.totalPrice = Math.round(state.totalPrice * 100) / 100
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const {
  addItemToCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  removeItemFromCart,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
