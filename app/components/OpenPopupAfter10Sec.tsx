"use client";

import { setPopupDilaogVisibility } from "@/redux/slices/popupFormSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function OpenPopupAfter10Sec() {
  const dispatch = useDispatch();

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      dispatch(setPopupDilaogVisibility(true));
      clearTimeout(timeoutID);
    }, 10 * 1000);

    return () => clearTimeout(timeoutID);
  }, []);

  return <></>;
}
