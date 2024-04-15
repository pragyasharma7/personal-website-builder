import { createSlice } from "@reduxjs/toolkit";
const SectionSlice = createSlice({
  name: "sectionSlice",
  initialState: {
    about: {
      data: {},
      disabled: false},
    skillset: {
      data: [],
      disabled: false},
    project: {
      data: [],
      disabled: false},
    experience: {
      data: [],
      disabled: false},
    cta: {
      data: [],
      disabled: false},
  },
  reducers: {
    addAboutSection: (state, action) => {
      state.about.data = action.payload;
    },
    updateProject: (state, action)=>{
      state.skillset.data = action.payload;
    },
    addSkillsetSection: (state, action) => {
      state.skillset.data.push(action.payload);
      console.log(state.skillset)
    },
    deleteSkillSetSection:(state, action) => {
      state.skillset.data = [];
            state.skillset.disabled = false;

    },
     addProjectImage: (state, action) => {
      const { id, image } = action.payload;
      const objectToUpdate = state.project.data.find(obj => obj.id === id);
      if (objectToUpdate) {
        objectToUpdate.image = image;
      }
      
    },
    addProjectSection: (state, action) => {
      state.project.data.push(action.payload);
      console.log(state.project)
    },
    deleteProjectSection:(state, action) => {
      state.project.data = [];
      state.project.disabled = false;
    },
    addExperienceSection: (state, action) => {
      state.experience.data.push(action.payload);
    },
    addCTASection: (state, action) => {
      state.cta.data.push(action.payload);
    },
  },
});

export const {  addAboutSection, addSkillsetSection, addProjectSection, addExperienceSection, addCTASection, updateProject, deleteProjectSection, deleteSkillSetSection, addProjectImage } =
  SectionSlice.actions;
export default SectionSlice.reducer;
