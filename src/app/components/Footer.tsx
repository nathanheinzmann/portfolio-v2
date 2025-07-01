"use client";

import React from "react";
import Logo from "./Logo";
import { useTranslation } from 'next-i18next';
import { useIsClient } from '../../utils/useIsClient';

const Footer = () => {
  const isClient = useIsClient();
  const { t } = useTranslation('common');
  const currentYear = new Date().getFullYear();

  if (!isClient) return null;

  return (
    <footer className="wrapper border border-b-0 z-10 border-t-[#33353F] border-x-0 text-white relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute bottom-0 -left-4 transform -translate-x-1/2 -translate-1/2 opacity-30"></div>
      <div className="adapter py-4 flex justify-between">
        <Logo />
        <p className="text-slate-400">{t('footer_rights')} {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
