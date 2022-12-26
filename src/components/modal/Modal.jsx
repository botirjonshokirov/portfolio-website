import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FormattedMessage, useIntl } from "react-intl";

import "./Modal.css";

const Modal = ({ open, onClose }) => {
  const intl = useIntl();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c2jj3s6",
        "template_vi6tyne",
        form.current,
        "tUfLcHURtAIXUh5ac"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          onClose();
        },
        function (error) {
          console.log("FAILED...", error);
          onClose();
        }
      );
    e.target.reset();
  }

  if (!open) return null;

  return (
    <div
      className="container contact__containerform modal"
      id="myModal"
      onClick={onClose}
    >
      <div
        className="modal-content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <form
          ref={form}
          onSubmit={sendEmail}
          enctype="multipart/form-data"
          method="post"
        >
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
          <div className="star-rating">
            <h4>
              <FormattedMessage
                id="star-rating"
                defaultMessage="Star rating: "
              />
            </h4>
            {[...Array(5)].map((star, index) => {
              index += 1;
              return (
                <button
                  type="button"
                  key={index}
                  className={index <= (hover || rating) ? "off" : "on"}
                  onClick={() => setRating(index)}
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover(rating)}
                  name="rating"
                >
                  <span className="star">&#9733;</span>
                </button>
              );
            })}
          </div>
          <div className="btns-content">
            <button onClick={onClose} className="btn btn-danger">
              <FormattedMessage id="close-btn" defaultMessage="Close" />
            </button>
            <button type="submit" className="btn btn-primary">
              <FormattedMessage
                id="send-message"
                defaultMessage="Send a message"
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
