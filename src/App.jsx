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
  Jokes,
} from "./components/index";
import { BsMoonStars, BsSun } from "react-icons/bs";

import { I18Provider, LOCALES } from "./i18n";

const App = () => {
  const [locale, setLocale] = useState(LOCALES.ENGLISH);
  const [activeNav, setActiveNav] = useState("en");
  const rootRef = useRef(null);
  const bgRef = useRef(null);
  const handleMouseMove = (e) => {
    bgRef.current.style.left = `${e.pageX}px`;
    bgRef.current.style.top = `${e.pageY}px`;
  };
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [modeIcon, setModeIcon] = useState(<BsSun />);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode === true) {
      setModeIcon(<BsMoonStars />);
    } else {
      setModeIcon(<BsSun />);
    }
  };
  return (
    <>
      <div
        className={`container1 ${isDarkMode ? "dark-mode" : "light-mode"}`}
        ref={rootRef}
        onMouseMove={handleMouseMove}
      >
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
          <p className="modeIcon" onClick={toggleDarkMode}>
            {modeIcon}
          </p>
          <Header />
          <Nav />
          <About />
          <Experience />
          <Services />
          <Portfolio />
          <Testimonials />
          <Contact />
          <Jokes />
          <Footer />
        </I18Provider>
      </div>
      <div className="bg" ref={bgRef} />
    </>
  );
};

export default App;
