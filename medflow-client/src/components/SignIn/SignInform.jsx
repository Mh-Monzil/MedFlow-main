import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "@/hooks/useAuth";

const SignInform = () => {
    const {signInUser, googleSignIn} = useAuth()

    const navigate = useNavigate()


    const handleForm = (event)=>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
        .then(result=> {
            console.log("login successful");
            navigate("/")
        })
        .catch(error=>{
            console.log(error.message);
        })
       
    }

    // const handleGoogleLogin = ()=>{
    //     googleSignIn
    // }
    return (
        <div>

<form onSubmit={handleForm}>
            

            <Label htmlFor="email">Email</Label>

            <Input className="mt-2 mb-4 rounded-3xl bg-white focus:outline-primaryDark" type="email" name="email" placeholder="Enter your email here"/>

            <Label htmlFor="email">Password</Label>

            <Input className="mt-2 mb-4 rounded-3xl bg-white focus:outline-primaryDark" type="password" name="password" placeholder="Enter your password here"/>

            <Button className="bg-primaryDark w-full" type="submit">Sign Up</Button>
        </form>

        <div className="flex justify-center items-center flex-col my-5 gap-4">
            <p>Or  </p>

            <Button onClick={()=>googleSignIn()}  className="flex gap-4 w-full  items-center rounded-3xl" variant="outline">
            <FcGoogle />
            Sign in with Google
            </Button>
        </div>

        <div className="mt-6 text-center ">
    <a href="#" className="text-sm text-blue-500 hover:underline dark:text-blue-400">
        Don't have any account? <Link to="/signup">Sign In</Link> 
    </a>
</div>
       </div>
    );
};

export default SignInform;