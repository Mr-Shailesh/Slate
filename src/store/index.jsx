import { configureStore } from "@reduxjs/toolkit";
import addInputSlice from "./addInput-slice";

const store = configureStore({
  reducer: {
    addInput: addInputSlice.reducer,
  },
});

export default store;
