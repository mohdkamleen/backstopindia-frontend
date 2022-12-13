import React from 'react'
import { FaGoogle } from 'react-icons/fa'

const Login = () => {
  return (
    <>
      <h2 className='text-center my-5'>Admin Login</h2>
      <form action="#" className='text-center'>
        <label>
          Phone or Email :
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <br />
          <input type="text" placeholder='Type your phone or email' className='form-control' />
        </label> 
        
        <br /> <br /> 
        <label>
          Otp :
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <br />
          <input type="text" placeholder='Enter otp' className='form-control' />
        </label>

      </form> <br />
      <center>or</center> <br />
      <button className='btn btn-dark d-block m-auto'><FaGoogle /> Login with Google</button>

    </>
  )
}

export default Login