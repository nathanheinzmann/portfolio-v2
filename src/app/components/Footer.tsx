import React from "react";
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="wrapper border border-b-0 z-10 border-t-[#33353F] border-x-0 text-white relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute bottom-0 -left-4 transform -translate-x-1/2 -translate-1/2 opacity-30"></div>
      <div className="adapter py-4 flex justify-between">
        <Logo />
        <p className="text-slate-600">Todos direitos reservados © {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
