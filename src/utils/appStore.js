const { configureStore } = require("@reduxjs/toolkit");
// import cartSlice from "./cartSlice";
import { cart } from "./cartSlice";

const appStore = configureStore({
  reducer: {
    // cart:cartSlice
    cart,
  },
});

export default appStore;
