import NormalListOption from "@/app/blog/NormalListOption";
import { servicesList } from "@/constant";
import React from "react";
import EachServiceLayout from "../EachServiceLayout";
import { Metadata } from "next";
import P from "@/app/blog/P";
import SubHeading from "@/app/blog/SubHeading";

export const metadata: Metadata = {
  title: " Ashiana: Unclog Your Worries! Kolkata's Best Plumbing Services",
  description:
    "Dealing with plumbing problems? Ashiana, Kolkata's best plumbing service, is here to help! We offer fast, reliable, and affordable solutions for all your plumbing needs. From leaky faucets to drain clogs, our experts get the job done right. Schedule an appointment today!",
  alternates: {
    canonical: "/services/plumbing",
  },
};

export default function page() {
  const navigatorInfo = [
    { link: "/", text: "home" },
    { link: "/services", text: "services" },
    { link: "/services/plumbing", text: "plumbing" },
  ];
  return (
    <EachServiceLayout
      navigatorInfo={navigatorInfo}
      blogheading="BEST PLUMBING SERVICES IN KOLKATA"
      blogimage="/services/PLUMBING.webp"
      faqs={[]}
      servicesList={servicesList}
      servicename="plumbing"
      topheading="BEST PLUMBING SERVICES IN KOLKATA"
      topimage="/services/top-banner-plumbing.webp"
    >
      <P text="At Ashiana, we understand the importance of a well-functioning plumbing system for your Kolkata home. We offer a comprehensive range of services to ensure your water flows smoothly and efficiently:" />

      <NormalListOption
        options={[
          {
            heading: "Installation of Plumbing System",
            text: "Our skilled plumbers can install an entirely new plumbing system, whether for a new construction project or a complete renovation. We use high-quality materials and adhere to all building codes for a safe and reliable system.",
          },
          {
            heading: "Pipe Laying and Fitting",
            text: "Our expertise extends to precise pipe laying and fitting, ensuring a leak-free and efficient water flow throughout your space. We can handle various pipe materials like copper, PVC, and PEX, choosing the best option for your needs.",
          },
          {
            heading: "Leak Detection and Repair",
            text: "No drip or trickle goes unnoticed! Our advanced leak detection equipment helps us pinpoint the source of any leak, hidden or exposed. We then employ effective repair methods to get your plumbing system back in top shape, minimizing damage and disruption.",
          },
          {
            heading: "Fixture Installation",
            text: "From faucets and showerheads to toilets and sinks, our team seamlessly installs any plumbing fixture in your home. As we are the best plumbing service provider in Kolkata, we offer a wide selection of options to suit your style and budget, ensuring a perfect fit and optimal functionality.",
          },
          {
            heading: "Sump Pump Installation and Maintenance",
            text: "Living in Kolkata, you understand the importance of proper drainage. We offer sump pump installation and proper maintenance services to keep your space dry to prevent water damage. We can advise on the appropriate sump pump size and ensure its proper functionality.",
          },
        ]}
      />

      <SubHeading text="Why Choose Ashiana Plumbing?" />
      <NormalListOption
        options={[
          {
            heading: "Skilled and Experienced Plumbers",
            text: "Our team undergoes rigorous training and possesses extensive experience to tackle any plumbing challenge.",
          },
          {
            heading: "Quality Materials and Workmanship",
            text: "We prioritize using high-quality, durable materials and ensure our work meets the highest standards.",
          },
          {
            heading: "Customer Satisfaction Guaranteed",
            text: "We stand behind our work and are committed to exceeding your expectations.",
          },
        ]}
      />

      <P text="<a class = 'linkStyle' href = '/contact-us'>Contact Ashiana today</a> for all your complete interior decoration and plumbing needs in Kolkata. We'll ensure your home's plumbing system functions flawlessly, providing a solid foundation for comfort and convenience."/>
    </EachServiceLayout>
  );
}
