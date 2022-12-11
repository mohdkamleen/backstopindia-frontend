import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AllQuery } from '../redux/slice/admin'
import Table from 'react-bootstrap/Table'; 
import { format } from 'timeago.js'; 

const Query = () => {
    const dispatch = useDispatch()
    const [data, setData] = useState([])

    const getAllUser = async () => {
        const res = await dispatch(AllQuery())
        setData(res?.payload)
    }
    useEffect(() => {
        getAllUser() 
    }, [])
 

    return (
        <>
            <h4 className='text-center pb-3'>New Users table</h4>
            <Table style={{ width: "90%", margin: "auto" }} className='text-center' responsive bordered  size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Query</th>
                        <th>Contacted At</th> 
                    </tr>
                </thead>
                <tbody>
 
                    {
                        data?.map((e, i) => {
                            {
                                return !e.verified && (
                                    <tr key={e.id}>
                                        <td>{i+1}</td>
                                        <td>{e.name}</td>
                                        <td>{e.contact}</td>
                                        <td>{e.query}</td>
                                        <td>{format(e.createdAt)}</td>
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

export default Query