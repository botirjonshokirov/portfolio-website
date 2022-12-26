import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { FormattedMessage, useIntl } from "react-intl";

const Contact = () => {
  const intl = useIntl();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_c2jj3s6",
      "template_ymsy0wr",
      form.current,
      "tUfLcHURtAIXUh5ac"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <FormattedMessage
        id="contact-me"
        defaultMessage="<h5>Get In Touch</h5>
      <h2>Contact Me</h2>"
        values={{
          h5: (chunks) => <h5>{chunks}</h5>,
          h2: (chunks) => <h2>{chunks}</h2>,
        }}
      />
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>shokirovbotirjon2003@gmail.com</h5>
            <a href="mailto:shokirovbotirjon2003@gmail.com">
              <FormattedMessage
                id="send-message"
                defaultMessage="Send a message"
              />{" "}
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Telegram</h4>
            <h5>https://t.me/Shokirov_Botirjon</h5>
            <a href="https://t.me/Shokirov_Botirjon">
              <FormattedMessage
                id="send-message"
                defaultMessage="Send a message"
              />
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder={intl.formatMessage({
              id: "your-name",
              defaultMessage: "Your Full Name",
            })}
            required
          />
          <input
            type="email"
            name="email"
            placeholder={intl.formatMessage({
              id: "your-email",
              defaultMessage: "Your Email",
            })}
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder={intl.formatMessage({
              id: "your-message",
              defaultMessage: "Your Message",
            })}
            required
          ></textarea>

          <button type="submit" className="btn btn-primary">
            <FormattedMessage
              id="send-message"
              defaultMessage="Send a message"
            />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
