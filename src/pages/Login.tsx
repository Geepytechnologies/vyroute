import React, { useEffect, useState } from "react";
import Logo from "../components/Logo";
import { useNavigate } from "react-router-dom";

type Props = {};

const Login = (props: Props) => {
  const [userdetails, setUserdetails] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleLogin = () => {
    try {
    } catch (error) {}
  };
  const handlechange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserdetails((userdetails) => ({
      ...userdetails,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="w-full flex items-center justify-center min-h-screen bg-gradient-to-r from-offset to-offsetdarker">
      <div className="flex flex-col min-h-[500px] md:flex-row w-[95%] md:w-[80%] lg:w-[70%] bg-white shadow-xl">
        <div className="basis-[50%]">
          <img
            src="/roadview.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="basis-[50%] p-4">
          <h1 className="font-[500] text-[1.8rem]">Login to your account</h1>
          <div className="">
            <form onSubmit={handleLogin}>
              <div className="flex flex-col gap-1">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handlechange}
                  value={userdetails.email}
                  placeholder="Enter your email"
                  className="rounded-md px-3 py-2"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={handlechange}
                  value={userdetails.password}
                  placeholder="Enter your password"
                  className="rounded-md px-3 py-2"
                />
              </div>
              <div className="flex justify-end">
                <span className="">Forgot password?</span>
              </div>
              <div className="">
                <button
                  className="bg-teal-500 w-[150px] rounded-md text-white px-3 py-2"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
            <div>
              Don&apos;t have an account?{" "}
              <span className="text-blue-400">Sign Up</span>
            </div>
            <div>
              <button
                onClick={() => navigate("/details")}
                className="bg-gray-400  rounded-md text-white px-3 py-2"
              >
                Continue Without Log In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
