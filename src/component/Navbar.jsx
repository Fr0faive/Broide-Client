import { Link } from "react-router-dom";
import Logo from "./element/Logo";
import { ButtonDownload } from "./element/Button";

const listNav = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  return (
    <>
      <nav className="w-full bg-white fixed">
        <div className="flex justify-between items-center py-6 px-24 mx-24 text-black">
          <Link to={"/"} className="flex gap-3 items-center">
            <Logo size="h-10" />
            <span className="text-3xl text-[#2F318B] font-semibold">
              Broide.
            </span>
          </Link>
          <div className="flex gap-12 font-semibold items-center">
            {listNav.map((item, index) => (
              <Link key={index} to={item.path}>
                {item.name}
              </Link>
            ))}
            <ButtonDownload href="./assets/broide.pdf" type="button">
              Download Katalog
            </ButtonDownload>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
