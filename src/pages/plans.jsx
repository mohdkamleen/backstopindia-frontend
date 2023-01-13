import React from 'react'
import Navbar from '../component/navbar'
import Footer from '../component/footer'
import { Button, Card, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { plansData } from '../component/plansData'
import { addPlans } from '../redux/slice/plans'

const Terms = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const plans = useSelector(state => state.plans)
  
  useEffect(() => {
    !plans.os && !plans.range && navigate("/", { replace: true })
  }, [])

  const handleAddPlan = async (e) => {
    var res = await dispatch(addPlans(e))
    res.payload && navigate("/apply");
  }

  return (
    <>
      <Navbar />
      <div className='px-5 plans-section mt-4'>
        <div className='d-flex justify-content-center flex-wrap gap-3 '>
          {
           plans.os && plans.range && plansData[plans.os][plans.range].map((e,i) => (
              <Card className='text-dark' key={i}>
                <Card.Header> <b>₹ {e.price}/-&nbsp;</b> {e.duration * 28} days  ({e.duration}month)</Card.Header>
                <Card.Body>
                  <Card.Title>{e.title}</Card.Title>
                  <Card.Text>{e.desc}</Card.Text>
                  <Button variant="primary" onClick={() => handleAddPlan(e)}>Buy this plan</Button>
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
