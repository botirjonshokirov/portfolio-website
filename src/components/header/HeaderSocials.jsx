import React from "react";
import { FiGithub } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { FiInstagram } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://twitter.com/BotirjonShokir2">
        <IoLogoTwitter />
      </a>
      <a
        href="https://github.com/botirjonshokirov"
        target="_blank"
        rel="noreferrer"
      >
        <FiGithub />
      </a>
      <a href="https://www.instagram.com/_botirjonshokirov_/">
        <FiInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
