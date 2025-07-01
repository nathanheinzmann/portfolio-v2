"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { useTranslation } from 'next-i18next';
import { useIsClient } from '../../utils/useIsClient';

const AboutSection = () => {
  const isClient = useIsClient();
  const { t } = useTranslation('common');

  const TAB_DATA = [
    {
      title: t('specialties'),
      id: "skills",
      content: (
        <ul className="list-disc pl-5">
          <li>{t('institutional_sites')}</li>
          <li>{t('blogs')}</li>
          <li>{t('marketplaces')}</li>
          <li>{t('admin_panels')}</li>
          <li>{t('course_platforms')}</li>
        </ul>
      ),
    },
  ];

  if (!isClient) return null;

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
          <h2 className="text-4xl font-bold text-white mb-4">{t('my_work')}</h2>
          <p className="text-base lg:text-lg">
            {t('about_desc')}
            <br /><br />
            {t('about_desc2')}
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              active={true}
            >
              {" "}
              {t('specialties')}{" "}
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
