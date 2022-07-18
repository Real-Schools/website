import React, { useRef } from "react";
import ContactUs from "../../components/ContactUs/ContactUs";
import FooterOne from "../../components/Footer/FooterOne";
import HeaderTwo from "../../components/Header/HeaderTwo";
import HeroSliderSection from "../../components/Hero/HeroSliderSection";
import OurServices from "../../components/OurServices/OurServices";
import OurTeamTwo from "../../components/Team/OurTeamTwo";
import dataCreative from "../../data/Slider/creative-one-page-data.json";
import Loader from "./../../components/Loader/Loader";

const CreativeOnePage = () => {
  const home = useRef();
  const service = useRef();
  const team = useRef();
  const contact = useRef();

  const scrollToSection = (e, content) => {
    e.preventDefault();
    switch (content) {
      case "home":
        home.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "service":
        service.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "team":
        team.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        contact.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
    }
  };

  return (
    <Loader>
      <HeaderTwo scrollToSection={scrollToSection} />
      <HeroSliderSection data={dataCreative} ref={home} />
      <OurServices
        title="What We Do"
        tagline="We train pupils be the masters of tomorrow"
        serviceImg={"/images/Remake3.png"}
        ref={service}
      />
      <OurTeamTwo
        title="MEET OUR TEAM"
        tagline="One Team. One Mission"
        ref={team}
      />
      <ContactUs ref={contact} />
      <FooterOne />
    </Loader>
  );
};

export default CreativeOnePage;
