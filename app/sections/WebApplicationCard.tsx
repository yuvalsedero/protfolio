"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface ProjectCardProps {
  data: any;
  className?: string;
}
const WebApplicationCard: React.FC<ProjectCardProps> = ({
  data,
  className,
}) => {
  const router = useRouter();
  return (
    <Link href={data.URL} target="_blank">
      <div className="mockup-browser bg-primary  border-slate-600 border">
        <div className="mockup-browser-toolbar  ">
          <div className="input border-base-300 border my-1 text-md">
            {data.URL}
          </div>
        </div>
        <div className="border-base-300 flex justify-center border-t  ">
          <img src={data.image} alt={data.name} className="" />
        </div>
      </div>
      <div className="text-center mt-5">
        <h1 className="mb-2 font-bold text-lg">{data.name}</h1>
        <p className="">Description: {data.description}</p>
      </div>
    </Link>
  );
};

export default WebApplicationCard;
