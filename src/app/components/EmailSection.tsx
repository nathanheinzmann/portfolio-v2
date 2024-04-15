"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [form, setForm] = useState({
    name: "",
    message: "",
  });

  return (
    <section
      id="contact"
      className="wrapper gap-4 relative"
    >
      <div className="adapter flex flex-col gap-8 sm:flex-row justify-between">
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute bottom-80 md:bottom-3 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
        <div className="z-10 w-full">
          <h5 className="text-xl font-bold text-white my-2">
            Entre em contato
          </h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md">
            Se você gostou do meu trabalho e quer me conhecer melhor, entre em
            contato comigo. Vamos conversar!
          </p>
          <div className="socials flex flex-row gap-2">
            <Link href="github.com">
              <Image src={GithubIcon} alt="Github Icon" />
            </Link>
            <Link href="linkedin.com">
              <Image src={LinkedinIcon} alt="Linkedin Icon" />
            </Link>
          </div>
        </div>
        <div className="w-full">
          <form className="flex flex-col">
            <div className="mb-6">
              <label
                htmlFor="name"
                className="text-white block mb-2 text-sm font-medium"
              >
                Seu nome
              </label>
              <input
                name="name"
                type="text"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                id="name"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Seu nome"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Mensagem
              </label>
              <textarea
                name="message"
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Gostaria de saber mais sobre..."
              />
            </div>
            <a
              type="submit"
              className="cursor-pointer flex justify-center bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
              onClick={() => {
                const wppUrl = "https://api.whatsapp.com/send?phone=55997197148";
                if (Object.values(form).every((x) => x !== "")) {
                  const message = `Olá, meu nome é *${form.name}*!%0a%0a${form.message}`;
                  window.open(`${wppUrl}&text=${message}`);
                }
              }}
            >
              Enviar email
            </a>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
