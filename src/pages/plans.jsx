import React from 'react'
import Navbar from '../component/navbar'
import Footer from '../component/footer'
import { Button, Card, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { plansData } from '../component/plansData'

const Terms = () => {
  const navigate = useNavigate()
  const plans = useSelector(state => state.plans)
  
  useEffect(() => {
    !plans.os && !plans.range && navigate("/", { replace: true })
  }, [])

  return (
    <>
      <Navbar />
      <div className='px-5 plans-section mt-4'>
        <div className='d-flex justify-content-center flex-wrap gap-3 '>
          {
           plans.os && plans.range && plansData[plans.os][plans.range].map((e,i) => (
              <Card >
                <Card.Header classname="bg-dark">₹ {e.price}/-&nbsp; {e.duration.split("")[0] * 28} days  ({e.duration})</Card.Header>
                <Card.Body classname="bg-dark">
                  <Card.Title>{e.title}</Card.Title>
                  <Card.Text>{e.desc}</Card.Text>
                  <Button variant="primary">Buy this plan</Button>
                </Card.Body>
              </Card>
            )
            )
          } 

        </div>
      </div> <br />
      <Footer />
    </>
  )
}

export default Terms
