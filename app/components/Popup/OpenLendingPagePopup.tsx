"use client";

import { setLendingPagePopup } from "@/redux/slices/lendingPagePopupSlice";
import React from "react";
import { useDispatch } from "react-redux";

interface IProps {
  children: React.ReactNode;
}

export default function OpenLendingPagePopup({ children }: IProps) {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(setLendingPagePopup(true))}>
      {children}
    </button>
  );
}
