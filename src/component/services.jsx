import Button from 'react-bootstrap/Button'
import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
function Services() {
    return (
        <>
            <h2 className='text-center my-4'>Our Services</h2>
            <div className='services-card-container mb-5'>


                <Carousel>

                    <Carousel.Item>
                        <div className='service-slide'></div>
                        <Carousel.Caption>
                            <h3>Mobile Screen Damage</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            <Button variant='outline-primary'>know more</Button>
                        </Carousel.Caption>
                    </Carousel.Item>


                    <Carousel.Item>
                        <div className='service-slide'></div>
                        <Carousel.Caption>
                            <h3>Mobile Screen Damage</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            <Button variant='outline-primary'>know more</Button>
                        </Carousel.Caption>
                    </Carousel.Item>


                    <Carousel.Item>
                        <div className='service-slide'></div>
                        <Carousel.Caption>
                            <h3>Mobile Screen Damage</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            <Button variant='outline-primary'>know more</Button>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>

            </div>
        </>
    );
}

export default Services;







