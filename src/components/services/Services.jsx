import React from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>HTML/CSS</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>JavaScript/jQuery</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Responsive design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Cross-browser compatibility</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Version control (Git)</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>CSS preprocessors (Sass, Less)</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>CSS frameworks (Bootstrap, Foundation)</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>JavaScript frameworks/libraries (React, Angular, Vue.js)</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Basic server-side programming (Node.js, PHP)</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Command line interface (CLI)</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Basic SQL and database management (MySQL, MongoDB)</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>RESTful APIs</p>
            </li>
          </ul>
        </article>

        {/* END OF UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Website design and development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Front-end development (HTML, CSS, JavaScript)</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Responsive design and cross-browser compatibility</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Content management system (CMS) customization</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Basic server-side programming (PHP, Node.js)</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>E-commerce website development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Landing page design and development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Custom web application development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Website maintenance and updates</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Website testing and debugging</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Basic SEO optimization</p>
            </li>
          </ul>
        </article>

        {/* END OF WEB DEVELOPMENT */}
      </div>
    </section>
  );
};

export default Services;
