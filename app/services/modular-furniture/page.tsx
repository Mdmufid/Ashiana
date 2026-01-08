import React from "react";
import EachServiceLayout from "../EachServiceLayout";
import { servicesList } from "@/constant";
import P from "@/app/blog/P";
import NormalListOption from "@/app/blog/NormalListOption";
import SubHeading from "@/app/blog/SubHeading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title : "Ashiana: Crafting Dream Spaces with Kolkata's Best Modular Furniture Designs",
  description : "Ashiana, the leading name in modular furniture design in Kolkata, creates stylish and functional furniture for your home and office. Explore our wide range of customizable modular units and elevate your space. Contact us today for a free consultation!",
  alternates: {
    canonical: "/services/modular-furniture",
  },
};

export default function page() {
  const navigatorInfo = [
    { link: "/", text: "home" },
    { link: "/services", text: "services" },
    { link: "/services/modular-furniture", text: "modular-furniture" },
  ];
  return (
    <EachServiceLayout
      navigatorInfo={navigatorInfo}
      blogheading="Best Modular Furniture Designer in Kolkata"
      blogimage="/services/ct.webp"
      faqs={[]}
      servicesList={servicesList}
      servicename="modular furniture"
      topheading="Best Modular Furniture Designer in Kolkata"
      topimage="/services/top-modular-furniture-banner.webp"
    >
      <P
        text={`Modular furniture is essential for its versatility and adaptability. It allows businesses and homeowebers likewise to maximize their space efficiently, accommodating changing needs and layouts without major disruptions. <a href = "/" class = "linkStyle">Ashiana Interiors</a> specializes in modular furniture that is customizable to fit specific tailored requirements, whether it's office cubicles, flexible seating arrangements, plush living room seatings, adjustable and lit Puja decks at home or modular storage solutions. This flexibility promotes a dynamic work environment, promotes ease and comfort,enhances productivity, and supports collaborative bonds among employees and family members too. Our modular furniture solutions are crafted with high-quality materials and ergonomic designs, ensuring comfort and durability. By choosing Ashiana Interiors for your  modular furniture needs, you invest in adaptable solutions that optimize your space, reflect your creative identity, and contribute to a professional workspace and functional home environment.`}
      />

      <NormalListOption
        options={[
          { text: "Space efficient wardrobes" },
          { text: "Ergonomic office desk" },
          { text: "Outdoor patio" },
          { text: "Sectional sofas" },
          { text: "Convertible sofas" },
          {
            text: "Interlocking tables and desks (nestled table, adjustable desk)",
          },
        ]}
      />

      <P text="Ashiana Interiors offers innovative interlocking tables and desks that combine functionality with flexibility. Our nested table and adjustable desk designs are perfect for dynamic workspaces, allowing for easy customization and space optimization. Features include modular configurations for versatile layouts, ergonomic adjustments to accommodate different user preferences, and durable materials ensuring longevity. These solutions promote efficiency and comfort, supporting productivity in commercial environments. You could get these installed at home too, especially in your kid’s room to foster some convenience and concentration or maybe for your study room as well. Choose Ashiana Interiors for customizable, high-quality furniture that enhances your workspace aesthetics while providing practical solutions tailored to your business needs, whether for collaborative areas, executive offices, residential spaces or multi-functional workspaces. " />

      <P text="Modular beds ( platform beds with storage) ( foldable beds)" />
      <P text="Explore Ashiana Interiors' modular beds, designed for versatility and comfort in modern living. Modular beds offer customizable configurations to adapt to varying room sizes and decor styles, maximizing space efficiency. They incorporate features like adjustable headboards, storage compartments, and integrated lighting options, enhancing functionality while complementing your bedroom aesthetics. Modular beds are essential for urban homes and apartments where space is a premium, providing storage solutions and ergonomic designs that prioritize comfort. Discover how Ashiana Interiors transforms bedrooms into personalized sanctuaries with modular beds that meet your lifestyle needs, blending practicality with contemporary design." />

      <SubHeading text="Platform bed with storage" />
      <P text="Platform beds with storage from Ashiana Interiors feature integrated drawers or compartments beneath the mattress platform, maximizing space efficiency in bedrooms. Ideal for smaller spaces or minimalist decor, these beds offer ample storage without sacrificing style. They are perfect for urban apartments and contemporary homes seeking both functionality and modern design." />
      <SubHeading text="Foldable beds" />
      <P text="Ashiana Interiors' foldable beds with storage combine convenience with space-saving design. Featuring foldable mechanisms for easy storage and additional under-bed compartments, these beds are perfect for guest rooms, studios, or any space where versatility and compactness are key. Ideal for maximizing floor space without compromising on comfort or style." />

      <P text="Reconfigurable outdoor furniture, modular patio, stackable lounge chairs" />
    </EachServiceLayout>
  );
}
