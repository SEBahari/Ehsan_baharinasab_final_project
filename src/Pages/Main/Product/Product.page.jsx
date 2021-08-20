import React from "react";
import { Link } from "react-router-dom";
// import productImage from '../../../images/6x6-gornos-w.jpg';
// import productImage from '../../../images/photo_۲۰۱۸-۰۴-۰۲_۱۳-۴۴-۴۹.jpg';
import productImage from '../../../images/93988803_907625239684186_2928864674942205986_n.jpg';

function Product() {
  return (
    <div className={"pt-32 px-4 pb-3 container mx-auto relative"}>
      {/* ------------------------------ Bread Crumbs ------------------------------ */}
      <div className="bread-crumb">
        <div className={"flex items-end text-sm sm:px-10"}>
          <Link to={"/"}>خانه</Link>
          <i className={"bi bi-chevron-left mx-1 text-xs"} />
          <Link to={"/products"}>محصولات</Link>
          <i className={"bi bi-chevron-left mx-1 text-xs"} />
          <span>here</span>
        </div>
        <hr className={"my-1"} />
      </div>
      {/* --------------------------------- Product -------------------------------- */}
      <div className={"product"}>
        {/* --------------------------------- Preview -------------------------------- */}
        <div className={"bg-white rounded-xl p-3 flex flex-col items-stretch shadow-md mt-3"}>
          {/* title & price */}
          <div className={"flex justify-between items-center"} >
            <div>
              {/* ---------------------------------- Title --------------------------------- */}
              <div className="title mb-2">
                <h1 className={""}>عنوان محصول</h1>
                <h2 className={""}>زیر عنوان</h2>
              </div>
              {/* --------------------------------- Actions -------------------------------- */}
              <div className={"flex justify-end text-gray-500 py-1"}>
                <button className={"font-bold mx-2"}><i className={"bi-heart"} /></button>
                <button className={"font-bold mx-2"}><i className={"bi-share"} /></button>
                <button className={"font-bold mx-2"}><i className={"bi-graph-up"} /></button>
                <button className={"font-bold mx-2"}><i className={"bi-bell"} /></button>
                <button className={"font-bold mx-2"}><i className={"bi-list-ul"} /></button>
              </div>
            </div>
            <div>
              {/* ---------------------------------- Price --------------------------------- */}
              <div className="price flex flex-col items-end px-3">
                <div className="flex text-sm font-medium sm:text-base">
                  <del className={"text-gray-600 line-through"}>100,000$</del>
                  <span className={"bg-red-600 text-red-50 py-px px-1 rounded-xl mr-1"}>10%</span>
                </div>
                <div className={"text-xl text-gray-900 sm:text-2xl"}>90,000$</div>
              </div>
            </div>
          </div>
          <hr />
          {/* Product Image */}
          <div className={"image-container flex flex-col items-center gap-4 pt-4"}>
            {/* ---------------------------------- Image --------------------------------- */}
            <div className={"image h-52 w-60"}>
              <img className={"w-full h-full object-contain object-center"} src={productImage} alt={"product"} />
            </div>
            {/* ----------------------------- Slider Buttons ----------------------------- */}
            <div className={"slider w-full flex items-center justify-center gap-2"}>
              <button className={"rounded-full bg-gray-700 opacity-20 w-2 h-2"} />
              <button className={"rounded-full bg-gray-700 opacity-60 w-3 h-3"} />
              <button className={"rounded-full bg-gray-700 opacity-100 w-4 h-4"} />
              <button className={"rounded-full bg-gray-700 opacity-60 w-3 h-3"} />
              <button className={"rounded-full bg-gray-700 opacity-20 w-2 h-2"} />
            </div>
          </div>
        </div>

        {/* --------------------------------- Seller --------------------------------- */}
        <div className={"bg-white rounded-xl p-4 flex flex-col items-stretch shadow-md mt-3"}>
          {/* Seller Name */}
          <div className={"flex gap-4"}>
            <span className={"bi-shop text-gray-400 text-lg"} />
            <div className="flex-1">
              <div className="">فروشنده: {"عماد"}</div>
              <div className={"text-xs text-gray-500 font-medium"}>
                عملکرد: {"عالی"}
                <i className={"bi-check text-green-600"} />
              </div>
            </div>
          </div>
          <hr className={"my-3"} />
          {/* Garanti */}
          <div className={"flex gap-4"}>
            <span className={"bi-shield-check text-gray-400 text-lg"} />
            <div className="flex-1">
              <div>گارانتی اصالت و سلامت فیزیکی کالا</div>
            </div>
          </div>
        </div>

        {/* ------------------------------- Description ------------------------------ */}
        <div className={"bg-white rounded-xl p-4 flex flex-col items-stretch shadow-md mt-3"}>
          {/* About */}
          <div className={"p-2"} >
            {/* title */}
            <div className={"flex justify-between items-center mb-3"} >
              <h5>درباره کالا</h5>
              <div className={"text-xs p-2 text-blue-500 cursor-pointer"} >
                بیشتر
                <i className={"bi-chevron-left"} />
              </div>
            </div>
            {/* body */}
            <p className={"text-gray-500"} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt quam, quibusdam cum asperiores, ullam ipsa sit vero sint eius tenetur excepturi alias a, aliquid quae eos voluptatem fuga. Aut, quos....</p>
          </div>
          <hr className={"my-2"} />
          {/* Moshakhasat Fani */}
          <div className={"p-2"} >
            {/* title */}
            <div className={"flex justify-between items-center mb-3"} >
              <h5>مشخصات فنی</h5>
              <div className={"text-xs p-2 text-blue-500 cursor-pointer"} >
                بیشتر
                <i className={"bi-chevron-left"} />
              </div>
            </div>
            {/* body */}
            <div className={"text-gray-500"} >
              <ul className={"list-disc pr-4"} >
                <li>one</li>
                <li>two</li>
                <li>three</li>
                <li>four</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* -------------------------------- Comments -------------------------------- */}
      <div className={"header bg-white rounded-xl p-4 flex flex-col items-stretch shadow-md mt-3 relative"}>
        {/* title */}
        <div className={"flex justify-between items-center mb-3"} >
          <h5>نظرات</h5>
          <button className={"py-1 px-2 text-sm border border-blue-500 rounded-lg text-blue-500 shadow hover:bg-blue-50"} >
            افزودن نظر
            <i className={"bi-plus-lg mr-1"} />
          </button>
        </div>
        <hr className={"my-2"} />

        {/* List  */}
        <div className={"comment-list"} >
          <div className={"comment p-1 my-4 text-sm text-gray-800"}>
            <div className={"userName"}>احسان بهاری نسب</div>
            <div className={"date mb-1"}>9 تیر 1400</div>
            <div className={"text-gray-500"}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quis amet hic incidunt itaque vitae, reprehenderit officiis enim laborum modi est quam illo eius libero...</div>
          </div>
          <div className={"comment p-1 my-4 text-sm text-gray-800"}>
            <div className={"userName"}>احسان بهاری نسب</div>
            <div className={"date mb-1"}>9 تیر 1400</div>
            <div className={"text-gray-500"}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quis amet hic incidunt itaque vitae, reprehenderit officiis enim laborum modi est quam illo eius libero...</div>
          </div>
          <div className={"comment p-1 my-4 text-sm text-gray-800"}>
            <div className={"userName"}>احسان بهاری نسب</div>
            <div className={"date mb-1"}>9 تیر 1400</div>
            <div className={"text-gray-500"}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quis amet hic incidunt itaque vitae, reprehenderit officiis enim laborum modi est quam illo eius libero...</div>
          </div>
          <div className={"comment p-1 my-4 text-sm text-gray-800"}>
            <div className={"userName"}>احسان بهاری نسب</div>
            <div className={"date mb-1"}>9 تیر 1400</div>
            <div className={"text-gray-500"}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quis amet hic incidunt itaque vitae, reprehenderit officiis enim laborum modi est quam illo eius libero...</div>
          </div>
        </div>

        {/* Load More */}
        <button className={"pt-3 text-blue-500 border-t"} >مشاهده همه نظرات</button>
      </div>
      {/* ------------------------------- Add To Cart ------------------------------ */}
      <div className={"fixed inset-x-0 bottom-0 p-3 bg-red-50 shadow-inner"}>
        <button className={"bg-red-500 text-red-50 w-full p-3 rounded-md"} >افزودن به سبد خرید</button>
      </div>
    </div >
  );
}

export default Product;
