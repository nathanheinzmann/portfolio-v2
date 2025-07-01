"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import scrollTo from '../../utils/scrollTo';
import ReactGA from "react-ga4";
import { useTranslation } from 'next-i18next';
import { useIsClient } from '../../utils/useIsClient';

const HeroSection = () => {
  const isClient = useIsClient();
  const { t } = useTranslation('common');

  useEffect(() => {
    ReactGA.initialize('G-44WBQ1B839');
    ReactGA.send({
      hitType: 'pageview',
      title: document.title,
      page: window.location.pathname + window.location.search
    });
  }, []);

  if (!isClient) return null;

  return (
    <section className="wrapper mt-24" id="hero">
      <div className="adapter flex-col text-center flex gap-4 items-center justify-center pt-[54px] md:pt-[64px] lg:pt-[80px]">
        <h1 className="text-white mb-4 text-4xl sm:text-3xl lg:text-6xl lg:leading-normal font-extrabold">
          {t('need_website')}
        </h1>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          {t('hero_desc')}
        </p>
        <div className="flex justify-center gap-4 sm:gap-8">
          <Link
            href="/#contact"
            className="px-6 inline-block py-3 w-full sm:w-fit rounded-md bg-primary-800 text-white hover:bg-primary-900 transition-all duration-300"
          >
            {t('contact_me')}
          </Link>
          <button
            onClick={() => scrollTo("about")}
            className="px-6 whitespace-nowrap inline-block py-3 w-full sm:w-fit rounded-md bg-gradient-to-br text-white border border-[#33353F] hover:bg-[#33353F] transition-all duration-300"
          >
            {t('learn_more')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
