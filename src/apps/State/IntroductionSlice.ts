import { createSlice } from "@reduxjs/toolkit";



const IntoductionSlice = createSlice({
  name: "introductionSlice",
  initialState: {
    image: "",
    name: "",
    email: "",
    title: "",
    subtitle: "",
  },
  reducers: {
    addImage: (state, action) => {
      state.image = action.payload;
    },
    addName: (state, action) => {
      state.name = action.payload;
    },
    addEmail: (state, action) => {
      state.email = action.payload;
    },
    addTitle: (state, action) => {
      state.title = action.payload;
    },
    addSubtitle: (state, action) => {
      state.subtitle = action.payload;
    },
  },
});

export const { addImage, addEmail, addName, addSubtitle, addTitle } =
  IntoductionSlice.actions;
export default IntoductionSlice.reducer;
