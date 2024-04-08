import { configureStore } from "@reduxjs/toolkit";
import IntroductionSlice from "./IntroductionSlice";
import SiteInfoSlice from "./SiteInfo/SiteInfoSlice";
import SectionSlice from "./SectionSlice";
import SaveChangesSlice from "./SaveChangesSlice";

export const store = configureStore({
  reducer: {
    introduction : IntroductionSlice,
    siteInfo : SiteInfoSlice,
    sections: SectionSlice,
    saveChanges: SaveChangesSlice
  },
});

console.log(store)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
