import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
import AboutImage from "../../assets/images/aboutImage.png"
const AboutBanner = () => {
    return (
        <div className="max-w-7xl mx-auto lg:h-[500px] flex flex-col-reverse lg:flex-row justify-between items-center gap-10 pt-2 md:p-6 text-center md:text-left pb-10">
      {/* left part banner  */}
      <div className="lg:w-1/2 order-2">
        
        <h1 className='uppercase font-bold mb-4 text-primaryDark'>Who we are</h1>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold ">
         Improving The Quality of Your Life Through {" "}
          <span className="text-primaryTeal">Better Health.</span>{" "}
        </h1>
        <p className="text-lg text-gray-600 font-medium pt-2 md:pt-4">
          We offer a wide range of comprehensive healthcare services to address all aspects of your health. From preventive care and health screenings to specialize treatments chronic diseases management.
        </p>
        <div className="pt-4 md:pt-6">
          <PrimaryButton path={"/"} title={"Appointment"} />
        </div>
      </div>

      {/* right part banner  */}
      <div className="lg:w-1/2 rounded-3xl relative overflow group order-1">
        <img src={AboutImage} alt="" className="lg w-full rounded-3xl" />
        <span className="absolute w-0 h-full top-0 left-1/2 transform -translate-x-1/2 bg-white/5 group-hover:w-full transition-all ease-in-out duration-1000 "></span>
      </div>
    </div>
    );
};

export default AboutBanner;