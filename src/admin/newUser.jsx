import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AllUser } from '../redux/slice/admin'
import Table from 'react-bootstrap/Table';
import {AiOutlineCheck} from 'react-icons/ai'
import { format } from 'timeago.js';
import Button from 'react-bootstrap/Button';

const NewUser = () => {
    const dispatch = useDispatch()
    const [data, setData] = useState([])

    const getAllUser = async () => {
        const res = await dispatch(AllUser())
        setData(res?.payload)
    }
    useEffect(() => {
        getAllUser()
    }, [])
    console.log(data);
    return (
        <> 
            <h4 className='text-center pb-3'>New Users table</h4>
            <Table style={{ width: "90%", margin: "auto" }} className='text-center' responsive bordered hover size="sm"> 
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
                                    <tr> 
                                        <td>{e.profile.name}</td>
                                        <td>{e.profile.email}</td>
                                        <td><a href={`tel:+91${e.profile.phone}`}>{e.profile.phone}</a></td>
                                        <td>{format(e.updatedAt)}</td> 
                                        <td><Button variant="outline-success" className='btn-sm' style={{width:"100px"}}><AiOutlineCheck size={15}/></Button></td>
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