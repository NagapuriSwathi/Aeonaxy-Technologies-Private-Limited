import React from 'react';
import logo from "./../../assets/Images/logo.png";
import image1 from "./../../assets/Images/image1.png";

const LandingPage = () => {
  return (
        <section>
            <img src={logo} alt="logo" className="pl-10"/>
            <h3 className="text-2xl font-bold pl-14 pr-12 text-[#856117] mb-16">Discover the world's top Designers &amp; Creatives.</h3>
            <img src={image1} alt="Illustration" className="w-full"/>
            <p className="text-sm font-medium pl-14 pr-12 text-[#856117]">Art by <span className='underline'>Peter Tarka</span></p>
        </section>
  );
};

export default LandingPage;
