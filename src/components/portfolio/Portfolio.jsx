import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/blogsite.png";
import IMG2 from "../../assets/e-commerce-1.png";
import IMG3 from "../../assets/furniture-commerce.png";
import IMG4 from "../../assets/guess-number.png";
import IMG5 from "../../assets/hamburger.png";
import IMG6 from "../../assets/pig-game.png";
import IMG7 from "../../assets/youtube-clone.png";
import IMG8 from "../../assets/openai.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Simple Blog Site with HTML+CSS and JavaScript",
    github: "https://github.com/botirjonshokirov/blog-site",
    demo: "https://blog-site-amber.vercel.app/",
  },
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
    id: 4,
    image: IMG4,
    title: "Simple Guess Number Game for FUN :)",
    github: "https://github.com/botirjonshokirov/guess-number",
    demo: "https://guess-number-flame.vercel.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Let's calculate how much it will be a custom Hamburger",
    github: "https://github.com/botirjonshokirov/hamburger",
    demo: "https://hamburger-xi.vercel.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Have a fun with your Friends",
    github: "https://github.com/botirjonshokirov/pigGame",
    demo: "https://pig-game-virid-rho.vercel.app/",
  },
  {
    id: 7,
    image: IMG7,
    title: "YouTube Clone",
    github: "https://github.com/botirjonshokirov/udemyapp",
    demo: "https://udemyapp.vercel.app/",
  },
  {
    id: 8,
    image: IMG8,
    title: "Image Generator. OpenAI",
    github: "https://github.com/botirjonshokirov/image-generator",
    demo: "https://image-generator-inky.vercel.app/",
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
