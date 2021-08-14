import React from "react";
import Filter from "../../../Components/Main/Filter";
import HProduct from "../../../Components/Main/HProduct";
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
    <div className={"pt-32 container mx-auto sm:pt-36"}>
      {/* -------------------------------- filters ------------------------------- */}
      <Filter />
      <hr className={"mb-1"} />

      {/* ----------------------------- bread-crumbs ----------------------------- */}
      <div className={"px-4 flex items-end text-sm sm:px-10"}>
        <span>خانه</span>
        <i className={"bi bi-chevron-left mx-1 text-xs"} />
        <span>محصولات</span>
        <i className={"bi bi-chevron-left mx-1 text-xs"} />
        <span>here</span>
      </div>
      <hr className={"my-1"} />

      {/* ------------------------------- products ------------------------------- */}
      <div className={"products px-5 py-3 sm:px-10"}>
        {/* Products List */}
        <div className={"grid grid-cols-1 gap-6 mt-2"}>
          {
            list.map(item => (
              <HProduct {...item} />
            ))
          }
        </div>

        {/* pagination */}
        <div className="pagination flex items-baseline justify-center mt-6 mb-4">
          <div className="last bg-blue-400 w-8 h-8 rounded-full flex items-center justify-center mx-1 sm:w-10 sm:h-10">15</div>

          <span className={"mx-2 sm:mx-3"}>...</span>

          <div className="next bg-blue-400 w-8 h-8 rounded-full flex items-center justify-center mx-1 sm:w-10 sm:h-10">6</div>
          <div className="cur bg-blue-400 w-8 h-8 rounded-full flex items-center justify-center mx-1 sm:w-10 sm:h-10">5</div>
          <div className="pre bg-blue-400 w-8 h-8 rounded-full flex items-center justify-center mx-1 sm:w-10 sm:h-10">4</div>

          <span className={"mx-2 sm:mx-3"}>...</span>

          <div className="first bg-blue-400 w-8 h-8 rounded-full flex items-center justify-center mx-1 sm:w-10 sm:h-10">1</div>
        </div>
      </div>
    </div>
  );
}

export default Products;