import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
function Signup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    axios
      .post("http://localhost:8080/signup", userInfo)
      .then((response) => {
        // API response ke hisaab se navigation
        if (response.data) {
          toast.success("signup Successfully !");
          navigate("/"); // Navigation ko yahin shift kar dein
        }
        localStorage.setItem("Users", JSON.stringify(response.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("This is an error!", err.response.data);
        }
      });

    console.log(data);
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="modal-box relative p-8 shadow-lg rounded-md bg-white">
          {/* Agar aap Signup page ko modal ke andar use kar rahe hain to close button ke liye check karein */}
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
          {/* Render the Login component outside the <form> */}
          <Login />
        </div>
      </div>
    </>
  );
}
export default Signup;
