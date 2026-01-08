import React from "react";
import EachServiceLayout from "../EachServiceLayout";
import { servicesList } from "@/constant";
import P from "@/app/blog/P";
import SubHeading from "@/app/blog/SubHeading";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Ashiana: Sage & Best Electrical Installation Services in Kolkata",
  description:
    "Experience the Ashiana difference! We provide top-rated electrical installation services in Kolkata for homes and businesses. Our certified electricians ensure safety, quality, and peace of mind. Get a free quote today!",
  alternates: {
    canonical: "/services/electrical",
  },
};

export default function page() {
  const navigatorInfo = [
    { link: "/", text: "home" },
    { link: "/services", text: "services" },
    { link: "/services/electrical", text: "electrical" },
  ];
  return (
    <EachServiceLayout
      navigatorInfo={navigatorInfo}
      blogheading="Best Electrical Installation Services In Kolkata"
      blogimage="/services/ELECTRICALID.webp"
      faqs={[]}
      servicesList={servicesList}
      servicename="electrical"
      topheading="Best Electrical Installation Services In Kolkata"
      topimage="/services/top-banner-electronic.webp"
    >
      <P text='Welcome to <a href = "/">Ashiana Interiors</a>, your trusted partner for comprehensive electrical solutions. We specialize in a wide array of electrical services tailored for residential and commercial spaces. From basic installations to intricate rewiring projects, our skilled electricians deliver quality craftsmanship and adhere to stringent safety standards. We offer installation of lighting, switches, outlets, electrical panels, and backup power systems. Choose Ashiana Interiors for reliable service, attention to detail, and commitment to enhancing the efficiency and safety of your electrical infrastructure. Experience peace of mind with our expertise in creating functional and aesthetically pleasing electrical solutions for your home or business.' />

      <SubHeading text="Wiring rewiring" />
      <P text="Ashiana Interiors provides comprehensive electrical wiring and rewiring services tailored to residential and commercial spaces. Our expert electricians ensure safe and efficient installation, upgrade, or replacement of electrical systems. We prioritize quality materials and adherence to safety standards, offering solutions that optimize energy efficiency and minimize maintenance costs. Trust Ashiana Interiors for reliable electrical services that enhance the functionality and safety of your property, ensuring peace of mind and satisfaction." />

      <SubHeading text="Electrical installation" />
      <P text="Ashiana Interiors offers a wide range of electrical installations tailored to meet residential and commercial needs. Our services include the installation of lighting fixtures, ceiling fans, switches, outlets, circuit breakers, and more. We also specialize in setting up electrical panels, surge protectors, and backup power solutions like generators or UPS systems. With a focus on safety and efficiency, Ashiana Interiors ensures every electrical installation is performed to the highest standards, enhancing comfort and functionality in your space. Safe electrical installation is crucial to prevent hazards such as electrical shocks, fires, and damage to appliances. Proper installation ensures compliance with safety codes, reduces the risk of accidents, and enhances overall electrical system reliability. It protects both property and occupants, promoting peace of mind and long-term safety." />

      <SubHeading text="Lighting solutions" />
      <P
        text={`<a href = "/about-us">Ashiana Interiors</a> offers comprehensive lighting solutions tailored to enhance both residential and commercial spaces. Our features include energy-efficient LED fixtures, recessed lighting for a clean look, and decorative pendant lights for ambiance. We provide smart lighting systems for convenience and control. Options range from task lighting in kitchens to accent lighting for highlighting artwork or architectural features. Our expert designers ensure optimal placement and functionality, creating a harmonious balance of illumination and style. Trust Ashiana Interiors to transform your space with innovative lighting solutions that enhance comfort, productivity, and aesthetic appeal.`}
      />

      <SubHeading text="Panel upgrade" />
      <P text="Ashiana Interiors specializes in panel upgrade solutions to enhance electrical capacity and safety in residential and commercial properties. Features include modern electrical panels with increased circuit capacity, improved safety features like arc fault circuit interrupters (AFCIs) and ground fault circuit interrupters (GFCIs). Options include upgrading from fuse boxes to circuit breaker panels, ensuring reliable power distribution and protection against electrical hazards. Our expert electricians conduct thorough assessments and installations to meet local codes and ensure optimal performance. Choose Ashiana Interiors for reliable panel upgrade solutions that enhance the efficiency and safety of your electrical infrastructure." />

      <P text="Home automation" />
      <P text="Outdoor landscape lighting" />
    </EachServiceLayout>
  );
}
