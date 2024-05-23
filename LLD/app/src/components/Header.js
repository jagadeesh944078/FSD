import React, { useContext, useState } from "react";
import { UserContext } from "../util/UserContext";

const Header = () => {
  const token = !!sessionStorage.getItem("token");
  const btnName = token ? "Logout" : "Login";
  const { lang, setLang } = useContext(UserContext);

  const handleClick = (btnName) => {
    if (btnName !== "Logout") return;
    sessionStorage.removeItem("token");
  };

  return (
    <header className="font-bold bg-black p-4 mb-2 text-white flex text-l">
      Memes Page
      <nav className="justify-between ml-10">
        <a href="/home">Home</a>
        <a href="/about" className="ml-5 mr-5">
          About
        </a>
        <a href="/team">Team</a>
        <a href="/image-slider" className="ml-5">
          ImageSlider
        </a>
        <a href="/pagination" className="ml-5">
          Pagination
        </a>
        <a href="/login" className="ml-5" onClick={() => handleClick(btnName)}>
          {btnName}
        </a>
        <a href="/accordian" className="ml-5">
          Accordian
        </a>
        <a href="/comments" className="ml-5">
          NestedComments
        </a>
        <a href="/search-ui" className="ml-5">
          SearchUi
        </a>
      </nav>
      <select
        className="ml-4 bg-black border border-white"
        value={lang}
        onChange={(e) => setLang(e.target.value)}
      >
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="te">Telugu</option>
      </select>
    </header>
  );
};

export default Header;
