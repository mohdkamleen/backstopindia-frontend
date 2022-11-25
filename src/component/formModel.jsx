import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function FormModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                CONNECT WITH US
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <h4>Let's connect with us</h4>

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

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" size="sm" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" size="sm" onClick={handleClose}>
                        Submit and get call from us
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default FormModal;