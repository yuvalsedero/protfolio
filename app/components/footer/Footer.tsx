import Link from "next/link";
import React from "react";
import Container from "../Container";
import FooterList from "./FooterList";

import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-neutral text-slate-900 text-sm ">
      <Container>
        <div className="flex flex-col md:flex-row justify-between px-8 pt-8 ">
          <FooterList>
            <h3 className="text-base font-bold mb-2">App Categories </h3>
            <Link href="#ProductCard">Web Application</Link>
            <Link href="#Games">Games</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Contact Me</h3>
            <Link
              href="https://mail.google.com/mail/u/0/?fs=1&to=yuvalsede@gmail.com&su=SUBJECT&body=BODY&tf=cm"
              target="_blank"
            >
              E-mail
            </Link>
            <Link href="https://wa.me/+972526310044" target="_blank">
              Whatsapp
            </Link>
          </FooterList>
          <div className="w-full md:w-1/3 mb-6 md:mb-9">
            <h3 className="text-base font-bold mb-2">About Me</h3>
            <p className="mb-2">
              Full-Stack Developer, Building responsive & engaging web
              applications with both front-end & back-end expertise. Passionate
              about creating intuitive experiences & tackling complex
              challenges.
            </p>
            <p className="">&copy; {new Date().getFullYear()} Yuval Sedero</p>
          </div>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Follow Me</h3>
            <div className="flex gap-2">
              <Link href="#"></Link>
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
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
