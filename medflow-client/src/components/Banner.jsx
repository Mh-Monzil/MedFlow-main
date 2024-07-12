import PrimaryButton from "./PrimaryButton";
import bannerImg from "../assets/images/hospi-banner.png";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto lg:h-[60vh] flex flex-col lg:flex-row justify-between items-center gap-6 pt-2 p-6">
      {/* left part banner  */}
      <div className="lg:w-1/2">
        <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold">
          We Are Providing Best & Affordable{" "}
          <span className="text-primaryTeal">Health Care.</span>{" "}
        </h1>
        <p className="text-lg font-medium pt-2 md:pt-4">
          Our is to deliver the highest quality healthcare services. We believe
          that everyone deserves access to excellent medical care without
          compromising on quality.
        </p>
        <div className="pt-4 md:pt-6">
          <PrimaryButton path={"/"} title={"Read More..."} />
        </div>
      </div>

      {/* right part banner  */}
      <div className="lg:w-1/2">
        <img src={bannerImg} alt="" className="w-[800px] rounded-3xl" />
      </div>
    </div>
  );
};

export default Banner;
