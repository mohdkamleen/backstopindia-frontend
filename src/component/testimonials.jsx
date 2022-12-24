import React from 'react'
import { Button, Carousel, Image } from 'react-bootstrap'; 

function Testimonials() {
    return (
        <>
            <h2 className='text-center my-4'>Testimonials</h2>
            <div className='testimonial-card-container mb-5'>


                <Carousel>

                <Carousel.Item>
                        <div className='service-slide'></div>
                        <Carousel.Caption>
                            <Image height={60} src="assest/image/user.png" rounded alt="error" />
                            <p style={{maxWidth:"400px",display:"block",margin:"auto"}}>Nulla vitae elit libero, a pharetra augue mollis interdumNulla vitae elit libero,  interdum. <br />
                            (<code>-Mohd Kamleen</code>)</p>
                             
                        </Carousel.Caption>
                    </Carousel.Item>
                    
                    <Carousel.Item>
                        <div className='service-slide'></div>
                        <Carousel.Caption>
                            <Image height={60} src="assest/image/kamleen.jpg" rounded alt="error" />
                            <p style={{maxWidth:"400px",display:"block",margin:"auto"}}>Nulla vitae elit libero, a pharetra augue mollis interdumNulla vitae elit libero,  interdum. <br />
                            (<code>-Mohd Kamleen</code>)</p>
                             
                        </Carousel.Caption>
                    </Carousel.Item>
                    

                </Carousel>
            </div>
        </>
    );
}

export default Testimonials;