import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AllUser } from '../redux/slice/admin'
import Table from 'react-bootstrap/Table';
import Navbar from '../component/navbar-admin'
import { format } from 'timeago.js';

const Admin = () => {
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
            <Navbar /> <br />
            <Table style={{ width: "90%", margin: "auto" }} className='text-center' responsive bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Joined</th>
                        <th>Contacted</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((e,i) => (
                            <tr>
                                <td>{i+1}</td>
                                <td>{e.profile.name}</td>  
                                <td>{e.profile.email}</td>  
                                <td><a href={`tel:+91${e.profile.phone}`}>{e.profile.phone}</a></td>  
                                <td>{format(e.updatedAt)}</td>
                                <td>pending</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </>
    )
}

export default Admin