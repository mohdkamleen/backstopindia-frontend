import React, { useEffect, useState } from 'react'
import Navbar from '../component/navbar'
import Footer from '../component/footer'
import { Button, Card, Form, Table } from 'react-bootstrap'
import { AiFillPlusCircle } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { updateUser } from '../redux/slice/user'
import axios from '../apis/axios'

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
  const [formValue, setFormValue] = useState(defaultValue);
  const [model, setModel] = useState("default");

  useEffect(() => {
    setFormValue(JSON.parse(window.localStorage.getItem("userContact")));
  }, []);
   
  
  useEffect(() => {
    !plans.os && !plans.range && navigate("/plans", { replace: true })
  }, [])

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formValue.name && !formValue.email && !formValue.phone && !formValue.imei) {
      return toast.warn("All feilds are required")
    }
    const res = await dispatch(updateUser(formValue))
    if (res) {
      setModel("image")
    }
  }

  return (
    <>
      <Navbar />

      <div className='mx-5' >
        <br />

        {
          model === 'default' && (

            <Form style={{ maxWidth: "500px" }} className='m-auto d-block'>
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


              <Button className='d-block m-auto' variant='primary' onClick={handleSubmit}>
                Continue and Next
              </Button>
              <br />
            </Form>
          )
        }

        {
          model === "image" && (
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Upload Your Bill receipt</Form.Label> <br />

              <label htmlFor="plan-bill-image">
                <AiFillPlusCircle style={{border:"1px solid lightgray",padding:"30px",marginLeft:"10px"}} size={100} color="lightblue"/>
              </label>

              <input style={{display:"none"}} id='plan-bill-image' type="file" onChange={async (e) => {
                // setImageLoading(true)
                const dataa = new FormData();
                dataa.append("file", e.target.files[0]); 
                var resp = await axios.post("/upload/image", dataa);
                console.log(resp.data.path);
                // setFormValue({ ...formValue, image: res.data.path })
                // setImageLoading(false)
              }} />  

            </Form.Group>
          )
        }

      </div>

      <Footer />
    </>
  )
}

export default Apply