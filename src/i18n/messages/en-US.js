import { LOCALES } from "../locales";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  [LOCALES.ENGLISH]: {
    hello: "Hello",
    "scroll-down": "Scroll Down",
    "intro-me": [
      {
        children: [
          {
            type: 0,
            value: "Hello I'm",
          },
        ],
        type: 8,
        value: "h4",
      },
      {
        children: [
          {
            type: 0,
            value: "Botirjon Shokirov",
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
            value: "Get To Know",
          },
        ],
        type: 8,
        value: "h5",
      },
      {
        children: [
          {
            type: 0,
            value: "About Me",
          },
        ],
        type: 8,
        value: "h2",
      },
    ],
  },
};
