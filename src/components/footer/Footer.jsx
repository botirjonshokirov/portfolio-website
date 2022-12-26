import React from "react";
import "./Footer.css";

import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { FormattedMessage } from "react-intl";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        Botirjon Shokirov
      </a>

      <ul className="permalinks">
        <li>
          <a href="#home">
            <FormattedMessage id="home-btn" defaultMessage="Home" />
          </a>
        </li>
        <li>
          <a href="#about">
            <FormattedMessage id="about-btn" defaultMessage="About" />
          </a>
        </li>
        <li>
          <a href="#experience">
            <FormattedMessage id="experience-btn" defaultMessage="Experience" />
          </a>
        </li>
        <li>
          <a href="#services">
            <FormattedMessage id="services-btn" defaultMessage="Services" />
          </a>
        </li>
        <li>
          <a href="#portfolio">
            <FormattedMessage id="portfolio-btn" defaultMessage="Portfolio" />
          </a>
        </li>
        <li>
          <a href="#testimonials">
            <FormattedMessage
              id="testimonials-btn"
              defaultMessage="Testimonials"
            />
          </a>
        </li>
        <li>
          <a href="#contact">
            <FormattedMessage id="contact-btn" defaultMessage="Contact" />
          </a>
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
        <small>
          &copy;
          <FormattedMessage
            id="footer-content"
            defaultMessage="Botirjon Shokirov. All rights reserved."
          />
        </small>
      </div>
    </footer>
  );
};

export default Footer;
