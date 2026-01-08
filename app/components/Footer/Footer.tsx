import Link from "next/link";
import React from "react";

function Footer() {
  const footerDatas = [
    {
      id: "1",
      heading: "New york Office",
      links: [
        { text: "555-1296", link: "tel:5551296", className: "pt-3" },
        { text: "info@renovatio .com", link: "mailto:info@renovatio.com" },
        {
          text: "123 Main Street, Suite 200 City Anytown State: StateName",
          link: "#",
          className: "pt-3",
        },
      ],
    },
    {
      id: "2",
      heading: "Paris Office",
      links: [
        {
          text: "+33 1 23 45 9966",
          link: "tel:+33123459966",
          className: "pt-3",
        },
        {
          text: "info@renovatioparis.com",
          link: "mailto:info@renovatioparis.com",
        },
        {
          text: "123 Rue de la Paix, 75002 Paris, France",
          link: "#",
          className: "pt-3",
        },
      ],
    },
    {
      id: "3",
      heading: "Berlin Office",
      links: [
        {
          text: "+49 30 12343693",
          link: "tel:+493012343693",
          className: "pt-3",
        },
        {
          text: "info@renovatioberlin.com",
          link: "mailto:info@renovatioberlin.com",
        },
        {
          text: "Mauerstrasse 45, 10117 Berlin, Germany",
          link: "#",
          className: "pt-3",
        },
      ],
    },
  ];

  return (
    <footer>
      <ul className="grid grid-cols-3 gap-10 px-40 py-24 sm:grid-cols-1 sm:px-5">
        {footerDatas.map((item) => (
          <li key={item.id}>
            <h2 className="josefin-sans-500 text-xl">{item.heading}</h2>
            <div className="josefin-sans-400 flex flex-col text-gray-500">
              {item.links.map((info, index) => (
                <Link key={index} href={info.link} className={info.className}>
                  {info.text}
                </Link>
              ))}
            </div>
          </li>
        ))}
      </ul>
      <p className="w-full text-center josefin-sans-400 tracking-[.3em] text-sm text-gray-600 pb-3 sm:w-full sm:text-sm sm:tracking-wider">
        ©2023 RENAVITO INC. - NEW YORK
      </p>
    </footer>
  );
}

export default Footer;
