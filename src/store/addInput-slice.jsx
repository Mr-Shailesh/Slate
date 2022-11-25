import { createSlice } from "@reduxjs/toolkit";

const addInputSlice = createSlice({
  name: "addInput",
  initialState: {
    inputArr: [
      {
        type: "text",
        id: 1,
        value: "",
        column: "Not_started",
      },
      {
        type: "text",
        id: 2,
        value: "",
        column: "Not_started",
      },
      {
        type: "text",
        id: 3,
        value: "",
        column: "Not_started",
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
