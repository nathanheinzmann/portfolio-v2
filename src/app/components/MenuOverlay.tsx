import React from "react";
import NavLink from "./NavLink";

type Props = {
  links: { id: string; title: string }[];
};

const MenuOverlay = ({ links }: Props) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.id} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
