import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; // For redirection
import { toast } from "react-hot-toast";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function Contacts() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate(); // Hook for navigation

  // Function to handle form submission
  const onSubmit = (data) => {
    console.log("Form Data:", data);

    // Show success message in toast
    toast.success("Contact details sent to Sufiyan's mail successfully!");

    // Redirect to home page after a short delay
    setTimeout(() => {
      navigate("/about");
    }, 2000); // Redirect after 2 seconds
  };

  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative h-screen mt-32 md:mt-16 mb-6 md:mb-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md p-4">
            <h2 className="text-2xl font-semibold mb-6">Contact us</h2>

            {/* Name Field */}
            <div className="mb-6">
              <label htmlFor="name">Name</label>
              <br />
              <input
                type="text"
                placeholder="Enter your full name"
                {...register("name", { required: "Name is required" })}
                id="name"
                className="w-full h-10 py-3 outline-none border rounded-md pl-2"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>

            {/* Email Field */}
            <div className="mb-6">
              <label htmlFor="email">Email</label>
              <br />
              <input
                type="email"
                placeholder="Enter your Email"
                {...register("email", { required: "Email is required" })}
                id="email"
                className="w-full h-10 py-3 outline-none border rounded-md pl-2"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label htmlFor="msg">Message</label>
              <textarea
                placeholder="Type your message"
                {...register("msg", { required: "Message is required" })}
                id="msg"
                rows={3}
                className="w-full py-3 outline-none border rounded-md pl-2"
              />
              {errors.msg && (
                <p className="text-red-500">{errors.msg.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-600 text-white rounded-md p-2 hover:bg-blue-700 cursor-pointer">
              Submit
            </button>
          </div>
        </div>
      </form>
      <Footer />
    </>
  );
}

export default Contacts;
