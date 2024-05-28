import React from "react";
import frame from "../assets/frame.png";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
// import { FcGoogle } from "react-icons/fc";

const LoginAndSignUpTemplate = ({
  title,
  desc1,
  desc2,
  image,
  formtype,
  setIsLoggedIn,
}) => {
  return (
    <div className="flex justify-evenly items-center min-h-[calc(100vh-80px)] max-md:w-full p-6 max-sm:p-4">
      <div className="flex flex-col justify-center items-center gap-8  max-md:w-full ">
        <h1 className="text-4xl mx-4"> {title} </h1>
        {/* <p>
          <span> {desc1} </span>
          <span> {desc2} </span>
        </p> */}

        {formtype === "signup" ? (
          <SignupForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}
      </div >
      <div className="h-[450px] w-[450px] relative max-md:hidden ">
        <img
          className="relative z-[5] max-lg:w-[300px] max-lg:h-[300px]"
          style={{top: "50%", left: "50%", transform: "translate(-50%,-50%)"}}
          src={image}
          alt="students"
          // width={450}
          // height={450}
          loading="lazy"
        />
        <img
          className="absolute top-6 right-[-25px]  z-[1] max-lg:w-[300px] max-lg:h-[300px]"
          style={{top: "55%", left: "55%", transform: "translate(-50%,-50%)"}}
          src={frame}
          alt="frame"
          // width={450}
          // height={450}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default LoginAndSignUpTemplate;
