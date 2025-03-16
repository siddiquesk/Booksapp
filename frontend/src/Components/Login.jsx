import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import axios from "axios";
function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    axios
      .post("https://mybookstore-xcse.onrender.com/login", userInfo)
      .then((response) => {
        // API response ke hisaab se navigation
        if (response.data) {
          toast.success("login successfull !");
          setTimeout(() => {
            document.getElementById("my_modal_3").close();
            window.location.reload();
            navigate("/");
          }, 1000);
          // Navigation ko yahin shift kar dein
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
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box relative p-8 shadow-lg rounded-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <button
            type="button"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => document.getElementById("my_modal_3").close()}>
            ✕
          </button>
          <h3 className="font-bold text-2xl pb-3">Login</h3>
          <div className="py-2">
            <label htmlFor="login-email">Email</label>
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              id="login-email"
              className="w-full h-10 py-3 outline-none border rounded-md my-3 pl-2"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>
          <div className="py-2">
            <label htmlFor="login-password">Password</label>
            <br />
            <input
              type="password"
              placeholder="Enter your password"
              id="login-password"
              className="w-full h-10 py-3 outline-none border rounded-md my-3 pl-2"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </div>
          <div className="flex justify-around items-center mt-4">
            <button
              type="submit"
              className="px-2 py-1 bg-pink-500 hover:bg-pink-700 transition-all ease-in-out duration-300 rounded-md text-white">
              Login
            </button>
            <p className="ml-8 mt-1">
              Not Registered?{" "}
              <Link to="/signup" className="underline text-blue-500 ml-1">
                Signup here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </dialog>
  );
}

export default Login;
