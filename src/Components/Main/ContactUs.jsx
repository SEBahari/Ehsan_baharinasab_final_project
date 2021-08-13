import React from 'react';
import { Link } from 'react-router-dom';

function ContactUs() {
   return (
      <div className="grid grid-cols-1 gap-4 text-gray-800 sm:grid-cols-2 lg:container lg:mx-auto">
         <div className={"px-4 py-8 border-b-2 flex flex-col sm:border-b-0 sm:border-l-2"}>
            <div className="mb-5 sm:mb-8">
               <div className={"text-3xl mb-2"}>ثبت ایمیل</div>
               <div className={"text-lg"}>دریافت هفتگی جدیدترین تخفیف ها</div>
            </div>
            <div className={"flex items-stretch h-16"}>
               <input
                  type="email" autoComplete={false} placeholder={"mail@example.com"}
                  className={"flex-1 border border-gray-900 outline-none p-4 focus:ring-4 focus:ring-gray-500 lg:flex-none lg:w-64"}
               />
               <button className={"w-16 bg-gray-900 border-gray-900 text-gray-100 text-4xl outline-none focus:ring-4 focus:ring-gray-500"} type="submit">
                  <i className={"bi bi-check2"} />
               </button>
            </div>
         </div>
         <div className={"px-4 py-8"}>
            <div className={"mb-5"}>
               <p className={"text-3xl mb-2"}>سوالی دارید؟</p>
               <p className={"text-lg"}>پاسخگویی به صورت 24ساعته</p>
            </div>
            <Link className={"h-16 border border-gray-900 p-4 my-2 inline-block"} to={"/contact-us"} >با ما تماس بگیرید</Link>
         </div>
      </div>
   );
}

export default ContactUs;
