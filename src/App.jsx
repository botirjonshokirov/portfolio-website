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
import translate from "./i18n/messages/translate";

const App = () => {
  const [locale, setLocale] = useState(LOCALES.ENGLISH);
  return (
    <>
      <I18Provider locale={LOCALES.ENGLISH}>
        {/* <FormattedMessage id="hello" /> */}
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
    </>
  );
};

export default App;
