import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AllUser, ChangeVerified, ServicesUser } from '../redux/slice/admin'
import Table from 'react-bootstrap/Table';
import moment from 'moment/moment';
import Button from 'react-bootstrap/Button';
import { Card, Form, Modal } from 'react-bootstrap';

const NewUser = () => {
    const dispatch = useDispatch()
    const [data, setData] = useState([])

    const [show, setShow] = useState(false);
    const [img, setImg] = useState(null); 
    const [coustomer, setCoustomer] = useState(null);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getAllUser = async () => {
        const res = await dispatch(ServicesUser())
        setData(res?.payload)
    }

    useEffect(() => {
        getAllUser()
    }, [])

    const handleCoustomerShow = (e) => {
        setCoustomer(e)
        handleShow()
    } 

    return (
        <>

            {/* model for each  */}
            {
                coustomer && (<Modal className='text-dark' show={show} onHide={handleClose}> 
                        <Card className='text-dark' >
                            <Card.Header> <b>₹ {coustomer.plans.plan.price}/-&nbsp;</b> {coustomer.plans.plan.duration * 28} days  ({coustomer.plans.plan.duration}month)</Card.Header>
                            <Card.Body>
                                <Card.Title>{coustomer.plans.plan.title}</Card.Title>
                                <Card.Text>{coustomer.plans.plan.desc}</Card.Text>
                                &nbsp; <small>Name&nbsp; : </small> <b>{coustomer.profile.name}</b> <br />
                                &nbsp; <small>Email &nbsp; : </small> <b>{coustomer.profile.email}</b><br />
                                &nbsp; <small>Phone&ensp;: </small> <b>{coustomer.profile.phone}</b><br />
                                &nbsp; <small>IMEI &ensp;&ensp;:</small> <b>{coustomer.plans.imei}</b> <br />
                                &nbsp; <small>Joined : </small> <b>{moment(coustomer.createdAt).format("ll")}</b> <br />
                                &nbsp; <small>Expire  : </small> <b>{moment(Number(coustomer.expire.date)).format("ll")}</b> <br />
                                &nbsp; <small>Bill R. &ensp;: </small><img onClick={() => setImg(coustomer.plans.bill)} style={{borderRadius:"100px",border:"1px solid gray",margin:"0px 5px",padding:"3px"}} src={coustomer.plans.bill} alt="" height={50}/> <br />
                                &nbsp; <small>Phone Image: </small> {
                                    coustomer.plans.phoneImg.length && coustomer.plans.phoneImg.map(e => (
                                        <img onClick={() =>{setImg(e)}} key={e.id} style={{borderRadius:"100px",border:"1px solid gray",margin:"0px 5px",padding:"3px"}} src={e} alt="" height={50}/>
                                    ))
                                } <br />
                               
                                
                            </Card.Body>
                        </Card>  
                </Modal>)
            }


            <Modal show={img} onHide={() => setImg(null)}>
                <img src={img} alt="" />
            </Modal>



            <h4 className='text-center pb-3'>New Users table</h4>
            <Table style={{ width: "90%", margin: "auto" }} className='text-center' responsive bordered size="sm" variant='dark'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Expire</th>
                        <th>Other</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        data?.map((e, i) => {
                            {
                                return e.expire.status && (
                                    <tr key={i}>
                                        <td>{e.profile?.name}</td>
                                        <td>{e.profile?.email}</td>
                                        <td><a href={`tel:+91${e.profile?.phone}`}>{e.profile?.phone}</a></td>
                                        <td>{moment(Number(e.expire.date)).format("ll")}</td>
                                        <td><Button onClick={() => handleCoustomerShow(e)} variant="outline-success" className='btn-sm' style={{ width: "100px" }}>More...</Button></td>
                                    </tr>
                                )
                            }
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}

export default NewUser