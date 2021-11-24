import React from 'react';
import './Work.css';
import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
// import carousel3 from '../../../images/carousel-3.png';
import carousel4 from '../../../images/carousel-4.png';
import carousel5 from '../../../images/carousel-5.png';
import { Carousel } from 'react-bootstrap';

const Work = () => {
    return (
        <div className="work-section pt-5 mt-5 mb-5">
            <h1 className="text-center text-white mt-5 mb-5">Here are some of <span style={{ color: 'green' }}>our works</span></h1>

            <Carousel className="p-5 text-center">
                <Carousel.Item className="mb-5 carouselItem">
                    <img
                        className="d-block w-50 h-50"
                        src={carousel1}
                        // style={{ height: '200px' }}
                        alt=""
                    />
                </Carousel.Item>

                <Carousel.Item className="mb-5 carouselItem">
                    <img
                        className="d-block w-50 h-50"
                        src={carousel2}
                        // style={{ height: '200px' }}
                        alt=""
                    />
                </Carousel.Item>

                <Carousel.Item className="mb-5 carouselItem">
                    <img
                        className="d-block w-50 h-50"
                        src={carousel4}
                        // style={{ height: '200px' }}
                        alt=""
                    />
                </Carousel.Item>
                <Carousel.Item className="mb-5 carouselItem">
                    <img
                        className="d-block w-50 h-50"
                        src={carousel5}
                        // style={{ height: '200px' }}
                        alt=""
                    />
                </Carousel.Item>


            </Carousel>

        </div>
    );
};

export default Work;