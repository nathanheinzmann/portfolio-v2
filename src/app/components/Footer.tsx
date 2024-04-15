import React from "react";
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="wrapper border border-b-0 z-10 border-t-[#33353F] border-x-0 text-white">
      <div className="adapter flex justify-between">
        <Logo />
        <p className="text-slate-600">Todos direitos reservados © {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
