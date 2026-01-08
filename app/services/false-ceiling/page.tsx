import React from "react";
import EachServiceLayout from "../EachServiceLayout";
import { servicesList } from "@/constant";
import P from "@/app/blog/P";
import SubHeading from "@/app/blog/SubHeading";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Ashiana: Your Space with Kolkata's Top False Ceiling Designs",
  description:
    "Transform your home or office with Ashiana, the leading designer of false ceilings in Kolkata! We offer a variety of styles, materials, and functionalities to create a stunning and functional space. Get a free consultation and unlock the potential of your ceiling today!",
  alternates: {
    canonical: "/services/false-ceiling",
  },
};

export default function page() {
  const navigatorInfo = [
    { link: "/", text: "home" },
    { link: "/services", text: "services" },
    { link: "/services/false-ceiling", text: "false-ceiling" },
  ];
  return (
    <EachServiceLayout
      navigatorInfo={navigatorInfo}
      blogheading="Best False Ceiling Designer In Kolkata"
      blogimage="/services/FALSECEILING.webp"
      faqs={[]}
      servicesList={servicesList}
      servicename="false ceiling"
      topheading="Best False Ceiling Designer In Kolkata"
      topimage="/services/false-celing-banner.webp"
    >
      <P text="False ceilings play a crucial role in home decor, enhancing both residential and commercial spaces. They conceal structural elements like wiring and piping, creating a clean and polished look. Moreover, false ceilings offer opportunities for creative lighting solutions, such as recessed lights and LED strips, which add ambiance and functionality. In commercial settings, they contribute to a professional atmosphere while aiding in sound insulation and climate control. Residentially, they allow for personalized aesthetics, from minimalist designs to intricate patterns, transforming the feel of any room. <a href = '/' class = 'linkStyle'>Ashiana Interiors</a> ensures false ceilings harmonize with overall decor, enhancing comfort and style." />

      <SubHeading text="Gypsum board " />
      <P text="Gypsum board false ceilings by Ashiana Interiors offer versatility and aesthetic appeal. They are ideal for residential and commercial spaces due to their lightweight construction, easy installation, and ability to conceal wiring and HVAC systems. Gypsum boards allow for various finishes like paint or wallpaper, enhancing the decor of any room effortlessly. Gypsum board false ceilings are fire-resistant, durable, and offer excellent thermal and acoustic insulation. They are versatile in design and allow for easy integration of lighting fixtures and air conditioning vents." />

      <SubHeading text="Plaster of Paris" />
      <P text="Plaster of Paris false ceilings are best suited for residential spaces due to their smooth finish and ability to create intricate designs. They offer versatility in shaping and molding, allowing for custom designs and patterns. Advantages include lightweight construction, quick installation, and easy maintenance. Additionally, Plaster of Paris ceilings provide good acoustic insulation and can be painted in various colors to complement any interior decor scheme. Our expert team at Ashiana ensures a hassle-free installation of false ceilings across your domestic or commercial space. " />

      <SubHeading text="Metal" />
      <P text="Metal false ceilings are commonly used in commercial spaces such as offices, airports, and shopping malls for their durability and sleek appearance. They offer excellent fire resistance, making them a safe choice for public areas. Metal ceilings are easy to clean and maintain, providing long-term cost efficiency. They also allow for the integration of lighting and HVAC systems. Additionally, metal ceilings contribute to a modern and professional aesthetic, enhancing the overall ambiance of any space." />

      <SubHeading text="Wood" />
      <P text="Ashiana Interiors offers wooden false ceilings known for their warmth and natural beauty, ideal for residential and upscale commercial spaces. Pros include aesthetic appeal, acoustic insulation, and sustainability. Installation involves skilled craftsmanship to ensure precision and durability. Wooden ceilings enhance ambiance with their rich textures and can be customized with stains or finishes. Trust Ashiana Interiors for expertly crafted wooden false ceilings that elevate your space with timeless elegance." />

      <SubHeading text="PVC" />
      <P text='<a href = "/contact-us">Ashiana Interiors</a>presents PVC false ceilings, renowned for their versatility and practicality in both residential and commercial settings. Pros include water resistance, easy maintenance, and affordability. Installation involves lightweight panels that are quick to install and durable. PVC ceilings offer a smooth finish and can accommodate various lighting options. Choose Ashiana Interiors for PVC false ceilings that combine functionality with modern aesthetics, enhancing your space with ease and efficiency.' />

      <SubHeading text="Glass" />
      <P text="Ashiana Interiors presents glass false ceilings known for their modern and elegant aesthetic, ideal for contemporary residential and commercial spaces. Pros include transparency, which enhances natural light distribution, and versatility in design options. Glass ceilings are durable, easy to clean, and offer a sleek, sophisticated appearance. They are best suited for areas where a spacious and airy feel is desired, such as lobbies, dining areas, and modern living rooms, creating a visually stunning focal point. Stretch" />
    </EachServiceLayout>
  );
}
