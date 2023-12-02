import React from "react";
import "./Portfolio.css";
import IMG2 from "../../assets/e-commerce-1.png";
import IMG3 from "../../assets/furniture-commerce.png";
import IMG6 from "../../assets/pig-game.png";

const data = [
  {
    id: 2,
    image: IMG2,
    title: "E-Commerce shop with JavaScript and HTML+CSS",
    github: "https://github.com/botirjonshokirov/e-commerce-shop",
    demo: "https://e-commerce-shop-seven.vercel.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Fully Responsive Furniture E-commerce shop with React",
    github: "https://github.com/botirjonshokirov/furniture-ecommerce",
    demo: "https://furniture-ecommerce-seven.vercel.app/home",
  },
  {
    id: 6,
    image: IMG6,
    title: "Have a fun with your Friends",
    github: "https://github.com/botirjonshokirov/pigGame",
    demo: "https://pig-game-virid-rho.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data
          .map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a
                    href={github}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })
          .reverse()}
      </div>
    </section>
  );
};

export default Portfolio;
