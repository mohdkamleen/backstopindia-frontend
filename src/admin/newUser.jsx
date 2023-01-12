import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AllUser, ChangeVerified } from '../redux/slice/admin'
import Table from 'react-bootstrap/Table';
import { AiOutlineCheck } from 'react-icons/ai'
import { format } from 'timeago.js';
import Button from 'react-bootstrap/Button'; 
import { useLocation } from 'react-router-dom';

const NewUser = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const [data, setData] = useState([])

    const getAllUser = async () => {
        const res = await dispatch(AllUser())
        setData(res?.payload)
    }

    useEffect(() => {
        getAllUser()
    }, [])

    const changeVerified = async (e) => {
        const res = await dispatch(ChangeVerified(e))
        res?.payload?.user && window.location.reload()
    }

    return (
        <> 
            <h4 className='text-center pb-3'>New Users table</h4>
            <Table style={{ width: "90%", margin: "auto" }} className='text-center' responsive bordered size="sm" variant='dark'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Requested At</th>
                        <th>Move Verified</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        data?.map((e, i) => {
                            {
                                return !e.verified && (
                                    <tr key={i}>
                                        <td>{e.profile.name}</td>
                                        <td>{e.profile.email}</td>
                                        <td><a href={`tel:+91${e.profile.phone}`}>{e.profile.phone}</a></td>
                                        <td>{format(e.updatedAt)}</td>
                                        <td><Button onClick={() => changeVerified(e)} variant="outline-success" className='btn-sm' style={{ width: "100px" }}><AiOutlineCheck size={15} /></Button></td>
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