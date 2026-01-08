import Link from "next/link";
import React from "react";
import { FaSquarePhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import ContactForm from "./ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Ashiana Interiors Kolkata",
  description:
    "Contact Ashiana Interiors for premium interior design solutions in Kolkata. Connect with us today for customized services that transform your space.",
  alternates: {
    canonical: "/contact-us",
  },
};

function page() {
  return (
    <main className="w-full h-auto sm:h-auto pb-32">
      <section className="w-full bg-[#122432] flex items-center justify-between px-28 h-[30rem] sm:h-auto sm:pb-20 sm:px-4 sm:flex-col sm:justify-start sm:pt-[90px]">
        <div className="text-gray-300">
          <h1 className="font-tex text-[4.3rem] uppercase tracking-wider mt-5 sm:text-[3.1rem]">
            Contact Us
          </h1>
          <p className="w-[350px] tracking-wider text-sm pl-2 josefin-sans-400 sm:w-full">
            Send us a message and we will get your question answered as soon as
            possible
          </p>

          <div className="flex items-center gap-3 mt-6">
            <Link
              href="tel:9831234910"
              className="flex items-center gap-2 px-5 bg-white py-3 rounded-full"
            >
              <FaSquarePhone className="text-gray-800" />{" "}
              <span className=" text-[0.8rem] text-gray-800 tracking-widest">
                Call Now
              </span>
            </Link>

            <Link
              href="mailto:subrata.ash@gmail.com"
              className="flex items-center gap-2 px-2 sm:hidden"
            >
              <MdEmail className="text-gray-300" />{" "}
              <span className="text-[0.8rem] tracking-widest">
                subrata.ash@gmail.com
              </span>
            </Link>
          </div>
        </div>

        <div className="w-96 bg-white translate-y-72 py-10 px-10  shadow-md formShdow sm:translate-y-10 sm:w-full sm:px-5 sm:shadow-none">
          <ContactForm />
        </div>
      </section>

      <section className="py-10 px-28 space-y-9 sm:px-5 sm:pb-0">
        <div className="w-[350px] sm:w-full">
          <h2 className="font-semibold text-xl text-gray-700">
            Corporate Office
          </h2>
          <span className="text-[.86rem] text-gray-500">
            AA-48, Salt Lake, Sec-1, Kolkata -700064. (Near PNB Bus Stop, Beside
            Karur Vysya Bank).
          </span>
        </div>

        <div className="w-[350px] sm:w-full">
          <h2 className="font-semibold text-xl text-gray-700">Call Us</h2>
          <Link href={"tel:9831234910"} className="text-[.86rem] text-gray-500">
            9831234910 (Mon - Friday: 9.00am to 6.00pm)
          </Link>
        </div>

        <div className="w-[350px] sm:w-full">
          <h2 className="font-semibold text-xl text-gray-700">Mail Us</h2>
          <Link
            href={"mailto:subrata.ash@gmail.com"}
            className="text-[.86rem] text-gray-500"
          >
            subrata.ash@gmail.com
          </Link>
        </div>
      </section>
    </main>
  );
}

export default page;
