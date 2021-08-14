import React from 'react';
import { Link } from 'react-router-dom';

function HProduct({ image, title, subtitle, seller, rate, rateOf, discount, originalPrice, newPrice, route }) {
   const path = title.split(' ').concat(subtitle.split(' ')).join('-').toLowerCase();
   return (
      <>
         {/* single product */}
         <div className={"flex gap-5 items-start bg-white rounded-lg shadow-lg py-3 px-4 sm:p-5"}>
            {/* ------------------------------------ Image ----------------------------------- */}
            <div className={"w-24 h-24 relative sm:w-36 sm:h-36"}>
               <img className={"w-full h-full object-cover object-center"} src={image} alt={title + subtitle} />
               <Link className={"absolute inset-0"} to={"/products/" + path} />
            </div>
            {/* ----------------------------------- Content ---------------------------------- */}
            <div className={"content flex-1"}>

               {/* ------------------------------- Top Content ------------------------------- */}
               {/* title */}
               <div className={"sm:px-3"}>
                  <Link className={"block text-base text-gray-900 sm:text-2xl"} to={"/products/" + path}>{title}</Link>
                  <Link className={"block text-base text-gray-900 sm:text-2xl"} to={"/products/" + path}>{subtitle}</Link>
               </div>
               {/* ------------------------------ Middle Content ------------------------------ */}
               {/* description */}
               <div className={"mt-1 flex justify-between items-center text-gray-500 sm:px-3"}>
                  {/* seller */}
                  <span className={"seller text-xs sm:text-sm"}><i className={"bi bi-award"} /> {seller}</span>
                  {/* rate */}
                  <span className={"rating text-xs sm:text-sm"}>{rate} ({rateOf}) <i className={" bi bi-star-fill text-yellow-300"} /></span>
               </div>
               <hr className={"my-2"} />
               {/* ------------------------------ Bottom Content ------------------------------ */}
               <div className={"flex flex-row-reverse justify-between items-center sm:px-3"}>
                  {/* price */}
                  <div className="price">
                     {
                        (discount && newPrice) ? (
                           <div className="flex text-sm font-medium sm:text-base">
                              <del className={"text-gray-600 line-through"}>{originalPrice}</del>
                              <span className={"bg-red-600 text-red-50 py-px px-1 rounded-xl mr-1"}>{discount}%</span>
                           </div>
                        ) : <></>
                     }
                     <div className={"text-xl text-gray-900 sm:text-2xl"}>{newPrice ?? originalPrice}$</div>
                  </div>
                  {/* cart icon */}
                  <button className={"text-gray-800 text-xl sm:text-3xl"}>
                     <i className={"bi bi-cart-plus"} />
                  </button>
               </div>
            </div>
         </div>
      </>
   );
}

export default HProduct;
