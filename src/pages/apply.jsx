import React, { useEffect, useState } from 'react'
import Navbar from '../component/navbar'
import Footer from '../component/footer'
import { Button, Card, Form, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Apply = () => {
  const plans = useSelector(state => state.plans)

  const defaultValue = {
    name: "",
    email: "",
    phone: "",
    imei: plans.imei
  }

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [agreed, setAgreed] = useState(false);
  const [formValue, setFormValue] = useState(defaultValue);

  useEffect(() => {
    setFormValue(JSON.parse(window.localStorage.getItem("userContact")));
  }, []);


  useEffect(() => {
    !plans.os && !plans.range && navigate("/plans", { replace: true })
  }, [])

  const handleAgreed = () => {
    setAgreed(!agreed)
  }

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formValue.name === "" || formValue.email === "" || formValue.phone === "") {
      return toast.warn("All feilds are required")
    }
    if (!agreed) return toast.warn("Please read our condition")
    // const res = await dispatch(registeUser(formValue))
    // if (res) {
    //     console.log(res);
    //     toast.success("Success")
    //     setShow(false)
    //     setAgreed(false)
    //     setFormValue(defaultValue)
    // }
  }
  return (
    <>
      <Navbar />

      <div className='m-auto d-block' style={{ maxWidth: "500px" }}>
        <br />
        <Form>

          <Card className='text-dark' >
            <Card.Header> <b>₹ {plans.plan.price}/-&nbsp;</b> {plans.plan.duration * 28} days  ({plans.duration}month)</Card.Header>
            <Card.Body>
              <Card.Title>{plans.plan.title}</Card.Title>
              <Card.Text>{plans.plan.desc}</Card.Text>
            </Card.Body>
          </Card> <br />


          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control name='name' onChange={handleChange} value={formValue.name} type="text" placeholder="Enter name" />
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" onChange={handleChange} value={formValue.email} type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Phone</Form.Label>
            <Form.Control name='phone' onChange={handleChange} type="tel" value={formValue.phone} placeholder="Enter phone" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>IMEI Number</Form.Label>
            <Form.Control name='imei' onChange={handleChange} type="tel" value={formValue.imei} placeholder="Enter IMEI" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check onChange={handleAgreed} checked={agreed} type="checkbox" label="Are you sure want to call from us" />
          </Form.Group>

          <Button variant='outline-primary'>
            Submit
          </Button>
        </Form>
      </div>

      <Footer />
    </>
  )
}

export default Apply