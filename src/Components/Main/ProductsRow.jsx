import React from 'react';
import ProductCard from "./ProductCard";

function ProductsRow({ list }) {
   return (
      <>
         {/* products list */}
         <div className="overflow-x-auto overflow-y-hidden whitespace-nowrap">

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
      </>
   );
}

export default ProductsRow;
