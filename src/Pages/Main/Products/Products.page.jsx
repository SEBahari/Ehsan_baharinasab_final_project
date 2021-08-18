import { useState } from "react";
import { Link } from "react-router-dom";
import Filter from "../../../Components/Main/Filter";
import SideFilter from "../../../Components/Main/SideFilter";
import SingleProduct from "../../../Components/Main/SingleProduct";
import cardImage1 from '../../../images/01-Mercedes-Benz-G-Class-G-500-4x4-2-Wallpaper-3840x2160.jpg';
import cardImage2 from '../../../images/6x6-gornos-w.jpg';
import cardImage3 from '../../../images/challenger1.jpeg';
import cardImage4 from '../../../images/photo_۲۰۱۷-۱۲-۲۸_۱۱-۵۹-۱۹.jpg';
import cardImage5 from '../../../images/porsche-911-rsr-2880x1800-2017-side-view-4019.jpg';

const list = [
  { id: 1, image: cardImage1, title: 'G-Class', subtitle: "G-500 4x4", seller: "Mercedes Benz", rate: "4.9", rateOf: "378", discount: "13", originalPrice: "100,000", newPrice: "90,000" },
  { id: 2, image: cardImage2, title: 'G-Class', subtitle: "G-63 6x6", seller: "Mercedes Benz", rate: "5", rateOf: "40", originalPrice: "1,100,000" },
  { id: 3, image: cardImage3, title: 'Challenger', subtitle: "SRT", seller: "Dodge", rate: "3.9", rateOf: "834", originalPrice: "400,000" },
  { id: 4, image: cardImage4, title: 'Nissan', subtitle: "GTR", seller: "IranKhodro", rate: "5", rateOf: "78", discount: "3", originalPrice: "100,000", newPrice: "90,000" },
  { id: 5, image: cardImage5, title: 'Porsche', subtitle: "911 RSR", seller: "Saipa Motmaen", rate: "4.9", rateOf: "378", discount: "13", originalPrice: "100,000", newPrice: "90,000" },
];

let filtersList = [
  { id: 1, title: "پربازدیدترین", selected: true },
  { id: 2, title: "پرفروش‌ترین‌", selected: false },
  { id: 3, title: "محبوب‌ترین", selected: false },
  { id: 4, title: "جدیدترین", selected: false },
  { id: 5, title: "ارزان‌ترین", selected: false },
  { id: 6, title: "گران‌ترین", selected: false },
  { id: 7, title: "سریع‌ترین ارسال", selected: false }
];

function Products() {
  const [filters, setFilters] = useState(filtersList);
  function sortBy(id) {
    setFilters(filtersList.map(filter => ({ ...filter, selected: filter.id == id })));
  }
  return (
    <div className={"pt-32 container mx-auto sm:pt-36 lg:pt-14"}>
      {/* -------------------------------- filters ------------------------------- */}
      <Filter />
      <hr className={"mb-1 lg:hidden"} />

      {/* ------------------------------- products ------------------------------- */}
      <div className={"products grid grid-cols-1 px-5 py-3 sm:px-10 lg:px-0 lg:grid-cols-12 "}>
        {/* right side -> filters */}
        <div className={"hidden lg:block lg:col-span-3"} >
          <SideFilter />
        </div>
        {/* left side -> sort & list & pagination */}
        <div className={"lg:col-span-9"}>
          {/* bread-crumbs */}
          <div className={"px-4 flex items-end text-sm sm:px-10 lg:px-3"}>
            <Link to={"/"}>خانه</Link>
            <i className={"bi bi-chevron-left mx-1 text-xs"} />
            <Link to={"/products"} >محصولات</Link>
            <i className={"bi bi-chevron-left mx-1 text-xs"} />
            <span>here</span>
          </div>
          <hr className={"my-1"} />

          {/* Filters */}
          <div className={"hidden lg:flex lg:items-center lg:gap-3 lg:p-3 lg:bg-white lg:text-sm "}>
            <h4 className={""}>
              <i className={"bi bi-filter-right lg:ml-2 lg:text-gray-400 lg:leading-none"} />
              مرتب سازی بر اساس:
            </h4>
            {
              filters.map(filter => (
                <button
                  className={`py-1 px-2 rounded-md ${filter.selected ? "bg-blue-400 text-white" : "bg-gray-100"}`}
                  onClick={() => sortBy(filter.id)}
                >{filter.title}</button>
              ))
            }
          </div>
          {/* Products List */}
          <div className={"grid grid-cols-1 gap-6 mt-2 lg:grid-cols-4 lg:gap-0 lg:mt-0"}>
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