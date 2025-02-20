import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function Contacts() {
  return (
    <>
      <Navbar />
      <div className="relative h-screen  mt-32  md:mt-0 mb-6 md:mb-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md p-4">
          <h2 className="text-2xl font-semibold mb-6">Contact us</h2>
          <div className="mb-6">
            <label htmlFor="name">Name</label>
            <br />
            <input
              type="text"
              placeholder="Enter your full name"
              name="name"
              id="name"
              className="w-full h-10 py-3 outline-none border rounded-md pl-2"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              placeholder="Enter your Email"
              name="email"
              id="email"
              className="w-full h-10 py-3 outline-none border rounded-md pl-2"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="msg">Message</label>
            <textarea
              name="msg"
              id="msg"
              placeholder="Type your message"
              rows={3}
              cols={20}
              className="w-full py-3 outline-none border rounded-md pl-2"></textarea>
          </div>
          <button className="bg-blue-600 text-white rounded-md p-2 hover:bg-blue-700 cursor-pointer">
            Submit
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contacts;
