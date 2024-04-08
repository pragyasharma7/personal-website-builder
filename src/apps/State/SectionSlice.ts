import { createSlice } from "@reduxjs/toolkit";

const SectionSlice = createSlice({
  name: "sectionSlice",
  initialState: {
    about: {},
    skillset: [],
    project: [],
    experience: [],
    cta: [],
  },
  reducers: {
    addAboutSection: (state, action) => {
      state.about = action.payload;
      console.log(state, action)
    },
    addSkillsetSection: (state, action) => {
      state.skillset.push(action.payload);
    },
    addProjectSection: (state, action) => {
      state.project = action.payload;
    },
    addExperienceSection: (state, action) => {
      state.experience = action.payload;
    },
    addCTASection: (state, action) => {
      state.cta = action.payload;
    },
  },
});

export const {  addAboutSection, addSkillsetSection, addProjectSection, addExperienceSection, addCTASection } =
  SectionSlice.actions;
export default SectionSlice.reducer;
