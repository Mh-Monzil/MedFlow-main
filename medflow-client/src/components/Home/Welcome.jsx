import welcomeImg1 from "../../assets/images/welcome2.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Welcome = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 mt-12 md:mt-28 flex flex-col justify-center items-center md:flex-row-reverse gap-6 lg:gap-10">
      {/* welcome left side content  */}
      <div className="md:w-1/2 text-center md:text-left space-y-1.5 lg:space-y-3">
        <p className="uppercase text-primaryTeal font-semibold">
          welcome to MedFlow
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold ">
          Complete Medical Solutions in One Place
        </h2>
        <p className="font-medium text-gray-600">
          Discover complete medical solutions at RiseAbove, your ultimate
          healthcare destination. We offer a wide range of services, from expert
          consultations and advanced treatments to personalized care plans.<span className="hidden lg:flex">Our
          dedicated team ensures seamless support and exceptional care, making
          your health and well-being our top priority. Experience excellence in
          healthcare, all in one place.</span>
        </p>
        <div className="pt-5">
          <PrimaryButton path="/about" title={"About Us"} />
        </div>
      </div>

      {/* welcome right side image  */}
      <div className="md:w-1/2 relative">
        <img src={welcomeImg1} alt="" className="rounded-xl" />
      </div>
    </div>
  );
};

export default Welcome;
