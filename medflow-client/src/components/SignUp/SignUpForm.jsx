import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";


const SignUpForm = () => {
    const {createUser, googleSignIn} = useAuth()
    const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";


  const handleGoogleSignIn = async () => {
    try{
        await googleSignIn();
        toast.success("Sign In Successful");
        navigate(from, {replace: true});
    }catch(error){
        console.log(error);
        toast.error(error.message);
    }
}

    const handleForm = (event)=>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password )
        .then(result=>{

            
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })
                toast.success("Sign Up Successful");
                navigate(from, {replace: true});
                
            
           console.log(result);
        })
        .catch(error=>{
           toast.error(error.message)
        })
        
    }
    return (
       <div>

<form onSubmit={handleForm}>
            <Label htmlFor="name">Name</Label>

            <Input className="mt-2 mb-4 rounded-3xl bg-white focus:outline-primaryDark" type="text" name="name" placeholder="Enter your name here"/>

            <Label htmlFor="photo">Photo URL</Label>

            <Input className="mt-2 mb-4 rounded-3xl bg-white focus:outline-primaryDark" type="text" name="photo" placeholder="Enter your photo url"/>

            <Label htmlFor="email">Email</Label>

            <Input className="mt-2 mb-4 rounded-3xl bg-white focus:outline-primaryDark" type="email" name="email" placeholder="Enter your email here"/>

            <Label htmlFor="email">Password</Label>

            <Input className="mt-2 mb-4 rounded-3xl bg-white focus:outline-primaryDark" type="password" name="password" placeholder="Enter your password here"/>

            <Button className="bg-primaryDark w-full" type="submit">Sign Up</Button>
        </form>

        <div className="flex justify-center items-center flex-col my-5 gap-4">
            <p>Or  </p>

            <Button onClick={handleGoogleSignIn}   className="flex gap-4 w-full  items-center rounded-3xl" variant="outline">
            <FcGoogle />
            Sign in with Google
            </Button>
        </div>

        <div className="mt-6 text-center ">
    <a href="#" className="text-sm text-blue-500 hover:underline dark:text-blue-400">
        Already have an account? <Link to="/signin">Sign In</Link> 
    </a>
</div>
       </div>
        
    );
};

export default SignUpForm;

