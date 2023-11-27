"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import { SliderOne, SliderTwo, SliderThree } from "@/assets";
import Image from "next/image";

const Banner = () => {
  const [dotActive, setDotActive] = useState(0);
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (prev: any, next: any) => {
      setDotActive(next);
    },
    appendDots: (dots: any) => (
      <div
        style={{
          position: "absolute",
          top: "85%",
          left: "67%",
          transform: "translate(-50%, 0)",
        }}
      >
        <ul
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i: any) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                height: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                background: "black",
                cursor: "pointer",
                transition: "0.3s",
              }
            : {
                width: "30px",
                height: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                background: "white",
                cursor: "pointer",
                transition: "0.3s",
              }
        }
      ></div>
    ),
  };
  return (
    <div className="h-screen py-18 lg:py-0 lg:bg-zinc-100  relative overflow-hidden ">
      <Slider {...settings}>
        <div className="w-full py-32 lg:py-0 h-screen bg-grad shape-box max-md:px-4 max-md:py-44 relative">
          <div className=" w-1/3 hidden lg:inline-block   z-0 relative">
            <Image
              src={SliderOne}
              alt="sliderone"
              width={400}
              className="absolute top-20 right-0 lg:-right-48 "
              priority
            />
          </div>

          <div className="lg:absolute z-10 lg:top-1/2 lg:left-2/3 transform lg:-translate-x-1/2 lg:-translate-y-1/2 flex flex-col items-center ">
            <p className="text-[60px] text-blue-900 font-bold mb-1">
              Great Deals
            </p>
            <p className="text-center   mb-5 ">
              Enojy top brans and best quality with up to 35% deals .
            </p>
            <p className="text-2xl font-semibold">Phones in Demand</p>
          </div>
        </div>
        <div className="w-full py-32 lg:py-0 h-screen bg-grad shape-box max-md:px-4 max-md:py-44 relative">
          <div className=" lg:w-1/3 hidden lg:inline-block   z-0 relative">
            <Image
              src={SliderTwo}
              alt="sliderone"
              width={400}
              className="absolute top-20 right-0 lg:-right-48 "
              priority
            />
          </div>

          <div className="lg:absolute lg:top-1/2 lg:left-2/3 transform lg:-translate-x-1/2 lg:-translate-y-1/2 flex flex-col items-center  z-10">
            <p className="font-semibold text-[20px]  uppercase">new arrivals</p>
            <p className="text-[60px] text-blue-900 font-bold mb-3">Watch</p>
            <button className="text-base font-medium text-designColor bg-transparent border-[1px] border-designColor rounded-md px-4 py-2 hover:bg-designColor hover:text-white duration-300">
              Shop Now
            </button>
          </div>
        </div>
        <div className="w-full py-32 lg:py-0 h-screen bg-grad shape-box max-md:px-4 max-md:py-44 relative">
          <div className=" lg:w-1/3 hidden lg:inline-block   z-0 relative">
            <Image
              src={SliderThree}
              alt="sliderone"
              width={400}
              className="absolute top-20 right-0 lg:-right-48 "
              priority
            />
          </div>
          <div className="lg:absolute z-10 lg:top-1/2 lg:left-2/3 transform lg:-translate-x-1/2 lg:-translate-y-1/2 flex flex-col items-center ">
            <p className="text-[60px] text-blue-900 font-bold mb-1">Big Sale</p>
            <p className=" font-semibold text-[40px] mb-5 ">70% Off</p>
            <p className="text-center   mb-5 ">
              Make your best moments more stylish with our latest designs of
              clothing .
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
