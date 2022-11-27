import React from 'react'
import { Button, Form } from 'react-bootstrap';
import {FaLocationArrow, FaMailBulk, FaPhone, FaSearchLocation} from 'react-icons/fa'
function Contact() {
    return (
        <>
            <h2 className='text-center my-4'>Contact Us</h2> 
            
            {/* this is message system  */} 
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d444.66614356348595!2d80.93590542710139!3d26.92477790888883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1669478368836!5m2!1sen!2sin" className='d-block m-auto' width="90%" height="500px"></iframe><br />
            <br />
            <div className="about-section">
                <Form className='right' style={{ width: "100%", maxWidth: "500px" }}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address or Phone</Form.Label>
                        <Form.Control type="text" placeholder="Enter email or phone" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Your query</Form.Label>
                        <Form.Control type="tel" placeholder="Type your problem" />
                    </Form.Group>


                    <Button>Submit</Button>
                </Form>

                <img src="assest/image/contact-undraw.svg" alt="" className='contact-page-image' />
            </div> <br />

            {/* address details  */}
            <p style={{margin:"20px 5%", fontSize:"20px",fontWeight:"500"}}>
               <FaPhone /> &nbsp; +91 4566534567 <br />
            <FaMailBulk /> &nbsp; contact@gmail.com <br />
              <FaSearchLocation /> &nbsp;  Sitapur Rd, Sherwani Nagar, Diguria, Aziz Nagar, Lucknow, Uttar Pradesh 226021
            </p>
   </>
    );
}

export default Contact;