import React from "react";
import "./Home.style.css";
import bannerImage
  from "../../../images/01-Mercedes-Benz-G-Class-G-500-4x4-2-Wallpaper-3840x2160.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* Banner */}
      <div className="banner banner--right">
        {/*  <div className="banner banner--center">*/}
        {/*<div className="banner banner--left">*/}
        <div className="banner__image">
          <img src={bannerImage} alt="mercedes benz g-class g-500 4x4"/>
        </div>
        <div className="banner__content">
          <div className="banner__text">
            <p>مرسدس بنز</p>
            <p>جی-کلاس G-500</p>
          </div>
          <Link to={"/products/mercedes-benz"} className="banner__button">مشاهده</Link>
        </div>
      </div>
    </>
  );
}
