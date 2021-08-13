import React from "react";
import "./Home.style.css";
import Banner from "../../../Components/Main/Banner";
import bannerImage from "../../../images/00-mercedes-benz-vision-eq-silver-arrow-world-premiere-monterey-car-week-2018-3400x1440.jpg";
import cardImage1 from "../../../images/6x6-gornos-w.jpg";
import cardImage2 from "../../../images/photo_۲۰۱۷-۱۲-۲۸_۱۱-۵۹-۱۹.jpg";
import cardImage3 from "../../../images/AAFW1413.png";
import cardImage4 from "../../../images/ford_mustang_muscle_car-wide.jpg";
import cardImage5 from "../../../images/photo_2017-09-07_10-40-17.jpg";
import { Link } from "react-router-dom";
import ProductCard from "../../../Components/Main/ProductCard";

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
      <div className={"py-4"}>
        {/* title & link */}
        <div className="flex items-center justify-between p-3 pt-6">
          <h3 className={"text-lg"} >تخفیفات ویژه</h3>
          <Link className={"underline text-sm"} to={'/products?category=incredible'} >
            مشاهده همه
            <i className={"bi bi-chevron-compact-left"} />
          </Link>
        </div>
        {/* products list */}
        <div className="overflow-x-auto overflow-y-hidden whitespace-nowrap">

          {/* product 1 */}
          <ProductCard
            Image={cardImage1}
            title={"مرسدس بنز"}
            subtitle={"G-500"}
            discount={10}
            originalPrice={'100,000'}
            newPrice={'90,000'}
            route={'/products/mercedes'}
          />


          {/* product 2 */}
          <ProductCard
            Image={cardImage2}
            title={"تویوتا"}
            subtitle={"GTR"}
            discount={10}
            originalPrice={"100,000"}
            newPrice={"90,000"}
            route={"/products/gtr"}
          />

          {/* product 3 */}
          <ProductCard
            Image={cardImage3}
            title={"دوج چلنجر"}
            subtitle={"Helcat"}
            discount={10}
            originalPrice={"100,000"}
            newPrice={"90,000"}
            route={"/products/chalenger"}
          />

          {/* product 4 */}
          <ProductCard
            Image={cardImage4}
            title={"فورد"}
            subtitle={"mustang"}
            discount={10}
            originalPrice={"100,000"}
            newPrice={"90,000"}
            route={"/products/mustang"}
          />

          {/* product 5 */}
          <ProductCard
            Image={cardImage5}
            title={"پورشه"}
            subtitle={"macan"}
            discount={10}
            originalPrice={"100,000"}
            newPrice={"90,000"}
            route={"/products/macan"}
          />
        </div>
      </div>
    </>
  );
}
