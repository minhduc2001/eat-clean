import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function LoginPage() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mb-20 py-[45px]">
      <div className="mb-8">
        <h1 className="font-medium text-5xl mb-4">Login or register</h1>
        <p className="text-gray-500">Manage your account and see your orders</p>
      </div>

      <div className="flex justify-center">
        <form action="#" className="w-1/2 bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold mb-4">Login</h1>
          <div className="border-b mb-4"></div>
          <div className="mb-4 flex w-full items-center">
            <label
              htmlFor="usernameOrEmail"
              className="text-gray-600 block w-[50%] pr-2 text-sm"
            >
              {"Username or Email Address".toUpperCase()}
            </label>
            <input
              type="text"
              id="usernameOrEmail"
              className="w-full p-2 border-none border-gray-300 rounded focus:outline-none text-sm"
              placeholder="Enter your username or email"
              required
            />
          </div>

          <div className="border-b mb-4"></div>

          <div className="mb-4 flex w-full items-center">
            <label
              htmlFor="password"
              className="text-gray-600 block w-[50%] pr-2 text-sm"
            >
              {"Password".toUpperCase()}
            </label>
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full p-2 border-none border-gray-300 rounded focus:outline-none text-sm"
                placeholder="Enter your password"
                required
              />
              <span
                className="absolute right-3 top-2 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </span>
            </div>
          </div>

          <div className="border-b mb-4"></div>

          <div className="mb-4 flex items-center">
            <button className="w-20 bg-green-500 text-white py-2 mr-4 rounded hover:bg-green-600 transition duration-300 text-sm">
              Login
            </button>
            <input type="checkbox" id="rememberMe" className="mr-2" />
            <label htmlFor="rememberMe" className="text-gray-600">
              Remember me
            </label>
          </div>
          <div className="text-green-500">
            <a href="#">Lost your password?</a>
          </div>
        </form>

        <form action="#" className="w-1/2 bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold mb-4">Register</h1>
          <div className="border-b mb-4"></div>
          <div className="mb-4 flex w-full items-center">
            <label
              htmlFor="usernameOrEmail"
              className="text-gray-600 block w-[50%] pr-2 text-sm"
            >
              {"Email Address".toUpperCase()}
            </label>
            <input
              type="text"
              id="usernameOrEmail"
              className="w-full p-2 border-none border-gray-300 rounded focus:outline-none text-sm"
              placeholder="Enter your username or email"
              required
            />
          </div>

          <div className="border-b mb-4"></div>
          <div className="text-gray-600 mb-4">
            A link to set a new password will be sent to your email address.
          </div>

          <div className="mb-4 flex items-center">
            <input type="checkbox" id="rememberMe" className="mr-2" />
            <label htmlFor="rememberMe" className="text-gray-600">
              Sign me up for the newsletter!
            </label>
          </div>
          <div className="text-green-500">
            <button className="w-20 bg-green-500 text-white py-2 mr-4 rounded hover:bg-green-600 transition duration-300 text-sm">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
