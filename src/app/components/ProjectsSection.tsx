"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

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
    tag: ["Todos", "Web"],
  },
  {
    title: "DLoja Virtual",
    description: "E-commerce da HostGator",
    image: "/images/projects/dloja.webp",
    tag: ["Todos", "Web"],
    previewUrl: "https://dlojavirtual.com/",
  },
  {
    title: "Pede Boia",
    description: "Página Institucional do Pede Boia",
    image: "/images/projects/pede-boia.webp",
    tag: ["Todos", "Web"],
    previewUrl: "https://pedeboia.com.br/",
  },
  {
    title: "HostGator",
    description: "Site da HostGator BR, MX, CL e CO",
    image: "/images/projects/hostgator.webp",
    tag: ["Todos", "Web"],
    previewUrl: "https://www.hostgator.com.br/",
  },
  {
    title: "Mangue Admin",
    description: "Painel Administrativo da Mangue",
    image: "/images/projects/mangue-admin.webp",
    tag: ["Todos", "Web"],
  },
  {
    title: "Pede Boia App",
    description: "Aplicativo da Pede Boia",
    image: "/images/projects/pede-boia-app.webp",
    tag: ["Todos", "Mobile"],
    previewUrl: "https://play.google.com/store/apps/details?id=com.pedeboia.br",
  },
  {
    title: "CodeStart Admin",
    description: "Painel Administrativo da CodeStart",
    image: "/images/projects/codestart-admin.webp",
    tag: ["Todos", "Web"],
  },
  {
    title: "Guias da HostGator",
    description: "Guias de ajuda da HostGator",
    image: "/images/projects/guias-hostgator.webp",
    tag: ["Todos", "Web"],
    previewUrl: "https://www.hostgator.com.br/guias/",
  },
  {
    title: "Pede Boia Admin",
    description: "Painel Administrativo da Pede Boia",
    image: "/images/projects/pede-boia-admin.webp",
    tag: ["Todos", "Web"],
  },
  {
    title: "Carrinho da HostGator",
    description: "Carrinho de compras da HostGator",
    image: "/images/projects/hostgator-cart.webp",
    tag: ["Todos", "Web"],
    previewUrl: "https://cart.hostgator.com.br/?pid=437&billingCycle=triennially",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Todos");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="wrapper">
      <div className="adapter">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
          Meus projetos
        </h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
          <ProjectTag
            onClick={handleTagChange}
            name="Todos"
            isSelected={tag === "Todos"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Web"
            isSelected={tag === "Web"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Mobile"
            isSelected={tag === "Mobile"}
          />
        </div>
        <div ref={ref} className="flex flex-wrap justify-evenly">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                previewUrl={project.previewUrl}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
