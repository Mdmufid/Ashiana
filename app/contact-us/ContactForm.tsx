"use client";

import { sendContactFormMail } from "@/actions/sendContactFormMail";
import React, { RefObject, useRef, useState } from "react";
import SpinnerSvg from "../components/SpinnerSvg";
import { useRouter } from "next/navigation";

function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const router = useRouter();

  const nameRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const numberRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

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
    const address = addressRef.current?.value;
    const number = numberRef.current?.value;
    const email = emailRef.current?.value;
    const message = messageRef.current?.value;

    if (!name) return setInputErrorMessage(nameRef, "Enter your name here");
    if (!address) return setInputErrorMessage(addressRef, "Enter your address here");

    if (!number)
      return setInputErrorMessage(numberRef, "Enter your mobile number here");
    if (number.length !== 10)
      return setInputErrorMessage(numberRef, "Enter a valid mobile number");

    if (!email) return setInputErrorMessage(emailRef, "Enter your email here");
    if (!email.includes("@"))
      return setInputErrorMessage(emailRef, "Enter a valid email address");

    formData.set("name", name || "");
    formData.set("address", address || "");
    formData.set("number", number || "");
    formData.set("email", email || "");
    formData.set("message", message || "");

    setIsLoading(true);
    setResult(null);
    const res = await sendContactFormMail(formData);
    router.push("/thank-you");
    setResult(res.message);
    setIsLoading(false);
  };

  return (
    <form className="space-y-8">
      <input
        ref={nameRef}
        required
        name="name"
        type="text"
        placeholder="Full Name *"
        className="formInput outline-none w-full border-2 focus:border-blue-300 px-3 py-3"
      />
      <input
        ref={addressRef}
        required
        name="address"
        type="text"
        placeholder="Address *"
        className="formInput outline-none w-full border-2 focus:border-blue-300 px-3 py-3"
      />
      <input
        ref={numberRef}
        pattern="[0-9]{10}"
        name="number"
        type="number"
        placeholder="Phone Number *"
        className="formInput outline-none w-full border-2 focus:border-blue-300 px-3 py-3"
      />
      <input
        ref={emailRef}
        type="text"
        name="email"
        placeholder="Email Address"
        className="formInput outline-none w-full border-2 focus:border-blue-300 px-3 py-3"
      />
      <textarea
        rows={5}
        ref={messageRef}
        placeholder="Your Message"
        name="message"
        className="formInput outline-none w-full border-2 focus:border-blue-300 px-3 py-3"
      ></textarea>
      <button
        onClick={handleFormSubmit}
        disabled={isLoading}
        className="w-full bg-[#073842] py-3 h-10 flexCenter josefin-sans-400 text-white hover:bg-[#073842a1] transition-all duration-300"
        type="button"
      >
        <SpinnerSvg className={isLoading ? "block" : "hidden"} size="1.2em" />
        <span className={isLoading ? "hidden" : "block"}>Submit</span>
      </button>
      <p
        className={`text-center text-green-700 ${
          result ? "opacity-100" : "opacity-0"
        } transition-all duration-300`}
      >
        Submitted Successfully
      </p>
    </form>
  );
}

export default ContactForm;
