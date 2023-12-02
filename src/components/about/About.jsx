import React from "react";
import "./About.css";
import ME from "../../assets/me-about.jpg";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className="about__content">
          <article className="about__me-content">
            I am <b>Software Engineer</b> with <b>2 years</b> of experience in
            Web Development. I am proficient in <b>JavaScript</b>. I am
            currently a second-year student, and I am always eager to learn and
            grow.
          </article>
          <div className="about__cards">
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
