"use client";

import { RootState } from "@/redux/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import LendingPageContactForm from "../LendingPageContactForm";
import { setLendingPagePopup } from "@/redux/slices/lendingPagePopupSlice";

function LandingPagePopup() {
  const lendingPageContactFormVisibility = useSelector(
    (state: RootState) => state.lendingPagePopup
  );

  const dispatch = useDispatch();

  const closeDialog = () => {
    dispatch(setLendingPagePopup(false));
  };

  return (
    <div
      onClick={closeDialog}
      className={`w-full h-full bg-[#00000042] fixed left-0 right-0 top-0 bottom-0 z-[60] ${
        lendingPageContactFormVisibility ? "flexCenter" : "hidden"
      }`}
    >
      <LendingPageContactForm isPopup = {true}/>
    </div>
  );
}

export default LandingPagePopup;
