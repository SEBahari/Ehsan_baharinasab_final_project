import React from "react";
import "./Home.style.css";
import bannerImage
  from "../../../images/6x6-gornos-w.jpg";
import Banner from "../../../Components/Main/Banner";

export default function Home() {
  return (
    <>
      <Banner
        image={bannerImage}
        alignment={"left"}
        content={<>
          <p>مرسدس بنز</p>
          <p>جی-کلاس G-500</p>
        </>}
        route={"/products/mercedes-g-500"}
      />
    </>
  );
}
