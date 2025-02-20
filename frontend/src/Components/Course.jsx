import React from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import list from "../../public/list.json";
function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 sm:px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h2 className="text-2xl  md:text-4xl">
            We are deloghted to have you <span>Here !</span>
          </h2>
          <p className="mt-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
            labore dolorem expedita exercitationem, consequatur reprehenderit
            dignissimos autem placeat at obcaecati error officia veniam modi
            ratione? Eaque repellat vitae hic culpa, deserunt doloremque
            voluptates commodi perferendis. Sequi culpa vitae consectetur enim
            sapiente veritatis at amet sunt labore, nemo dolores ea iusto?
          </p>

          <Link to="/">
            <button className="bg-pink-500  text-white mt-3 rounded-md px-3 py-2 hover:bg-pink-600 transition-all ease-in-out duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className=" my-2 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
