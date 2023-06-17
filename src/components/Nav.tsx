import navlinks from "../data/navlinks";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className={`mr-2`}>
      {navlinks.map((nav) => (
        <Link
          href={nav.link}
          key={nav.title}
          className={`ml-5 font-extralight`}
        >
          {nav.title}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
