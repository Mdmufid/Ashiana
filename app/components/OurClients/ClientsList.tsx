import Image from "next/image";
import React from "react";

export default function ClientsList() {
  const clients = Array.from({ length: 21 }, (_, i) => `${i + 1}.webp`);

  return (
    <ul className="w-full flex items-center justify-center flex-wrap gap-10 h-auto pt-12 py-16">
      {clients.map((src, index) => (
        <li key={index} className="clientsLogoShdow border basis-[250px] h-[7.6rem] flexCenter md:basis-[200px]">
          <Image className="object-cover w-44  transition-all duration-300" src={`/clients/${src}`} alt={src} height={1200} width={1200}/>
        </li>
      ))}
    </ul>
  );
}
