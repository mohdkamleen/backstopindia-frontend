import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { FaMailBulk, FaPhone, FaSearchLocation } from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { contacUser } from '../redux/slice/contact';
function Contact() {

    const dispatch = useDispatch()
    const defaultValue = {
        name: "",
        contact: "",
        query: ""
    }
    const [formValue, setFormValue] = useState(defaultValue);
    useEffect(() => {
        return () => setFormValue(defaultValue);
    }, []);
    const handleChange = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (formValue.name === "" || formValue.contact === "" || formValue.query === "") {
            return toast.warn("Something went wrong.")
        }
        const res = await dispatch(contacUser(formValue))
        res && toast.success("Success") && setFormValue(defaultValue)
    }

    return (
        <>
            <h2 className='text-center my-4'>Contact Us</h2>

            {/* this is message system  */}
            <br />
            <div className="about-section">
                <Form className='right' style={{ width: "100%", maxWidth: "500px" }}>
                    <h3>Push your query here</h3>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Name</Form.Label>
                        <Form.Control className='bg-transparent text-light' name='name' onChange={handleChange} type="text" placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address or Phone</Form.Label>
                        <Form.Control className='bg-transparent text-light' name='contact' type="text" onChange={handleChange} placeholder="Enter email or phone" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Your query</Form.Label>
                        <Form.Control className='bg-transparent text-light' name='query' as="textarea" rows={3} onChange={handleChange} placeholder="Type your problem" />
                    </Form.Group>

                    <Button onClick={handleSubmit}>Submit</Button>
                </Form>

                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d444.66614356348595!2d80.93590542710139!3d26.92477790888883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1669478368836!5m2!1sen!2sin" className='d-block m-auto' width="100%" height="400px"></iframe><br />

            </div> <br />

            {/* address details  */}
            <p style={{ margin: "20px 5%", fontSize: "20px", fontWeight: "500" }}>
                <FaPhone /> &nbsp; <a href="tel:+919310348547">+919310348547</a>, <a href="tel:+917007927401">+917007927401</a> <br />
                <FaMailBulk /> &nbsp; contact@gmail.com <br />
                <FaSearchLocation /> &nbsp;  Sitapur Rd, Sherwani Nagar, Diguria, Aziz Nagar, Lucknow, Uttar Pradesh 226021
            </p>
        </>
    );
}

export default Contact;