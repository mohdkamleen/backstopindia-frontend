import React from 'react'
import { Button, Spinner } from 'react-bootstrap'
import FormModal from './formModel'
import PlanModal from './planModel'

const banner = () => {
    return (
        <section className='banner' style={{ background: "url(ass est/image/crack-phone.jpg), linear-gradient(to right,rgba(0,0,0,0),rgba(255,255,255,.9))" }}>
            <div className="left">
                <img src="assest/image/undraw_alert.svg" alt="" />
            </div>
            <div className="right"> 
                <h3>Mobile protection plan</h3>
                <br />
                <h4>Protect your phone against <br /> Accidental & Liquid Damage</h4>
                <span className='text-danger'>Start from 99 only</span> &nbsp;
                <Spinner animation="grow" variant="danger" size='sm'/>
                <br /><br /> 
                <FormModal />
                <PlanModal />
                
            </div>
        </section>
    )
}

export default banner