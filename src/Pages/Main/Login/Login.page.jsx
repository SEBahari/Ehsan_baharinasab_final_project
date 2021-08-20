import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [rightActive, setRightActive] = useState(true);
  return (
    <div className={"relative w-screen h-screen overflow-y-auto bg-gray-100 flex items-center justify-center flex-col"}>
      <Link className={"absolute top-6 left-6 bg-gradient-to-r from-red-500 to-rose-500 text-rose-50 rounded-2xl p-4"} to={"/"}><i className={"bi bi-house text-3xl leading-none"} /></Link>
      <div className={"relative bg-white rounded-xl shadow-lg overflow-hidden max-w-full"} style={{ width: '768px', minHeight: '480px' }} >
        {/* signIn-container  */}
        <div className={`absolute top-0 left-0 h-full w-1/2 ${rightActive ? 'transform translate-x-full z-0' : 'z-10'}`}>
          <form className={"bg-white w-full h-full flex flex-col items-center justify-center gap-3"}>
            <h1 className={"text-lg font-bold"}>ورود</h1>
            <input className={"w-64 rounded"} type="text" placeholder={"ایمیل"} />
            <input className={"w-64 rounded"} type="text" placeholder={"رمز عبور"} />
            <Link className={" text-sm"} to={"/forgot-pass"} >رمز عبور خود را فراموش کرده اید؟</Link>
            <button className={"bg-red-500 text-white text-sm font-bold py-4 px-10 rounded-3xl active:transform active:scale-95 "} type={"button"}>ورود</button>
          </form>
        </div>
        {/* signUp-container  */}
        <div className={`absolute top-0 right-0 h-full w-1/2 ${rightActive ? ' z-10' : 'transform -translate-x-full z-0'}`}>
          <form className={`bg-white w-full h-full flex flex-col items-center justify-center gap-2`}>
            <h1 className={"text-lg font-bold"}>ثبت نام</h1>
            <input className={"w-64 rounded"} type="text" placeholder={"ایمیل"} />
            <input className={"w-64 rounded"} type="text" placeholder={"نام کاربری"} />
            <input className={"w-64 rounded"} type="text" placeholder={"رمز عبور"} />
            <button className={"bg-red-500 text-white text-sm font-bold py-4 px-10 rounded-3xl active:transform active:scale-95 "} type={"button"}>ثبت</button>
          </form>
        </div>
        {/* overlay  */}
        <div className={`absolute top-0 h-full w-1/2 overflow-hidden z-50 ${rightActive ? 'left-0' : 'left-1/2'}`}>
          <div className={"relative bg-gradient-to-r from-red-500 to-rose-500 text-white h-full w-full"}>
            <div className={`absolute inset-0 h-full w-full flex flex-col items-center justify-center gap-4 ${rightActive ? '' : 'transform translate-x-full'}`}>
              حساب کاربری دارید؟
              <button className={"text-sm font-bold py-4 px-10 rounded-3xl active:transform active:scale-95 uppercase border border-white"} onClick={() => setRightActive(!rightActive)}>وارد شوید</button>
            </div>
            <div className={`absolute inset-0 h-full w-full flex flex-col items-center justify-center gap-4 ${rightActive ? 'transform translate-x-full' : ''}`}>
              حساب کاربری ندارید؟
              <button className={"text-sm font-bold py-4 px-10 rounded-3xl active:transform active:scale-95 uppercase border border-white"} onClick={() => setRightActive(!rightActive)}>ثبت نام کنید</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
