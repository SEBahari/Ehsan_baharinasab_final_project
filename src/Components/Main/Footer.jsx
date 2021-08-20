import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
   return (
      <footer className={"bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300"}>
         <div className="grid grid-cols-1 py-5 gap-2 md:grid-cols-2">
            <div className="flex items-stretch px-8 sm:px-12 md:border-l border-gray-400">
               <ul className="flex flex-col space-y-1 w-1/2 items-start">
                  <li><Link className={"rounded-lg px-3 py-2 inline-block box-border hover:bg-blue-100 hover:text-gray-600"} to={"/about"}>درباره ما</Link></li>
                  <li><Link className={"rounded-lg px-3 py-2 inline-block box-border hover:bg-blue-100 hover:text-gray-600"} to={"/faq"}>سوالات متداول</Link></li>
                  <li><Link className={"rounded-lg px-3 py-2 inline-block box-border hover:bg-blue-100 hover:text-gray-600"} to={"/contact-us"}>تماس با ما</Link></li>
               </ul>
               <ul className="flex flex-col space-y-1 w-1/2 items-start">
                  <li><Link className={"rounded-lg px-3 py-2 inline-block box-border hover:bg-blue-100 hover:text-gray-600"} to={"/terms"}>قوانین سایت</Link></li>
                  <li><Link className={"rounded-lg px-3 py-2 inline-block box-border hover:bg-blue-100 hover:text-gray-600"} to={"/map"}>نقشه سایت</Link></li>
               </ul>
            </div>
            <div className={"px-8 flex flex-col justify-center"}>
               <div className={"text-2xl mb-3"}>ثبت ایمیل</div>
               <div className={"flex items-stretch h-12"}>
                  <input
                     type="email" autoComplete={false} placeholder={"mail@example.com"}
                     className={"text-gray-900 flex-1 border border-gray-500 outline-none p-4 focus:ring-4 focus:ring-gray-500 lg:flex-none lg:w-64"}
                  />
                  <button className={"w-12 bg-gray-600 border-gray-900 text-gray-100 text-2xl outline-none focus:ring-4 focus:ring-gray-500"} type="submit">
                     <i className={"bi bi-arrow-left"} />
                  </button>
               </div>
            </div>
         </div>
         <div className="copy text-center text-xs py-2 to text-gray-400 sm:text-sm lg:text-base" style={{ direction: 'ltr' }}>
            &copy; KARZAR - all rights reserved
         </div>
      </footer>
   );
}

export default Footer;
