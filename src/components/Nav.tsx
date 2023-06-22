import navlinks from "../data/navlinks";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className={`mr-2 `}>
      {navlinks.map((nav) => (
        <Link
          href={nav.link}
          key={nav.title}
          className={`ml-5 font-light text-lg text-gray-500`}
        >
          {nav.title}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
