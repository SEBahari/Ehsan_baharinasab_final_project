import React from "react";
import ProductsRow from "./ProductsRow";
import cardImage1 from "../../images/6x6-gornos-w.jpg";
import cardImage2 from "../../images/photo_۲۰۱۷-۱۲-۲۸_۱۱-۵۹-۱۹.jpg";
import cardImage3 from "../../images/AAFW1413.png";
import cardImage4 from "../../images/ford_mustang_muscle_car-wide.jpg";
import cardImage5 from "../../images/photo_2017-09-07_10-40-17.jpg";

const detail = {
  list: [
    {
      image: cardImage1,
      title: "مرسدس بنز",
      subtitle: "G-500",
      discount: 10,
      originalPrice: '100,000',
      newPrice: '90,000',
      route: '/products/mercedes',
    },
    {
      image: cardImage2,
      title: "تویوتا",
      subtitle: "GTR",
      discount: 10,
      originalPrice: "100,000",
      newPrice: "90,000",
      route: "/products/gtr",
    },
    {
      image: cardImage3,
      title: "دوج چلنجر",
      subtitle: "Helcat",
      discount: 10,
      originalPrice: "100,000",
      newPrice: "90,000",
      route: "/products/chalenger",
    },
    {
      image: cardImage4,
      title: "فورد",
      subtitle: "mustang",
      discount: 10,
      originalPrice: "100,000",
      newPrice: "90,000",
      route: "/products/mustang",
    },
    {
      image: cardImage5,
      title: "پورشه",
      subtitle: "macan",
      discount: 10,
      originalPrice: "100,000",
      newPrice: "90,000",
      route: "/products/macan",
    }
  ],
  title: "آفرود",
  route: "/products?category=offroud",
};

function ShowOne() {
  return <ProductsRow {...detail} />;
}

export default ShowOne;