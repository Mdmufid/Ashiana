"use client";

import { sendBookingEmail } from "@/actions/sendBookingEmail";
import { useRouter } from "next/navigation";
import React, { RefObject, useRef, useState } from "react";
import SpinnerSvg from "./SpinnerSvg";

export default function LandingPageForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const nameRef = useRef<HTMLInputElement>(null);
  const numberRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const locationRef = useRef<HTMLInputElement>(null);
  const servicesListRef = useRef<HTMLSelectElement>(null);
  const budgetListRef = useRef<HTMLSelectElement>(null);

  const route = useRouter();

  const setInputErrorMessage = (
    ref: RefObject<HTMLInputElement | HTMLSelectElement>,
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
    const location = locationRef.current?.value;
    const service = servicesListRef.current?.value;
    const budget = budgetListRef.current?.value;

    if (!name) return setInputErrorMessage(nameRef, "Enter your name here");

    if (!number)
      return setInputErrorMessage(numberRef, "Enter your mobile number here");
    if (number.length !== 10)
      return setInputErrorMessage(numberRef, "Enter a valid mobile number");

    if (!email) return setInputErrorMessage(emailRef, "Enter your email here");
    if (!email.includes("@"))
      return setInputErrorMessage(emailRef, "Enter a valid email address");

    if (!location)
      return setInputErrorMessage(locationRef, "Enter your location");
    if (!service)
      return setInputErrorMessage(servicesListRef, "Choose your service");

    if (service === "Choose Your Service")
      return setInputErrorMessage(servicesListRef, "Choose your service first");

    if (!budget)
      return setInputErrorMessage(budgetListRef, "Choose your budget");

    if (budget === "Choose Your Budget")
      return setInputErrorMessage(budgetListRef, "Choose your budget first");

    formData.set("name", name || "");
    formData.set("number", number || "");
    formData.set("email", email || "");
    formData.set("location", location || "");
    formData.set("service", service || "");
    formData.set("budget", budget || "");

    setIsLoading(true);
    setMessage(null);
    const res = await sendBookingEmail(formData);
    route.push("/thank-you");
    setMessage(res.message);
    setIsLoading(false);
  };
  return (
    <form
      onClick={(e) => e.stopPropagation()}
      className="w-full bg-transparent space-y-3 relative sm:w-full"
    >
      <div className="grid grid-cols-2 sm:grid-cols-1 gap-5">
        <input
          required
          ref={nameRef}
          type="text"
          placeholder="Your Name *"
          className="outline-none basis-40 flex-grow border w-full border-gray-800 px-3 py-2 focus:border-blue-400"
        />
        <input
          required
          ref={numberRef}
          name="number"
          type="number"
          inputMode="numeric"
          pattern="[0-9\s]{10}"
          placeholder="Your Number *"
          className="outline-none basis-40 flex-grow border w-full border-gray-800 px-3 py-2 focus:border-blue-400"
        />
      </div>

      <input
        required
        ref={emailRef}
        name="email"
        type="email"
        placeholder="Your Email Address *"
        className="outline-none basis-40 flex-grow border w-full border-gray-800 px-3 py-2 focus:border-blue-400"
      />
      <input
        ref={locationRef}
        required
        name="location"
        type="text"
        placeholder="Location *"
        className="outline-none basis-40 flex-grow border w-full border-gray-800 px-3 py-2 focus:border-blue-400"
      />
      <select
        ref={servicesListRef}
        required
        className="w-full border border-gray-500 outline-none px-3 py-2 cursor-pointer"
        name="services"
      >
        <option selected disabled value="Choose Your Service">
          Choose Your Service *
        </option>
        <option value="Interior Design">Interior Design</option>
        <option value="Modular Kitchen">Modular Kitchen</option>
        <option value="Modular Furniture">Modular Furniture</option>
        <option value="False Ceiling">False Ceiling</option>
        <option value="Electrical">Electrical</option>
        <option value="Flooring">Flooring</option>
        <option value="Plumbing">Plumbing</option>
        <option value="Paint">Paint</option>
        <option value="Customized Package">Customized Package</option>
      </select>

      <select
        ref={budgetListRef}
        required
        className="w-full border border-gray-500 outline-none px-3 py-2 cursor-pointer"
        name="services"
      >
        <option selected disabled value="Choose Your Budget">
          Choose Your Budget *
        </option>
        <option value="2 - 5 Lakh">2 - 5 Lakh</option>
        <option value="5 - 8 Lakh">5 - 8 Lakh</option>
        <option value="Above 8 Lakh">Above 8 Lakh</option>
      </select>

      <button
        disabled={isLoading}
        onClick={handleFormSubmit}
        type="button"
        className="bg-black w-full h-9 text-white flexCenter"
      >
        <SpinnerSvg className={isLoading ? "block" : "hidden"} size="1.2em" />
        <span className={isLoading ? "hidden" : "block"}>Submit</span>
      </button>
    </form>
  );
}
