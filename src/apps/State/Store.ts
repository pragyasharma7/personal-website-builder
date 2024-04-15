import { configureStore } from "@reduxjs/toolkit";
import IntroductionSlice from "./IntroductionSlice";
import SiteInfoSlice from "./SiteInfoSlice";
import SectionSlice from "./SectionSlice";
import SaveChangesSlice from "./SaveChangesSlice";
import LexicalEditorSlice from "./LexicalEditorSlice";

export const store = configureStore({
  reducer: {
    introduction : IntroductionSlice,
    siteInfo : SiteInfoSlice,
    sections: SectionSlice,
    saveChanges: SaveChangesSlice,
    lexicalEditor: LexicalEditorSlice
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
