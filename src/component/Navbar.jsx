import { Link } from "react-router-dom";
import Logo from "./element/Logo";
import { ButtonDownload } from "./element/Button";
import { useState } from "react";

import { InstagramOutlined } from "@ant-design/icons";

const listNav = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "#about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Products",
    path: "/products",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <nav className="w-full bg-white fixed z-10">
        <div className="flex justify-between items-center py-6 md:px-3 lg:px-24 mx-16 lg:mx-24 text-black">
          <Link to={"/"} className="flex gap-3 items-center">
            <Logo size="h-6 lg:h-10" />
            <span className="text-xl lg:text-3xl text-[#2F318B] font-semibold">
              Broide.
            </span>
          </Link>
          <div className="hidden lg:flex gap-12 font-semibold items-center">
            {listNav.map((item, index) => (
              <Link key={index} to={item.path}>
                {item.name}
              </Link>
            ))}
            <ButtonDownload
              href="https://www.instagram.com/broide.project/"
              type="button"
            >
              Follow us <InstagramOutlined />
            </ButtonDownload>
          </div>
          <div className="lg:hidden">
            {/* Mobile navigation */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-2xl focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden w-full flex flex-col justify-center items-center py-4 gap-3">
            {listNav.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="block py-2 px-4 text-black font-semibold"
              >
                {item.name}
              </Link>
            ))}
            <ButtonDownload
              href="https://www.instagram.com/broide.project/"
              type="button"
            >
              Follow
            </ButtonDownload>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
