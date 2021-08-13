import React from "react";
import Banner from "../../../Components/Main/Banner";
import bannerImage from "../../../images/00-mercedes-benz-vision-eq-silver-arrow-world-premiere-monterey-car-week-2018-3400x1440.jpg";
import Incredible from "../../../Components/Main/Incredible";

export default function Home() {
  return (
    <>
      {/*Banner*/}
      <Banner
        image={bannerImage}
        alignment={"left"}
        content={<>
          <p>مرسدس بنز</p>
          <p>جی-کلاس G-500</p>
        </>}
        route={"/products/mercedes-g-500"}
      />

      {/* incredible products */}
      <Incredible />
    </>
  );
}
