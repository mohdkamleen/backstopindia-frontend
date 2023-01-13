import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { addPhone } from '../redux/slice/plans';
import { useNavigate } from 'react-router-dom';

function FormModal() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const plans = useSelector(state => state.plans)
    const [show, setShow] = useState(false);
    const [formValue, setFormValue] = useState(plans);


    useEffect(() => {
        return () => setFormValue(plans);
    }, []);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleChange = async (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value })
    }
    const handleOsChange = (e) => {
        dispatch(addPhone({ ...formValue, os: e.target.value }))
        setFormValue({ ...formValue, [e.target.name]: e.target.value })
    }

    const handlePlans = async () => {
        if (!formValue.os) return toast.warn("Pls select your phone type")
        if (!formValue.range) return toast.warn("Pls select your phone range")
        const res = await dispatch(addPhone(formValue))
        res && navigate("/plans")
    }
    return (
        <>
            <Button className='m-3' onClick={handleShow}>SHOW MY PLANS</Button>

            <Modal className='text-dark' show={show} onHide={handleClose}>
                <Modal.Body >
                    <h4>Check our plans</h4>

                    <Form>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Phone type</Form.Label> <br />
                            <Form.Select name='os' value={formValue.os} onChange={handleOsChange} aria-label="Default select example">
                                <option selected hidden>Select phone type</option>
                                <option value="Android">Android</option>
                                <option value="iPhone">iPhone</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Phone range</Form.Label> <br />
                            <Form.Select value={formValue.range} onChange={handleChange} name='range' aria-label="Default select example">
                                <option hidden>Select phone range</option>
                                {
                                    plans.os === "iPhone" && (
                                        <>
                                            <option value="50kto100k"> 50,000 to 1,00,000</option>
                                            <option value="100k"> Above 1,00,000</option>
                                        </>
                                    )
                                }
                                {
                                    plans.os === "Android" && (
                                        <>
                                            <option value="20k"> Upto 19,999</option> 
                                            <option value="20kto40k"> 20,000 to 39,999 </option>
                                        </>
                                    )
                                }
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Imei number (optional) </Form.Label>
                            <Form.Control name='imei' onChange={handleChange} value={formValue.imei} type="tel" placeholder="Enter phone" />
                        </Form.Group>

                        <Button variant="secondary" size="sm" onClick={handleClose} >
                            Cancel
                        </Button> &nbsp;&nbsp;
                        <Button variant="primary" size="sm" onClick={handlePlans}>
                            Show plans
                        </Button> <br /><br />

                    </Form>

                </Modal.Body>
            </Modal>
        </>
    );
}

export default FormModal;