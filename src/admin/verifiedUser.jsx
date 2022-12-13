import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AllUser } from '../redux/slice/admin'
import Table from 'react-bootstrap/Table';  
import moment from 'moment/moment';
import { Link } from 'react-router-dom';

const VerifiedUser = () => {
    const dispatch = useDispatch()
    const [data, setData] = useState([])

    const getAllUser = async () => {
        const res = await dispatch(AllUser())
        setData(res?.payload)
    }
    useEffect(() => {
        getAllUser()
    }, []) 
    return (
        <> 
            <h4 className='text-center pb-3'>Verified users table</h4>
            <Table style={{ width: "90%", margin: "auto" }} className='text-center' responsive bordered size="sm">
                <thead className='bg-light text-dark'>
                    <tr> 
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th> 
                        <th>Verified At</th>
                    </tr>
                </thead>
                <tbody className='bg-dark'>
                    
                    {
                        data?.map((e, i) => {
                            {
                               return e.verified && (
                                    <tr key={e.id}> 
                                        <td>{e.profile.name}</td>
                                        <td>{e.profile.email}</td>
                                        <td><Link to={`tel:+91${e.profile.phone}`}>{e.profile.phone}</Link></td>
                                        <td>{moment(e.updatedAt).format("LLLL")}</td> 
                                    </tr>
                                )
                            }

                        })
                    }
                </tbody>
            </Table><br /><br />
        </>
    )
}

export default VerifiedUser