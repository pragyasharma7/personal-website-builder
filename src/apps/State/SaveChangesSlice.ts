import { createSlice } from "@reduxjs/toolkit";

const SaveChangesSlice = createSlice({
  name: "saveChangesSlice",
  initialState: {
    save: true
  },
  reducers: {
    changesSaved: (state, action) => {
      state.save = action.payload;
      console.log(state, action)
    }
  },
});

export const {  changesSaved } =
  SaveChangesSlice.actions;
export default SaveChangesSlice.reducer;
