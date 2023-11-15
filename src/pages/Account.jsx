import React from 'react'
import Bannerleft from '/account/bannerleft.jpg'
import Logo from '../../public/logo.svg'
import FB from '/account/facebook-svgrepo-com.png'
import CustomButton from '../components/Atoms/WithCVA/CustomButton'
import AccountForm from '../components/molecule/Account/AccountForm'


const Account = () => {

const LoginForm = document.getElementById("LoginForm");
const RegForm = document.getElementById("RegForm");
const Indicator = document.getElementById("indicator");

    

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
                  <a href="/">
                    <img className="w-[40px] h-[40px]" src={Logo} alt=""/></a>
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
            <div id="accoun"
                className="p-8 w-[500px] relative bg-white text-left m-auto py-[20px]">


<AccountForm/>

        

            
            </div>
        </div>
    </div>




</div>

  )
}

export default Account