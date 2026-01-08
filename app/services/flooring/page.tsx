import React from "react";
import EachServiceLayout from "../EachServiceLayout";
import { servicesList } from "@/constant";
import NormalListOption from "@/app/blog/NormalListOption";
import { Metadata } from "next";
import P from "@/app/blog/P";
import SubHeading from "@/app/blog/SubHeading";

export const metadata: Metadata = {
  title: "Ashiana: Step Up Your Style - Kolkata's Top Floor Design Experts",
  description:
    "Elevate your home with Ashiana, Kolkata's leading floor design company! We offer expert consultations, a wide selection of flooring materials, and professional installation for a beautiful and long-lasting foundation. Find your perfect floor today!",
  alternates: {
    canonical: "/services/flooring",
  },
};

export default function page() {
  const navigatorInfo = [
    { link: "/", text: "home" },
    { link: "/services", text: "services" },
    { link: "/services/flooring", text: "flooring" },
  ];
  return (
    <EachServiceLayout
      navigatorInfo={navigatorInfo}
      blogheading="Elevate Your Space with Ashiana - Best Floor Designer in Kolkata"
      blogimage="/services/FLOORING.webp"
      faqs={[]}
      servicesList={servicesList}
      servicename="flooring"
      topheading="Elevate Your Space with Ashiana - Best Floor Designer in Kolkata"
      topimage="/services/top-banner-flooring.webp"
    >
      <P text="Ashiana understands the transformative power of flooring in Kolkata homes. We're not just installers; we're your trusted partner in crafting the perfect foundation for your dream space. From timeless elegance to modern innovation, we offer a curated selection of flooring options to suit any style and budget:" />
      <NormalListOption
        options={[
          {
            heading: "Tile",
            text: "Explore the endless possibilities of tile flooring. We offer a vast selection of ceramic, porcelain, and mosaic tiles, perfect for kitchens, bathrooms, and high-traffic areas. Our expert designers can help you choose the right size, pattern, and texture to complement your overall design scheme.",
          },
          {
            heading: "Marble",
            text: "Indulge in the luxurious beauty of natural marble. This timeless material adds a touch of sophistication to any space. Our experienced team ensures flawless installation, highlighting the natural veining and elegance of marble.",
          },
          {
            heading: "SPC (Stone Plastic Composite)",
            text: "Experience the durability of the luxury vinyl plank with the added warmth of the stone. SPC flooring offers exceptional water resistance and scratch protection, making it ideal for high-traffic areas and pet-friendly homes.",
          },
          {
            heading: "Engineered Hardwood",
            text: "Enjoy the rich look and feel of hardwood floors without the maintenance hassle with the Best Floor Designer in Kolkata. Engineered hardwood offers superior stability and resistance to warping, making it a perfect choice for Kolkata's climate. We offer a variety of wood species, stains, and finishes to match your desired aesthetic.",
          },
          {
            heading: "Luxury Vinyl Plank (LVP)",
            text: "Embrace the look of hardwood with the practicality of vinyl. LVP offers stunning visuals, exceptional durability, and easy maintenance. Our extensive LVP selection caters to various styles, from classic woodgrains to modern, textured finishes.",
          },
          {
            heading: "Porcelain and Ceramic Tile",
            text: "Unleash the design versatility of porcelain and ceramic tile. These durable and water-resistant options come in a vast array of colors, patterns, and textures, allowing you to create a unique and personalized floor for any room.",
          },
          {
            heading: "Laminate",
            text: "Discover an affordable and stylish alternative to hardwood. Laminate flooring offers realistic wood-look visuals at a fraction of the cost. We carry a wide range of laminate planks, perfect for creating a warm and inviting atmosphere in your Kolkata home.",
          },
          {
            heading: "Cork Flooring",
            text: "Embrace sustainability and comfort with natural cork flooring. This eco-friendly option provides exceptional sound and thermal insulation, creating a warm and comfortable living space.",
          },
          {
            heading: "Polished Concrete",
            text: "Achieve an industrial-chic aesthetic with polished concrete flooring. This durable and low-maintenance option is perfect for modern and contemporary spaces. We offer various polishing techniques and staining options to customize the look of your concrete floor.",
          },
          {
            heading: "Terrazzo",
            text: "Add a touch of Venetian grandeur to your space with terrazzo flooring. Comprised of chips of marble, granite, and other materials embedded in concrete, terrazzo offers a unique and eye-catching design element.",
          },
          {
            heading: "Natural Stone (Marble, Granite, Slate, Travertine)",
            text: "Embrace the timeless beauty of natural stone flooring. Our selection includes marble, granite, slate, and travertine, each offering unique textures, colors, and veining patterns to elevate your Kolkata home.",
          },
          {
            heading: "Carpet Tiles",
            text: "Enjoy the comfort and practicality of carpet tiles. This modular flooring solution allows for easy installation, replacement, and reconfiguration, making it perfect for high-traffic areas, basements, or rental properties.",
          },
          {
            heading: "Wood",
            text: "Craft a timeless and elegant foundation with wood flooring. We offer a variety of solid hardwood species and engineered wood options, allowing you to choose the perfect wood type, stain, and finish to create a warm and inviting space.",
          },
          {
            heading: "Artificial Grass",
            text: "Transform your outdoor space into a vibrant oasis with artificial grass. This low-maintenance solution offers a lush green year-round, perfect for patios, balconies, or pet play areas.",
          },
        ]}
      />

      <SubHeading text="Let Ashiana Interiors Guide You" />
      <P text="Our team of experienced designers and flooring specialists will work closely with you to understand your style preferences, budget, and lifestyle needs. We'll guide you through the selection process, offering expert advice and recommendations to find the perfect flooring solution for your Kolkata home." />

      <P text="<a class = 'linkStyle' href = '/contact-us'>Contact Ashiana today</a> and embark on your dream flooring journey!"/>
    </EachServiceLayout>
  );
}
