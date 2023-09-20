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
      className={`w-screen top-2 flex fixed h-20  border border-x-cyan-100 rounded-[40px] ${
        menuOpen && "flex-col h-full"
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
            onClick={() => setMenuOpen(true)}
            cursor={"pointer"}
          />
        ) : (
          menuOpen &&
          windowDimension.innerWidth < 700 && (
            <AiOutlineClose
              size={30}
              cursor={"pointer"}
              onClick={() => setMenuOpen(false)}
            />
          )
        )}
        <Link className={`text-lg text-black ${menuOpen ? "pl-10" : "pl-40"}`}>
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
            className={!menuOpen ? "cursor-pointer" : "pt-36 text-2xl"}
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