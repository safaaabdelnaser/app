import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  const [navLink, setNavLinke] = useState([
    "الرئيسية",
    "من نحن",
    "اتصل بنا",
    "الدعم الفنى",
    "ارقام التشغيل",
    "سياسة الخصوصية",
  ]);

  return (
    <header className="pt-[10px] fixed text-[17px] top-0 left-0 w-full z-50 transition-all duration-200 bg-slate-50">
      <div className="container flex justify-between items-center gap-[30px]">
        <FontAwesomeIcon
          icon={faBars}
          className="text-[#2C4768] cursor-pointer px-[30px]"
        />

        <nav className="flex justify-center flex-grow">
          <ul className="flex items-center gap-[50px] flex-row-reverse mx-auto">
            {navLink.map((link) => (
              <li key={link}>
                <Link
                  to={`/${link.toLowerCase()}`}
                  className="text-[#2C4768] opacity-[.9] hover:text-yellow-200 hover:transition-colors duration-400"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <a href="/">
          <img src="/public/logo.png" alt="logo" className="w-[100px] " />
        </a>
      </div>
    </header>
  );
};

export default Header;
