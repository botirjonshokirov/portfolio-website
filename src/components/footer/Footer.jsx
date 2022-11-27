import React from "react";
import "./Footer.css";

import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Botirjon Shokiorv
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Experience</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Testimonials</a>
        </li>
        <li>
          <a href="#">Contact</a>
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
      </div>

      <div className="footer__copyright">
        <small>&copy; Botirjon Shokirov. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
