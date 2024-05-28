import React, { useState } from "react";
// import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import authServices from "../services/userServices";

const SignupForm = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    createPassword: "",
    confirmPassword: "",
  });

  const [accountType, setAccountType] = useState("student");

  const [showCreatePassword, setShowCreatePassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    // toast.success("Account created Successfully");
    const finalData = { ...formData, accountType };
    console.log("Final data : ", finalData);
    try {
      const response = authServices.registerUser(finalData)
      if(!response.ok){
        console.log("Error while registering the user");
        return;
      }
    } catch (error) {
      console.log("Error while registering the user");
    }
    console.log(finalData);
    navigate("/");
  };
  return (
    <div>
      <form
        action=""
        className="w-[450px] max-lg:w-[390px] max-md:w-[350px] max-sm:w-full flex flex-col justify-center items-center gap-4 px-3 py-8 text-black border-2 shadow-xl shadow-neutral-300 rounded-md"
        onSubmit={submitHandler}>
        
        <div className="flex gap-4">
          <div className="flex flex-col gap-3 w-full">
            <label className="text-sm " htmlFor="firstName">
              First Name <sup className="text-red-400">*</sup>
            </label>

            <input
              className="py-3 px-4 w-full rounded-md outline-none border-[1px]  "
              type="text"
              name="firstName"
              value={formData.firstName}
              id="firstName"
              placeholder="Enter first name"
              onChange={changeHandler}
              required
            />
          </div>
          <div className="flex flex-col gap-3 w-full">
            <label className="text-sm " htmlFor="lastName">
              Last Name <sup className="text-red-400">*</sup>
            </label>

            <input
               className="py-3 px-4 w-full rounded-md outline-none border-[1px]  "
              type="text"
              name="lastName"
              value={formData.lastName}
              id="lastName"
              placeholder="Enter last name"
              onChange={changeHandler}
              required
            />
          </div>
        </div>

        {/* EMAIL SECTION */}
        <div className="flex flex-col gap-3 w-full">
          <label className="text-sm " htmlFor="email">
            Email Address <sup className="text-red-400">*</sup>
          </label>
          <input
             className="py-3 px-4 w-full rounded-md outline-none border-[1px]  "
            type="email"
            name="email"
            value={formData.email}
            id="email"
            placeholder="Enter email address"
            onChange={changeHandler}
            required
          />
        </div>

        {/* CREATE PASSWORD AND CONFIRM PASSWORD SECTION  */}
        <div className="flex gap-4">
          <div className="flex flex-col gap-3 w-full relative">
            <label className="text-sm " htmlFor="createPassword">
              Create Password <sup className="text-red-400">*</sup>
            </label>

            <input
               className="py-3 px-4 w-full rounded-md outline-none border-[1px]  "
              type={showCreatePassword ? "text" : "password"}
              name="createPassword"
              value={formData.createPassword}
              id="createPassword"
              placeholder="Create Password"
              onChange={changeHandler}
              required
            />

            <span
              className="absolute bottom-3 right-3 text-2xl"
              onClick={() => setShowCreatePassword(!showCreatePassword)}>
              {showCreatePassword ? (
                <AiOutlineEyeInvisible />
              ) : (
                <AiOutlineEye />
              )}
            </span>
          </div>
          <div className="flex flex-col gap-3 w-full relative">
            <label className="text-sm " htmlFor="confirmPassword">
              Confirm Password <sup className="text-red-400">*</sup>
            </label>

            <input
              className="py-3 px-4 w-full rounded-md outline-none border-[1px]  "
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              id="confirmPassword"
              placeholder="Confirm Password"
              onChange={changeHandler}
              required
            />

            <span
              className="absolute bottom-3 right-3 text-2xl"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible />
              ) : (
                <AiOutlineEye />
              )}
            </span>
          </div>
        </div>

        {/* BUTTON */}
        <button className="p-3 w-full bg-rose-500 text-white  text-base font-semibold mt-6 rounded-md">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
