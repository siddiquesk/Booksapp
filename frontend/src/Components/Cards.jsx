import React from "react";

function Cards({ item }) {
  return (
    <div className="mx-3 my-2">
      <div className="card bg-base-100 w-full md:w-92  shadow-xl overflow-hidden hover:scale-105 duration-200 cursor-pointer">
        <div className="w-full h-52 relative">
          <img
            src={item.image}
            alt="books"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions flex justify-around py-2">
            <div className="badge badge-outline px-4 py-3 cursor-pointer">
              ${item.price}
            </div>
            <div className="badge badge-outline cursor-pointer px-4 py-3 hover:bg-pink-500 hover:text-white duration-300 ease-out">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
