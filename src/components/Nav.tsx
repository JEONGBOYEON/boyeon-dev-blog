import navlinks from "../data/navlinks";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className={`mr-10`}>
      {navlinks.map((nav) => (
        <Link
          href={nav.link}
          key={nav.title}
          className={`ml-5 font-medium text-lg text-gray-600 hover:text-main_blod`}
        >
          {nav.title}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
