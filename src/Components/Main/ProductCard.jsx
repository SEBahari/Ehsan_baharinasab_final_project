import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ image, route, title, subtitle, discount, originalPrice, newPrice }) {
   return (
      <div className={"w-72 px-4 inline-block product"}>
         {/* Card */}
         <div className="rounded-md bg-white text-gray-800 p-0 overflow-hidden shadow-lg">
            {/* image */}
            <div className={"relative h-44 sm:h-32 md:h-40"}>
               <img className={"absolute inset-0 w-full h-full object-cover object-center"} src={image} />
               <Link
                  className={"absolute inset-0"}
                  to={route}
               />
            </div>
            {/* content */}
            <div className={"p-4 bg-gradient-to-b from-yellow-50 to-gray-200 "}>
               <div className={"flex items-end border-b border-gray-300 pb-2 mb-3"}>
                  <div className={"title flex-1 relative"}>
                     <h4 className={"text-xl"}>{title}</h4>
                     <h5 className={"text-md"}>{subtitle}</h5>
                     <Link
                        className={"absolute inset-0"}
                        to={route}
                     />
                  </div>
                  <div className="colors flex pb-1">
                     <span className="w-3 h-3 rounded-full bg-purple-800 mr-2" />
                     <span className="w-3 h-3 rounded-full bg-yellow-400 mr-2" />
                     <span className="w-3 h-3 rounded-full bg-pink-600 mr-2" />
                  </div>
               </div>
               <div className={"w-full flex items-end"}>
                  <button><i className={"bi bi-cart3 text-3xl pl-3 md:text-2xl"} /></button>
                  <button>
                     <i className={"bi bi-heart text-3xl md:text-2xl"} />
                     {/* <i className={"bi bi-heart-fill text-red-600 text-2xl md:text-xl"} /> */}
                  </button>
                  <div className="price flex flex-col flex-1 text-left">
                     <div className="befPrice flex flex-row-reverse items-end">
                        <span className={"bg-red-600 rounded-3xl text-red-50 p-1 text-xs"}>{discount}%</span>
                        <span className="prPrice text-sm line-through pl-2">{originalPrice}$</span>
                     </div>
                     <div className={"pl-1 text-xl"}>{newPrice}$</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ProductCard;
