import React from 'react';
import { Link } from 'react-router-dom';

function SingleProduct({ image, title, subtitle, seller, rate, rateOf, discount, originalPrice, newPrice, route }) {
   const path = title.split(' ').concat(subtitle.split(' ')).join('-').toLowerCase();
   return (
      <>
         {/* single product */}
         <div className={`
         relative flex gap-5 items-start bg-white rounded-lg shadow-lg py-3 px-4 overflow-hidden
         sm:p-5
         lg:shadow-none lg:rounded-none lg:border-0.5 lg:border-gray-200 lg:flex-col lg:items-stretch lg:p-3
         lg:hover:z-10 lg:hover:shadow-2xl 
         `}>
            {/* ------------------------------------ Image ----------------------------------- */}
            <div className={"w-24 h-24 relative sm:w-36 sm:h-36 lg:w-full"}>
               <img className={"w-full h-full object-contain object-center"} src={image} alt={title + subtitle} />
               <Link className={"absolute inset-0"} to={"/products/" + path} />
            </div>
            {/* ----------------------------------- Content ---------------------------------- */}
            <div className={"content flex-1 lg:flex lg:flex-col"}>

               {/* ------------------------------- Top Content ------------------------------- */}
               {/* title */}
               <div className={"sm:px-3 flex items-stretch"}>
                  <div className={"flex-1"}>
                     <Link className={"block text-base text-gray-900 sm:text-2xl lg:text-lg"} to={"/products/" + path}>{title}</Link>
                     <Link className={"block text-base text-gray-900 sm:text-2xl lg:text-lg"} to={"/products/" + path}>{subtitle}</Link>
                  </div>
                  <div className={"flex flex-col p-1 gap-1"}>
                     <span className={"bg-red-400 w-2 h-2 rounded-full"} />
                     <span className={"bg-green-400 w-2 h-2 rounded-full"} />
                     <span className={"bg-blue-400 w-2 h-2 rounded-full"} />
                  </div>
               </div>
               {/* ------------------------------ Middle Content ------------------------------ */}
               {/* description */}
               <div className={"mt-1 flex justify-between items-center text-gray-500 sm:px-3  text-xs sm:text-sm lg:text-xs lg:my-2"}>
                  {/* seller */}
                  <span className={"seller"}><i className={"bi bi-award"} /> {seller}</span>
                  {/* rate */}
                  <span className={"rating"}>{rate} ({rateOf}) <i className={" bi bi-star-fill text-yellow-300"} /></span>
               </div>
               <hr className={"my-2"} />
               {/* ------------------------------ Bottom Content ------------------------------ */}
               <div className={"flex flex-row-reverse justify-between items-center sm:px-3 lg:flex-1"}>
                  {/* price */}
                  <div className="price">
                     {
                        (discount && newPrice) ? (
                           <div className="flex text-sm font-medium sm:text-base lg:text-sm">
                              <del className={"text-gray-500 line-through"}>{originalPrice}</del>
                              <span className={"bg-red-600 text-red-50 py-px px-1 rounded-xl mr-1 lg:rounded-2xl"}>
                                 {discount}%
                              </span>
                           </div>
                        ) : <></>
                     }
                     <div className={"text-xl text-gray-900 sm:text-2xl lg:text-xl"}>{newPrice ?? originalPrice}$</div>
                  </div>
                  {/* cart icon */}
                  <button className={"text-gray-800 text-xl sm:text-3xl lg:text-2xl"}>
                     <i className={"bi bi-cart-plus"} />
                  </button>
               </div>
            </div>
         </div>
      </>
   );
}

export default SingleProduct;
