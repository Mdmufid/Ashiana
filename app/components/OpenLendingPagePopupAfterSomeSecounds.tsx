"use client";

import { setLendingPagePopup } from "@/redux/slices/lendingPagePopupSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function OpenLendingPagePopupAfterSomeSecounds() {
  const dispatch = useDispatch();

  useEffect(() => {
    let timeOutID1: NodeJS.Timeout;
    let timeOutID2: NodeJS.Timeout;
    let timeOutID3: NodeJS.Timeout;

    timeOutID1 = setTimeout(() => {
      dispatch(setLendingPagePopup(true));
      clearTimeout(timeOutID1);

      timeOutID2 = setTimeout(() => {
        dispatch(setLendingPagePopup(true));
        clearTimeout(timeOutID2);

        timeOutID3 = setTimeout(() => {
          dispatch(setLendingPagePopup(true));
          clearTimeout(timeOutID3);
        }, 45 * 1000);
      }, 30 * 1000);
    }, 10 * 1000);

    return () => {
      clearInterval(timeOutID1);
      clearTimeout(timeOutID2);
      clearTimeout(timeOutID3);
    };
  }, []);

  return <></>;
}
