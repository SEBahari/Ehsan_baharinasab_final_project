import React from "react";
import { Link } from "react-router-dom";
import Filter from "../../../Components/Main/Filter";
import SingleProduct from "../../../Components/Main/SingleProduct";
import cardImage1 from '../../../images/01-Mercedes-Benz-G-Class-G-500-4x4-2-Wallpaper-3840x2160.jpg';
import cardImage2 from '../../../images/6x6-gornos-w.jpg';
import cardImage3 from '../../../images/challenger1.jpeg';
import cardImage4 from '../../../images/photo_۲۰۱۷-۱۲-۲۸_۱۱-۵۹-۱۹.jpg';
import cardImage5 from '../../../images/porsche-911-rsr-2880x1800-2017-side-view-4019.jpg';

const list = [
  { image: cardImage1, title: 'G-Class', subtitle: "G-500 4x4", seller: "Mercedes Benz", rate: "4.9", rateOf: "378", discount: "13", originalPrice: "100,000", newPrice: "90,000" },
  { image: cardImage2, title: 'G-Class', subtitle: "G-63 6x6", seller: "Mercedes Benz", rate: "5", rateOf: "40", originalPrice: "1,100,000" },
  { image: cardImage3, title: 'Challenger', subtitle: "SRT", seller: "Dodge", rate: "3.9", rateOf: "834", originalPrice: "400,000" },
  { image: cardImage4, title: 'Nissan', subtitle: "GTR", seller: "IranKhodro", rate: "5", rateOf: "78", discount: "3", originalPrice: "100,000", newPrice: "90,000" },
  { image: cardImage5, title: 'Porsche', subtitle: "911 RSR", seller: "Saipa Motmaen", rate: "4.9", rateOf: "378", discount: "13", originalPrice: "100,000", newPrice: "90,000" },
];

function Products() {
  return (
    <div className={"pt-32 container mx-auto sm:pt-36 lg:pt-20"}>
      {/* -------------------------------- filters ------------------------------- */}
      <Filter />
      <hr className={"mb-1 lg:hidden"} />

      {/* ----------------------------- bread-crumbs ----------------------------- */}
      <div className={"px-4 flex items-end text-sm sm:px-10 lg:px-3"}>
        <Link to={"/"}>خانه</Link>
        <i className={"bi bi-chevron-left mx-1 text-xs"} />
        <Link to={"/products"} >محصولات</Link>
        <i className={"bi bi-chevron-left mx-1 text-xs"} />
        <span>here</span>
      </div>
      <hr className={"my-1"} />

      {/* ------------------------------- products ------------------------------- */}
      <div className={"products grid grid-cols-1 px-5 py-3 sm:px-10 lg:px-3 lg:grid-cols-12 "}>
        {/* right side -> filters */}
        <div className={"hidden lg:block lg:opacity-100 lg:col-span-3"} >
          <div className="mt-2 px-3">
            <div className={"flex items-start bg-gray-50 rounded-md shadow-lg py-3 px-4 sm:p-5"}>
              first filter
            </div>
          </div>
        </div>
        {/* left side -> list & pagination */}
        <div className={"lg:col-span-9"}>
          {/* Products List */}
          <div className={"grid grid-cols-1 gap-6 mt-2 lg:grid-cols-4 lg:gap-0 "}>
            {
              list.map((item, index) => (
                <>
                  <SingleProduct key={index + 'a'} {...item} />
                  <SingleProduct key={index + 'b'} {...item} />
                  <SingleProduct key={index + 'c'} {...item} />
                </>
              ))
            }
          </div>

          {/* pagination */}
          <div className="pagination flex items-baseline justify-center mt-6 mb-4">
            <button className="last bg-blue-400 w-8 h-8 rounded-full flex items-center justify-center mx-1 sm:w-10 sm:h-10">15</button>

            <span className={"mx-2 sm:mx-3"}>...</span>

            <button className="next bg-blue-400 w-8 h-8 rounded-full flex items-center justify-center mx-1 sm:w-10 sm:h-10">6</button>
            <button className="cur bg-blue-400 w-8 h-8 rounded-full flex items-center justify-center mx-1 sm:w-10 sm:h-10">5</button>
            <button className="pre bg-blue-400 w-8 h-8 rounded-full flex items-center justify-center mx-1 sm:w-10 sm:h-10">4</button>

            <span className={"mx-2 sm:mx-3"}>...</span>

            <button className="first bg-blue-400 w-8 h-8 rounded-full flex items-center justify-center mx-1 sm:w-10 sm:h-10">1</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Products;