import React, { useState, useRef } from "react";
import Flag from "react-world-flags";
import {
  Header,
  Nav,
  About,
  Experience,
  Services,
  Portfolio,
  Testimonials,
  Contact,
  Footer,
} from "./components/index";

import { I18Provider, LOCALES } from "./i18n";

const App = () => {
  const [locale, setLocale] = useState(LOCALES.ENGLISH);
  const [activeNav, setActiveNav] = useState("en");
  const rootRef = useRef(null);
  const bgRef = useRef(null);
  const handleMouseMove = (e) => {
    bgRef.current.style.left = `${e.clientX}px`;
    bgRef.current.style.top = `${e.clientY}px`;
  };
  return (
    <>
      <div className="container1" ref={rootRef} onMouseMove={handleMouseMove}>
        <I18Provider locale={locale}>
          <div className="lang-btns">
            <p
              onClick={() => {
                setActiveNav("en");
                setLocale(LOCALES.ENGLISH);
              }}
              className={activeNav === "en" ? "active" : ""}
            >
              <Flag code="usa" height="15" />
            </p>

            <p
              className={activeNav === "ru" ? "active" : ""}
              onClick={() => {
                setLocale(LOCALES.RUSSIAN);
                setActiveNav("ru");
              }}
            >
              <Flag code="rus" height="15" />
            </p>

            <p
              className={activeNav === "uz" ? "active" : ""}
              onClick={() => {
                setLocale(LOCALES.UZBEK);
                setActiveNav("uz");
              }}
            >
              <Flag code="uzb" height="15" />
            </p>
          </div>
          <Header />
          <Nav />
          <About />
          <Experience />
          <Services />
          <Portfolio />
          <Testimonials />
          <Contact />
          <Footer />
        </I18Provider>
      </div>
      <div className="bg" ref={bgRef} />
    </>
  );
};

export default App;
