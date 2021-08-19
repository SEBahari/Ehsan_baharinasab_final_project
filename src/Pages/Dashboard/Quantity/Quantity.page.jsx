import React from 'react';

function Quantity() {
   return (
      <div className={"w-full h-full flex flex-col items-center justify-center"}>
         <div className={"w-4/5 p-2 flex items-center"}>
            <h1 className={"flex-1 text-2xl font-medium"}>مدیریت موجودی و قیمت ها</h1>
            <div className={""}>
               {/*  */}
            </div>
         </div>
         <div className={"border border-gray-600 rounded-lg h-4/6 w-4/5 flex flex-col items-stretch overflow-hidden"}>
            {/* fixed table header */}
            <div className={"h-12 bg-green-500 text-white shadow-lg"}>
               <table className={"w-full h-full table-fixed align-middle text-right"}>
                  <thead>
                     <tr>
                        <th className={"px-3 w-3/5"}>کالا</th>
                        <th className={"px-3"}>قیمت (ریال)</th>
                        <th className={"px-3"}>موجودی</th>
                        <th />
                     </tr>
                  </thead>
               </table>
            </div>
            {/* scrollable table body */}
            <div className={"flex-1 overflow-x-hidden overflow-y-auto"}>
               <table className={"w-full h-auto table-fixed"}>
                  <tbody>
                     <tr className={"border-b-0.5 border-green-500 hover:bg-green-100"}><td className={"p-2 w-3/5"}>لوبیا قرمز گلستان - 900 گرمی</td><td className={"p-2"}>200,000</td><td className={"p-2"}>100</td><td><button className={"underline text-green-500 hover:text-green-800"}>ویرایش</button></td></tr>
                     <tr className={"border-b-0.5 border-green-500 hover:bg-green-100"}><td className={"p-2 w-3/6"}>روغن سرخ کردنی سمن - 1.35 کیلویی</td><td className={"p-2"}>10,000</td><td className={"p-2"}>200</td><td><button className={"underline text-green-500 hover:text-green-800"}>ویرایش</button></td></tr>
                     <tr className={"border-b-0.5 border-green-500 hover:bg-green-100"}><td className={"p-2 w-3/6"}>روغن مایع آفتابگردان حاوی ویتامین D و E</td><td className={"p-2"}>150,000</td><td className={"p-2"}>300</td><td><button className={"underline text-green-500 hover:text-green-800"}>ویرایش</button></td></tr>
                     <tr className={"border-b-0.5 border-green-500 hover:bg-green-100"}><td className={"p-2 w-3/6"}>کره سنتی شکلی - 100 گرمی</td><td className={"p-2"}>25,500</td><td className={"p-2"}>400</td><td><button className={"underline text-green-500 hover:text-green-800"}>ویرایش</button></td></tr>
                     <tr className={"border-b-0.5 border-green-500 hover:bg-green-100"}><td className={"p-2 w-3/6"}>قهوه اسپرسو بن مانو مدل آرتیمان - 250 گرمی</td><td className={"p-2"}>1,000,000</td><td className={"p-2"}>500</td><td><button className={"underline text-green-500 hover:text-green-800"}>ویرایش</button></td></tr>
                  </tbody>
               </table>
            </div>
            {/* fixed table footer */}
            <div className={"h-10 border-t-2 bg-green-500 border-green-700 shadow-inner text-white "}>
               paginate here
            </div>
         </div>
      </div>
   );
}

export default Quantity;
