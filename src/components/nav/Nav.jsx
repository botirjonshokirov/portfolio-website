import React from "react";
import "./Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <div className="navigation">
        <ul>
          <li
            onClick={() => setActiveNav("#")}
            className={activeNav === "#" ? "active" : ""}
          >
            <a href="#">
              <span className="icon">
                <AiOutlineHome />
              </span>
              <span className="text">Home</span>
            </a>
          </li>
          <li
            onClick={() => setActiveNav("#about")}
            className={activeNav === "#about" ? "active" : ""}
          >
            <a href="#about">
              <span className="icon">
                <AiOutlineUser />
              </span>
              <span className="text">About</span>
            </a>
          </li>
          <li
            onClick={() => setActiveNav("#experience")}
            className={activeNav === "#experience" ? "active" : ""}
          >
            <a href="#experience">
              <span className="icon">
                <BiBook />
              </span>
              <span className="text">Experience</span>
            </a>
          </li>
          <li
            onClick={() => setActiveNav("#services")}
            className={activeNav === "#services" ? "active" : ""}
          >
            <a href="#services">
              <span className="icon">
                <RiServiceLine />
              </span>
              <span className="text">Services</span>
            </a>
          </li>
          <li
            onClick={() => setActiveNav("#contact")}
            className={activeNav === "#contact" ? "active" : ""}
          >
            <a href="#contact">
              <span className="icon">
                <BiMessageSquareDetail />
              </span>
              <span className="text">Contact</span>
            </a>
          </li>
          <div className="indicator"></div>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
