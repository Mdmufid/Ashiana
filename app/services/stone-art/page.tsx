import React from "react";
import P from "@/app/blog/P";
import { servicesList } from "@/constant";
import EachServiceLayout from "../EachServiceLayout";
import GridImage from "../GridImage";
import { Metadata } from "next";
import { FAQPage, WithContext } from "schema-dts";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Best Stone Art Designer in Kolkata | Ashiana Interiors",
  description:
    "Transform your space with Ashiana Interiors, the best stone art designer in Kolkata. Experience unique, elegant stone designs that elevate your home or office.",
  alternates: {
    canonical: "/services/stone-art",
  },
};

export default function page() {
  const navigatorInfo = [
    { link: "/", text: "home" },
    { link: "/services", text: "services" },
    { link: "/services/stone-art", text: "stone-art" },
  ];

  const faqs = [
    {
      question:
        "Why should I choose Ashiana Interiors for my stone art design needs in Kolkata?",
      answer:
        "Ashiana Interiors has established itself as the premier destination for exquisite stone art design in Kolkata. With our rich heritage of craftsmanship, innovative designs, and commitment to excellence, we promise to bring timeless elegance and sophistication to your space.",
    },
    {
      question:
        "What sets Ashiana Interiors apart from other stone art designers in Kolkata?",
      answer:
        "At Ashiana Interiors, we blend tradition with innovation to create stone art pieces that are truly exceptional. Our skilled artisans meticulously handcraft each piece, ensuring unparalleled quality and attention to detail. Additionally, our innovative designs and versatile materials offer a unique blend of classic charm and contemporary flair.",
    },
    {
      question:
        "Can Ashiana Interiors customize stone art designs according to my specific requirements?",
      answer:
        "Absolutely! We understand that every client has unique preferences and requirements. That's why we offer bespoke customization services to ensure that your stone art piece perfectly reflects your vision and complements your space. From design concept to material selection, we collaborate closely with you to bring your ideas to life.",
    },
    {
      question:
        "What types of stone materials do Ashiana Interiors work with for stone art designs?",
      answer:
        "Ashiana Interiors offers a wide range of premium stone materials, including marble, granite, limestone, and more. Each material boasts its unique characteristics, from the luxurious veining of marble to the rugged texture of granite. Our extensive selection ensures that you can find the perfect stone to suit your style and aesthetic preferences.",
    },
    {
      question:
        "How can I get started with Ashiana Interiors for my stone art project in Kolkata?",
      answer:
        "Getting started with Ashiana Interiors is simple. Reach out to us to schedule a consultation with one of our experienced designers. During this consultation, we'll discuss your ideas, preferences, and budget for the project. From there, our team will work tirelessly to create a customized stone art piece that exceeds your expectations and elevates the beauty of your space.",
    },
  ];

  const jsonLd: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why should I choose Ashiana Interiors for my stone art design needs in Kolkata?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ashiana Interiors has established itself as the premier destination for exquisite stone art design in Kolkata. With our rich heritage of craftsmanship, innovative designs, and commitment to excellence, we promise to bring timeless elegance and sophistication to your space.",
        },
      },
      {
        "@type": "Question",
        name: "What sets Ashiana Interiors apart from other stone art designers in Kolkata?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "At Ashiana Interiors, we blend tradition with innovation to create stone art pieces that are truly exceptional. Our skilled artisans meticulously handcraft each piece, ensuring unparalleled quality and attention to detail. Additionally, our innovative designs and versatile materials offer a unique blend of classic charm and contemporary flair.",
        },
      },
      {
        "@type": "Question",
        name: "Can Ashiana Interiors customize stone art designs according to my specific requirements?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely! We understand that every client has unique preferences and requirements. That's why we offer bespoke customization services to ensure that your stone art piece perfectly reflects your vision and complements your space. From design concept to material selection, we collaborate closely with you to bring your ideas to life.",
        },
      },
      {
        "@type": "Question",
        name: "What types of stone materials do Ashiana Interiors work with for stone art designs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ashiana Interiors offers a wide range of premium stone materials, including marble, granite, limestone, and more. Each material boasts its unique characteristics, from the luxurious veining of marble to the rugged texture of granite. Our extensive selection ensures that you can find the perfect stone to suit your style and aesthetic preferences.",
        },
      },
      {
        "@type": "Question",
        name: "How can I get started with Ashiana Interiors for my stone art project in Kolkata?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Getting started with Ashiana Interiors is simple. Reach out to us to schedule a consultation with one of our experienced designers. During this consultation, we'll discuss your ideas, preferences, and budget for the project. From there, our team will work tirelessly to create a customized stone art piece that exceeds your expectations and elevates the beauty of your space.",
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
        blogheading="Best Stone Art Designer in Kolkata"
        blogimage="/services/stone-art-blog-banner.webp"
        faqs={faqs}
        servicesList={servicesList}
        servicename="stone art"
        topheading="Best Stone Art Designer in Kolkata"
        topimage="https://wdtthemes.kinsta.cloud/mezan/wp-content/uploads/sites/4/2024/03/main-breacrumb-Image.jpg"
      >
        <P text="In the bustling city of Kolkata, where tradition and modernity coalesce seamlessly, Ashiana Interiors emerges as the epitome of excellence in stone art design. With a rich legacy of craftsmanship and a relentless pursuit of innovation, Ashiana Interiors has earned its reputation as the foremost authority in creating exquisite stone art pieces that adorn homes, offices, and public spaces with timeless elegance." />

        <P text="1. Heritage of Craftsmanship: At Ashiana Interiors, we take pride in our heritage of craftsmanship, which dates back generations. Our skilled artisans possess a deep understanding of traditional stone carving techniques passed down through the ages. This mastery, coupled with our unwavering commitment to quality, ensures that every stone art piece we create is a masterpiece in its own right." />

        <P text="2. Innovative Designs: While we draw inspiration from timeless traditions, we are also at the forefront of innovation in stone art design. Our team of designers constantly pushes the boundaries of creativity, exploring new techniques, and incorporating contemporary elements to create designs that are both classic and cutting-edge. Whether it's an intricately carved marble sculpture or a sleek granite installation, our designs captivate the imagination and elevate the ambiance of any space." />
        <P text="3. Versatility of Materials: Ashiana Interiors offers a diverse range of stone materials to suit every taste and style. From the luxurious elegance of marble to the rugged beauty of granite, our extensive selection ensures that clients can find the perfect stone art piece to complement their interiors. We work closely with our clients to understand their vision and preferences, guiding them in selecting the ideal material that best reflects their personality and aesthetic sensibilities." />

        <GridImage
          images={["/services/stone-art-1.webp", "/services/stone-art-2.webp"]}
        />

        <P text="4. Bespoke Creations: Each stone art piece created by <a class = 'linkStyle' href = '/'>Ashiana Interiors</a> is a labor of love and attention to detail. We collaborate closely with our clients throughout the design process, ensuring that their vision is brought to life with precision and care. Whether it's a custom-designed fireplace mantle, a sculptural fountain, or an ornate feature wall, our bespoke creations add a touch of sophistication and luxury to any environment." />
        <P text="5. Exemplary Service: At Ashiana Interiors, we are committed to providing our clients with an exceptional experience from start to finish. From the initial consultation to the final installation, our dedicated team is attentive to every detail, ensuring that the entire process is seamless and stress-free. We prioritize open communication, transparency, and reliability, ensuring that our clients' expectations are not only met but exceeded." />
        <P text="In conclusion, Ashiana Interiors stands out as the best stone art designer in Kolkata, offering a unique blend of heritage craftsmanship, innovative design, versatile materials, bespoke creations, and exemplary service. Whether you're seeking to adorn your space with a striking focal point or add a touch of elegance to your interiors, Ashiana Interiors is your trusted partner in bringing your vision to life. Experience the timeless beauty of stone art with Ashiana Interiors today." />
      </EachServiceLayout>
    </>
  );
}
