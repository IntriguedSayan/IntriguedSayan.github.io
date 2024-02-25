import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

export default function CarouselComp({firstSlide,secondSlide,thirdSlide,fourthSlide}){

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    
    
    return(
        
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item >
                <img
                className="d-block w-100"
                src={firstSlide}
                alt="First slide"
                />
                <Carousel.Caption>
                
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={secondSlide}
                alt="Second slide"
                />

                <Carousel.Caption>
               
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={thirdSlide}
                alt="Third slide"
                />

                <Carousel.Caption>
                
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={fourthSlide}
                alt="Third slide"
                />

                <Carousel.Caption>
                
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

  )
}

