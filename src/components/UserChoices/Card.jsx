import React from 'react';


const Card = ({
    imageSource,
    imageDescription
}) => {
  return (
    <>
        <div className="border-2 shadow-xl p-4 rounded-xl">
            <img src={imageSource} alt="Design" className="w-60 h-40 rounded-lg mb-4" />
            <p className="w-60 mx-auto text-center font-extrabold text-lg">{imageDescription}</p>
        </div>
    </>
  )
}

export default Card