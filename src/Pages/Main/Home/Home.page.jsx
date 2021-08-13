import React from "react";
import Banner from "../../../Components/Main/Banner";
import bannerImage from "../../../images/WallpaperStudio10-133870-3840x2160.jpg";
import Incredible from "../../../Components/Main/Incredible";
import HeroItem from "../../../Components/Main/HeroItem";
import ContactUs from "../../../Components/Main/ContactUs";

export default function Home() {
  return (
    <>
      {/* -------------------------------- Banner -------------------------------- */}
      <Banner
        image={bannerImage}
        alignment={"left"}
        content={<>
          <p>مرسدس بنز</p>
          <p>جی-کلاس G-500</p>
        </>}
        route={"/products/mercedes-g-500"}
      />

      {/* ------------------------- incredible products ------------------------- */}
      <Incredible />

      {/* ------------------------------ Hero Link ------------------------------ */}
      <HeroItem />

      {/* ------------------------------ Contact Us ------------------------------ */}
      <ContactUs />
    </>
  );
}
