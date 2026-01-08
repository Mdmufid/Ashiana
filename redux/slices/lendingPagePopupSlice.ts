import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const lendingPagePopupSlice = createSlice({
    name : "Lending Page Popup Form Slice",
    initialState : false,
    reducers : {
        setLendingPagePopup : (state, action : PayloadAction<boolean>) => action.payload
    }
});

export default lendingPagePopupSlice.reducer;
export const { setLendingPagePopup } = lendingPagePopupSlice.actions;