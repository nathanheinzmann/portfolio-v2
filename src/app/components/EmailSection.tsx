"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <section
      id="contact"
      className="wrapper gap-4 relative"
    >
      <div className="adapter flex flex-col gap-8 sm:flex-row justify-between">
        <div className="z-10 w-full">
          <h3 className="text-xl font-bold text-white my-2">
            Entre em contato
          </h3>
          <p className="text-[#ADB7BE] mb-4 max-w-md">
            Se você gostou do meu trabalho e quer me conhecer melhor, entre em
            contato comigo. Vamos conversar!
          </p>

        </div>
        <div className="w-full flex justify-end flex-col items-end">
          <div className="flex align-center gap-2">
            <label
              htmlFor="name"
              className="text-white my-auto text-sm font-medium"
            >
              E-mail: <span className="font-bold">nathanhph@gmail.com</span>
            </label>
            <button
              className="text-primary-500 px-4 py-2 rounded-md transition-all duration-300"
              onClick={() => {
                navigator.clipboard.writeText("nathanhph@gmail.com")
                setIsCopied(true)
                setTimeout(() => {
                  setIsCopied(false)
                }, 2000)
              }}
            >
              {isCopied ? "Copiado!" : "Copiar"}
            </button>
          </div>
          <span className="block w-[220px] h-0.5 bg-primary-500 opacity-25 mt-2 mb-4"></span>
          <label
            htmlFor="message"
            className="text-white block mb-2 text-sm"
          >
            Outras formas de contato
          </label>
          <div className="socials flex flex-row gap-2">
            <Link href="https://github.com/nathanheinzmann/" target="_blank" rel="noreferrer noopener" className="cursor-pointer hover:opacity-75 transition-opacity">
              <Image src={GithubIcon} alt="Github Icon" />
            </Link>
            <Link href="https://www.linkedin.com/in/nathanheinzmann/" target="_blank" rel="noreferrer noopener" className="cursor-pointer hover:opacity-75 transition-opacity">
              <Image src={LinkedinIcon} alt="Linkedin Icon" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
