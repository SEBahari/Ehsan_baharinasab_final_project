import React from 'react';

function Products() {
   return (
      <div className={"w-full h-full flex flex-col items-center justify-center"}>
         <div className={"w-4/5 py-2 flex items-center mb-3"}>
            <h1 className={"flex-1 text-2xl font-medium"}>مدیریت کالاها</h1>
            <div className={""}>
               <button className={"bg-cyan-800 text-cyan-50 rounded py-2 px-3 "}>اضافه کردن</button>
            </div>
         </div>
         <div className={"border border-gray-600 rounded-lg h-4/6 w-4/5 flex flex-col items-stretch overflow-hidden"}>
            {/* fixed table header */}
            <div className={"h-12 bg-cyan-500 text-white shadow-lg"}>
               <table className={"w-full h-full table-fixed align-middle text-right"}>
                  <thead>
                     <tr>
                        <th className={"px-3 w-2/5"}>کالا</th>
                        <th className={"px-3 w-2/5"}>قیمت (ریال)</th>
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
                     <tr className={"border-b-0.5 border-cyan-500 hover:bg-cyan-100"}><td className={"p-2 w-2/5"}>لوبیا قرمز گلستان - 900 گرمی</td><td className={"p-2 w-2/5"}>مواد غدایی / کالاهای اساسی و خوار و بار</td><td className={"px-2"}><button className={"underline text-cyan-500 hover:text-cyan-800"}>ویرایش</button><button className={"underline text-cyan-500 hover:text-cyan-800 mr-2"}>حذف</button></td></tr>
                     <tr className={"border-b-0.5 border-cyan-500 hover:bg-cyan-100"}><td className={"p-2 w-2/5"}>روغن سرخ کردنی سمن - 1.35 کیلویی</td><td className={"p-2 w-2/5"}>مواد غدایی / کالاهای اساسی و خوار و بار</td><td className={"px-2"}><button className={"underline text-cyan-500 hover:text-cyan-800"}>ویرایش</button><button className={"underline text-cyan-500 hover:text-cyan-800 mr-2"}>حذف</button></td></tr>
                     <tr className={"border-b-0.5 border-cyan-500 hover:bg-cyan-100"}><td className={"p-2 w-2/5"}>روغن مایع آفتابگردان حاوی ویتامین D و E</td><td className={"p-2 w-2/5"}>مواد غدایی / کالاهای اساسی و خوار و بار</td><td className={"px-2"}><button className={"underline text-cyan-500 hover:text-cyan-800"}>ویرایش</button><button className={"underline text-cyan-500 hover:text-cyan-800 mr-2"}>حذف</button></td></tr>
                     <tr className={"border-b-0.5 border-cyan-500 hover:bg-cyan-100"}><td className={"p-2 w-2/5"}>کره سنتی شکلی - 100 گرمی</td><td className={"p-2 w-2/5"}>مواد غدایی / لبنات</td><td className={"px-2"}><button className={"underline text-cyan-500 hover:text-cyan-800"}>ویرایش</button><button className={"underline text-cyan-500 hover:text-cyan-800 mr-2"}>حذف</button></td></tr>
                     <tr className={"border-b-0.5 border-cyan-500 hover:bg-cyan-100"}><td className={"p-2 w-2/5"}>قهوه اسپرسو بن مانو مدل آرتیمان - 250 گرمی</td><td className={"p-2 w-2/5"}>مواد غدایی / نوشیدنی</td><td className={"px-2"}><button className={"underline text-cyan-500 hover:text-cyan-800"}>ویرایش</button><button className={"underline text-cyan-500 hover:text-cyan-800 mr-2"}>حذف</button></td></tr>
                  </tbody>
               </table>
            </div>
            {/* fixed table footer */}
            <div className={"h-10 border-t-2 bg-cyan-500 border-cyan-700 shadow-inner text-white "}>
               paginate here
            </div>
         </div>
      </div>
   );
}

export default Products;
