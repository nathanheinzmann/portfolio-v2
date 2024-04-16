import scrollTo from "../../utils/scrollTo";

type Props = {
  href: string;
  title: string;
};

const NavLink = ({ href, title }: Props) => {
  return (
    <button
      onClick={() => scrollTo(href)}
      className="w-full cursor-pointer block py-2 pl-3 pr-4 text-white sm:text-xl rounded md:p-0 hover:text-primary-500 transition-colors"
    >
      {title}
    </button>
  );
};

export default NavLink;
