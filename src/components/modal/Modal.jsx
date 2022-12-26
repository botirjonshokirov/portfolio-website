import React, { useRef } from "react";

import "./Modal.css";

const Modal = ({ open, onClose }) => {
  const form = useRef();

  if (!open) return null;

  const sendEmail = (e) => {
    e.preventDefault();

    e.target.reset();
  };
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
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <input type="file" name="image" placeholder="Photo" />
          <div className="btns-content">
            <button onClick={onClose} className="btn btn-danger">
              Close
            </button>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
