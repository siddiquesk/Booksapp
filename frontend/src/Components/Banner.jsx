import React from "react";
import six from "../../public/six.jpg";

function Banner() {
  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 flex flex-col md:flex-row items-center text-center md:text-left">
      {/* Right Image Div (Mobile pe pehle dikhana) */}
      <div className="w-full md:w-1/2 order-1 md:order-2 md:mt-2 px-4 ">
        <img
          src={six}
          className="w-full h-auto rounded-lg shadow-lg md:shadow-none mt-12 md:mt-3"
          alt="image"
        />
      </div>

      {/* Left Content Div */}
      <div className="w-full md:w-1/2 order-2 md:order-1 flex flex-col items-center md:items-start space-y-6 md:space-y-8 px-6 md:px-0 mt-6 md:mt-0">
        <h1 className="text-3xl md:text-4xl font-bold mt-8 md:mt-28 leading-snug">
          Hello, welcome here to learn something{" "}
          <span className="text-pink-500">new everyday !!!</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          suscipit autem, voluptatem maxime iste, inventore vero odio fuga rerum
          nihil corporis cupiditate!
        </p>
        <label className="input input-bordered flex items-center gap-2 w-full md:w-auto p-2 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-5 w-5 opacity-70">
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="email"
            className="grow p-2 text-gray-700"
            placeholder="Enter your email"
          />
        </label>
        <button className="btn btn-secondary mt-4 md:mt-5 px-6 py-3 text-lg rounded-md">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default Banner;
