import { createSlice } from "@reduxjs/toolkit";

// this createSlice is a function and it takes an configuration object as an argument

// toolkit syntax
const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, { payload }) => {
      // in older time in redux we used to write like this
      // we can not mutate the state in redux
      // we have to make copy of the state and then update it
      // and return the new state
      // let newState = {...state};
      // newState.items.push(payload);
      // return newState;
      //   pure function - it should not mutate the state directly
      //   not it is not pure function

      state.items.push(payload);
    },
    removeItem: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index >= 0) state.items.splice(index, 1);
    },
    clearCart: (state) => {
      // or you cant directly mutate state in redux because it is a local variable here
      // and we have to return a new state if we want to do

      state.items = [];
    },
  },
});

// these are the actions that we can use in our components
export const { addItem, removeItem, clearCart } = cartSlice.actions;

export const cart = cartSlice.reducer;
// export default cartSlice.reducer;
