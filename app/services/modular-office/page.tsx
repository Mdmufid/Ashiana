import React from "react";
import P from "@/app/blog/P";
import { decodeUrl } from "@/utils/decodeUrl";
import { servicesList } from "@/constant";
import EachServiceLayout from "../EachServiceLayout";
import GridImage from "../GridImage";
import { Metadata } from "next";
import { FAQPage, WithContext } from "schema-dts";
import Script from "next/script";

interface IProps {
  params: { eachservice: string };
}

export const metadata: Metadata = {
  title: "Best Modular Office Designer in Kolkata | Ashiana Interiors",
  description:
    "Ashiana Interiors - Best Modular Office Designer in Kolkata. Expert in creating stylish, functional office spaces tailored to your needs.",
  alternates: {
    canonical: "/services/modular-office",
  },
};

export default function page({ params }: IProps) {
  const servicename = params.eachservice;
  const navigatorInfo = [
    { link: "/", text: "home" },
    { link: "/services", text: "services" },
    { link: "/services/modular-office", text: "modular-office" },
  ];

  if (servicename) {
    navigatorInfo.push({
      link: `/services/${servicename}`,
      text: decodeUrl(servicename),
    });
  }

  const faqs = [
    {
      question:
        "What sets Ashiana Interiors apart from other office designers in Kolkata?",
      answer:
        "At Ashiana Interiors, we stand out through our innovative designs, meticulous craftsmanship, and commitment to exceeding client expectations. Our focus on customization, quality, and functionality ensures that every project is tailored to the unique needs of our clients, setting us apart as the premier choice for modular office design in Kolkata.",
    },
    {
      question: "How does Ashiana Interiors approach the design process?",
      answer: `
      
      Our design process begins with a thorough understanding of our client's requirements, preferences, and brand identity. We collaborate closely with clients to develop innovative concepts that blend aesthetics with functionality. Through meticulous planning and attention to detail, we create personalized designs that elevate the workspace and inspire productivity.
      `,
    },
    {
      question:
        "Can Ashiana Interiors accommodate specific design preferences and branding guidelines?",
      answer:
        " Absolutely. We pride ourselves on our ability to customize every aspect of the design to align with our client's vision and brand identity. Whether it's incorporating specific colors, logos, or design elements, our team ensures that the final product reflects the unique identity of the client's brand.",
    },
    {
      question:
        "How does Ashiana Interiors ensure the quality and durability of its modular office designs?",
      answer:
        "Quality is paramount at Ashiana Interiors. We carefully select premium materials and work with skilled craftsmen to ensure the highest standards of construction. From furniture to fixtures, every element is built to last, ensuring long-term durability and satisfaction for our clients.",
    },
    {
      question:
        "What is the typical timeline for completing a modular office design project with Ashiana Interiors?",
      answer:
        "The timeline for each project can vary depending on the scope and complexity of the design. However, we strive to deliver projects in a timely manner without compromising on quality. Our team works efficiently to ensure that deadlines are met, and clients can expect transparent communication and regular updates throughout the process.",
    },
  ];

  const jsonLd: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What sets Ashiana Interiors apart from other office designers in Kolkata?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "At Ashiana Interiors, we stand out through our innovative designs, meticulous craftsmanship, and commitment to exceeding client expectations. Our focus on customization, quality, and functionality ensures that every project is tailored to the unique needs of our clients, setting us apart as the premier choice for modular office design in Kolkata.",
        },
      },
      {
        "@type": "Question",
        name: "How does Ashiana Interiors approach the design process?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our design process begins with a thorough understanding of our client's requirements, preferences, and brand identity. We collaborate closely with clients to develop innovative concepts that blend aesthetics with functionality. Through meticulous planning and attention to detail, we create personalized designs that elevate the workspace and inspire productivity.",
        },
      },
      {
        "@type": "Question",
        name: "Can Ashiana Interiors accommodate specific design preferences and branding guidelines?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. We pride ourselves on our ability to customize every aspect of the design to align with our client's vision and brand identity. Whether it's incorporating specific colors, logos, or design elements, our team ensures that the final product reflects the unique identity of the client's brand.",
        },
      },
      {
        "@type": "Question",
        name: "How does Ashiana Interiors ensure the quality and durability of its modular office designs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Quality is paramount at Ashiana Interiors. We carefully select premium materials and work with skilled craftsmen to ensure the highest standards of construction. From furniture to fixtures, every element is built to last, ensuring long-term durability and satisfaction for our clients.",
        },
      },
      {
        "@type": "Question",
        name: "What is the typical timeline for completing a modular office design project with Ashiana Interiors?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The timeline for each project can vary depending on the scope and complexity of the design. However, we strive to deliver projects in a timely manner without compromising on quality. Our team works efficiently to ensure that deadlines are met, and clients can expect transparent communication and regular updates throughout the process.",
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
        blogheading="Best Modular Office Designer in Kolkata"
        blogimage="/services/moduler-office-blog-banner.webp"
        faqs={faqs}
        servicesList={servicesList}
        servicename="modular office"
        topheading="Best Modular Office Designer in Kolkata"
        topimage="https://wdtthemes.kinsta.cloud/mezan/wp-content/uploads/sites/4/2024/03/main-breacrumb-Image.jpg"
      >
        <P text="Transforming a mundane office space into a dynamic and efficient workspace is an art, and Ashiana Interiors in Kolkata has mastered it impeccably. With their innovative designs, impeccable craftsmanship, and commitment to excellence, Ashiana Interiors stands out as the premier choice for modular office design in Kolkata." />

        <P text="1. Innovative Designs: At Ashiana Interiors, every project begins with a blank canvas and a vision to create a workspace that not only meets the functional requirements but also inspires creativity and productivity. Their team of talented designers brings forth innovative concepts tailored to the specific needs and preferences of each client. Whether it's a sleek, modern aesthetic or a more traditional ambiance, Ashiana Interiors excels in delivering designs that exceed expectations." />

        <P text="2. Customization: Recognizing that every office space is unique, Ashiana Interiors offers a high level of customization to ensure that the design perfectly aligns with the client's vision and brand identity. From layout planning to selecting furniture and accessories, every aspect is meticulously curated to create a cohesive and harmonious environment that fosters collaboration and efficiency." />
        <P text="3. Quality Craftsmanship: Quality is paramount at Ashiana Interiors. They source materials from trusted suppliers and employ skilled craftsmen who pay attention to every detail, ensuring that the final product is not only visually stunning but also built to last. From premium-grade furniture to precision-engineered modular fixtures, every element is crafted with precision and care." />

        <GridImage
          images={[
            "/services/moduler-office1.webp",
            "/services/moduler-office2.webp",
          ]}
        />

        <P text="4. Functional Efficiency: In today's fast-paced business world, functionality is key. Ashiana Interiors specializes in optimizing space utilization and workflow efficiency. Their designs prioritize ergonomics and practicality, creating workspaces that are conducive to productivity and well-being. From intelligent storage solutions to ergonomic furniture layouts, every aspect is thoughtfully designed to enhance the overall user experience." />
        <P text="5. Client-Centric Approach: <a class = 'linkStyle' href = '/'>Ashiana Interiors</a> believes in forging long-term relationships with its clients based on trust, transparency, and reliability. They collaborate closely with clients throughout the design and implementation process, ensuring that their needs are met at every stage. From initial concept development to final installation, Ashiana Interiors strives to exceed client expectations and deliver exceptional results." />
        <P text="In conclusion, Ashiana Interiors stands out as the best modular office designer in Kolkata, offering innovative designs, customization, quality craftsmanship, functional efficiency, and a client-centric approach. Whether you're looking to revamp your existing office space or create a brand new one from scratch, Ashiana Interiors is your trusted partner in bringing your vision to life. Elevate your workspace with Ashiana Interiors and experience the difference firsthand." />
      </EachServiceLayout>
    </>
  );
}
