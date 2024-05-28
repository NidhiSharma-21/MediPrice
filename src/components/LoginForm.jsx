import React, { useState } from "react";
// import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import authService from "../services/userServices";

const LoginForm = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    // toast.success("Logged In Sccessfully");
    const finalData = { ...formData };
    console.log(finalData);

    try {
      const response = await authService.loginUser(formData);
      console.log("Response : ", response)

    } catch (error) {
      console.log("Error while login user with the credentials : ", error.message);
    }
    navigate("/");
  };

  return (
    <form
      action=""
      className="w-[450px] max-lg:w-[390px] max-md:w-[350px] max-sm:w-full flex flex-col justify-center items-center gap-4 px-3 py-8 text-black border-2 shadow-xl shadow-neutral-300 rounded-md"
      onSubmit={submitHandler}>
      {/* EMAIL SECTION */}
      <div className="flex flex-col gap-3 w-full">
        <label className="text-sm" htmlFor="email">
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

      {/* PASSWORD SECTION */}
      <div className="flex flex-col gap-3 w-full relative">
        <label className="text-sm" htmlFor="password">
          Password <sup className="text-red-400">*</sup>
        </label>

        <input
          className="py-3 px-4 w-full rounded-md outline-none border-[1px]  "
          type={showPassword ? "text" : "password"}
          name="password"
          value={formData.password}
          id="password"
          placeholder="Enter password"
          onChange={changeHandler}
          required
        />

        <span
          className="absolute bottom-11 right-3 text-2xl"
          onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </span>
        <span className="text-right text-sm">Forget Password</span>
      </div>

      {/* BUTTON */}
      <button className="p-3 w-full bg-rose-500 text-white text-base font-semibold mt-6 rounded-md">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
