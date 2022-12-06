import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AllUser } from '../redux/slice/admin' 
import Navbar from '../component/navbar-admin' 
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
    return (
        <>
            <Navbar />  <br />
            <Outlet /> 
        </>
    )
}

export default Admin