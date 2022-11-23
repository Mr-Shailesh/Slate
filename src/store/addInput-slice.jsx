import { createSlice } from "@reduxjs/toolkit";

const addInputSlice = createSlice({
  name: "addInput",
  initialState: { input: [] },
  reducers: {
    add(state) {
      console.log(state);
      state.input++;
    },
  },
});

export const addInputActions = addInputSlice.actions;
export default addInputSlice;
