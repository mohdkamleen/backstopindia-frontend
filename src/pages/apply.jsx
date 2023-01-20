import React, { useEffect, useState } from 'react'
import Navbar from '../component/navbar'
import Footer from '../component/footer'
import { Breadcrumb, Button, Card, Form, Table } from 'react-bootstrap'
import { AiFillMail, AiFillPhone, AiFillPlusCircle, AiOutlineGlobal, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { CiLocationOn } from 'react-icons/ci'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { useLocation, useNavigate } from 'react-router-dom'
import { updateUser } from '../redux/slice/user'
import axios from 'axios'
import useRazorpay from "react-razorpay";
import { addBill, addPhone, addPhoneImg, updateImei } from '../redux/slice/plans'
import { patchUser, updatePayment } from '../redux/slice/admin'
import { addAll } from '../redux/slice/coustomer'
import moment from 'moment/moment'
import { jsPDF } from "jspdf";
import { useRef } from 'react'

const Apply = () => {
  const user = useSelector(state => state)
  const plans = useSelector(state => state.plans)
  const { coustomer } = useSelector(state => state.coustomer)


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
  const [pdfLoading, setPdfLoading] = useState(false)
  const [phoneImgLoading, setPhoneImgLoading] = useState(false)

  useEffect(() => {
    JSON.parse(window.localStorage.getItem("userContact")) && setFormValue({ ...formValue, ...JSON.parse(window.localStorage.getItem("userContact")) });
  }, []);


  useEffect(() => {
    !plans.os && !plans.range && navigate("/plans", { replace: true })
  }, [])

  const pdfRef = useRef(null)

  const handlePdf = () => {
    setPdfLoading(true)
    const pdf = new jsPDF({
      format: 'a4',
      unit: 'pt',
    });
    pdf.html(pdfRef.current, {
      async callback(doc) {
        setPdfLoading(false)
        await doc.save(coustomer.profile?.name.toLowerCase().split(" ")[0] + "-bsi");
      },
    });
  }

  const PdfHtml = () => (
    <div style={{ width: "100% !important", border: "2px solid gray", padding: "5px", overflow: "auto", maxWidth: "700px", margin: "auto" }}>
      <div ref={pdfRef} className=' bg-light text-dark px-5 ' style={{ minWidth: "600px", width: "100%" }}>
        <small style={{marginLeft:"-40px"}}>{coustomer?._id}</small>
        <h3 className='text-center pt-3 pb-5'><u>Warrenty Latter</u></h3>
        <div className='d-flex justify-content-between'>
          <h6>Joined : {moment(coustomer.createdAt).format("ll")}</h6>
          <h6>Expire : {moment(Number(coustomer.expire.date)).format("ll")}</h6>
        </div> 
        <h5>Congrats, {coustomer?.profile?.name}</h5>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi officia, modi aut aliquam laudantium voluptatibus obcaecati facilis reprehenderit cumque vel nihil ad quae a quam quo debitis soluta tempora dolorem ea quos commodi! Assumenda omnis, est quia, perspiciatis fugiat reprehenderit molestias, debitis corrupti quo ad harum temporibus doloremque cumque adipisci!</p>
        <p><b>As servised user of BACKSTOPINDIA you are subjected to the following conditions:- </b></p>
        <p><b>Note :</b> Return a signed copy of this letter as your acceptance.</p><br />
        <div className='d-flex justify-content-between'>
          <div></div>
          <div style={{ maxWidth: "320px" }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img src="./assest/image/verified-stamp.png" alt="" width={170} />   <br />
            <b> <AiOutlineGlobal size={25} color="darkgreen" /> www.backstopindia.com </b> <br />
            <b> <AiOutlineMail size={25} color="darkgreen" /> support@backstopindia.com </b> <br />
            <b> <AiOutlinePhone size={25} color="darkgreen" /> +919310348547 </b> <br />
            <b> <CiLocationOn size={25} color="darkgreen" /> Sherwani Nagar, Lucknow UP 226021 </b> <br />
          </div>
        </div> <br /><br />
      </div>
    </div>
  )



  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value })
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formValue.name || !formValue.email || !formValue.phone || !formValue.imei) {
      return toast.warn("All feilds are required")
    }
    const res = await dispatch(updateUser(formValue))
    await dispatch(updateImei(formValue.imei))
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
        await dispatch(addAll(res.payload))
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
    if (!plans.bill) return toast.warn("Pls insert your bill")
    if (plans.phoneImg.length < 2) return toast.warn("Minimum two image required of phone")
    const res = await dispatch(patchUser(user))
    console.log(res.payload);
    if (res.payload._id) {
      setCustomerId(res.payload._id)
      setModel("payment")
    } else {
      toast.warn("Something went wrong pls check")
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
          {(model === "upload" || model === "payment" || model === "success") && <Breadcrumb.Item active={model === "upload" || model === "success"} onClick={() => { model != "success" && setModel("upload") }}>Upload</Breadcrumb.Item>}
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

              <Button onClick={handlePaymentAndRegister}>Continue and next  {user.admin.loading && <img src="./assest/image/loading.gif" width={20} style={{ marginBottom: "5px" }} />} </Button>

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
            // <div style={{ maxWidth: "600px" }} className='m-auto d-block'>

            //   <h2>Congrates {coustomer?.profile?.name} </h2>
            //   <Card className='text-dark' >
            //     <Card.Header> <b>₹ {coustomer.plans?.plan.price}/-&nbsp;</b> {coustomer.plans?.plan.duration * 28} days  ({coustomer.plans?.duration}month)</Card.Header>
            //     <Card.Body>
            //       <Card.Title>{coustomer.plans?.plan.title}</Card.Title>
            //       <Card.Text>{coustomer.plans?.plan.desc}</Card.Text>
            //       &nbsp; <small>Name&nbsp; : </small> <b>{coustomer.profile?.name}</b> <br />
            //       &nbsp; <small>Email &nbsp; : </small> <b> {coustomer.profile?.email}</b><br />
            //       &nbsp; <small>Phone&ensp;: </small> <b> {coustomer.profile?.phone}</b><br />
            //       &nbsp; <small>IMEI &ensp;&ensp;:</small> <b>{coustomer.plans?.imei}</b> <br />
            //       &nbsp; <small>Joined : </small> <b>{moment(coustomer.createdAt).format("ll")}</b> <br />
            //       &nbsp; <small>Expire&ensp;: </small> <b>{moment(Number(coustomer.expire.date)).format("ll")}</b> <br />
            //       &nbsp; <small>Bill R. &ensp;: </small> <b style={{ color: "green" }}>File Uploaded </b> <br />
            //       &nbsp; <small>Phone&nbsp;: </small> <b style={{ color: "green" }}> {coustomer.plans?.phoneImg.length} Image Uploaded </b> <br /><br />

            //     </Card.Body>
            //   </Card>  
            // </div>
            <>
              <PdfHtml /> <br />
              <Button onClick={handlePdf} className="d-block m-auto">Download Reciept {pdfLoading && <img src="./assest/image/loading.gif" width={20} style={{ marginBottom: "5px" }} />} </Button>
            </>
          )
        }
      </div>


      <Footer />
    </>
  )


}

export default Apply



