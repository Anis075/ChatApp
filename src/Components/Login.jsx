import React, { useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleNotification = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="w-[100%] h-[100%] flex items-center gap-24">
        {/* Sign-In Section */}
        <div className="flex-1 flex flex-col items-center gap-5">
          <h2>Welcome back</h2>
          <form
            className="flex-1 flex flex-col items-center gap-5"
            onSubmit={handleNotification}
          >
            <input
              className="p-5 border-none outline-none bg-[rgba(17,25,40,0.6)] text-white rounded"
              type="text"
              placeholder="Email"
              name="email"
            />
            <input
              className="p-5 border-none outline-none bg-[rgba(17,25,40,0.6)] text-white rounded"
              type="password"
              placeholder="Password"
              name="password"
            />
            <button
              className="w-[100%] p-5 border-none bg-[#1F8EF1] text-white rounded cursor-pointer font-medium"
              type="submit"
            >
              Sign In
            </button>
          </form>
        </div>

        {/* Separator */}
        <div className="h-[80%] w-[2px] bg-[#DDDDDD35]"></div>

        {/* Sign-Up Section */}
        <div className="flex-1 flex flex-col items-center gap-5">
          <h2>Create an Account</h2>
          <form className="flex flex-col items-center justify-center gap-5">
            <label
              className="e-[100%] flex items-center justify-between cursor-pointer underline gap-8"
              htmlFor="file"
            >
              <img
                className="w-[50px] h-[50px] rounded-lg object-cover opacity-[0.6]"
                src={avatar.url || "./avatar.png"}
                alt="Avatar Preview"
              />
              Upload an image
            </label>
            <input
              type="file"
              id="file"
              className="hidden p-5 border-none outline-none bg-[rgba(17,25,40,0.6)] text-white rounded"
              onChange={handleAvatar}
            />
            <input
              className="p-5 border-none outline-none bg-[rgba(17,25,40,0.6)] text-white rounded"
              type="text"
              placeholder="Username"
              name="username"
            />
            <input
              className="p-5 border-none outline-none bg-[rgba(17,25,40,0.6)] text-white rounded"
              type="text"
              placeholder="Email"
              name="email"
            />
            <input
              className="p-5 border-none outline-none bg-[rgba(17,25,40,0.6)] text-white rounded"
              type="password"
              placeholder="Password"
              name="password"
            />
            <button
              className="w-[100%] p-5 border-none bg-[#1F8EF1] text-white rounded cursor-pointer font-medium"
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
