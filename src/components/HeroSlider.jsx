import React from "react";
import Marquee from "react-fast-marquee";
import "animate.css";

const HeroSlider = () => {
  return (
    <div>
      <div className=" py-4 px-4 rounded-md">
        <Marquee speed={50}>
          <p className="text-red-500 font-bold text-2xl">
            Welcome to WarmPaws – Your cozy companion platform for winter pet
            care!
          </p>
          <p className="text-red-500 font-bold text-2xl">
            Keep your pets warm, safe & healthy this winter with WarmPaws!
          </p>
        </Marquee>
      </div>
      <div data-aos="fade-down" className="carousel static w-full bg-gradient-to-b from-white to-blue-600 py-20 rounded-md">
        <div id="slide1" className="carousel-item relative w-full h-[300px]">
          <div className="flex justify-between  items-center">
            <div className="w-2/3 space-y-3">
              <p className="font-bold text-blue-700 md:text-5xl ml-20">
                Keep Your Pets Warm This Winter!
              </p>
              <p className="  ml-20 text-gray-100">
                Cozy outfits and blankets for your furry friends.
              </p>
            </div>
            <div className="rounded-md w-[200px] md:w-[400px]">
              <img
                src="https://i.ibb.co.com/MyV3QwKc/cozy3.jpg"
                className="w-full rounded-full"
              />
            </div>
          </div>

          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full h-[300px]">
          <div className="flex justify-between  items-center">
            <div className="w-2/3 space-y-3">
              <p className="font-bold text-blue-700 md:text-5xl ml-20 ">
                Winter Grooming & Paw Treatments
              </p>
              <p className=" text-gray-100 ml-20">
                Moisturizing paw balm and winter-safe grooming.
              </p>
            </div>
            <div className="rounded-md w-[200px] md:w-[400px]">
              <img
                src="https://i.ibb.co.com/ZzCsqSWW/cozy.jpg"
                className="w-full rounded-full"
              />
            </div>
          </div>

          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full h-[300px]">
          <div className="flex justify-between  items-center">
            <div className="w-2/3 space-y-3">
              <p className="font-bold text-blue-700 md:text-4xl ml-20 ">
                Protect your pets' paws and fur during chilly weather.
              </p>
              <p className="text-gray-100 ml-20">
                Ensure your pets stay fit and energetic this season
              </p>
            </div>
            <div className="rounded-md w-[200px] md:w-[400px]">
              <img
                src="https://i.ibb.co.com/sdp9S6Nk/cozy1.jpg"
                className="w-full rounded-full"
              />
            </div>
          </div>

          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full h-[300px]">
          <div className="flex justify-between  items-center">
            <div className="w-2/3 space-y-3">
              <p className="font-bold text-blue-700 md:text-6xl ml-20 ">
                Expert Vets & Winter Tips
              </p>
              <p className="text-gray-100 ml-20">
                Professional advice for pet care in cold weather.
              </p>
            </div>
            <div className="rounded-md w-[200px] md:w-[400px]]">
              <img
                src="https://i.ibb.co.com/3yy5sD5Z/cozy2.jpg"
                className="w-full rounded-full"
              />
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
