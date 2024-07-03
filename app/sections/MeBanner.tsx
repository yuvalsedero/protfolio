import React from "react";
import BackGround from "../utils/BackGround";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const MeBanner = () => {
  return (
    <BackGround>
      <div className="hero ">
        <div className="hero-content grid grid-cols-1 lg:grid-cols-3 2xl:gap-96 place-items-center my-8">
          <div className="relative">
            <h1 className="text-9xl  font-bold">Hi,</h1>
            <h1 className="text-7xl  font-bold">
              {"I'm"} <span className="text-cyan-500 font-bold">Yuval</span>
            </h1>
            <h1 className="text-3xl  font-bold my-2">web developer</h1>
            <img
              src="/triangle.png"
              className="size-64 absolute 2xl:inset-x-[750px] inset-x-[500px] -inset-y-[150px] rotate-12"
            />

            <div className="absolute inset-y-2/5  h-96 w-96 2xl:inset-x-[1050px] inset-x-[800px] ">
              <img
                src="/circle.png"
                className=" size-64 absolute object-contain transition-opacity ease-in-out sm:opacity-0 lg:opacity-100 duration-1000"
              />
              <img
                src="/circle.png"
                className=" size-44 absolute object-contain inset-x-5 inset-y-5 transition-opacity ease-in-out sm:opacity-0 lg:opacity-100 duration-1000"
              />
            </div>
            <hr />
            <p className="py-2 text-center text-md  text-gray-500 lg:w-96">
              FullStack Developer // web developer // next.JS
            </p>

            <hr />
            <div className="flex gap-2 justify-end">
              <Link
                href="https://www.linkedin.com/in/yuval-sedero-0675841b4/"
                target="_blank"
              >
                <AiFillLinkedin size="30" />
              </Link>
              <Link href="https://github.com/yuvalsedero" target="_blank">
                <AiFillGithub size="30" />
              </Link>
            </div>
          </div>
          <div></div>
          <div className="relative sm:mt-10">
            <img
              src="./portrait.png"
              className="max-w-sm w-60 shadow-lg shadow-zinc-900 hover:transition duration-300 ease-in-out hover:shadow-xl hover:shadow-black"
            />

            <div className="absolute inset-0 border-2 border-gray-600 border-dashed translate-x-8 translate-y-8 -z-10"></div>
          </div>
        </div>
      </div>
    </BackGround>
  );
};

export default MeBanner;
