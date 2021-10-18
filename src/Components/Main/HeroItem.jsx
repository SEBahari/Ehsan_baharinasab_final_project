import React from 'react';
import image from "../../images/mansory_mercedes-benz_g-class_6x6_09.jpg";

function HeroItem() {
   return (
      <div className={"w-full lg:p-5"}>
         <div className={"bg-gray-400 relative lg:flex lg:flex-row-reverse"}>
            <div className={"w-full h-full filter brightness-50 lg:w-1/2"}>
               <img className={"w-full h-full object-cover object-center"} src={image} alt={"hero"} />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-100 lg:static lg:flex-1 lg:text-gray-800">
               <p className={"font-medium text-5xl mb-1"} >Mansory</p>
               <p className={"mb-3 text-xl"}>awesome design by mansory</p>
               <button className={"py-2 px-3 border-2 bg-gray-100 bg-opacity-0 hover:text-gray-50 hover:bg-opacity-20 lg:border-gray-700 lg:hover:text-gray-800"} >
                  Read More
               </button>
            </div>
         </div>
      </div>
   );
}

export default HeroItem;
