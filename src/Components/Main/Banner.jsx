import React from "react";
import "./Banner.style.css";
import { Link } from "react-router-dom";

function Banner( { alignment, image, content, route } ) {
  return (
    <>
      <div className={"banner banner--" + alignment}>
        <div className="banner__image">
          <img src={image} alt="mercedes benz g-class g-500 4x4"/>
        </div>
        <div className="banner__content">
          <div className="banner__text">
            {content}
          </div>
          <Link to={route} className="banner__button">مشاهده</Link>
        </div>
      </div>
    </>
  );
}

export default Banner;
