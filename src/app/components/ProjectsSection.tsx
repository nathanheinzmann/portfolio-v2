"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import LazyLoad from "react-lazy-load";
import { useTranslation } from 'next-i18next';
import { useIsClient } from '../../utils/useIsClient';

const ProjectsSection = () => {
  const isClient = useIsClient();
  const ref = useRef(null);
  const { t } = useTranslation('common');

  const projectsData = [
    {
      title: t('project_codestart_title'),
      description: t('project_codestart_desc'),
      image: "/images/projects/codestart.webp",
      tag: ["Todos", "Web"],
      previewUrl: "https://codestart.dev.br/",
    },
    {
      title: t('project_blog_hostgator_title'),
      description: t('project_blog_hostgator_desc'),
      image: "/images/projects/blog-hostgator.webp",
      tag: ["Todos", "Web"],
      previewUrl: "https://www.hostgator.com.br/blog/",
    },
    {
      title: t('project_mangue_app_title'),
      description: t('project_mangue_app_desc'),
      image: "/images/projects/mangue-app.webp",
      tag: ["Web"],
    },
    {
      title: t('project_dloja_title'),
      description: t('project_dloja_desc'),
      image: "/images/projects/dloja.webp",
      tag: ["Web"],
      previewUrl: "https://dlojavirtual.com/",
    },
    {
      title: t('project_pede_boia_title'),
      description: t('project_pede_boia_desc'),
      image: "/images/projects/pede-boia.webp",
      tag: ["Web"],
      previewUrl: "https://pedeboia.com.br/",
    },
    {
      title: t('project_hostgator_title'),
      description: t('project_hostgator_desc'),
      image: "/images/projects/hostgator.webp",
      tag: ["Web"],
      previewUrl: "https://www.hostgator.com.br/",
    },
    {
      title: t('project_mangue_admin_title'),
      description: t('project_mangue_admin_desc'),
      image: "/images/projects/mangue-admin.webp",
      tag: ["Web"],
    },
    {
      title: t('project_pede_boia_app_title'),
      description: t('project_pede_boia_app_desc'),
      image: "/images/projects/pede-boia-app.webp",
      tag: ["Mobile"],
      previewUrl: "https://play.google.com/store/apps/details?id=com.pedeboia.br",
    },
    {
      title: t('project_codestart_admin_title'),
      description: t('project_codestart_admin_desc'),
      image: "/images/projects/codestart-admin.webp",
      tag: ["Web"],
    },
    {
      title: t('project_guias_hostgator_title'),
      description: t('project_guias_hostgator_desc'),
      image: "/images/projects/guias-hostgator.webp",
      tag: ["Web"],
      previewUrl: "https://www.hostgator.com.br/guias/",
    },
    {
      title: t('project_pede_boia_admin_title'),
      description: t('project_pede_boia_admin_desc'),
      image: "/images/projects/pede-boia-admin.webp",
      tag: ["Web"],
    },
    {
      title: t('project_hostgator_cart_title'),
      description: t('project_hostgator_cart_desc'),
      image: "/images/projects/hostgator-cart.webp",
      tag: ["Web"],
      previewUrl: "https://cart.hostgator.com.br/?pid=437&billingCycle=triennially",
    },
  ];

  if (!isClient) return null;

  return (
    <section id="projects" className="wrapper">
      <div className="adapter">
        <h2 className="text-center text-4xl font-bold text-white mb-4">
          {t('my_projects')}
        </h2>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl text-center">
          {t('projects_desc')}
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
