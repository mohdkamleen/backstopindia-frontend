import React, { useEffect, useState } from 'react'
import Navbar from '../component/navbar'
import Footer from '../component/footer'
import { Breadcrumb, Button, Card, Form, Table } from 'react-bootstrap'
import { AiFillPlusCircle } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { useLocation, useNavigate } from 'react-router-dom'
import { updateUser } from '../redux/slice/user'
import axios from 'axios'
import useRazorpay from "react-razorpay";
import { addBill, addPhoneImg } from '../redux/slice/plans'
import { patchUser, updatePayment } from '../redux/slice/admin'

const Apply = () => {
  const user = useSelector(state => state)
  const plans = useSelector(state => state.plans)

  const defaultValue = {
    name: "",
    email: "",
    phone: "",
    imei: plans.imei
  }

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const Razorpay = useRazorpay();
  const [formValue, setFormValue] = useState(defaultValue);
  const [model, setModel] = useState("default");
  const [customerId, setCustomerId] = useState("");
  const [imageLoading, setImageLoading] = useState(false)
  const [phoneImgLoading, setPhoneImgLoading] = useState(false)

  useEffect(() => {
    JSON.parse(window.localStorage.getItem("userContact")) && setFormValue({ ...formValue, ...JSON.parse(window.localStorage.getItem("userContact")) });
  }, []);


  useEffect(() => {
    !plans.os && !plans.range && navigate("/plans", { replace: true })
  }, [])

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formValue.name || !formValue.email || !formValue.phone || !formValue.imei) {
      return toast.warn("All feilds are required")
    }
    const res = await dispatch(updateUser(formValue))
    if (res) {
      setModel("upload")
    }
  }


  const handlePayment = async (amount) => {
    // const order = await createOrder(params); //  Create order on your backend

    const options = {
      key: "rzp_test_zr0e0xCtwZpA90", // Enter the Key ID generated from the Dashboard
      amount: amount * "100", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Backstop India ",
      description: "Test Transaction",
      image: "https://www.backstopindia.com/assest/image/logo-sm-removebg.png",
      // order_id: "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
      handler: async function (response) { 
        const res = await dispatch(updatePayment({
          paymentId: response.razorpay_payment_id,
          _id: customerId, 
        }))
        console.log(res.payload);
        setModel("success")
      },
      prefill: {
        name: formValue.name,
        email: formValue.email,
        contact: formValue.phone,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    
    const rzp1 = new Razorpay(options);
    
    rzp1.on("payment.failed", function (response) { 
      console.log(response.error.code);
      console.log(response.error.description);
      console.log(response.error.source);
      console.log(response.error.step);
      console.log(response.error.reason);
      console.log(response.error.metadata.order_id);
      console.log(response.error.metadata.payment_id);
    });
    
    rzp1.open();
  };
   
  
  const handlePaymentAndRegister = async () => {
    const res = await dispatch(patchUser(user))
    console.log(res.payload);
    if (res.payload) {
      setCustomerId(res.payload._id)
      setModel("payment")
    }
  }

  return (
    <>
      <Navbar />

      <div className='mx-5' > <br />

        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item onClick={() => { model != "success" && navigate("/plans") }} active={location.path === "plans" || model === "success"}>Plans</Breadcrumb.Item>
          <Breadcrumb.Item active={model === "default" || model === "success"} onClick={() => { model != "success" && setModel("default") }}>Apply</Breadcrumb.Item>
          {(model === "upload" || model === "payment" || model === "success") && <Breadcrumb.Item active={model === "upload" || model === "success"} onClick={() => { setModel("upload") }}>Upload</Breadcrumb.Item>}
          {(model === "payment" || model === "success") && <Breadcrumb.Item active={model === "payment" || model === "success"}>Payment</Breadcrumb.Item>}
        </Breadcrumb>

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
          model === "upload" && (
            <Form method='post' encType='multipart/form-data'>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Upload Your Bill Receipt</Form.Label> <br />

                {plans.bill && <img src={plans.bill} height={200} />}

                {
                  !plans.bill && (
                    !imageLoading
                      ? (
                        <label htmlFor="plan-bill-image" disabled>
                          <AiFillPlusCircle style={{ border: "1px solid lightgray", padding: "30px" }} size={100} color="lightblue" />
                        </label>
                      )
                      : <img src='./assest/image/loading.gif' width="50" style={{ padding: "20px 5px" }} />
                  )
                }


                <input style={{ display: "none" }} id='plan-bill-image' type="file"
                  onChange={async (e) => {
                    setImageLoading(true);
                    var data = new FormData();
                    data.append("file", e.target.files[0])
                    var res = await axios.post("http://localhost:8000/api/upload/image", data);
                    res.data.path && await dispatch(addBill(res.data?.path));
                    setImageLoading(false);
                  }} /> <br />

                <br />

                <Form.Label>Upload Your Phone Image</Form.Label>



                <input style={{ display: "none" }} id='phone-image' type="file"
                  onChange={async (e) => {
                    setPhoneImgLoading(true);
                    var data = new FormData();
                    data.append("file", e.target.files[0])
                    var res = await axios.post("http://localhost:8000/api/upload/image", data);
                    await dispatch(addPhoneImg(res.data?.path));
                    setPhoneImgLoading(false);
                  }} /> <br />

                {plans.phoneImg.map((e, i) => (
                  <img key={i} src={e} height="200" style={{ padding: "20px 5px" }} />
                ))}

                {
                  plans.phoneImg.length < 3 && (
                    !phoneImgLoading
                      ? (
                        <label htmlFor="phone-image">
                          <AiFillPlusCircle style={{ border: "1px solid lightgray", padding: "30px", margin: "0px 10px 10px 0px" }} size={100} color="lightblue" />
                        </label>
                      )
                      : <img src='./assest/image/loading.gif' width="50" style={{ padding: "20px 5px" }} />
                  )
                }



              </Form.Group>

              <Button onClick={handlePaymentAndRegister}>Continue and next</Button>

            </Form>
          )
        }

        {
          model === "payment" && (
            <>
              <Form style={{ maxWidth: "500px" }} className='m-auto d-block'>
                <Card className='text-dark' >
                  <Card.Header> <b>₹ {plans.plan.price}/-&nbsp;</b> {plans.plan.duration * 28} days  ({plans.duration}month)</Card.Header>
                  <Card.Body>
                    <Card.Title>{plans.plan.title}</Card.Title>
                    <Card.Text>{plans.plan.desc}</Card.Text>
                    &nbsp; <small>Name&nbsp; : </small> <b>{formValue.name}</b> <br />
                    &nbsp; <small>Email &nbsp; : </small> <b>{formValue.email}</b><br />
                    &nbsp; <small>Phone&ensp;: </small> <b>{formValue.phone}</b><br />
                    &nbsp; <small>IMEI &ensp;&ensp;:</small> <b>{formValue.imei}</b> <br />
                    &nbsp; <small>Bill R. &ensp;: </small> <b style={{ color: "green" }}>File Uploaded </b> <br />
                    &nbsp; <small>Phone&nbsp;: </small> <b style={{ color: "green" }}> {plans.phoneImg.length} Image Uploaded </b> <br /><br />

                    <Button onClick={() => handlePayment(plans.plan.price)}>Continue and Pay</Button>
                  </Card.Body>
                </Card>
              </Form>
            </>
          )
        }

        {
          model === "success" && (
            <h4>Payment Success...</h4>
          )
        }
      </div>

      <Footer />
    </>
  )
}

export default Apply