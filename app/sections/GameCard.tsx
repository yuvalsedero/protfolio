"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface GameApplicationCardProps {
  data: any;
}
const GameApplicationCard: React.FC<GameApplicationCardProps> = ({ data }) => {
  const router = useRouter();
  return (
    <Link href={data.URL} target="_blank">
      <div className="mockup-window border-slate-600 border bg-primary">
        <div className="border-base-300 flex justify-center border-t  ">
          <img src={data.image} alt={data.name} className="" />
        </div>
        <div className="border-base-300 flex justify-center border-t px-4 "></div>
      </div>
      <div className="text-center mt-5">
        <h1 className="mb-2 font-bold text-lg">{data.name}</h1>
        <p className="">Description: {data.description}</p>
      </div>
    </Link>
  );
};

export default GameApplicationCard;
