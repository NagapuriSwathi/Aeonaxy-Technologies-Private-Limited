import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col justify-around my-32 md:flex-row align-center">
        <div className="basis-1/6 text-left">
          <img src="src/assets/Images/logo.png" alt="" />
          <p className="">
            Dribbble is world's leading community for creatives to share, grow,
            and get hired.
          </p>

          <div className="icons flex space-x-3 my-4">
            <img
              src="src/assets/Images/dribbbleLogo.jpg"
              alt=""
              className="w-6 h-6 rounded-full"
            />
            <img
              src="src/assets/Images/twitterIcon.jpg"
              alt=""
              className="w-6 h-6 rounded-full"
            />
            <img
              src="src/assets/Images/facebookIcon.jpg"
              alt=""
              className="w-6 h-6 rounded-full"
            />
            <img
              src="src/assets/Images/instagramIcon.jpg"
              alt=""
              className="w-6 h-6 rounded-full"
            />
            <img
              src="src/assets/Images/pintrestIcon.jpg"
              alt=""
              className="w-6 h-6 rounded-full" 
            />
          </div>
        </div>

        <div>
          <ul className="space-y-2">
            <li>
              <strong>For designers</strong>
            </li>
            <li className="sm:max-md:hidden">Go Pro!</li>
            <li className="sm:max-md:hidden">Explore design work</li>
            <li className="sm:max-md:hidden">Design blog</li>
            <li className="sm:max-md:hidden">Overtime podcast</li>
            <li className="sm:max-md:hidden">Playoffs</li>
            <li className="sm:max-md:hidden">Weekly Warm-Up</li>
            <li className="sm:max-md:hidden">Refer a Friend</li>
            <li className="sm:max-md:hidden">Code of conduct</li>
          </ul>
        </div>

        <div>
          <ul className="space-y-2">
            <li>
              <strong>Hire designers</strong>
            </li>
            <li className="sm:max-md:hidden">Post a job opening</li>
            <li className="sm:max-md:hidden">Post a freelance project</li>
            <li className="sm:max-md:hidden">Search for designers</li>
          </ul>
          <ul>
            <li className="py-1">
              <strong>Brands</strong>
            </li>
            <li className="sm:max-md:hidden">Advertise with</li>
          </ul>
        </div>

        <div>
          <ul className="space-y-2">
            <li className="py-1">
              <strong>Company</strong>
            </li>
            <li className="sm:max-md:hidden">About</li>
            <li className="sm:max-md:hidden">Careers</li>
            <li className="sm:max-md:hidden">Support</li>
            <li className="sm:max-md:hidden">Media kit</li>
            <li className="sm:max-md:hidden">Testimonals</li>
            <li className="sm:max-md:hidden">API</li>
            <li className="sm:max-md:hidden">Terms of service</li>
            <li className="sm:max-md:hidden">Privacy policy</li>
            <li className="sm:max-md:hidden">Cookie policy</li>
          </ul>
        </div>

        <div>
          <ul className="space-y-2">
            <li className="py-1">
              <strong>Directories</strong>
            </li>
            <li className="sm:max-md:hidden">Design jobs</li>
            <li className="sm:max-md:hidden">Designers for hire</li>
            <li className="sm:max-md:hidden">Freelance designers for hire</li>
            <li className="sm:max-md:hidden">Tags</li>
            <li className="sm:max-md:hidden">Places</li>
          </ul>
          <ul className="space-y-2">
            <li className="py-1">
              <strong>Design assets</strong>
            </li>
            <li className="sm:max-md:hidden">Dribbble Marketplace</li>
            <li className="sm:max-md:hidden">Creative Market</li>
            <li className="sm:max-md:hidden">Fontspring</li>
            <li className="sm:max-md:hidden">Font Squirrel</li>
          </ul>
        </div>

        <div>
          <ul className="space-y-2">
            <li>
              <strong>Design Resources</strong>
            </li>
            <li className="sm:max-md:hidden">Freelancing</li>
            <li className="sm:max-md:hidden">Design Hiring</li>
            <li className="sm:max-md:hidden">Design Portfolio</li>
            <li className="sm:max-md:hidden">Design Education</li>
            <li className="sm:max-md:hidden">Creative Process</li>
            <li className="sm:max-md:hidden">Design Industry Trends</li>
          </ul>
        </div>
      </footer>

      <hr className="h-px my-16 bg-gray-200 border-1" />

      <div className="copy-right flex justify-between mx-4 my-6 sm:max-md:w-full sm:max-md:block sm:max-md:text-sm">
        <p className="my-2">&copy; 2023 Dribbble. All rights reserved.</p>
        <p>
          <strong>20,501,853</strong>&nbsp;shots dribbbled
          <img
              src="src/assets/Images/dribbbleLogo.jpg"
              alt=""
              className="w-6 h-6 inline mx-2 rounded-full"
            />
        </p>
      </div>
    </>
  );
};

export default Footer;
