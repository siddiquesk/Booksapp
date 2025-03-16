import React from "react";
import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";

function FreeBook() {
  const [books, setBook] = useState([]);
  useEffect(() => {
    const freeData = async () => {
      try {
        let response = await axios.get("https://mybookstore-xcse.onrender.com/");
        console.log("Backend response:", response.data); // check raw data
        let freeBooks = response.data.filter(
          (data) => data.category === "Free"
        );
        console.log("Filtered freeBooks:", freeBooks);
        setBook(freeBooks);
      } catch (err) {
        console.log(err);
      }
    };
    freeData();
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20  mt-4">
        <div className="text-center md:text-left">
          <h1 className="font-semibold text-xl ">Free Offerd Course</h1>
          <p className="mb-2">
            Excepturi eos in deleniti dolore voluptate ut atque impedit
            temporibus rerum minus ab aperiam quis, eaque unde sapiente
            recusandae deserunt fuga dicta.
          </p>
        </div>
        <div>
          <Slider {...settings}>
            {books.map((val) => (
              <Cards item={val} key={val.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default FreeBook;
