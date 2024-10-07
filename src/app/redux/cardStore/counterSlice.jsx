import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [], // Array of products
  order: {}, // Order details
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // Add or update product in the cart
    productRedux: (state, action) => {
      const existingProductIndex = state.value.findIndex(
        (item) => item.englishName === action.payload.englishName
      );

      if (existingProductIndex !== -1) {
        // If the product already exists, update its quantity
        state.value[existingProductIndex].qty += action.payload.qty;
      } else {
        // If the product doesn't exist, add it to the array
        state.value.push(action.payload);
      }
    },

    // Remove product from the cart
    productDeleteRedux: (state, action) => {
      // Filter out the product by name
      state.value = state.value.filter(
        (item) => item.englishName !== action.payload
      );
    },

    // Add product and location information to order
    productAndLocation: (state, action) => {
      state.order = { ...state.order, ...action.payload };
    },
  },
});

// Export actions
export const { productRedux, productDeleteRedux, productAndLocation } = counterSlice.actions;

// Export the reducer
export default counterSlice.reducer;
