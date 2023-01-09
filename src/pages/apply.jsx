import React, { useEffect, useState } from 'react'
import Navbar from '../component/navbar'
import Footer from '../component/footer'
import { Button, Form, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const Terms = () => {
  const plans = useSelector(state => state.plans)

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


  const handleAgreed = () => {
    setAgreed(!agreed)
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

      <div className='mx-5'>
        <Form>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control name='name' type="text" placeholder="Enter name" />
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Phone</Form.Label>
            <Form.Control name='phone' type="tel" placeholder="Enter phone" />
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

export default Terms