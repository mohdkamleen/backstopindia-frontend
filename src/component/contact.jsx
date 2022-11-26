import React from 'react'
function Contact() {
    return (
        <>
            <h2 className='text-center my-4'>Contact Us</h2>

            <Form>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="tel" placeholder="Enter phone" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Are you sure want to call from us" />
                </Form.Group>
            </Form>

        </>
    );
}

export default Contact;