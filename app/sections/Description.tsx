"use client";
import React from "react";
import { FaLinkedin } from "react-icons/fa6";

import BackGroundReversed from "../utils/BackGroundReversed";

const Description = () => {
  const handleLinkedinClick = () => {
    // Add your desired behavior when the icon is clicked
    // Here, you could open a new tab with your LinkedIn profile URL:
    window.open("https://www.linkedin.com/in/yuval-sedero-0675841b4", "_blank");
  };

  return (
    <BackGroundReversed>
      <figure className="mt-10">
        <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
          <p>
            Full-Stack Developer, Building responsive & engaging web
            applications with both front-end & back-end expertise. Passionate
            about creating intuitive experiences & tackling complex challenges.
          </p>
        </blockquote>
        <figcaption className="mt-10">
          <img
            className="mx-auto h-10 w-10 rounded-full"
            src="/circleimg.jpg"
            alt=""
          />
          <div className="mt-4 flex items-center justify-center space-x-3 text-base">
            <div className="font-semibold text-gray-900">Yuval Sedero</div>
            <svg
              viewBox="0 0 2 2"
              width={3}
              height={3}
              aria-hidden="true"
              className="fill-gray-900"
            >
              <circle cx={1} cy={1} r={1} />
            </svg>
            <div className="text-gray-600 flex items-center">
              Check out my LinkedIn{" "}
              <FaLinkedin
                className="ml-2 text-xl cursor-pointer" // Add cursor-pointer for visual feedback
                onClick={handleLinkedinClick} // Call the handleLinkedinClick function
              />
            </div>
          </div>
        </figcaption>
      </figure>
    </BackGroundReversed>
  );
};

export default Description;
