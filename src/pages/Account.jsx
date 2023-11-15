import React from 'react'
import Bannerleft from '/account/bannerleft.jpg'
import Logo from '../../public/logo.svg'
import FB from '/account/facebook-svgrepo-com.png'


const Account = () => {

const LoginForm = document.getElementById("LoginForm");
const RegForm = document.getElementById("RegForm");
const Indicator = document.getElementById("indicator");

    
const register = () => {
    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
    Indicator.style.transform = "translateX(100px)"
};
const login = () => {
    RegForm.style.transform = "translateX(400px)";
    LoginForm.style.transform = "translateX(400px)";
    Indicator.style.transform = "translateX(0px)"
};

  return (
    
    <div className="accout-page h-[100vh] bg-white">

    <div className="flex justify-around h-full">

        <div id="side-banner" className="h-full w-0 md:w-[200px] xl:w-[470px]">
            <img className="h-full w-full object-cover" src={Bannerleft} width="100%"
                height="100%"/>
        </div>

        <div className="w-full flex flex-col gap-[0px] h-[90vh]">
            <header className="p-6 justify-between h-[100px] flex w-full gap-5 items-start">
                <div className="flex gap-5 w-fit items-center">
                    <img className="w-[40px] h-[40px]" src={Logo} alt=""/>
                    <h1 className="text-[28px]">Akun Xiaomi</h1>
                </div>

                <div className="hidden md:block w-[50%]">
                    <nav id="about-top-nav">
                        <ul>
                            <li>
                                <a href="">Perjanjian Pengguna</a>
                            </li>
                            <li>
                                <a href="">Kebijakan Privasi</a>
                            </li>
                            <li>
                                <a href="">Butuh Bantuan?</a>
                            </li>
                            <li><span>|</span></li>
                            <li>
                                <a href="">Pilih Bahasa Anda</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div id="account-form"
                className="form-container p-8 w-[400px] h-[600px] relative bg-white text-left m-auto py-[20px]">
                <div id="form-switch" className="text-black leading-[1] py-4 text-xl">
                    <span onClick={login}>Masuk</span>
                    <span onClick={register}>Daftar</span>
                    <hr id="indicator" className="bg-[#ff5c00] border-0 h-[3px] w-[100px] mt-[8px]"/>
                </div>

                <form id="LoginForm" className="left-[-400px]">
                    <input type="email" placeholder="Email"
                        className="w-full h-[30px] mt-[10px] mb-[10px] py-[30px] px-[20px] text-[#999]" />
                    <input type="password" placeholder="Password"
                        className="w-full h-[30px] mt-[10px] mb-[10px] py-[30px] px-[20px] text-[#999]" />
                    <button type="submit"
                        className="disabled w-full text-center p-4 bg-[#ff5c00] text-white">Masuk</button>
                    <button id="google-button" type="submit"
                        className="disabled w-full text-center flex items-center m-[0px] bg-[#ffffff] text-white">
                        <span className="google-btn__icon bg-white h-full w-[70px] flex items-center justify-center"><svg className="h-auto w-[40px]" viewBox="0 0 46 46" xmlns="http://www.w3.org/2000/svg" aria-label="google"><g fill-rule="nonzero" fill="none"><path d="M9.577 23.156c0-1.504.253-2.946.702-4.299L2.4 12.9A22.958 22.958 0 000 23.156c0 3.686.863 7.162 2.397 10.25l7.875-5.97a13.57 13.57 0 01-.695-4.28" fill="#FBBC05"></path><path d="M23.415 9.476a13.627 13.627 0 018.62 3.05l6.81-6.735c-4.15-3.576-9.47-5.788-15.43-5.788C14.162.003 6.209 5.243 2.4 12.9l7.883 5.959c1.815-5.458 6.99-9.383 13.133-9.383" fill="#EA4335"></path><path d="M23.515 36.532c-6.176 0-11.376-3.9-13.202-9.324L2.395 33.13c3.826 7.609 11.82 12.814 21.12 12.814 5.738 0 11.216-1.994 15.33-5.734l-7.517-5.69c-2.12 1.308-4.791 2.013-7.814 2.013" fill="#34A853"></path><path d="M45.975 22.938c0-1.36-.215-2.824-.535-4.184H23.513v8.89h12.62c-.629 3.031-2.346 5.361-4.804 6.877l7.516 5.69c4.32-3.925 7.13-9.773 7.13-17.273" fill="#4285F4"></path></g></svg></span>
                        <span className=" text-black drop-shadow-md text-center justify-center items-center flex w-full">Masuk dengan
                        Google</span>
                        </button>
                    
                    <a className="block" href="">Lupa Sandi?</a>

                    <div>
                        <div className="text-center text-[17px] leading-[40px]">Pilihan lainnya</div>
                        <div className="m-[10px] flex justify-center"><img className="w-[70px] h-[70px] "
                                src={FB} alt=""/></div>
                    </div>
                </form>

                <form id="RegForm">
                    <input type="email" placeholder="Email"
                        className="w-full h-[30px] mt-[10px] py-[30px] px-[20px] text-[#999]"/>
                    <input type="password" placeholder="Sandi"
                        className="w-full h-[30px] mt-[10px] py-[30px] px-[20px] text-[#999]"/>
                    <input type="password" placeholder="Masukan sandi Anda lagi"
                        className="w-full h-[30px] mt-[10px] py-[30px] px-[20px] text-[#999]"/>
                    <p className="text-[13px] text-[#333] leading-tight">Sandi harus terdiri dari 8-16 karakter dan
                        mencakup angka dan huruf</p>
                    <button type="submit" className="w-full text-center p-4 bg-[#ff5c00] text-white">Berikutnya</button>
                </form>
            </div>
        </div>
    </div>




</div>

  )
}

export default Account