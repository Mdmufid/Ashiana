import React from "react";
import P from "@/app/blog/P";
import { servicesList } from "@/constant";
import EachServiceLayout from "../EachServiceLayout";
import GridImage from "../GridImage";
import { Metadata } from "next";
import Script from "next/script";
import { FAQPage, WithContext } from "schema-dts";

export const metadata: Metadata = {
  title: "Best Skylight Dome Designer in Kolkata | Ashiana Interiors",
  description:
    "Ashiana Interiors - Best Skylight Dome Designer in Kolkata. Transform your space with stunning, custom skylight domes. Exceptional design and quality.",
  alternates: {
    canonical: "/services/skylight-dome",
  },
};

export default function page() {
  const navigatorInfo = [
    { link: "/", text: "home" },
    { link: "/services", text: "services" },
    { link: "/services/skylight-dome", text: "skylight-dome" },
  ];

  const faqs = [
    {
      question:
        "Why should I choose Ashiana Interiors for my skylight dome design needs in Kolkata?",
      answer:
        "Ashiana Interiors is renowned for its innovative designs, expert craftsmanship, and exceptional service. With a commitment to excellence, we ensure that every skylight dome we design not only enhances the aesthetics of your space but also maximizes natural light entry and energy efficiency.",
    },
    {
      question:
        "What sets Ashiana Interiors apart from other skylight designers in Kolkata?",
      answer: `
      Our expertise lies in creating bespoke skylight solutions that are tailored to your specific requirements and preferences. We prioritize quality craftsmanship, customization options, and optimal lighting solutions, ensuring that your skylight dome exceeds expectations in both form and function.
      `,
    },
    {
      question:
        "How does Ashiana Interiors ensure the quality of its skylight dome designs?",
      answer:
        "At Ashiana Interiors, quality is paramount. We source premium materials and employ skilled craftsmen who adhere to rigorous quality control standards throughout the design and installation process. This ensures that every skylight dome meets our exacting standards for durability, performance, and aesthetics.",
    },
    {
      question:
        "Can Ashiana Interiors customize skylight dome designs to suit my space?",
      answer:
        "Absolutely! We understand that every space is unique, which is why we offer a wide range of customization options to cater to diverse needs and preferences. Whether you're looking for a sleek, modern design or a more ornate and decorative style, our designers will work closely with you to bring your vision to life.",
    },
    {
      question:
        "How can I get started with Ashiana Interiors for my skylight dome project?",
      answer:
        "Getting started with Ashiana Interiors is easy. Simply contact us to schedule a consultation with one of our experienced designers. During this consultation, we'll discuss your vision, preferences, and requirements for the skylight dome design. From there, our team will work tirelessly to create a customized solution that exceeds your expectations. Experience the beauty and functionality of a bespoke skylight dome with Ashiana Interiors today!",
    },
  ];

  const jsonLd: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why should I choose Ashiana Interiors for my skylight dome design needs in Kolkata?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ashiana Interiors is renowned for its innovative designs, expert craftsmanship, and exceptional service. With a commitment to excellence, we ensure that every skylight dome we design not only enhances the aesthetics of your space but also maximizes natural light entry and energy efficiency.",
        },
      },
      {
        "@type": "Question",
        name: "What sets Ashiana Interiors apart from other skylight designers in Kolkata?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our expertise lies in creating bespoke skylight solutions that are tailored to your specific requirements and preferences. We prioritize quality craftsmanship, customization options, and optimal lighting solutions, ensuring that your skylight dome exceeds expectations in both form and function.",
        },
      },
      {
        "@type": "Question",
        name: "How does Ashiana Interiors ensure the quality of its skylight dome designs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "At Ashiana Interiors, quality is paramount. We source premium materials and employ skilled craftsmen who adhere to rigorous quality control standards throughout the design and installation process. This ensures that every skylight dome meets our exacting standards for durability, performance, and aesthetics.",
        },
      },
      {
        "@type": "Question",
        name: "Can Ashiana Interiors customize skylight dome designs to suit my space?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely! We understand that every space is unique, which is why we offer a wide range of customization options to cater to diverse needs and preferences. Whether you're looking for a sleek, modern design or a more ornate and decorative style, our designers will work closely with you to bring your vision to life.",
        },
      },
      {
        "@type": "Question",
        name: "How can I get started with Ashiana Interiors for my skylight dome project?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Getting started with Ashiana Interiors is easy. Simply contact us to schedule a consultation with one of our experienced designers. During this consultation, we'll discuss your vision, preferences, and requirements for the skylight dome design. From there, our team will work tirelessly to create a customized solution that exceeds your expectations. Experience the beauty and functionality of a bespoke skylight dome with Ashiana Interiors today!",
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <EachServiceLayout
        navigatorInfo={navigatorInfo}
        blogheading="Best Skylight Dome Designer in Kolkata"
        blogimage="/services/skyleight-dome-blog-banner.webp"
        faqs={faqs}
        servicesList={servicesList}
        servicename="skylight dome"
        topheading="Best Skylight Dome Designer in Kolkata"
        topimage="https://wdtthemes.kinsta.cloud/mezan/wp-content/uploads/sites/4/2024/03/main-breacrumb-Image.jpg"
      >
        <P text="In the realm of interior design, harnessing natural light is a transformative element that can elevate the ambiance and aesthetics of any space. Ashiana Interiors in Kolkata has established itself as the foremost authority in crafting exquisite skylight domes that illuminate interiors with abundant natural light but also add a touch of architectural elegance to any setting." />

        <P text="1. Innovative Designs: At <a class = 'linkStyle' href = '/'>Ashiana Interiors</a>, we understand that each space is unique, and our skylight dome designs reflect this understanding. Our team of skilled designers excels in conceptualizing and creating bespoke skylight solutions that seamlessly integrate with the architectural style and layout of any space. Whether it's a residential abode, commercial establishment, or institutional building, our innovative designs enhance the beauty and functionality of the space." />

        <P text="2. Expert Craftsmanship: Craftsmanship is the hallmark of every skylight dome created by Ashiana Interiors. We take pride in our attention to detail and commitment to excellence, ensuring that every skylight dome is crafted with precision and care. From the selection of high-quality materials to the installation process, our skilled craftsmen adhere to the highest standards of quality, resulting in skylight domes that are not only visually stunning but also built to last." />
        <P text="3. Optimal Lighting Solutions: Natural light has the power to transform interiors, creating a sense of openness, warmth, and vitality. At Ashiana Interiors, we specialize in designing skylight domes that maximize the entry of natural light into any space. Our strategic placement and design considerations ensure that interiors are bathed in soft, diffused light throughout the day, reducing the need for artificial lighting and enhancing the overall energy efficiency of the space." />

        <GridImage
          images={[
            "/services/skylight-dom-1.webp",
            "/services/skylight-dom-2.webp",
          ]}
        />

        <P text="4. Customization Options: We recognize that every client has unique preferences and requirements when it comes to skylight design. That's why we offer a wide range of customization options to cater to diverse needs and tastes. Whether you prefer a sleek, minimalist design or a more ornate and decorative style, our designers work closely with you to bring your vision to life, ensuring that the final skylight dome reflects your personality and enhances the aesthetic appeal of your space." />
        <P text="5. Exceptional Service: At Ashiana Interiors, we believe in providing our clients with an exceptional experience from start to finish. From the initial consultation to the final installation, our dedicated team is committed to ensuring that every aspect of the skylight dome design process exceeds your expectations. We prioritize open communication, attention to detail, and timely delivery, ensuring that your experience with Ashiana Interiors is nothing short of extraordinary." />
        <P text="In conclusion, Ashiana Interiors stands out as the best skylight dome designer in Kolkata, offering innovative designs, expert craftsmanship, optimal lighting solutions, customization options, and exceptional service. Whether you're looking to infuse your space with natural light or enhance its architectural beauty, Ashiana Interiors is your trusted partner in bringing your vision to life. Experience the transformative power of natural light with Ashiana Interiors today." />
      </EachServiceLayout>
    </>
  );
}
