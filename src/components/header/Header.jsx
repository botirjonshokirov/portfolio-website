import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import translate from "../../i18n/messages/translate";
import { FormattedMessage } from "react-intl";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <FormattedMessage
          id="intro-me"
          defaultMessage="<h4>Hello I'm</h4><h1>Botirjon Shokirov</h1><h5>Fullstack Developer</h5>"
          values={{
            h4: (chunks) => <h4>{chunks}</h4>,
            h1: (chunks) => <h1>{chunks}</h1>,
            h5: (chunks) => <h5 className="text-light">{chunks}</h5>,
          }}
        />

        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          {translate("scroll-down")}
        </a>
      </div>
    </header>
  );
};

export default Header;
