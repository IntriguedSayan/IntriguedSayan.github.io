import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

export default function CarouselComp({ slides }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {slides?.map((elem) => (
        <Carousel.Item>
          <img className="d-block w-100" src={elem} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
