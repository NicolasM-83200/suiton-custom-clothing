// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import clothes from "../data/clothes.json";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

const Carousel = () => {
  const [clickedSlide, setClickedSlide] = useState(false);
  const [selectedClothe, setSelectedClothe] = useState(null);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [colorIndex, setColorIndex] = useState(0);

  const handleClickedSlide = () => {
    setClickedSlide(!clickedSlide);
  };

  useEffect(() => {
    const slidesPerView = () => {
      if (window.innerWidth <= 768) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(3);
      }
    };
    slidesPerView();

    window.addEventListener("resize", slidesPerView);

    return () => {
      window.removeEventListener("resize", slidesPerView);
    };
  }, []);

  return (
    <>
      {/* background-blur */}
      <div
        className={`${
          clickedSlide
            ? "backdrop-blur-md brightness-150"
            : "backdrop-blur-none"
        } absolute inset-0 w-screen h-screen transition-all duration-1000`}
      ></div>
      {/* slider container */}
      <div
        className={`absolute top-[5%] md:-top-[10%] left-1/2 -translate-x-1/2 w-full`}
      >
        <Swiper
          spaceBetween={60}
          centeredSlides={true}
          loop={true}
          speed={1000}
          slidesPerView={slidesPerView}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[Navigation]}
          className="mySwiper"
          style={{ width: "clamp(320px, 100%, 1110px)" }}
        >
          {/* slides */}
          {clothes.map((clothe) => (
            <SwiperSlide
              key={clothe.id}
              onClick={() => setSelectedClothe(clothe)}
            >
              {({ isActive }) => (
                // slide-container
                <div
                  className={`w-[56%] md:w-auto mx-auto transition-all duration-1000 ${
                    isActive
                      ? "blur-none scale-100 -translate-y-10"
                      : "blur-sm scale-75 translate-y-16"
                  }`}
                >
                  {/* image container */}
                  <div className="relative h-screen">
                    {clothe.images.map((image, index) => (
                      <img
                        key={index}
                        className={`${
                          isActive ? "cursor-pointer" : "cursor-default"
                        } absolute ${
                          colorIndex === index ? "opacity-100" : "opacity-0"
                        } transition-all duration-500 object-cover`}
                        src={image}
                        alt={`clothe-${index}`}
                        onClick={isActive ? handleClickedSlide : null}
                      />
                    ))}
                    {/* buttons */}
                    <>
                      <button
                        className={`absolute bg-btn brightness-100 hover:brightness-150 hover:scale-105 font-sans border border-gold px-2 py-1 top-[30%] md:top-[40%] -left-20 transition-all ${
                          isActive && !clickedSlide
                            ? "visible animate-fadeIn"
                            : "invisible animate-fadeOut"
                        }`}
                      >
                        Details
                      </button>
                      <button
                        className={`absolute bg-btn brightness-100 hover:brightness-150 hover:scale-105 font-sans border border-gold px-2 py-1 top-[40%] md:top-1/2 -right-20 transition-all ${
                          isActive && !clickedSlide
                            ? "visible animate-fadeIn"
                            : "invisible animate-fadeOut"
                        }`}
                      >
                        Order
                      </button>
                    </>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
          {/* Navigation buttons */}
          <div className="absolute top-0 h-full w-full">
            <button
              className={`swiper-button-prev absolute top-[60%] md:top-3/4 left-12 md:left-80 bg-btn brightness-100 hover:brightness-150 hover:scale-105 text-slate-100 text-4xl border border-gold 
              size-[25px] leading-4 transition-all after:content-none ${
                clickedSlide ? "invisible" : "visible"
              }`}
            >
              &#8249;
            </button>
            <button
              className={`swiper-button-next absolute  top-[60%] md:top-3/4 right-12 md:right-80  bg-btn brightness-100 hover:brightness-150 hover:scale-105 text-slate-100 text-4xl border border-gold 
              size-[25px] leading-4 transition-all after:content-none ${
                clickedSlide ? "invisible" : "visible"
              }`}
            >
              &#8250;
            </button>
          </div>
          {/* Size & Colors */}
          {clickedSlide && (
            <div
              className={`absolute z-10 left-4 md:left-52 top-[20%] md:top-1/2 flex md:flex-col ${
                clickedSlide ? "animate-fadeIn" : "animate-fadeOut"
              } `}
            >
              <div className="flex flex-col md:grid grid-cols-3 grid-rows-2">
                <p className="hidden md:block col-span-3 text-xl font-sans mb-4">
                  Size
                </p>
                <button className="bg-btn size-6 md:size-8 font-sans mb-4 mr-4 md:mr-6 border border-gold hover:brightness-150 hover:scale-110 transition-all duration-300">
                  S
                </button>
                <button className="bg-btn size-6 md:size-8 font-sans mb-4 mr-4 md:mr-6 border border-gold hover:brightness-150 hover:scale-110 transition-all duration-300">
                  M
                </button>
                <button className="bg-btn size-6 md:size-8 font-sans mb-4 mr-4 md:mr-6 border border-gold hover:brightness-150 hover:scale-110 transition-all duration-300">
                  L
                </button>
              </div>
              <div className="flex flex-col md:grid grid-cols-3 grid-rows-2">
                <p className="hidden md:block col-span-3 text-xl font-sans mb-4">
                  Colors
                </p>
                <button
                  className="grid bg-btn size-6 md:size-8 mb-4 mr-4 md:mr-6 border border-gold hover:brightness-150 hover:scale-110 transition-all duration-300"
                  onClick={() => setColorIndex(0)}
                >
                  <div className="bg-blackSuit rounded-full size-3 md:size-4 place-self-center"></div>
                </button>
                <button
                  className="grid bg-btn size-6 md:size-8 mb-4 mr-4 md:mr-6 border border-gold hover:brightness-150 hover:scale-110 transition-all duration-300"
                  onClick={() => setColorIndex(1)}
                >
                  <div className="bg-blueSuit rounded-full size-3 md:size-4 place-self-center"></div>
                </button>
                <button
                  className="grid bg-btn size-6 md:size-8 mb-4 mr-4 md:mr-6 border border-gold hover:brightness-150 hover:scale-110 transition-all duration-300"
                  onClick={() => setColorIndex(2)}
                >
                  <div className="bg-marroonSuit rounded-full size-3 md:size-4 place-self-center"></div>
                </button>
              </div>
            </div>
          )}
          {/* Description */}
          {clickedSlide && selectedClothe && (
            <div
              key={selectedClothe.id}
              className={`absolute z-10 w-[80%] left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0 md:w-80 md:right-8 bottom-[20%] md:bottom-0 md:top-1/2 ${
                clickedSlide ? "animate-fadeIn" : "animate-fadeOut"
              } `}
            >
              <div className="flex flex-col">
                {/* title */}
                <div className="relative h-16">
                  {selectedClothe.titles.map((title, index) => (
                    <h3
                      key={index}
                      className={` text-xl md:text-2xl absolute transition-all duration-500 ${
                        colorIndex === index ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {title}
                    </h3>
                  ))}
                </div>
                {/* review */}
                <div className="flex mb-2 md:mb-6">
                  {/* stars */}
                  <div className="flex border-r">
                    <i className="fa-solid fa-star text-gold mr-1 md:mr-2"></i>
                    <i className="fa-solid fa-star text-gold mr-1 md:mr-2"></i>
                    <i className="fa-solid fa-star text-gold mr-1 md:mr-2"></i>
                    <i className="fa-solid fa-star text-gold mr-1 md:mr-2"></i>
                    <i className="fa-solid fa-star text-gold mr-1 md:mr-2"></i>
                  </div>
                  <span className="text-sm ml-2 md:ml-3">
                    {selectedClothe.review} reviews
                  </span>
                </div>
                <p className="md:text-xl text-lg font-sans mb-2">Description</p>
                <p className="md:text-sm text-xs line-clamp-4 md:line-clamp-none overflow-y-auto font-sans md:mb-6 mb-4">
                  {selectedClothe.description}
                </p>
                <div className="flex md:gap-8 gap-4">
                  <button className="w-1/3 md:w-36 bg-btn brightness-100 hover:brightness-150 font-sans text-xs md:text-base border border-gold px-2 py-1 transition-all duration-300">
                    Add to cart
                  </button>
                  <button className="w-1/3 md:w-36 bg-btn brightness-100 hover:brightness-150 font-sans text-xs md:text-base border border-gold px-2 py-1 transition-all duration-300">
                    Buy now
                  </button>
                </div>
              </div>
            </div>
          )}
        </Swiper>
      </div>
    </>
  );
};

export default Carousel;
