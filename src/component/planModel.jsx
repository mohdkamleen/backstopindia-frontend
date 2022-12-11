import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { registeUser } from '../redux/slice/user';

function FormModal() {
    const defaultValue = {
        name: "",
        email: "",
        phone: ""
    }

    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const [agreed, setAgreed] = useState(false);
    const [formValue, setFormValue] = useState(defaultValue);

    useEffect(() => {
        return () => setFormValue(defaultValue);
    }, []);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleChange = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value })
    }
    const handleAgreed = () => {
        setAgreed(!agreed)
    }
    return (
        <>
            <Button className='m-3' onClick={handleShow}>SHOW MY PLANS</Button>

            <Modal className='text-dark' show={show} onHide={handleClose}>
                <Modal.Body>
                    <h4>Check our plans</h4>

                    <Form>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Phone type</Form.Label> <br />
                            <Form.Select aria-label="Default select example">
                                <option selected hidden>Select phone type</option>
                                <option value="1">Android</option>
                                <option value="2">iPhone</option>
                                <option value="3">Windows</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Phone range</Form.Label> <br />
                            <Form.Select aria-label="Default select example">
                                <option selected hidden>Select phone range</option>
                                <option value="1">&gt; 20,000</option>
                                <option value="2">&gt; 30,000</option>
                                <option value="3">&gt; 40,000</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control name='phone' onChange={handleChange} type="tel" placeholder="Enter phone" />
                        </Form.Group>

                        <Button variant="secondary" size="sm" onClick={handleClose} >
                            Cancel
                        </Button> &nbsp;&nbsp;
                        <Button variant="primary" size="sm" >
                            Show plans
                        </Button> <br /><br />

                    </Form>

                </Modal.Body> 
            </Modal>
        </>
    );
}

export default FormModal;