import React from "react";
import EachServiceLayout from "../EachServiceLayout";
import { servicesList } from "@/constant";
import NormalListOption from "@/app/blog/NormalListOption";
import { Metadata } from "next";
import P from "@/app/blog/P";
import SubHeading from "@/app/blog/SubHeading";

export const metadata: Metadata = {
  title:
    "Ashiana: Transform Your Walls - Kolkata's Top-Rated Painting Services",
  description:
    "Breathe new life into your space with Ashiana, Kolkata's best painting services! We offer exceptional quality, professional painters, and various colors and finishes. Get a free quote and unlock the potential of your walls today!",
  alternates: {
    canonical: "/services/paint",
  },
};

export default function page() {
  const navigatorInfo = [
    { link: "/", text: "home" },
    { link: "/services", text: "services" },
    { link: "/services/paint-and-wallpaper", text: "paint-and-wallpaper" },
  ];
  return (
    <EachServiceLayout
      navigatorInfo={navigatorInfo}
      blogheading="Reimagine Your Space with Ashiana - Kolkata's Best Painting & Wallpaper Experts"
      blogimage="/services/wp.webp"
      faqs={[]}
      servicesList={servicesList}
      servicename="paint"
      topheading="Reimagine Your Space with Ashiana - Kolkata's Best Painting & Wallpaper Experts"
      topimage="/services/top-banner-paint.webp"
    >
      <P text="At Ashiana, we believe your Kolkata home deserves a canvas that reflects your unique style. That's why we offer a comprehensive range of painting and wallpaper services, empowering you to transform your walls and breathe new life into your space." />

      <SubHeading text="Unleash the Potential of Paint:" />
      <NormalListOption
        options={[
          {
            heading: "Emulsion for Walls",
            text: "Our expert painters utilize high-quality emulsion paints, offering a vast array of colors and finishes, from classic matt to contemporary silk. We'll ensure a smooth, flawless finish that enhances the aesthetics and light flow in your room.",
          },
          {
            heading: "Enamel for Wood and Metal",
            text: "Revitalize doors, furniture, and metal accents with our enamel paint options. We offer a selection of durable and long-lasting enamels, providing a beautiful and protective finish for all your woodwork and metal surfaces.",
          },
          {
            heading: "Textured Paints",
            text: "Add depth and dimension to your walls with textured paints. From subtle sand finishes to dramatic stucco effects, our skilled painters can create unique textures that complement your chosen design theme.",
          },
          {
            heading: "3D Paints",
            text: "Make a bold statement with innovative 3D paints. We can create stunning three-dimensional effects, adding a touch of artistic flair and visual intrigue to your Kolkata home.",
          },
          {
            heading: "Custom Finishes",
            text: "Don't settle for the ordinary. Ashiana Interiors offers custom paint finishes, including metallics, color washes, and glazes. Our creative team will work with you to achieve a one-of-a-kind look that reflects your personality.",
          },
        ]}
      />

      <SubHeading text="Embrace the Art of Wallpaper:" />
      <P text="Ashiana - The Best Painting & Wallpaper Experts in Kolkata offers a fantastic way to add personality, pattern, and texture to your walls. We provide a curated selection of the most popular wallpaper categories in Kolkata:" />

      <NormalListOption
        options={[
          {
            heading: "Modern & Geometric",
            text: "Create a sleek and sophisticated ambiance with modern and geometric wallpapers. From bold stripes to intricate patterns, these designs add a touch of contemporary flair to your space.",
          },
          {
            heading: "Floral & Botanical",
            text: "Embrace the beauty of nature with floral and botanical wallpapers. These wallpapers bring a touch of the outdoors in, creating a calming and inviting atmosphere.",
          },
          {
            heading: "Damask & Traditional",
            text: "Indulge in timeless elegance with damask and traditional wallpapers. These ornate designs add a touch of sophistication and grandeur to any room.",
          },
          {
            heading: "Brick & Stone",
            text: "Achieve a rustic or industrial aesthetic with brick and stone wallpapers. These realistic designs offer a unique textural element to your walls, perfect for creating a statement feature wall.",
          },
          {
            heading: "Murals & Custom Designs",
            text: "Wish to transform a blank wall into a masterpiece? We offer custom mural and wallpaper design services. Our team can create bespoke designs that perfectly capture your vision and personality.",
          },
        ]}
      />

      <SubHeading text="Ashiana: Your Home & Commercial Space Interior Transformation Partner" />
      <P text="Whether you desire a fresh coat of paint or a dramatic wallpaper makeover, our dedicated team is here to guide you every step of the way. We offer expert consultations, helping you choose the perfect paint colors, finishes, and wallpaper designs that complement your existing décor and architectural style." />

      <P text="<a class = 'linkStyle' href = '/contact-us'>Contact Ashiana today</a> and unlock the endless possibilities for transforming your Kolkata home!" />
    </EachServiceLayout>
  );
}
