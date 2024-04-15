"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Especialidades",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Sites institucionais</li>
        <li>Blogs</li>
        <li>MarketPlaces</li>
        <li>Paineis administrativos</li>
        <li>Plataformas de cursos</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  return (
    <section className="wrapper text-white" id="about">
      <div className="adapter flex gap-8 items-center xl:gap-16">
        <div className="hidden md:flex flex-1 justify-center">
        <Image
          src="/images/about-image.svg"
          alt="About Image"
          sizes="100vw"
          style={{
            flex: 1,
            height: 'auto',
          }}
          width={500}
          height={500}
          />
          </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col flex-1">
          <h2 className="text-4xl font-bold text-white mb-4">Meu trabalho</h2>
          <p className="text-base lg:text-lg">
            Atualmente, atendo pequenas e médias empresas, ajudando-as a
            {' '}<b>construir uma presença online</b> forte e eficaz.
            <br /><br />
            Além disso, ofereço soluções personalizadas para <b>atender às
            necessidades exclusivas</b> de cada cliente.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              active={true}
            >
              {" "}
              Especialidades{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === 'skills').content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
