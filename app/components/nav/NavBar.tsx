import React from "react";
import Container from "../Container";
import Link from "next/link";
import { Redressed } from "next/font/google";

const redressed = Redressed({
  subsets: ["latin"],
  weight: ["400"],
});

const NavBar = async () => {
  return (
    <div className="top-0 w-full bg-gray-900 z-30 shadow-sm">
      <div className="py-4">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0">
            <div className="hidden md:block"></div>
            <Link
              href="/"
              className={`${redressed.className} font-bold text-2xl justify-center`}
            >
              Yuval Sedero
            </Link>
            <div className="flex items-center gap-8 md:gap-12"></div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavBar;
