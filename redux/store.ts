import { configureStore } from "@reduxjs/toolkit";

import popupFormSlice from "./slices/popupFormSlice";
import showImageDialog from "./slices/showImageDialog";
import mobileSliderSlice from "./slices/mobileSliderSlice";
import lendingPagePopupSlice from "./slices/lendingPagePopupSlice";
import openImageBigScreen from "./slices/openImageBigScreen";

export const store = configureStore({
  reducer: {
    popupForm: popupFormSlice,
    showImageDialog : showImageDialog,
    mobileSlider : mobileSliderSlice,
    lendingPagePopup : lendingPagePopupSlice,
    openImageBigScreen
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
