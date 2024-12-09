import React, { useState } from "react";
import thumnail from "../assets/video-thumbnail.webp";
import { FaPlay } from "react-icons/fa";
import { BiSolidRightArrowCircle } from "react-icons/bi";

const About = () => {
  const [isVedioPlaying, setIsVideoPlaying] = useState(false);
  const handleVidoplay = () => {
    setIsVideoPlaying(true);
  };
  const handleCloseVideo = () => {
    setIsVideoPlaying(false);
  };
  return (
    <>
      <div id="about" className="bg-[#f7f8fc] pb-16 pt-20 ">
        <div className="container mx-auto">
          <div className="py-12 px-4 md:w-4/5 mx-auto flex flex-col md:flex-row item-center gap-8">
            {/* left side */}
            <div className="md:w-1/2 w-full mb-8 md:mb-0 ">
              {!isVedioPlaying ? (
                <div className="relative">
                  <img
                    src={thumnail}
                    alt="ThumbnailVideo"
                    className="w-full md:h-[446px] h-auto rounded-lg object-cover"
                  />
                  <button
                    onClick={handleVidoplay}
                    className="absolute top-1/2 left-1/2 transform -transalte-x-1/2 -translate-y-1/2 
                bg-primary p-3 rounded-full shadow-lg cursor-pointer "
                  >
                    <FaPlay className="size-12 text-white" />
                  </button>
                </div>
              ) : null}
            </div>
            {/* right side */}
            <div className="md:w-1/2 w-full">
              <h5 className="text-xl font-secondary capitalize font-bold mb-4  leading-snug">
                individual consult and therapy
              </h5>
              <p className="text-lg mb-12 md:pr-8">
                We lower our stress levels,we get to know our pain,we connect
                better,we improve our focus, and we're kinder to ourselves.Let
                us walk you through the basics in our new mindful guid on how to
                meditate.
              </p>

              <button
                className="bg-primary text-white py-2.5 px-5 font-medium rounded-md
        hover:bg-primary/90 "
              >
                <a href="#contact" className="flex gap-2 items-center">
                  <span>Get Started</span>
                  <BiSolidRightArrowCircle />
                </a>
              </button>
            </div>
          </div>
          {isVedioPlaying && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
              <div className="relative w-full flex items-center justify-center z-50">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/VCPGMjCW0is?si=-zK-eXd1i0LloX5l"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
                <button
                  onClick={handleCloseVideo}
                  className="absolute top-4 right-4 text-white text-2xl cursor-pointer"
                >
                  X
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default About;
