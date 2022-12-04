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
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (formValue.name === "" || formValue.email === "" || formValue.phone === "") {
            return toast.warn("All feilds are required")
        }
        if (!agreed) return toast.warn("Please read our condition")
        const res = await dispatch(registeUser(formValue))
        if (res) {
            console.log(res);
            toast.success("Success")
            setShow(false)
            setAgreed(false)
            setFormValue(defaultValue)
        }
    }

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
                            <Form.Control onChange={handleChange} name='name' type="text" placeholder="Enter name" />
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" onChange={handleChange} type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control name='phone' onChange={handleChange} type="tel" placeholder="Enter phone" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check onChange={handleAgreed} checked={agreed} type="checkbox" label="Are you sure want to call from us" />
                        </Form.Group>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" size="sm" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} variant="primary" size="sm" >
                        Submit and get call from us
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default FormModal;