import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/landingPage';

function Signup() {
    const navigate = useNavigate();
return (
    <>
        <div className="opacity-50">
            <Header isLandingPage={false} />
        </div>
        <div className="relative grid h-screen flex justify-center w-[100%] z-20">
        {/* Signup Title */}
        <div className="w-[400px]">
            <h1 className="text-4xl font-bold text-center mt-[200px] mb-[30px]">
                <span className="block">Create Your</span>
                <span className="block">YATE Account</span>
            </h1>
            <div>
                <ul className="grid justify-center items-center w-full space-y-5">
                    <li>
                        <button 
                        onClick={() => navigate("/signup/creative")}
                        className='font-bold border-[1.5px] rounded-2xl 
                        w-[350px] h-[120px] justify-center items-center 
                        hover:border-slate-300 transition-colors bg-[#F9F5F0]'>Creative</button>
                    </li>
                    
                    <li>
                        <button 
                        onClick={() => navigate("/signup/buyer")}
                        className='font-bold border-[1.5px] rounded-2xl 
                        w-[350px] h-[120px] justify-center items-center 
                        hover:border-slate-300 transition-colors bg-[#F9F5F0]'>Buyer</button>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    </>
);
}

export default Signup;