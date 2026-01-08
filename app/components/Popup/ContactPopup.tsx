"use client";

import { setPopupDilaogVisibility } from "@/redux/slices/popupFormSlice";
import { RootState } from "@/redux/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "./ContactForm";

function ContactPopup() {
  const contactPopupVisibility = useSelector(
    (state: RootState) => state.popupForm
  );

  const dispatch = useDispatch();

  const closeDialog = () => {
    dispatch(setPopupDilaogVisibility(false));
  };

  return (
    <div
      onClick={closeDialog}
      className={`w-full h-full bg-[#00000042] fixed left-0 right-0 top-0 bottom-0 z-[60] ${
        contactPopupVisibility ? "flexCenter" : "hidden"
      }`}
    >
      <ContactForm />
    </div>
  );
}

export default ContactPopup;
