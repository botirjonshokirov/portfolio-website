import React from "react";
import "./Footer.css";

import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        Botirjon Shokirov
      </a>

      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/botirjonshokir/">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/_botirjonshokirov_/">
          <FiInstagram />
        </a>

        <a href="https://github.com/botirjonshokirov">
          <FiGithub />
        </a>
        <a href="https://twitter.com/BotirjonShokir2">
          <IoLogoTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Botirjon Shokirov. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
