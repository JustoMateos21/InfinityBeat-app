import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowDimension, setWindowDimension] = useState({
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
  });

  const detectSize = () => {
    setWindowDimension({
      innerHeight: window.innerHeight,
      innerWidth: window.innerWidth,
    });
    windowDimension.innerWidth > 700 && setMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.addEventListener("resize", detectSize);
    };
  }, [windowDimension.innerWidth]);

  const links = [
    {
      id: 1,
      src: "Home",
    },
    {
      id: 2,
      src: "Features",
    },
    {
      id: 3,
      src: "About",
    },
  ];

  const linksToRender =
    windowDimension.innerWidth > 700 || menuOpen === true ? links : [];

  return (
    <div
      className={`w-screen top-2 flex fixed h-20 duration-150 border border-x-cyan-100 rounded-[40px] ${
        menuOpen && "flex-col h-full  bg-[#000530]"
      }`}
    >
      <div
        className={`flex items-center pl-4 ${
          menuOpen && "p-10 justify-center"
        }`}
      >
        {!menuOpen && windowDimension.innerWidth < 700 ? (
          <AiOutlineMenu
            size={30}
            color="#fff"
            onClick={() => setMenuOpen(true)}
            cursor={"pointer"}
          />
        ) : (
          menuOpen &&
          windowDimension.innerWidth < 700 && (
            <AiOutlineClose
              size={30}
              color="#fff"
              cursor={"pointer"}
              onClick={() => setMenuOpen(false)}
            />
          )
        )}
        <Link
          to="Home"
          className={`text-lg cursor-pointer  text-white ${
            menuOpen ? "pl-10" : "pl-40"
          }`}
        >
          InfinityBeat
        </Link>
      </div>
      <div
        className={
          !menuOpen
            ? " flex items-center justify-evenly w-[80%]"
            : "flex flex-col items-center"
        }
      >
        {linksToRender.map((l) => (
          <Link
            className={
              !menuOpen
                ? "cursor-pointer text-white hover:text-xl duration-200"
                : "pt-36 text-2xl cursor-pointer text-white hover:text-3xl duration-200"
            }
            key={l.id}
            to={l.src}
          >
            {l.src}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
