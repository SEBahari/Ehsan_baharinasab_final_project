import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from "./ProductCard";

function ProductsRow({ list, route, title }) {
   return (
      <>
         <div className={"py-4"}>
            {/* ----------------------------- title & link ----------------------------- */}
            <div className="flex items-center justify-between py-6 px-8">
               <h3 className={"text-xl font-bold text-gray-700"} >{title}</h3>
               <Link className={"underline text-sm"} to={route} >
                  مشاهده همه
                  <i className={"bi bi-chevron-compact-left"} />
               </Link>
            </div>
            {/* ----------------------------- list of cards ---------------------------- */}
            <div className="overflow-x-auto overflow-y-hidden whitespace-nowrap px-4">
               {
                  list.map((item, index) => (
                     <ProductCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        subtitle={item.subtitle}
                        discount={item.discount}
                        originalPrice={item.originalPrice}
                        newPrice={item.newPrice}
                        route={item.route}
                     />
                  ))
               }
            </div>
         </div>
      </>
   );
}

export default ProductsRow;
