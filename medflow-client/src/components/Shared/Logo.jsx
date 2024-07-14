import logo from "../../../public/hospi.png";

const Logo = () => {
    return (
        <div className="flex items-center">
            <img
            src={logo}
            className="w-12 h-12 md:w-16 md:h-16 rounded-full"
            alt=""
          />
          <p className="font-bold text-2xl md:text-3xl pb-1">MedFlow</p>
        </div>
    );
};

export default Logo;