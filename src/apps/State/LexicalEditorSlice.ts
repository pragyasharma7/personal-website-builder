import { createSlice } from "@reduxjs/toolkit";

const LexicalEditorSlice = createSlice({
  name: "LexicalEditorSlice",
  initialState: {
    isEditable: true
  },
  reducers: {
    isEditable: (state, action) => {
      state.isEditable = action.payload;
    }
  },
});

export const {  isEditable } =
  LexicalEditorSlice.actions;
export default LexicalEditorSlice.reducer;
