import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { INavOptions } from "@/types";


interface IProps {
  navItem: INavOptions;
}

function Navoptions({ navItem }: IProps) {
  const pathname = usePathname();
  return (
    <Link href={navItem.path} className="sm:w-full sm:flex group/navoption">
      <span className="block cursor-pointer">
        <div className="h-full flexCenter">
          <div
            className={`w-[90px] z-0 h-0 top-0 ${
              pathname === navItem.path
                ? "bg-gray-700 h-[98px]"
                : "bg-[#f5deb3] group-hover/navoption:h-[98px]"
            } absolute navItemClipPath transition-all duration-500 sm:hidden`}
          ></div>
          <div
            className={`w-0 hidden sm:block h-10 bg-gray-700 navItemMobileClipPath absolute left-0 ${
              pathname === navItem.path ? "w-[50%]" : "w-0"
            } transition-all duration-500`}
          ></div>
          <div className="z-10 relative">
            <p
              className={`nav-item ${
                pathname === navItem.path
                  ? "text-white"
                  : "group-hover/navoption:text-gray-800"
              } transition-all duration-500`}
            >
              {navItem.name}
            </p>
            {/* {optionname === "Services" ? (
              <ul className="min-w-96 bg-white hidden sm:group-hover/navoption:grid grid-cols-1 gap-5 px-8 py-5 navItemClipPath absolute -top-20 left-36">
                {servicesList.map((service, index) => (
                  <li
                    key={index}
                    className="text-gray-900 text-xs hover:text-[#f5deb3] "
                  >
                    <Link
                      className="flex items-center gap-2"
                      href={service.link}
                    >
                      {servicesIcons[index]}
                      <p className="mt-[2.2px]">{service.text}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null} */}
          </div>

          {navItem.submenu ? (
            <ul className="min-w-96 bg-white absolute grid grid-cols-2 top-[5.6rem] scale-0 opacity-0 group-hover/navoption:scale-100 group-hover/navoption:opacity-100 gap-5 px-8 py-5 navItemClipPath transition-all duration-300 sm:hidden">
              {navItem.submenu?.map((service, index) => (
                <li
                  onClick={(e) => e.stopPropagation()}
                  key={index}
                  className="text-gray-900 text-xs hover:text-[#f5deb3] "
                >
                  <Link className="flex items-center gap-2" href={service.path}>
                    {service.icon ? <service.icon /> : null}
                    <p className="mt-[2.2px]">{service.name}</p>
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </span>
    </Link>
  );
}

export default Navoptions;
