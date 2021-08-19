import React from 'react';
import { Link } from 'react-router-dom';

function Orders() {
   return (
      <div className={"w-full h-full flex flex-col items-center justify-center"}>
         <div className={"w-4/5 p-2 flex items-center"}>
            <h1 className={"flex-1 text-2xl font-medium"}>مدیریت سفارشات</h1>
            <div className={"flex gap-4"}>
               <label>سفارشات تحویل شده<input type="checkbox" name="order-done" /></label>
               <label>سفارشات در حال انتظار<input type="checkbox" name="order-wait" /></label>
            </div>
         </div>
         <div className={"border border-gray-600 rounded-lg h-4/6 w-4/5 flex flex-col items-stretch overflow-hidden"}>
            {/* fixed table header */}
            <div className={"h-12 bg-indigo-500 text-white shadow-lg"}>
               <table className={"w-full h-full table-fixed align-middle text-right"}>
                  <thead>
                     <tr>
                        <th className={"px-3"}>نام کاربر</th>
                        <th className={"px-3"}>مجموع مبلغ</th>
                        <th className={"px-3"}>زمان ثبت سفارش</th>
                        <th className={"px-3"}></th>
                     </tr>
                  </thead>
               </table>
            </div>
            {/* scrollable table body */}
            <div className={"flex-1 overflow-x-hidden overflow-y-auto"}>
               <table className={"w-full h-auto table-fixed"}>
                  <tbody>
                     <tr className={"border-b-0.5 border-indigo-500 hover:bg-indigo-100"}><td className={"p-2"}>اکبر زمانی</td><td className={"p-2"}>920,000</td><td className={"p-2"}>1399/01/05</td><td className={"p-2"}><button className={"underline text-indigo-500 hover:text-indigo-800"}>بررسی سفارش</button></td></tr>
                     <tr className={"border-b-0.5 border-indigo-500 hover:bg-indigo-100"}><td className={"p-2"}>رامین رحیمی</td><td className={"p-2"}>test</td><td className={"p-2"}>test</td><td className={"p-2"}><button className={"underline text-indigo-500 hover:text-indigo-800"}>بررسی سفارش</button></td></tr>
                     <tr className={"border-b-0.5 border-indigo-500 hover:bg-indigo-100"}><td className={"p-2"}>ملیکا زارعی</td><td className={"p-2"}>test</td><td className={"p-2"}>test</td><td className={"p-2"}><button className={"underline text-indigo-500 hover:text-indigo-800"}>بررسی سفارش</button></td></tr>
                     <tr className={"border-b-0.5 border-indigo-500 hover:bg-indigo-100"}><td className={"p-2"}>نیکی کریمی</td><td className={"p-2"}>test</td><td className={"p-2"}>test</td><td className={"p-2"}><button className={"underline text-indigo-500 hover:text-indigo-800"}>بررسی سفارش</button></td></tr>
                     <tr className={"border-b-0.5 border-indigo-500 hover:bg-indigo-100"}><td className={"p-2"}>فریبرز عربنیا</td><td className={"p-2"}>test</td><td className={"p-2"}>test</td><td className={"p-2"}><button className={"underline text-indigo-500 hover:text-indigo-800"}>بررسی سفارش</button></td></tr>
                     <tr className={"border-b-0.5 border-indigo-500 hover:bg-indigo-100"}><td className={"p-2"}>ابولفضل پورعرب</td><td className={"p-2"}>test</td><td className={"p-2"}>test</td><td className={"p-2"}><button className={"underline text-indigo-500 hover:text-indigo-800"}>بررسی سفارش</button></td></tr>
                  </tbody>
               </table>
            </div>
            {/* fixed table footer */}
            <div className={"h-10 border-t-2 bg-indigo-500 border-indigo-700 shadow-inner text-white "}>
               paginate here
            </div>
         </div>
      </div>
   );
}

export default Orders;
