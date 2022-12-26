import React from "react";
import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { FormattedMessage } from "react-intl";

const Experience = () => {
  return (
    <section id="experience">
      <FormattedMessage
        id="about-experience"
        defaultMessage="<h5>What Skills I have</h5>
      <h2>My Experience</h2>"
        values={{
          h5: (chunks) => <h5>{chunks}</h5>,
          h2: (chunks) => <h2>{chunks}</h2>,
        }}
      />

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>
            <FormattedMessage
              id="frontend-dev"
              defaultMessage="Frontend Development"
            />
          </h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">
                  <FormattedMessage
                    id="experienced-text"
                    defaultMessage="Experienced"
                  />
                </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">
                  <FormattedMessage
                    id="intermediate-text"
                    defaultMessage="Intermediate"
                  />
                </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">
                  <FormattedMessage
                    id="intermediate-text"
                    defaultMessage="Intermediate"
                  />
                </small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">
                  <FormattedMessage
                    id="intermediate-text"
                    defaultMessage="Intermediate"
                  />
                </small>
              </div>
            </article>
          </div>
        </div>

        {/* END OF FRONTEND */}

        <div className="experience__backend">
          <h3>
            <FormattedMessage
              id="backend-dev"
              defaultMessage="Backend Development"
            />
          </h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MongoDb</h4>
                <small className="text-light">
                  <FormattedMessage
                    id="intermediate-text"
                    defaultMessage="Intermediate"
                  />
                </small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">
                  <FormattedMessage id="basic-text" defaultMessage="Basic" />
                </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>FireBase</h4>
                <small className="text-light">
                  <FormattedMessage id="basic-text" defaultMessage="Basic" />
                </small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
