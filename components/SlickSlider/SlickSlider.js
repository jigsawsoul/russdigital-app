import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const styles =
  "absolute top-1/2 z-10 bg-black size-16 xl:size-20 rounded-full -mt-8 xl:-mt-10 hidden md:flex justify-center items-center cursor-pointer";

function NextArrow(props) {
  const { onClick } = props;

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
  const { onClick } = props;

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

export default function SlickSlider({ gallery }) {
  const settings = {
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
      {gallery?.gallery.nodes.map((image, index) => (
        <div key={index}>
          <img src={image.sourceUrl} alt={image.altText || "Gallery Image"} />
        </div>
      ))}
    </Slider>
  );
}
