import { createSlice } from "@reduxjs/toolkit";

const SiteInfoSlice = createSlice({
  name: "siteInfoSlice",
  initialState: {
    image: "",
    title: ""
  },
  reducers: {
    addImage: (state, action) => {
      state.image = action.payload;
      console.log(state, action)
    },
    addTitle: (state, action) => {
      state.title = action.payload;
    },
  },
});

export const { addImage, addTitle } =
  SiteInfoSlice.actions;
export default SiteInfoSlice.reducer;
