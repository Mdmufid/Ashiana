"use client";

import { sendPopupEmail } from "@/actions/sendPopupEmail";
import { setPopupDilaogVisibility } from "@/redux/slices/popupFormSlice";
import { useRouter } from "next/navigation";
import React, { RefObject, useRef, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import SpinnerSvg from "../SpinnerSvg";

interface IProps {
  bgColor ? : string;
  isPageForm?: boolean;
}

export default function ContactForm({ isPageForm, bgColor }: IProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const numberRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const route = useRouter();

  const dispatch = useDispatch();

  const closeDialog = () => {
    dispatch(setPopupDilaogVisibility(false));
  };

  const setInputErrorMessage = (
    ref: RefObject<HTMLInputElement>,
    errMsg: string
  ) => {
    if (ref.current) {
      ref.current.setCustomValidity(errMsg);
      ref.current.reportValidity();
    }
  };

  const handleFormSubmit = async () => {
    const formData = new FormData();

    const name = nameRef.current?.value;
    const number = numberRef.current?.value;
    const email = emailRef.current?.value;
    const message = messageRef.current?.value;

    if (!name) return setInputErrorMessage(nameRef, "Enter your name here");

    if (!number)
      return setInputErrorMessage(numberRef, "Enter your mobile number here");
    if (number.length !== 10)
      return setInputErrorMessage(numberRef, "Enter a valid mobile number");

    if (!email) return setInputErrorMessage(emailRef, "Enter your email here");
    if (!email.includes("@"))
      return setInputErrorMessage(emailRef, "Enter a valid email address");

    formData.set("name", name || "");
    formData.set("number", number || "");
    formData.set("email", email || "");
    formData.set("message", message || "");

    setIsLoading(true);
    setMessage(null);
    const res = await sendPopupEmail(formData);
    route.push("/thank-you");
    setMessage(res.message);
    setIsLoading(false);
  };

  return (
    <div
      style={{backgroundColor : bgColor}}
      onClick={(e) => e.stopPropagation()}
      className="w-[360px] bg-white rounded-3xl px-9 py-10 relative sm:w-full sm:mx-3"
    >
      {!isPageForm ? (
        <>
          <IoCloseOutline
            onClick={closeDialog}
            size={20}
            className="absolute bg-slate-400 right-9 top-9 cursor-pointer"
          />
          <h2 className="text-xl font-semibold text-gray-800">Contact Us</h2>
          <p className="text-sm text-gray-600 mt-1">
            Provide your details and then we will contact you soon
          </p>
        </>
      ) : null}

      <form className="space-y-4 mt-4 text-sm">
        <input
          ref={nameRef}
          type="text"
          placeholder="Your Name *"
          className="outline-none border w-full border-gray-800 px-3 py-2 focus:border-blue-400"
        />
        <input
          ref={numberRef}
          type="number"
          inputMode="numeric"
          pattern="[0-9\s]{10}"
          placeholder="Your Number *"
          className="outline-none border w-full border-gray-800 px-3 py-2 focus:border-blue-400"
        />
        <input
          ref={emailRef}
          type="email"
          placeholder="Your Email Address"
          className="outline-none border w-full border-gray-800 px-3 py-2 focus:border-blue-400"
        />
        <textarea
          ref={messageRef}
          rows={4}
          className="outline-none border w-full border-gray-800 px-3 py-2 focus:border-blue-400"
          placeholder="Your Message"
        ></textarea>
        <button
          disabled={isLoading}
          onClick={handleFormSubmit}
          type="button"
          className="bg-black w-full h-9 text-white flexCenter"
        >
          <SpinnerSvg className={isLoading ? "block" : "hidden"} size="1.2em" />
          <span className={isLoading ? "hidden" : "block"}>Submit</span>
        </button>
        <p
          className={`text-green-700 text-center text-sm mt-2 absolute left-0 right-0 bottom-3 ${
            message ? "block" : "hidden"
          }`}
        >
          Submitted Successfully
        </p>
      </form>
    </div>
  );
}
