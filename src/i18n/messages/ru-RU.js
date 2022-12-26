import { LOCALES } from "../locales";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  [LOCALES.RUSSIAN]: {
    hello: "Привет",
    "scroll-down": "Прокрутить вниз",
    "intro-me": [
      {
        children: [
          {
            type: 0,
            value: "Здравствуйте, я",
          },
        ],
        type: 8,
        value: "h4",
      },
      {
        children: [
          {
            type: 0,
            value: "Ботиржон Шокиров",
          },
        ],
        type: 8,
        value: "h1",
      },
      {
        children: [
          {
            type: 0,
            value: "Fullstack Developer",
          },
        ],
        type: 8,
        value: "h5",
      },
    ],
    "about-me": [
      {
        children: [
          {
            type: 0,
            value: "Узнай",
          },
        ],
        type: 8,
        value: "h5",
      },
      {
        children: [
          {
            type: 0,
            value: "обо мне",
          },
        ],
        type: 8,
        value: "h2",
      },
    ],
  },
};
