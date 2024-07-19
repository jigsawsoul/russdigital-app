import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const styles =
  "absolute top-1/2 z-10 bg-black size-16 xl:size-20 rounded-full -mt-8 xl:-mt-10 hidden md:flex justify-center items-center cursor-pointer";

function NextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div className={`${styles} right-10`} onClick={onClick}>
      <svg
        fill="white"
        className="h-4 md:h-5 xl:h-7"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
      </svg>
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div className={`${styles} left-10`} onClick={onClick}>
      <svg
        fill="white"
        className="h-4 md:h-5 xl:h-7"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
      </svg>
    </div>
  );
}

export default function SlickSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    lazyLoad: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <Slider {...settings}>
      <div>
        <img src="https://images.squarespace-cdn.com/content/v1/604ba44393c7f933b0030ed3/ed0c1532-1691-4be5-b582-7918704a61f6/MRHQ-1.jpg?format=2500w" />
      </div>
      <div>
        <img src="https://images.squarespace-cdn.com/content/v1/604ba44393c7f933b0030ed3/37ec8ca4-c7ea-494c-9b83-0cb7266bd4c5/MRHQ-3.jpg?format=2500w" />
      </div>
      <div>
        <img src="https://images.squarespace-cdn.com/content/v1/604ba44393c7f933b0030ed3/f2345ef6-c1bc-4e75-b0fb-ee79e247e5f9/MRHQ-2.jpg?format=2500w" />
      </div>
      <div>
        <img src="https://images.squarespace-cdn.com/content/v1/604ba44393c7f933b0030ed3/ed0c1532-1691-4be5-b582-7918704a61f6/MRHQ-4.jpg?format=2500w" />
      </div>
      <div>
        <img src="https://images.squarespace-cdn.com/content/v1/604ba44393c7f933b0030ed3/55cb3fa2-8ce5-459c-b769-5c99134f815d/MRHQ-8.jpg?format=2500w" />
      </div>
      <div>
        <img src="https://images.squarespace-cdn.com/content/v1/604ba44393c7f933b0030ed3/a9bae3bb-129f-4027-816e-1a61cb4e5a11/MRHQ-9.jpg?format=2500w" />
      </div>
    </Slider>
  );
}
