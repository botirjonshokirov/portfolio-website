import React, { useState, useEffect } from "react";
import "./Jokes.css";
// import { FormattedMessage, useIntl } from "react-intl";

const Jokes = () => {
  // const intl = useIntl();
  const [jokes, setJokes] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchJokes = async () => {
    setIsLoading(true);
    const res = await fetch(
      "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=religious,sexist"
    );
    const data = await res.json();
    setJokes(data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchJokes();
  }, []);
  return (
    <section id="jokes">
      <h5>Let's have a fun</h5>
      <h2>Joke Generator</h2>
      {/* <FormattedMessage
        id="about-experience"
        defaultMessage="<h5>Let's have a fun</h5>
      <h2>Joke Generator</h2>"
        values={{
          h5: (chunks) => <h5>{chunks}</h5>,
          h2: (chunks) => <h2>{chunks}</h2>,
        }}
      /> */}
      <div className="container jokes__container">
        <div className="joke">
          <p className="joke-text">Dude, read me...</p>
          {isLoading ? <h2>Loading...</h2> : <p>{jokes.joke}</p>}
          <button onClick={fetchJokes} className="btn btn-primary generate-btn">
            Generate
          </button>
        </div>
      </div>
    </section>
  );
};

export default Jokes;
