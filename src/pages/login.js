import { Button } from "@mui/material";
import Header from "../components/landingPage";
import { appleLogo, googleLogo, facebookLogo } from "../components/constants";
import { LoginButton } from "./loginComponents/loginButtons";

function Login() {
    return (
        <>
            <div className="opacity-50">
                <Header isLandingPage={false} />
            </div>
            <div className="h-screen flex items-center justify-center max-sm:-translate-y-[50px]">
                <div className="signUpWithBars grid w-full z-10 text-center justify-center">
                    
                    {/* Apple button */}
                    <LoginButton 
                    Name={"Apple"} 
                    Logo={appleLogo} 
                    backgroundColor={"black"} 
                    textColor={"white"}
                    />
                    
                    {/* Facebook login button */}
                    <LoginButton 
                    Name={"Facebook"} 
                    Logo={ facebookLogo } 
                    backgroundColor={"[#3F51B5]"} 
                    textColor={"white"} />
                    
                    {/* Google button */}
                    <LoginButton 
                    Name={"Google"} 
                    Logo={googleLogo} 
                    backgroundColor={"white"} 
                    textColor={"black"} />
                    
                    {/* Login with email button */}
                    <hr className="border-[1px] border-full border-black w-full my-4 opacity-25" />
                    <a href="https://www.erdetfredag.dk/" className={`relative flex items-center 
                    justify-center p-1 w-[300px] hover:text-green-700 text-blue-700`}>
                        Continue with Email →
                    </a>
                </div>
            </div>
        </>
    );
}

export default Login;