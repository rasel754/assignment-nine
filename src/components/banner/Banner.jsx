import React from "react";

const Banner = () => {
  return (
    <div>
      <swiper-container
        slides-per-view="3"
        speed="500"
        loop="true"
        css-mode="true"
      >
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
      </swiper-container>
    </div>
  );
};

export default Banner;
