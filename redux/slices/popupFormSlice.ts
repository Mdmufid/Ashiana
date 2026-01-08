import { PayloadAction, createSlice } from "@reduxjs/toolkit";


const popupFormSlice = createSlice({
    name : "Popup Form Slice",
    initialState : false,
    reducers : {
        setPopupDilaogVisibility : (state, action : PayloadAction<boolean>) => action.payload
    }
});

export default popupFormSlice.reducer;
export const { setPopupDilaogVisibility } = popupFormSlice.actions;