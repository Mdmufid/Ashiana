import React from "react";
import EachServiceLayout from "../EachServiceLayout";
import { servicesList } from "@/constant";
import P from "@/app/blog/P";
import SubHeading from "@/app/blog/SubHeading";
import ListWithHeading from "@/app/blog/ListWithHeading";
import NormalListOption from "@/app/blog/NormalListOption";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/services/interior-design",
  },
};

export default function page() {
  const navigatorInfo = [
    { link: "/", text: "home" },
    { link: "/services", text: "services" },
    { link: "/services/interior-design", text: "interior-design" },
  ];
  return (
    <EachServiceLayout
      navigatorInfo={navigatorInfo}
      blogheading="Best Interior Designer In Kolkata"
      blogimage="/services/INTERIORDESIGN.webp"
      faqs={[]}
      servicesList={servicesList}
      servicename="interior design"
      topheading="Best Interior Designer In Kolkata"
      topimage="/services/top-banner-interior-design.webp"
    >
      <P text="Welcome to <a class = 'linkStyle' href = '/'>Ashiana</a>, where your dream home becomes a reality. At Ashiana, we specialize in creating exquisite interiors that blend functionality with elegance. Our team of expert designers is dedicated to transforming your living space into a haven of comfort and style. From modern minimalism to timeless classics, we tailor each project to reflect your unique taste and lifestyle. Explore our portfolio to discover a world of inspiring designs and innovative solutions. Let Ashiana bring your vision to life, ensuring every detail exceeds your expectations. Start your journey to a beautiful home with us today." />

      <SubHeading text="Home interior" />
      <P text="At Ashiana, we believe that your home should be a sanctuary, a place where every detail reflects your personal style and enhances your daily life. We specialize in comprehensive <a class = 'linkStyle' href = '/contact-us'>residential space interior decor</a>, ensuring that each room in your home is both functional and aesthetically pleasing." />
      <P text="Our services cover every aspect of interior decor, from initial concept to final execution. Whether you're looking to revamp your living room, bedroom, kitchen, or bathroom, our expert designers work closely with you to understand your vision and preferences. We provide bespoke solutions tailored to your lifestyle, incorporating the latest trends and timeless classics." />
      <P text="In the living room, we focus on creating a warm and inviting atmosphere, using a harmonious blend of colors, textures, and furniture pieces. For bedrooms, we prioritize comfort and tranquility, selecting soothing palettes and luxurious materials. Our kitchen designs emphasize efficiency and style, combining modern appliances with smart storage solutions. Bathrooms are transformed into spa-like retreats, featuring elegant fixtures and serene decor." />

      <SubHeading text="Ashiana Interior offers a range of services for residential space decor, including:" />
      <NormalListOption
        options={[
          {
            heading: "Space Planning and Layout Design",
            text: "Optimizing room functionality and flow.",
          },
          {
            heading: "Custom Furniture Solutions",
            text: "Tailored furniture to fit your style and needs.",
          },
          {
            heading: "Lighting Design",
            text: "Enhancing ambiance with effective lighting solutions.",
          },
          {
            heading: "Color Schemes and Wall Treatments",
            text: "Creating cohesive and personalized aesthetics.",
          },
          {
            heading: "Accessory Selection",
            text: "Choosing decor items that complement your home’s design.",
          },
        ]}
      />

      <P
        text={`Trust Ashiana to transform your home into a stylish and comfortable haven.Ashiana also offers customized solutions for lighting, flooring, wall treatments, and accessories, ensuring a cohesive and polished look throughout your home. Trust Ashiana to bring your interior decor dreams to life, creating a space that you'll love to live in.`}
      />
      <SubHeading text="Office interior" />
      <P
        text={`At Ashiana, we understand the importance of a <a class = 'linkStyle' href = '/about-us'>well-designed office space</a> in enhancing productivity, fostering creativity, and creating a positive work environment. Our office interior decor services are designed to transform your workspace into a dynamic and functional area that reflects your brand identity and meets your business needs.`}
      />

      <P text="Our comprehensive services include:" />
      <ListWithHeading
        options={[
          {
            heading: "Space Planning and Layout Design",
            text: "We optimize your office layout for maximum efficiency and flow, ensuring that every square foot is utilized effectively. Our designs promote easy navigation and a comfortable working environment.",
          },
          {
            heading: "Custom Furniture Solutions",
            text: "We provide bespoke furniture that fits your office’s aesthetic and functional requirements. From ergonomic workstations to stylish conference tables, we offer solutions that enhance both comfort and professionalism.",
          },
          {
            heading: "Lighting Design",
            text: "Proper lighting is crucial in an office setting. We design and install lighting solutions that reduce eye strain, improve focus, and create an inviting atmosphere.",
          },
          {
            heading: "Color Schemes and Branding",
            text: "We incorporate your brand’s colors and identity into the decor, creating a cohesive and branded environment. This includes wall treatments, signage, and accent pieces that resonate with your company’s values and culture.",
          },
          {
            heading: "Acoustic Solutions",
            text: "To ensure a productive work environment, we offer soundproofing and acoustic treatments that minimize noise disruptions and enhance privacy.",
          },
          {
            heading: "Technology Integration",
            text: "We seamlessly integrate modern technology into your office design, ensuring that all tech needs are met without compromising on style.",
          },
          {
            heading: "Green and Sustainable Design",
            text: "We prioritize eco-friendly materials and sustainable practices in our designs, promoting a healthier workplace and reducing environmental impact.",
          },
        ]}
      />

      <P text="Trust Ashiana to deliver an office interior that not only looks impressive but also boosts employee morale and efficiency. Let us help you create a workspace that inspires success." />

      <P text="Commercial space interior ( shop, educational institutions)" />
      <P text="At Ashiana Interior, we specialize in <a href = '/about-us' class = 'linkStyle'>transforming commercial spaces</a> into dynamic, functional, and aesthetically pleasing environments. Our comprehensive services include expert space planning, custom furniture solutions, innovative lighting design, and branding integration. We focus on creating efficient layouts that enhance productivity and reflect your company’s identity. Our team also offers sustainable design options, ensuring an eco-friendly workspace. From office interiors to retail spaces, we tailor each project to meet your unique needs and goals. Partner with Ashiana Interior to elevate your commercial space, impress clients, and inspire employees with a professional, stylish, and functional environment." />

      <SubHeading text="Shop interior decor plan of action: " />
      <NormalListOption
        options={[
          {
            heading: "Space Planning",
            text: "Optimize layout for functionality and flow. We understand the business and enterprise aspirations and model the space accordingly.",
          },
          {
            heading: "Custom Displays",
            text: "Create attractive, efficient product displays. Afterall, “ jo dikhta hain, wo bikta hain”.",
          },
          {
            heading: "Lighting Solutions",
            text: "Enhance product visibility and ambiance with our mood lighting features.",
          },
          {
            heading: "Branding Integration",
            text: "Reflect your brand’s identity in design. Let’s boost the brand’s face value!",
          },
          {
            heading: "Material Selection",
            text: "Choose durable, cutting-edge materials with our expert team looking over furnishings.",
          },
          {
            heading: "Signage and Graphics",
            text: "Design impactful in-store signage and graphics to turn heads.",
          },
        ]}
      />

      <SubHeading text="Educational institution decor plan of action :" />
      <NormalListOption
        options={[
          {
            heading: "Ergonomic Furniture",
            text: "Comfortable, student-friendly desks and chairs.",
          },
          {
            heading: "Smart Classrooms",
            text: "Integration of advanced technology for interactive learning.",
          },
          {
            heading: "Optimal Lighting",
            text: "Bright, natural light to enhance focus.",
          },
          {
            heading: "Acoustic Solutions",
            text: "Noise control for a conducive learning environment.",
          },
          {
            heading: "Inspirational Decor",
            text: "Motivational wall art and color schemes.",
          },
          {
            heading: "Safety Features",
            text: "Child-safe materials and layouts.",
          },
        ]}
      />
    </EachServiceLayout>
  );
}
