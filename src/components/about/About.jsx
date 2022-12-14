import React from "react";
import "./About.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { FormattedMessage } from "react-intl";

const About = () => {
  return (
    <section id="about">
      <FormattedMessage
        id="about-me"
        defaultMessage="<h5>Get To Know</h5>
      <h2>About Me</h2>"
        values={{
          h5: (chunks) => <h5>{chunks}</h5>,
          h2: (chunks) => <h2>{chunks}</h2>,
        }}
      />

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>
                <FormattedMessage id="experience" defaultMessage="Experience" />
              </h5>
              <small>
                <FormattedMessage
                  id="experience-content"
                  defaultMessage="1+ Years Working"
                />
              </small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>
                <FormattedMessage id="clients" defaultMessage="Clients" />
              </h5>
              <small>
                <FormattedMessage
                  id="clients-content"
                  defaultMessage="WellBee"
                />
              </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>
                <FormattedMessage id="projects" defaultMessage="Projects" />
              </h5>
              <small>
                <FormattedMessage
                  id="projects-content"
                  defaultMessage="15+ Completed"
                />
              </small>
            </article>
          </div>
          <p>
            <FormattedMessage
              id="current-work"
              defaultMessage="Currently I am working at RadCode.co Company"
            />
          </p>
          <a href="#contact" className="btn btn-primary">
            <FormattedMessage id="lets-talk" defaultMessage="Let's Talk" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
