import { PayloadAction, createSlice } from "@reduxjs/toolkit";


const mobileSliderSlice = createSlice({
    name : "Mobile Slider Slice",
    initialState : false,
    reducers : {
        setMobileSliderSlice : (state, action : PayloadAction<boolean>) => action.payload
    }
});

export default mobileSliderSlice.reducer;
export const { setMobileSliderSlice } = mobileSliderSlice.actions;