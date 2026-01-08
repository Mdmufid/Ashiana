import React from "react";
import P from "@/app/blog/P";
import { decodeUrl } from "@/utils/decodeUrl";
import { servicesList } from "@/constant";
import EachServiceLayout from "../EachServiceLayout";
import GridImage from "../GridImage";
import { Metadata } from "next";
import { FAQPage, WithContext } from "schema-dts";
import Script from "next/script";
import SubHeading from "@/app/blog/SubHeading";

export const metadata: Metadata = {
  title: "Best Modular Kitchen Designer in Kolkata | Ashiana Interiors",
  description:
    "Ashiana Interiors: Best Modular Kitchen Designer in Kolkata, offering stylish and functional kitchen solutions tailored to your needs. Contact us today!",
  alternates: {
    canonical: "/services/modular-kitchen",
  },
};

export default function page() {
  const navigatorInfo = [
    { link: "/", text: "home" },
    { link: "/services", text: "services" },
    { link: "/services/modular-kitchen", text: "modular-kitchen" },
  ];

  // const faqs = [
  //   {
  //     question:
  //       "What exactly is a modular kitchen, and how does it differ from a traditional kitchen?",
  //     answer:
  //       "A modular kitchen is a modern, pre-designed kitchen layout that consists of standardized units or modules. These modules, such as cabinets, drawers, shelves, and countertops, are manufactured off-site and assembled on-site. Unlike traditional kitchens, modular kitchens offer greater flexibility, customization options, and efficient space utilization.",
  //   },
  //   {
  //     question:
  //       "What are the key benefits of choosing a modular kitchen design for my home?",
  //     answer: `

  //     Modular kitchens offer several advantages, including: <br /><br />
  //     <ul class = "space-y-2 list-decimal pl-3">
  //      <li>Efficient space utilization: Modular designs maximize available space, making them ideal for small or irregularly shaped kitchens.</li>
  //      <li>Customization: Clients can choose from a wide range of designs, finishes, and accessories to create a kitchen that reflects their personal style and functional needs.</li>
  //      <li>Easy installation: As modular kitchens are pre-fabricated, installation is quicker and less disruptive compared to traditional kitchen renovations.</li>
  //      <li>Durability and functionality: Modular kitchen components are made from high-quality materials, ensuring durability and ease of maintenance.</li>
  //      <li>Future-proofing: Modular kitchens can be easily modified or expanded in the future to accommodate changing needs or preferences.</li>
  //     </ul>
  //     `,
  //   },
  //   {
  //     question:
  //       "How does Ashiana Interiors ensure that their modular kitchens are both aesthetically pleasing and functional?",
  //     answer:
  //       "At Ashiana Interiors, we prioritize a holistic approach to design, focusing on both form and function. Our team of experienced designers collaborates closely with clients to understand their requirements, lifestyle, and aesthetic preferences. We meticulously plan every aspect of the kitchen layout, ensuring seamless integration of appliances, storage solutions, and ergonomic features. The result is a modular kitchen that not only looks stunning but also enhances efficiency and convenience in daily use.",
  //   },
  //   {
  //     question:
  //       "Are modular kitchens suitable for all types of homes and budgets?",
  //     answer:
  //       "Yes, modular kitchens can be customized to suit a wide range of home sizes, layouts, and budgets. At Ashiana Interiors, we offer flexible design options to accommodate diverse needs and preferences. Whether you live in a compact apartment or a spacious villa, our modular kitchen solutions can be tailored to maximize space utilization and functionality while adhering to your budget constraints.",
  //   },
  //   {
  //     question:
  //       "What sets Ashiana Interiors apart from other modular kitchen brands?",
  //     answer:
  //       "Ashiana Interiors distinguishes itself through a combination of innovation, craftsmanship, and a customer-centric approach. Our designs blend contemporary style with practicality, catering to the unique requirements of each client. We prioritize quality and sustainability, using eco-friendly materials and practices wherever possible. From initial consultation to final installation, our dedicated team ensures a seamless and rewarding experience for every client, making us the preferred choice for discerning homeowners seeking excellence in modular kitchen design.",
  //   },
  // ];

  // const jsonLd: WithContext<FAQPage> = {
  //   "@context": "https://schema.org",
  //   "@type": "FAQPage",
  //   mainEntity: [
  //     {
  //       "@type": "Question",
  //       name: "What exactly is a modular kitchen, and how does it differ from a traditional kitchen?",
  //       acceptedAnswer: {
  //         "@type": "Answer",
  //         text: "A modular kitchen is a modern, pre-designed kitchen layout that consists of standardized units or modules. These modules, such as cabinets, drawers, shelves, and countertops, are manufactured off-site and assembled on-site. Unlike traditional kitchens, modular kitchens offer greater flexibility, customization options, and efficient space utilization.",
  //       },
  //     },
  //     {
  //       "@type": "Question",
  //       name: "What are the key benefits of choosing a modular kitchen design for my home?",
  //       acceptedAnswer: {
  //         "@type": "Answer",
  //         text: "Modular kitchens offer several advantages, including: Efficient space utilization: Modular designs maximize available space, making them ideal for small or irregularly shaped kitchens. Customization: Clients can choose from a wide range of designs, finishes, and accessories to create a kitchen that reflects their personal style and functional needs. Easy installation: As modular kitchens are pre-fabricated, installation is quicker and less disruptive compared to traditional kitchen renovations. Durability and functionality: Modular kitchen components are made from high-quality materials, ensuring durability and ease of maintenance. Future-proofing: Modular kitchens can be easily modified or expanded in the future to accommodate changing needs or preferences.",
  //       },
  //     },
  //     {
  //       "@type": "Question",
  //       name: "How does Ashiana Interiors ensure that their modular kitchens are both aesthetically pleasing and functional?",
  //       acceptedAnswer: {
  //         "@type": "Answer",
  //         text: "At Ashiana Interiors, we prioritize a holistic approach to design, focusing on both form and function. Our team of experienced designers collaborates closely with clients to understand their requirements, lifestyle, and aesthetic preferences. We meticulously plan every aspect of the kitchen layout, ensuring seamless integration of appliances, storage solutions, and ergonomic features. The result is a modular kitchen that not only looks stunning but also enhances efficiency and convenience in daily use.",
  //       },
  //     },
  //     {
  //       "@type": "Question",
  //       name: "Are modular kitchens suitable for all types of homes and budgets?",
  //       acceptedAnswer: {
  //         "@type": "Answer",
  //         text: "Yes, modular kitchens can be customized to suit a wide range of home sizes, layouts, and budgets. At Ashiana Interiors, we offer flexible design options to accommodate diverse needs and preferences. Whether you live in a compact apartment or a spacious villa, our modular kitchen solutions can be tailored to maximize space utilization and functionality while adhering to your budget constraints.",
  //       },
  //     },
  //     {
  //       "@type": "Question",
  //       name: "What sets Ashiana Interiors apart from other modular kitchen brands?",
  //       acceptedAnswer: {
  //         "@type": "Answer",
  //         text: "Ashiana Interiors distinguishes itself through a combination of innovation, craftsmanship, and a customer-centric approach. Our designs blend contemporary style with practicality, catering to the unique requirements of each client. We prioritize quality and sustainability, using eco-friendly materials and practices wherever possible. From initial consultation to final installation, our dedicated team ensures a seamless and rewarding experience for every client, making us the preferred choice for discerning homeowners seeking excellence in modular kitchen design.",
  //       },
  //     },
  //   ],
  // };

  return (
    <>
      {/* <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      /> */}
      <EachServiceLayout
        navigatorInfo={navigatorInfo}
        blogheading="Best Modular Kitchen Designer in Kolkata"
        blogimage="/services/mk.webp"
        faqs={[]}
        servicesList={servicesList}
        servicename="modular kitchen"
        topheading="Best Modular Kitchen Designer in Kolkata"
        topimage="/services/top-kitchen-design.webp"
      >
        <P text="A modular kitchen is a necessity in modern homes due to its efficiency, functionality, and aesthetic appeal. It offers customizable layouts that maximize space utilization, provide ample storage options, and enhance workflow during meal preparation. Modular kitchens are designed to accommodate various kitchen appliances, accessories, and personal preferences, ensuring a tailored experience that fits individual lifestyles." />
        <P text="Choosing <a class = 'linkStyle' href = '/'>Ashiana</a> for your modular kitchen ensures you benefit from our expertise in creating bespoke designs that combine style with practicality. We prioritize quality craftsmanship, using durable materials and innovative solutions to meet your specific needs. Our team of experienced designers and technicians guides you through every step, from initial concept to final installation, ensuring a seamless and satisfying experience." />

        <P text="Ashiana’s commitment to customer satisfaction and attention to detail ensures that your modular kitchen not only meets but exceeds your expectations. Whether you seek a modern, minimalist design or a classic, timeless aesthetic, Ashiana Interiors delivers kitchens that elevate your living space and enrich your daily life." />

        <SubHeading text="L shaped " />
        <P text="Discover the efficiency and elegance of an L-shaped modular kitchen with Ashiana Interiors. Perfect for optimizing corner spaces, this layout offers ample storage and counter space. Our designs integrate sleek cabinets, convenient drawers, and stylish countertops tailored to your taste. Enjoy effortless meal preparation and organized storage with smartly placed appliances and accessories. Whether you prefer a modern, minimalist look or a classic aesthetic, our modular kitchens combine functionality with sophistication. Trust Ashiana Interiors to transform your kitchen into a seamless blend of style and practicality, enhancing your culinary experience and home value." />

        <SubHeading text="U shaped " />
        <P text="The U-shaped modular kitchen layout by Ashiana Interiors is ideal for spacious kitchens, offering maximum efficiency and functionality. This design surrounds you with ample counter space and storage, optimizing every corner for convenience. Our U-shaped kitchens feature customized cabinets, drawers, and countertops, tailored to your preferences and lifestyle. With smart appliance placement and ergonomic design, cooking becomes a joyous experience. Whether you seek a contemporary flair or timeless elegance, our designs blend aesthetics with practicality seamlessly. Trust Ashiana Interiors to elevate your kitchen with a U-shaped layout that enhances workflow, style, and the overall appeal of your home." />

        <SubHeading text="Parallel" />
        <P text="The parallel modular kitchen layout by Ashiana Interiors is perfect for narrow or elongated spaces, maximizing efficiency and functionality. This design features two parallel counters running along opposite walls, ensuring optimal workflow and ample storage options. Our kitchens integrate sleek cabinets, versatile drawers, and stylish countertops tailored to your preferences. With strategically placed appliances and smart storage solutions, cooking and organizing become seamless tasks. Whether you prefer a modern aesthetic or classic elegance, our designs blend practicality with sophistication. Trust Ashiana Interiors to transform your kitchen into a harmonious blend of style and functionality, enhancing your cooking experience and home value." />

        <SubHeading text="Island" />
        <P text="The island modular kitchen layout by Ashiana Interiors is ideal for spacious kitchens, offering a central island that enhances both functionality and aesthetics. This design is perfect for homes with ample space, providing additional countertop area for food preparation, dining, and socializing. Our island kitchens feature customized cabinets, drawers, and countertops, tailored to your style preferences. With integrated appliances, smart storage solutions, and optional seating, our designs ensure a seamless blend of style and practicality. Whether you envision a contemporary look or timeless elegance, trust Ashiana Interiors to create a kitchen that enhances your lifestyle and adds value to your home." />

        <SubHeading text="Peninsula" />
      </EachServiceLayout>
    </>
  );
}
