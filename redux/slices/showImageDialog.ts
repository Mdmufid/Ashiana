import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IState {
    visibility : boolean;
    imgSrc : string;
}

const showImageDialogSlice = createSlice({
    name : "Show Image Dialog Slice",
    initialState : {
        visibility : false,
        imgSrc : ""
    },
    reducers : {
        setShowImageDialog : (state, action : PayloadAction<IState>) => action.payload
    }
});

export default showImageDialogSlice.reducer;
export const { setShowImageDialog } = showImageDialogSlice.actions;