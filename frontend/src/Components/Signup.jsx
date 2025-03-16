import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function Signup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Ensure backend field names match: name, email, password
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    axios
      .post("https://mybookstore-xcse.onrender.com/signup", userInfo)
      .then((response) => {
        // Agar response data mile, to user ko localStorage me store karein aur toast & redirect karein
        if (response.data) {
          localStorage.setItem("Users", JSON.stringify(response.data.user));
          toast.success("Signup Successfully!");
          // Redirect immediately ya thoda delay karke
          setTimeout(() => {
            navigate("/");
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.error(err);
          toast.error("Error: " + err.response.data.message);
        } else {
          toast.error("Signup failed. Please try again.");
        }
      });

    console.log("Form Data:", data);
  };

  return (
    <>
      {/* Toaster for react-hot-toast */}
      <Toaster />
      <div className="flex justify-center items-center h-screen">
        <div className="modal-box relative p-8 shadow-lg rounded-md bg-white">
          {/* Close modal button */}
          <Link
            to="/"
            type="button"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => document.getElementById("my_modal_3")?.close()}>
            ✕
          </Link>
          <h3 className="font-bold text-2xl pb-3">Signup</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="py-2">
              <label htmlFor="name">Name</label>
              <br />
              <input
                type="text"
                placeholder="Enter your full name"
                name="name"
                id="name"
                className="w-full h-10 py-3 outline-none border rounded-md my-3 pl-2"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <br />
              <input
                type="email"
                placeholder="Enter your Email"
                name="email"
                id="email"
                className="w-full h-10 py-3 outline-none border rounded-md my-3 pl-2"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                id="password"
                className="w-full h-10 py-3 outline-none border rounded-md my-3 pl-2"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
            </div>
            <div className="flex justify-around">
              <button
                type="submit"
                className="px-3 py-2 bg-pink-500 hover:bg-pink-700 transition-all ease-in-out duration-300 rounded-md text-white mb-2">
                Signup
              </button>
              <p className="ml-8 cursor-pointer mt-1">
                Have Account
                <button
                  type="button"
                  className="underline text-blue-500 cursor-pointer ml-1"
                  onClick={() =>
                    document.getElementById("my_modal_3")?.showModal()
                  }>
                  Login
                </button>
              </p>
            </div>
          </form>
          {/* Render the Login component outside the form */}
          <Login />
        </div>
      </div>
    </>
  );
}

export default Signup;
