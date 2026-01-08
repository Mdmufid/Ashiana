import { IGallery } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StaticImageData } from "next/image";

interface IStates {
  imgInfo: IGallery[];
  visibility: boolean;
  currentIndex ? : number;
}

const initialState: IStates = {
  imgInfo: [],
  visibility: false,
};

const openImageBigScreen = createSlice({
  name: "Open Image In Big Screen",
  initialState,
  reducers: {
    setImageBigScreen: (state: IStates, action: PayloadAction<IStates>) =>
      action.payload,
  },
});

export default openImageBigScreen.reducer;
export const { setImageBigScreen } = openImageBigScreen.actions;
