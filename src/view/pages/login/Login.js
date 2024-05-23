import React from "react";
import s from "./Login.module.scss";
import useAuth from "../../../viewmodel/hooks/auth/useAuth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const {
    login,
    password,
    role,
    handleLoginChange,
    handlePasswordChange,
    handleUserLogin,
  } = useAuth();

  const navigate = useNavigate();

  const loginUser = async () => {
    const { isSuccess, role } = await handleUserLogin();

    if (isSuccess) {
      if (role === "educator") {
        navigate("/main");
      } else if (role === "analytic") {
        navigate("/analytics");
      }
    } else {
      alert("error");
    }
  };

  return (
    <div className={s.login}>
      <div class="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
        <h4 class="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          Вход
        </h4>
        <p class="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
          Рады вас видить
        </p>
        <form class="mb-2 mt-8 w-80 max-w-screen-lg sm:w-96">
          <div class="mb-1 flex flex-col gap-6">
            <h6 class="-mb-3 block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
              Логин
            </h6>
            <div class="relative h-11 w-full min-w-[200px]">
              <input
                placeholder="login"
                value={login}
                onChange={(e) => handleLoginChange(e.target.value)}
                class="peer h-full w-full rounded-md border border-blue-gray-200 !border-t-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:!border-t-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              />
              <label class="before:content[' '] after:content[' '] pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:!border-gray-900 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
            </div>
            <h6 class="-mb-3 block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
              Пароль
            </h6>
            <div class="relative h-11 w-full min-w-[200px]">
              <input
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => handlePasswordChange(e.target.value)}
                class="peer h-full w-full rounded-md border border-blue-gray-200 !border-t-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:!border-t-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              />
              <label class="before:content[' '] after:content[' '] pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:!border-gray-900 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
            </div>
          </div>
          <button
            class="mt-6 block w-full select-none rounded-lg bg-gray-900 px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            onClick={loginUser}
          >
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
