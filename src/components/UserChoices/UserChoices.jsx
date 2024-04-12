import React from "react";

import Card from "./Card";

import image4 from "./../../assets/Images/image4.jpg";
import image5 from "./../../assets/Images/image5.jpg";
import image3 from "./../../assets/Images/image3.jpg";

const UserChoices = ({ isButtonDisabled }) => {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold my-4">
          What brings you to Dribbble&#63;
        </h1>
        <p className="text-[#A9A8AE] font-bold">
          Select the options that best describe you. Don't worry you can explore
          other options later.
        </p>
      </div>

      <section>
        <div className="flex justify-center gap-6 align-center flex-wrap my-36">
          <Card
            imageSource={image4}
            imageDescription="I'm a designer looking to share my work."
            className="basis-5"
          />

          <Card
            imageSource={image5}
            imageDescription="I'm looking to hire a designer."
            className="basis-5"
          />

          <Card
            imageSource={image3}
            imageDescription="I'm looking for Design Inspiration."
            className="basis-5"
          />
        </div>

        <div className="w-52 mx-auto">
          <button
            disabled={isButtonDisabled}
            className="w-56 h-10 bg-pink-500 text-white font-bold rounded"
          >
            Finish
          </button>
        </div>
      </section>
    </>
  );
};

export default UserChoices;
