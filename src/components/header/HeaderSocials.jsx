import React from "react";
import { FiGithub } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { FiInstagram } from "react-icons/fi";
import { FaTelegram } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

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
      <a href="https://t.me/botirjons_me">
        <FaTelegram />
      </a>
      <a href="https://www.linkedin.com/in/botirjon-shokirov-681aa3213/">
        <BsLinkedin />
      </a>
    </div>
  );
};

export default HeaderSocials;
