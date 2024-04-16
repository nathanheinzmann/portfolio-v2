"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import LazyLoad from "react-lazy-load";

const projectsData = [
  {
    title: "CodeStart",
    description: "Plataforma de cursos de programação",
    image: "/images/projects/codestart.webp",
    tag: ["Todos", "Web"],
    previewUrl: "https://codestart.dev.br/",
  },
  {
    title: "Blog da HostGator",
    description: "Blog BR, MX, CL e CO da HostGator",
    image: "/images/projects/blog-hostgator.webp",
    tag: ["Todos", "Web"],
    previewUrl: "https://www.hostgator.com.br/blog/",
  },
  {
    title: "Mangue App",
    description: "Plataforma p/ cálculo de pegada de carbono",
    image: "/images/projects/mangue-app.webp",
    tag: ["Web"],
  },
  {
    title: "DLoja Virtual",
    description: "E-commerce da HostGator",
    image: "/images/projects/dloja.webp",
    tag: ["Web"],
    previewUrl: "https://dlojavirtual.com/",
  },
  {
    title: "Pede Boia",
    description: "Página Institucional do Pede Boia",
    image: "/images/projects/pede-boia.webp",
    tag: ["Web"],
    previewUrl: "https://pedeboia.com.br/",
  },
  {
    title: "HostGator",
    description: "Site da HostGator BR, MX, CL e CO",
    image: "/images/projects/hostgator.webp",
    tag: ["Web"],
    previewUrl: "https://www.hostgator.com.br/",
  },
  {
    title: "Mangue Admin",
    description: "Painel Administrativo da Mangue",
    image: "/images/projects/mangue-admin.webp",
    tag: ["Web"],
  },
  {
    title: "Pede Boia App",
    description: "Aplicativo da Pede Boia",
    image: "/images/projects/pede-boia-app.webp",
    tag: ["Mobile"],
    previewUrl: "https://play.google.com/store/apps/details?id=com.pedeboia.br",
  },
  {
    title: "CodeStart Admin",
    description: "Painel Administrativo da CodeStart",
    image: "/images/projects/codestart-admin.webp",
    tag: ["Web"],
  },
  {
    title: "Guias da HostGator",
    description: "Guias de ajuda da HostGator",
    image: "/images/projects/guias-hostgator.webp",
    tag: ["Web"],
    previewUrl: "https://www.hostgator.com.br/guias/",
  },
  {
    title: "Pede Boia Admin",
    description: "Painel Administrativo da Pede Boia",
    image: "/images/projects/pede-boia-admin.webp",
    tag: ["Web"],
  },
  {
    title: "Carrinho da HostGator",
    description: "Carrinho de compras da HostGator",
    image: "/images/projects/hostgator-cart.webp",
    tag: ["Web"],
    previewUrl: "https://cart.hostgator.com.br/?pid=437&billingCycle=triennially",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);

  return (
    <section id="projects" className="wrapper">
      <div className="adapter">
        <h2 className="text-center text-4xl font-bold text-white mb-4">
          Meus projetos
        </h2>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl text-center">
          Abaixo estão alguns dos projetos que desenvolvi ao longo da minha carreira.
          <br />
          Clique sobre a imagem para visualizar o projeto.
        </p>
        <LazyLoad offset={400}>
          <div ref={ref} className="flex flex-wrap justify-evenly">
            {projectsData.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                previewUrl={project.previewUrl}
              />
            ))}
          </div>
        </LazyLoad>
      </div>
    </section>
  );
};

export default ProjectsSection;
