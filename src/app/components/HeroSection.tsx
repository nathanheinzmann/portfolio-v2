"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import scrollTo from '../../utils/scrollTo';

const HeroSection = () => {
  return (
    <section className="wrapper my-24 md:my-32 lg:my-40" id="hero">
      <div className="adapter text-center flex gap-4 items-center justify-center pt-[54px] md:pt-[64px] lg:pt-[80px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          <h1 className="text-white mb-4 text-4xl sm:text-3xl lg:text-6xl lg:leading-normal font-extrabold">
            Precisa de um site ou aplicativo?
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Sou um profissional Front-end com vasta experiência.
            <br />
            Resolvo o seu problema, utilizando das melhores tecnologias do mercado.
          </p>
          <div className="flex justify-center gap-4 sm:gap-8">
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-md bg-primary-500 text-white hover:bg-primary-600 transition-all duration-300"
            >
              Contato
            </Link>
            <button
              onClick={() => scrollTo("about")}
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-md bg-gradient-to-br text-white border border-[#33353F] hover:bg-[#33353F] transition-all duration-300"
            >
              Conheça mais
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
