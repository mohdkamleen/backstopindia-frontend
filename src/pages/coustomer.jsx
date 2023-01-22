import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../component/navbar'
import Footer from '../component/footer'
import { Breadcrumb, Button, Card, Form } from 'react-bootstrap'
import { AiFillPlusCircle } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment/moment'
import { jsPDF } from "jspdf";
import { useParams } from 'react-router-dom'
import axios from '../apis/axios'

export default () => {

  const [coustomer, setCustomer] = useState(null)
  const [pdfLoading, setPdfLoading] = useState(false)
  const param = useParams()

  useEffect(() => {
    axios.get(`/${param.id}`).then((res) => {
      res?.data && setCustomer(res.data)
    })
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



  return (
    <>
      <Navbar /> <br />

      {
        coustomer && (
          <div style={{ width: "90%", fontSize: "14px", border: "2px solid gray", padding: "5px", overflow: "auto", maxWidth: "620px", margin: "0px auto" }}>
            <div ref={pdfRef} className=' bg-light text-dark px-5 pb-5' style={{ minWidth: "600px", width: "100%" }}>
              <small style={{ marginLeft: "-40px" }}>{coustomer?._id}</small>
              <h4 className='text-center pt-3 pb-5'><u>Warrenty Latter</u></h4>
              <div className='d-flex justify-content-between'>
                <h6>Joined : {moment(coustomer.createdAt).format("ll")}</h6>
                <h6>Expire : {moment(Number(coustomer.expire.date)).format("ll")}</h6>
              </div>
              <h5>Congrats, {coustomer.profile?.name}</h5>

              <p>Dear <b>{coustomer.profile?.name}</b>, your mobile protection plan is successfully compleated with <b>{coustomer.plans.imei}</b> IMEI number.
                Also your activated plan is <b>₹ {coustomer.plans.plan.price}/-</b> for <b>{coustomer.plans.plan.duration}months</b> <small>{coustomer.plans.plan.duration * 28} days</small>.
                Your register phone number on this plan is <b>+91{coustomer.profile.phone}</b> and email is <b>{coustomer.profile.email}</b>. </p> <br />

              <p><b>As servises user of BACKSTOPINDIA you are subjected to the following conditions:- </b></p>
              <ol>
                <li>When phone condition is died means not able to use.</li>
                <li>You can claim from mail or website.</li>
                <li>After claime our team will contact soon.</li>
              </ol>
              <p><b>Note :</b> If your phone is already scretched or died then your service will cancelled and you will get refund 95% .</p><br />
              <div className='d-flex justify-content-between'>
                <div></div>
                <div style={{ maxWidth: "320px" }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <img src="./assest/image/verified-stamp.png" alt="" width={150} /><br />
                  <img src="./assest/image/globe-icon.png" height={20} /> &nbsp;www.backstopindia.com <br />
                  <img src="./assest/image/mail-icon.png" height={20} /> &nbsp;support@backstopindia.com <br />
                  <img src="./assest/image/phone-icon.png" height={20} /> &nbsp;+919310348547 <br />
                  <img src="./assest/image/location-icon.png" height={20} /> &nbsp;Sherwani Nagar, Lucknow UP 226021 <br />
                </div>
              </div>
            </div>
          </div>
        )
      }

      {
        coustomer && (
          <Button onClick={handlePdf} className="d-block my-3 mx-auto">Download Reciept {pdfLoading && <img src="./assest/image/loading.gif" width={20} style={{ marginBottom: "5px" }} />} </Button>
        )
      }

      {!coustomer && <img src="./assest/image/loading.gif" width={100}  className="d-block mb-4 mx-auto"/>}

      <Footer />
    </>
  )


}
