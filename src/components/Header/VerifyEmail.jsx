import React from "react";

const VerifyEmail = () => {
  return (
    <>
      <div className="w-1/2 mx-auto text-center">
        <h3 className="text-2xl font-bold my-2">Please verify your email...</h3>
        <div className="text-9xl my-2">&#128231;</div>
        <p className="text-gray-500 my-2">
          Please verify your email address. We've sent a confirmation email to
        </p>
        <strong>account@refero.design</strong>
        <p className="text-gray-500 my-2">
          Click the confirmation link in that email to begin using Dribbble.
        </p>
        <p className="text-gray-500 my-2">
          Didn't receive the email?Check your Spam folder, it may have been
          caught by a filter.If you still don't see it, you can
          <a href="#" className="text-pink-400 font-bold">
            {" "}
            resend the confirmation email.
          </a>
        </p>
        <p className="text-gray-500 my-4">
          Wrong email adress?{" "}
          <a href="#" className="text-pink-400 font-bold">
            Change it.
          </a>
        </p>
      </div>
    </>
  );
};

export default VerifyEmail;
