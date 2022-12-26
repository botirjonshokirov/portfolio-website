import React, { useState } from "react";

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
  return (
    <>
      <I18Provider locale={locale}>
        {/* <FormattedMessage id="hello" /> */}
        <Header />
        <button onClick={() => setLocale(LOCALES.ENGLISH)}>EN</button>
        <br />
        <button onClick={() => setLocale(LOCALES.RUSSIAN)}>RU</button>
        <br />
        <button onClick={() => setLocale(LOCALES.UZBEK)}>UZ</button>
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </I18Provider>
    </>
  );
};

export default App;
