import React from "react";
import LoginAndSignUpTemplate from "../components/LoginAndSignUpTemplate";
import signupImg from "../assets/signup.webp";

const Signup = ({setIsLoggedIn}) => {
  return (
    <div>
      <LoginAndSignUpTemplate
        title={"Welcome to MediPrice"}
        desc1={"Build skills for today, tomorrow, and beyond."}
        desc2={"Education to future-proof your career."}
        image={signupImg}
        formtype={"signup"}
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  );
};

export default Signup;
