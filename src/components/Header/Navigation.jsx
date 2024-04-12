import React from "react";

const Navigation = () => {
  return (
    <>
      <header>
        <nav className="flex justify-between align-center pointer">
          <span className="text-3xl cursor-pointer md:hidden"> &#9776;</span>
          <ul className="hidden md:flex md:text-base md:items-center md:align-center md:justify-between md:space-x-3 md:w-full">
            <li>
              <a href="#">
                <img
                  src="src/assets/Images/logo.png"
                  alt="logo"
                  className="w-8 h-8"
                />
              </a>
            </li>
            <li><a href="#">Inspiration</a></li>
            <li><a href="#">Find Work</a></li>
            <li><a href="#">Learn Design</a></li>
            <li><a href="#">Go Pro</a></li>
            <li><a href="#">Hire Designers</a></li>
          </ul>

          <ul className="md:w-full flex text-base items-center align-center justify-center md:space-x-3">
            <li>
              <input
                type="search"
                name=""
                id=""
                placeholder="Search"
                className="md:w-full focus:bg-gray-200 border h-10 p-2 rounded focus:outline-none focus:border-0"
              />
            </li>
            <li className="text-2xl w-8 h-8">&#128188;</li>
            <li>
              <img
                src="src/assets/Images/profileImage.png"
                alt=""
                className="w-8 h-8"
              />
            </li>
            <li>
              <button className="border outline-none w-28 h-10 bg-pink-500 text-sm font-semibold text-white rounded-lg">
                Upload
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navigation;
