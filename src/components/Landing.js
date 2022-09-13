import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import event1 from '../assets/carousel/event1.jpeg';
import event2 from '../assets/carousel/event2.jpeg';
import './Landing.css';

function Landing() {
    return (
        <div id='landing-page'>
            <div className='container-fluid' >
                {/* <div className="row">
                    <div className="col-sm-12 text">
                        <h3>Software Engineering Club</h3>
                    </div>
                </div> */}
                <div className="row carousel">
                    <div className="col-12">
                        <Carousel className='overlay'>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 image-car"
                                    src={event1}
                                    height={625}
                                    alt="First slide"
                                />
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100 image-car"
                                    src={event2} 
                                    height={625}
                                    alt="Second slide"
                                />
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100 image-car"
                                    src="https://picsum.photos/500/300?img=3" 
                                    height={625}
                                    alt="Third slide"
                                />
                            </Carousel.Item>

                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing