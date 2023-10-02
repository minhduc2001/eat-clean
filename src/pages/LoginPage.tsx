import { Button, TextField, Typography } from "@mui/material";
import React from "react";

function LoginPage() {
  return (
    <div>
      <div>
        <h1>Login or register</h1>
        <p>Manage your account and see your orders</p>
      </div>

      <div className="flex items-center justify-center">
        <form action="#" className="w-1/2 bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold mb-4">Login</h1>
          <div className="border-b mb-4"></div>
          <div className="mb-4">
            <label
              htmlFor="usernameOrEmail"
              className="text-gray-600 block mb-1"
            >
              Username or Email
            </label>
            <input
              type="text"
              id="usernameOrEmail"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none"
              placeholder="Enter your username or email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="text-gray-600 block mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none"
                placeholder="Enter your password"
                required
              />
              <span className="absolute right-3 top-2 cursor-pointer">
                <i className="far fa-eye"></i>
              </span>
            </div>
          </div>
          <div className="mb-4 flex items-center">
            <input type="checkbox" id="rememberMe" className="mr-2" />
            <label htmlFor="rememberMe" className="text-gray-600">
              Remember me
            </label>
          </div>
          <div className="mb-4">
            <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition duration-300">
              Login
            </button>
          </div>
          <div>
            <p className="text-gray-600 text-center">Forgot password? </p>
          </div>
        </form>
        <form action="#"></form>
      </div>
    </div>
  );
}

export default LoginPage;
