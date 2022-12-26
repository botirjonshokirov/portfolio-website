import React, { useState } from "react";
import "./Testimonials.css";

import AVTR1 from "../../assets/azamat.jpeg";
import AVTR2 from "../../assets/durdona.jpeg";
import AVTR3 from "../../assets/ikboljon.jpeg";
import AVTR4 from "../../assets/jack.jpeg";

// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Modal from "../modal/Modal";

const data = [
  {
    avatar: AVTR1,
    name: "Azamat Shokirov",
    review:
      "It was amazing working with you, Botirjon. I really appreciate your creativity and dedication.  Without your help i couldn't accomplish this work properly.  I really want to work with you again. Thanks",
  },
  {
    avatar: AVTR2,
    name: "Durdona Rashidova",
    review:
      "Я довольна результатом и программой созданной им. Он за короткое время  качественно выполнил мой заказ, связанный с  созданием сайта. Всё  необходимое работает отлично и в полной исправности,  при возникновении вопросов обращаюсь к нему и получаю ответы. Я удовлетворена работой программиста 10/10",
  },
  {
    avatar: AVTR3,
    name: "Ikboljon Abdurasulov",
    review: "Really appreciate, good luck, man!",
  },
  {
    avatar: AVTR4,
    name: "Jack Oliwer",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi repudiandae earum molestiae numquam magni. Modi eaque eveniet impedit reprehenderit pariatur eum accusamus mollitia veniam inventore, voluptate distinctio delectus. Labore, quas!",
  },
];

const Testimonials = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
        <button className="btn btn-primary" onClick={() => setOpenModal(true)}>
          Modal
        </button>
      </Swiper>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </section>
  );
};

export default Testimonials;
