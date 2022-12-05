import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AllUser } from '../redux/slice/admin'
import Table from 'react-bootstrap/Table';
import Navbar from '../component/navbar-admin'
import { format } from 'timeago.js';
import { Outlet } from 'react-router-dom';

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
            <Navbar />  <br />
            <Outlet /> 
        </>
    )
}

export default Admin