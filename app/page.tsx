import Banner from "./components/BannerInfo/Banner";
import Services from "./components/Services/Services";
import ScrollText from "./components/ScrollText";
import About from "./components/About/About";
import OurClients from "./components/OurClients/OurClients";
import ContactUs from "./components/ContactUs/ContactUs";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Testimonial from "./components/Testimonials/Testimonial";
import SpecialServices from "./components/SpecialServices/SpecialServices";
import LatestNews from "./components/LatestNews/LatestNews";

export default function Home() {
  return (
    <main>
      <Banner />
      <Services />
      <ScrollText />
      <About />
      <WhyChooseUs />
      <SpecialServices />
      <OurClients />
      <Testimonial />
      <LatestNews />
      {/* <div className="mt-20 sm:mt-10">
        <OurTeam />
      </div> */}
      <ContactUs />
    </main>
  );
}
