import { createSlice } from "@reduxjs/toolkit";

const addInputSlice = createSlice({
  name: "addInput",
  initialState: {
    inputArr: [
      {
        type: "text",
        // id: 1,
        value: "",
      },
      {
        type: "text",
        // id: 2,
        value: "",
      },
      {
        type: "text",
        // id: 3,
        value: "",
      },
    ],
  },
  reducers: {
    add(state, { type, payload }) {
      state.inputArr.push(payload);
    },
    value(state, { type, payload }) {
      state.inputArr = payload;
    },
  },
});

export const addInputActions = addInputSlice.actions;
export default addInputSlice;
