import React from "react";
import cameraIcon from "./../../assets/Images/cameraIcon.png";



const Profile = ({
  imagePath = {cameraIcon},
  imageAlternateText,
  location,
  buttonState = false,
  paragraphContent,
}) => {
  return (
    <>
    <h1 className="text-3xl font-bold my-2">
        Welcome! Let's create your profile
      </h1>
      <p className="text-[#AAAAAC] font-bold">
        Let others get to know you better! You can do these later
      </p>

      <div className="profile">
        <div className="title">
          <h3 className="text-xl font-bold mt-20 mb-6">Add an avatar</h3>
        </div>
        <div className="profileImage flex flex-col justify-between align-center md:flex-row">
          <img
            src={imagePath}
            alt={imageAlternateText}
            className="h-40 w-40 border-2 border-dotted border-gray-300 rounded-full"
          />
          <div className="mt-6">
            <label
              htmlFor="image"
              className="border p-2 font-bold cursor-pointer"
            >
              Choose Image
            </label>
            <input type="file" name="" id="image" hidden accept="image" />
            <p className="mt-4 text-[#AAAAAC] font-semibold">
              &gt; Or choose one of our defaults
            </p>
          </div>
        </div>
      </div>
      <div className="location">
        <h3 className="text-xl font-bold mt-20 mb-6">Add your location</h3>
        <input
          type="text"
          className="w-full mr-6 p-4 text-bold rounded shadow-lg outline-none"
          placeholder="Enter a location"
          defaultValue={location}
        />
      </div>

      <button
        disabled={buttonState}
        className="w-56 h-10 mt-12 bg-pink-500 text-white font-bold rounded-lg"
      >
        Next
      </button>
      <p className="mt-4 mx-10 text-[#AAAAAC] font-semibold">
        {paragraphContent}
      </p>

    </>
  );
};

export default Profile;
