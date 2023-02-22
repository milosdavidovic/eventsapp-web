import Image from "next/image";
import React from "react";

const IMAGES = [
  "/pexels-concert-1.jpg",
  "/pexels-concert-2.jpg",
  "/pexels-concert-3.jpg",
  "/pexels-concert-4.jpg",
];

const Featured = () => {
  return (
    <div className="carousel w-full h-80 mt-6">
      {IMAGES.map((image, i) => (
        <div key={i} id={"slide" + i} className="carousel-item relative w-full">
          <Image
            alt="1"
            src={image}
            className="w-full object-cover"
            width={500}
            height={200}
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Featured;
