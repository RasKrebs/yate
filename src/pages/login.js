import { Button } from "@mui/material";
import Header from "../components/header";
import { appleLogo } from "../components/constants";

function LoginButton({ Name, Logo, backgroundColor, textMargin, textColor}) {
    return (
        <button 
          className={`flex items-center p-1 w-[300px] h-[50px] bg-${backgroundColor} rounded-full hover:bg-blue-700`}>
            <span className="flex-shrink-0 text-left ml-[15px]">{Logo}</span>
            <span className={` text-${textColor} ml-[${textMargin}px]`}>{Name}</span>
        </button>
    );
}

function Login() {
    return (
        <>
            <Header isLandingPage={false} />
            <div className="h-screen flex items-center justify-center">
                <div className="signUpWithBars grid w-full z-10 text-center justify-center">
                    <LoginButton 
                    Name={"Apple"} 
                    Logo={appleLogo} 
                    backgroundColor={"black"} 
                    textMargin = {60}
                    textColor={"white"}
                    />
                    <LoginButton Name={"Test 2"} Logo={""} backgroundColor={"blue"} textMargin = {85} />
                </div>
            </div>
        </>
    );
}

export default Login;