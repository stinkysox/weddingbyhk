import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import MarqueeImages from "../../components/MarqueeImages/MarqueeImages";
import StatsCounter from "../../components/StatsCounter/StatsCounter";
import OurServices from "../../components/OurServices/OurServices";
import TeasersSection from "../../components/TeasersSection/TeasersSection";
import LatestWork from "../../components/LatestWork/LatestWork";
import Testimonials from "../../components/Testimonials/Testimonials";
import ContactSection from "../../components/ContactSection/ContactSection";
import Footer from "../../components/Footer/Footer";
import ScrollButton from "../../components/ScrollButton/ScrollButton";
import BannerBottom from "../../components/BannerBottom/BannerBottom";
import GridComponent from "../../components/GridComponent/GridComponent";
const Home = () => {
  return (
    <section className="home-container">
      <Navbar />
      <BannerBottom
        title="Cinematic"
        backgroundImage="https://i.pinimg.com/736x/81/b7/6f/81b76f33b76986116d7f2a0f70339e3c.jpg"
      />
      <Banner />
      <BannerBottom
        title="Framed inForever"
        backgroundImage="https://i.pinimg.com/736x/1e/7a/c4/1e7ac4db496fd65ac0eef07a461f067a.jpg"
      />
      <MarqueeImages />
      <BannerBottom
        title="Chasing Light &Love"
        backgroundImage="https://i.pinimg.com/736x/d1/88/48/d18848482b46839661826b3a53ec90e0.jpg"
      />
      <StatsCounter />
      <BannerBottom
        title="Stories inStills"
        backgroundImage="https://i.pinimg.com/736x/86/2b/27/862b270e2df884de8a190791ef966e1f.jpg"
      />
      <OurServices />
      <BannerBottom
        title="Echoes ofEmotion"
        backgroundImage="https://i.pinimg.com/736x/e2/b9/8f/e2b98f202daaf9947e6f34f7088c2386.jpg"
      />
      <LatestWork />
      <BannerBottom
        title="Time HeldGently"
        backgroundImage="https://i.pinimg.com/736x/17/0b/cf/170bcfe7a764bc5e0cb99c5b1f1f45bb.jpg"
      />
      <TeasersSection />
      <BannerBottom
        title="The Human Lens"
        backgroundImage="https://i.pinimg.com/736x/21/92/a9/2192a9d4bb6cf242a19cab0bd566e515.jpg"
      />
      <Testimonials />
      <BannerBottom
        title="Unscripted Beauty"
        backgroundImage="https://i.pinimg.com/736x/12/9e/36/129e36c40593a6ba84345fb57547a55a.jpg"
      />
      <ContactSection />
      <BannerBottom
        title="Moments Between Moments"
        backgroundImage="https://i.pinimg.com/736x/da/40/7b/da407b3560977ef7c9be8ca0f5ed524e.jpg"
      />
      <Footer />
      <ScrollButton />
    </section>
  );
};

export default Home;
