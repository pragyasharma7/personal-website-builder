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
    },
    updateProject: (state, action)=>{
      state.skillset = action.payload;
    },
    addSkillsetSection: (state, action) => {
      state.skillset.push(action.payload);
    },
    addProjectSection: (state, action) => {
      state.project.push(action.payload);
    },
    addExperienceSection: (state, action) => {
      state.experience.push(action.payload);
    },
    addCTASection: (state, action) => {
      state.cta.push(action.payload);
    },
  },
});

export const {  addAboutSection, addSkillsetSection, addProjectSection, addExperienceSection, addCTASection, updateProject } =
  SectionSlice.actions;
export default SectionSlice.reducer;
