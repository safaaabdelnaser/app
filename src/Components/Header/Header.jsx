import { useEffect, useRef, useState } from "react";

const Header = () => {
  // to take reference from header to access on useEffect
  const headerRef = useRef();
//   to make sniky Header
  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(window.scrollY);
      if (window.scrollY > 100) {
        headerRef.current.style.background = "#0c1524";
        headerRef.current.style.padding = "30px 0";
      } else {
        headerRef.current.style.background = "transparent";
        headerRef.current.style.padding = "70px 0";
      }
    });
  }, []);
  const [navLink, setNavLinke] = useState(["Features", "About", "Team"]);
  return (
    <header
      ref={headerRef}
      className="pt-[70px] fixed text-[17px] top-0 left-0 w-full z-50 transition-all duration-200"
    >
      <div className="container flex justify-between items-center gap-[30px] flex-col sm:flex-row">
        <a href="/">
          <img src="/public/logo.svg" alt="logo" />
        </a>
        <nav>
          <ul className="flex items-center gap-[50px]">
            {navLink.map((link) => (
              <li key={link}>
                <a
                  href={`/${link.toLowerCase}`}
                  className="text-white opacity-[.9] hover:text-red-200 hover:transition-colors duration-400"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
