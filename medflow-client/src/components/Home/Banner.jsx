import PrimaryButton from "../Shared/PrimaryButton";
import mobileBanner from "../../assets/images/hospi-banner-square.png";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto lg:h-[500px] flex flex-col-reverse lg:flex-row justify-between items-center gap-10 pt-2 md:p-6 text-center md:text-left pb-10">
      {/* left part banner  */}
      <div className="lg:w-1/2">
        <h1 className="text-3xl sm:text-5xl md:text-5xl xl:text-6xl font-bold">
          We Are Providing Best & Affordable{" "}
          <span className="text-primaryTeal">Health Care.</span>{" "}
        </h1>
        <p className="text-lg text-gray-600 font-medium pt-2 md:pt-4">
          Our is to deliver the highest quality healthcare services. We believe
          that everyone deserves access to excellent medical care without
          compromising on quality.
        </p>
        <div className="pt-4 md:pt-6">
          <PrimaryButton path={"/"} title={"Read More..."} />
        </div>
      </div>

      {/* right part banner  */}
      <div className="lg:w-1/2 rounded-3xl relative overflow group">
        <img src={mobileBanner} alt="" className="lg w-full rounded-3xl" />
        <span className="absolute w-0 h-full top-0 left-1/2 transform -translate-x-1/2 bg-white/5 group-hover:w-full transition-all ease-in-out duration-1000 "></span>
      </div>
    </div>
  );
};

export default Banner;
