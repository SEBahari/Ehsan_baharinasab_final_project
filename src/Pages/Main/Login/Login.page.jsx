import React from "react";
import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from "../../../Store/Reducers/Auth.Reducer/Auth.reducer";

function Login() {
  const { isLogin } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [rightActive, setRightActive] = useState(false);

  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleSubmitSignin = (e) => {
    e.preventDefault();
    dispatch(loginUser({ token: '', refreshToken: '', username: loginUsername }));
  };
  const handleSubmitSignup = (e) => {
    e.preventDefault();
  };

  if (isLogin)
    return <Redirect to={"/"} />;

  return (
    <div className={"relative w-screen h-screen overflow-y-auto bg-gray-100 flex items-center justify-center flex-col"}>
      <Link className={"absolute top-6 left-6 bg-gradient-to-r from-red-500 to-rose-500 text-rose-50 rounded-2xl p-4"} to={"/"}><i className={"bi bi-house text-3xl leading-none"} /></Link>
      <div className={"relative bg-white rounded-xl shadow-2xl overflow-hidden max-w-full"} style={{ width: '768px', minHeight: '480px' }} >
        {/* signIn-container  */}
        <div className={`absolute top-0 left-0 h-full w-1/2 ${rightActive ? 'transform translate-x-full z-0 invisible' : 'z-10 visible'}`}>
          <form className={"bg-white w-full h-full flex flex-col items-center justify-center gap-3"}>
            <h1 className={"text-lg font-bold"}>ورود</h1>
            <input
              className={"w-64 rounded"}
              type="text"
              placeholder={"ایمیل"}
              value={loginUsername}
              onChange={e => setLoginUsername(e.target.value)}
            />
            <input
              className={"w-64 rounded"}
              type="text"
              placeholder={"رمز عبور"}
              value={loginPassword}
              onChange={e => setLoginPassword(e.target.value)}
            />
            <Link className={" text-sm"} to={"/forgot-pass"} >رمز عبور خود را فراموش کرده اید؟</Link>
            <button
              className={"bg-red-500 text-white text-sm font-bold py-4 px-10 rounded-3xl active:transform active:scale-95 "}
              type={"button"}
              onClick={handleSubmitSignin}
            >ورود</button>
          </form>
        </div>
        {/* signUp-container  */}
        <div className={`absolute top-0 right-0 h-full w-1/2 ${rightActive ? 'z-10 visible' : 'transform -translate-x-full z-0 invisible'}`}>
          <form className={`bg-white w-full h-full flex flex-col items-center justify-center gap-2`}>
            <h1 className={"text-lg font-bold"}>ثبت نام</h1>
            <input
              className={"w-64 rounded"}
              type="text"
              placeholder={"ایمیل"}
            />
            <input
              className={"w-64 rounded"}
              type="text"
              placeholder={"نام کاربری"}
            />
            <input
              className={"w-64 rounded"}
              type="text"
              placeholder={"رمز عبور"}
            />
            <button
              className={"bg-red-500 text-white text-sm font-bold py-4 px-10 rounded-3xl active:transform active:scale-95 "}
              type={"button"}
              onClick={handleSubmitSignup}
            >ثبت</button>
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
              <button
                className={"text-sm font-bold py-4 px-10 rounded-3xl active:transform active:scale-95 uppercase border border-white"}
                onClick={() => setRightActive(!rightActive)}
              >ثبت نام کنید</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
