import React from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";
import { FormattedMessage } from "react-intl";

const Services = () => {
  return (
    <section id="services">
      <FormattedMessage
        id="about-services"
        defaultMessage="<h5>What I Offer</h5>
      <h2>Services</h2>"
        values={{
          h5: (chunks) => <h5>{chunks}</h5>,
          h2: (chunks) => <h2>{chunks}</h2>,
        }}
      />

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                <FormattedMessage
                  id="work-html-css"
                  defaultMessage="Working with HTML+CSS"
                />
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                <FormattedMessage
                  id="work-javascript"
                  defaultMessage="Working with JavaScript"
                />
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                <FormattedMessage
                  id="work-react"
                  defaultMessage="Working with React.js"
                />
              </p>
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
              <p>
                <FormattedMessage
                  id="work-website"
                  defaultMessage="Creating WebSites(HTML+CSS/JavaScript/React + FireBase)"
                />
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                <FormattedMessage
                  id="work-team"
                  defaultMessage="Team Work(Slack for Remote)"
                />
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                <FormattedMessage
                  id="work-react-apps"
                  defaultMessage="React Applications"
                />
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Git + GitLab</p>
            </li>
          </ul>
        </article>

        {/* END OF WEB DEVELOPMENT */}
      </div>
    </section>
  );
};

export default Services;
