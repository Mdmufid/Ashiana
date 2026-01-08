import React from "react";
import P from "@/app/blog/P";
import { servicesList } from "@/constant";
import EachServiceLayout from "../EachServiceLayout";
import GridImage from "../GridImage";
import { Metadata } from "next";
import Script from "next/script";
import { FAQPage, WithContext } from "schema-dts";

export const metadata: Metadata = {
  title: "Best Chair & Sofa Designer In Kolkata | Ashiana Interiors",
  description:
    "Ashiana Interiors: Best Chair & Sofa Designer in Kolkata. Offering custom, high-quality furniture to elevate your home's style and comfort. Contact us today!",
  alternates: {
    canonical: "/services/chair-and-sofa",
  },
};

export default function page() {
  const navigatorInfo = [
    { link: "/", text: "home" },
    { link: "/services", text: "services" },
    { link: "/services/chair-and-sofa", text: "chair-and-sofa" },
  ];

  const faqs = [
    {
      question:
        "What makes Ashiana Interiors the best choice for chair and sofa design in Kolkata?",
      answer:
        "Ashiana Interiors stands out for its commitment to excellence in design, craftsmanship, and customer satisfaction. Our team of experienced designers creates bespoke chair and sofa designs tailored to each client's unique style and preferences, ensuring unparalleled quality and comfort.",
    },
    {
      question:
        "Can Ashiana Interiors customize chair and sofa designs to suit my specific requirements?",
      answer: `
      Absolutely! At Ashiana Interiors, customization is at the heart of what we do. We work closely with our clients to understand their needs and preferences, offering a wide range of customization options including fabric selection, size adjustments, and ergonomic features. Your satisfaction is our top priority.
      `,
    },
    {
      question:
        "How does Ashiana Interiors ensure the quality of its chair and sofa designs?",
      answer:
        "Quality is our utmost priority at Ashiana Interiors. We source premium materials from trusted suppliers and employ skilled craftsmen who meticulously handcraft each piece to perfection. Our rigorous quality control process ensures that every chair and sofa meets our exacting standards for durability, comfort, and aesthetics.",
    },
    {
      question:
        "What sets Ashiana Interiors' chair and sofa designs apart from others in the market?",
      answer:
        "Our chair and sofa designs are distinguished by their timeless elegance, superior comfort, and attention to detail. Whether you prefer classic sophistication or contemporary flair, our designs seamlessly blend style with functionality to elevate any space. With Ashiana Interiors, you can expect nothing less than excellence in every aspect.",
    },
    {
      question:
        "How can I experience the luxury of Ashiana Interiors' chair and sofa designs?",
      answer:
        "We invite you to visit our showroom in Kolkata to explore our exquisite collection of chair and sofa designs firsthand. Our knowledgeable staff will be delighted to assist you in finding the perfect pieces to complement your home or office. Alternatively, you can schedule a consultation with one of our designers to discuss your specific requirements and preferences. Experience the epitome of luxury with Ashiana Interiors today!",
    },
  ];

  const jsonLd: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What makes Ashiana Interiors the best choice for chair and sofa design in Kolkata?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ashiana Interiors stands out for its commitment to excellence in design, craftsmanship, and customer satisfaction. Our team of experienced designers creates bespoke chair and sofa designs tailored to each client's unique style and preferences, ensuring unparalleled quality and comfort.",
        },
      },
      {
        "@type": "Question",
        name: "Can Ashiana Interiors customize chair and sofa designs to suit my specific requirements?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely! At Ashiana Interiors, customization is at the heart of what we do. We work closely with our clients to understand their needs and preferences, offering a wide range of customization options including fabric selection, size adjustments, and ergonomic features. Your satisfaction is our top priority.",
        },
      },
      {
        "@type": "Question",
        name: "How does Ashiana Interiors ensure the quality of its chair and sofa designs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Quality is our utmost priority at Ashiana Interiors. We source premium materials from trusted suppliers and employ skilled craftsmen who meticulously handcraft each piece to perfection. Our rigorous quality control process ensures that every chair and sofa meets our exacting standards for durability, comfort, and aesthetics.",
        },
      },
      {
        "@type": "Question",
        name: "What sets Ashiana Interiors' chair and sofa designs apart from others in the market?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our chair and sofa designs are distinguished by their timeless elegance, superior comfort, and attention to detail. Whether you prefer classic sophistication or contemporary flair, our designs seamlessly blend style with functionality to elevate any space. With Ashiana Interiors, you can expect nothing less than excellence in every aspect.",
        },
      },
      {
        "@type": "Question",
        name: "How can I experience the luxury of Ashiana Interiors' chair and sofa designs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We invite you to visit our showroom in Kolkata to explore our exquisite collection of chair and sofa designs firsthand. Our knowledgeable staff will be delighted to assist you in finding the perfect pieces to complement your home or office. Alternatively, you can schedule a consultation with one of our designers to discuss your specific requirements and preferences. Experience the epitome of luxury with Ashiana Interiors today!",
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
        blogheading="Best Chair & Sofa Designer In Kolkata"
        blogimage="/services/chair-and-sofa-blog-banner.webp"
        faqs={faqs}
        servicesList={servicesList}
        servicename="chair and sofa"
        topheading="Best Chair & Sofa Designer In Kolkata"
        topimage="https://wdtthemes.kinsta.cloud/mezan/wp-content/uploads/sites/4/2024/03/main-breacrumb-Image.jpg"
      >
        <P text="When it comes to creating a space that exudes luxury, comfort, and style, Ashiana Interiors in Kolkata sets the standard as the ultimate destination for chair and sofa design. Renowned for their impeccable craftsmanship, innovative designs, and dedication to client satisfaction, Ashiana Interiors stands out as the best in the business." />

        <P text="1. Exquisite Designs: Ashiana Interiors' collection of chairs and sofas is a testament to their commitment to excellence in design. From sleek and contemporary to timeless and classic, their furniture pieces are crafted with meticulous attention to detail and an eye for aesthetic appeal. Each design is carefully curated to elevate the ambiance of any space and make a statement of luxury and sophistication." />

        <P text="2. Bespoke Customization: At <a class = 'linkStyle' href = '/'>Ashiana Interiors</a>, they understand that every client has unique preferences and requirements. That's why they offer bespoke customization options for their chairs and sofas. From selecting the finest fabrics to choosing the perfect finishes, clients have the freedom to tailor their furniture pieces to reflect their individual style and personality, ensuring a truly personalized experience." />
        <P text="3. Craftsmanship Excellence: Quality is the cornerstone of Ashiana Interiors' philosophy. They source the highest quality materials and work with skilled artisans who possess a mastery of their craft. Each chair and sofa is crafted with precision and care, using time-honored techniques to ensure durability, comfort, and longevity." />

        <GridImage
          images={[
            "/services/chair-and-sofa-1.webp",
            "/services/chair-and-sofa-2.webp",
          ]}
        />

        <P text="4. Luxurious Comfort: Comfort is not compromised in Ashiana Interiors' pursuit of elegance and style. Their chairs and sofas are designed with the utmost comfort in mind, featuring plush cushions, ergonomic designs, and ample support. Whether you're relaxing with a book or entertaining guests, you can sink into luxury and unwind in style with Ashiana Interiors' furniture pieces." />
        <P text="5. Unparalleled Client Satisfaction: Ashiana Interiors is dedicated to exceeding client expectations at every turn. From the initial consultation to the final installation, they prioritize clear communication, attention to detail, and superior service. Clients can trust Ashiana Interiors to deliver furniture that not only meets but surpasses their expectations, creating spaces that are as functional as they are beautiful." />
        <P text="In summary, Ashiana Interiors stands as the epitome of luxury and sophistication in chair and sofa design in Kolkata. With their exquisite designs, bespoke customization options, craftsmanship excellence, luxurious comfort, and unwavering commitment to client satisfaction, Ashiana Interiors sets the standard for unparalleled elegance and style. Indulge in luxury and elevate your space with Ashiana Interiors today." />
      </EachServiceLayout>
    </>
  );
}
