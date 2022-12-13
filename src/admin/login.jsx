import { Button } from 'bootstrap'
import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { FaGoogle } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { auth, provider } from '../firebase/index'
import { LoginAdmin } from '../redux/slice/admin'


const Login = () => {


  const dispatch = useDispatch()
  const navigate = useNavigate()
  const otpValue = useRef()
  const [email, setEmail] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)
  const [otp, setOtp] = useState('')

  useEffect(() => {
    window.localStorage.getItem("adminId") && (
      navigate("newUser")
    )
  }, [])

  // Sign in with google
  const signin = () => {
    auth.signInWithPopup(provider).then(async (e) => {
      const res = await dispatch(LoginAdmin(e.additionalUserInfo.profile))
      window.localStorage.setItem("adminId", res.payload[0]._id)
      navigate("newUser", { replace: true })
    })
  }

  const handleLogin = async(e) => { 
    e.preventDefault()
    if(!email) return toast.warn("Please fill the blank")
    const res = await dispatch(LoginAdmin({"email":email}))
    if (res.payload.length) {
      setIsAdmin(true)
      otpValue.current.focus()
    } else {
      setIsAdmin(false)
      toast.error("User not exist.")
    }
  }


  return (
    <>
      <h2 className='text-center my-5'>Admin Login</h2>
      <form action="#" className='text-center'>
        <label>
          Phone or Email :
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <br />
          <input value={email} onChange={(e) => setEmail(e.target.value.trim())} type="text" placeholder='Type your phone or email' className='form-control' />
        </label>

        {
          isAdmin && (
            <div className='mt-3'>
              <label>
                Otp :
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <br />
                <input ref={otpValue} type="text" placeholder='Enter otp' className='form-control' />
              </label>
            </div>
          )
        }

      <br /><br />  
      
      {
        isAdmin 
        ? <button className='btn btn-light' onClick={handleLogin}>Verify and Login</button>
        : <button className='btn btn-light' onClick={handleLogin}>Send Otp</button>
      }
      
      </form> <br />
      <center>or</center> <br />
      <button onClick={signin} className='btn btn-light d-block m-auto'><FaGoogle /> Login with Google</button>


      <div className='admin-login-circle'></div>
    </>
  )
}

export default Login