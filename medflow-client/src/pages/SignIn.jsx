import Lottie from "lottie-react";
import loginAnimation from '../assets/login-animation.json'
import Logo from "@/components/Shared/Logo";
import SignInform from "@/components/SignIn/SignInform";

const SignIn = () => {
    return (
        <div className="relative max-w-7xl mx-auto">
            <div className="bg-blue-500 w-2/3 h-[800px] p-8 rounded-lg">
                    <Logo/>
            </div>

               
                                                            
                
                <div className="bg-white w-4/5  absolute top-[15%] left-[10%] border  flex flex-col md:flex-row justify-center items-center rounded-lg  p-12 ">

                     {/* Sign Up Form */}
                    <div className="flex-1">
                    <h1 className="text-left text-2xl lg:text-4xl font-bold mb-6">Sign In <br /> to your Account </h1>
                        <SignInform/>
                    </div>

                    {/* Animation */}
                    <div className="flex-1">
                    <Lottie className=" " loop={true} animationData={loginAnimation} />
                    </div>
                </div>

        </div>
    );
};

export default SignIn;