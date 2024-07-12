import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const PrimaryButton = ({ title, path }) => {
  return (
    <div>
      <Link to={path} className="mx-auto">
        <Button className="relative group bg-primaryTeal text-lg focus:outline focus:outline-teal-400 transition-all ease-in duration-700 overflow-hidden">
          <span className="absolute w-0 h-60 bg-black group-hover:w-full transition-all duration-700 rotate-45"></span>
          <span className="z-20">{title}</span>
        </Button>
      </Link>
    </div>
  );
};

export default PrimaryButton;
