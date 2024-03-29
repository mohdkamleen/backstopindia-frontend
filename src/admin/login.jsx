import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { FaGoogle } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { auth, provider, firebase } from '../firebase/index'
import { LoginAdmin } from '../redux/slice/admin'


const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const otpValue = useRef()
  const admin = useSelector(state => state.admin)

  const [email, setEmail] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)
  const [otp, setOtp] = useState('')
  const [token, setToken] = useState('')


  useEffect(() => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: function (response) {
          console.log("Captcha Resolved");
          this.onSignInSubmit();
        },
        defaultCountry: "IN",
      }
    );
  }, []);



  useEffect(() => {
    window.localStorage.getItem("token") && navigate("user", { replace: true })
  }, [])



  // Sign in with google
  const signin = () => {
    auth.signInWithPopup(provider).then(async (e) => {
      const res = await dispatch(LoginAdmin(e.user.multiFactor.user))
      !res.payload.length && toast.warn("User not exit.")
      res.payload.length && window.localStorage.setItem("token", res.payload[0]._id)
      res.payload.length > 0 && navigate("user", { replace: true })
    })
  }

  const handleOtp = async (e) => {
    e.preventDefault()
    if (!email) return toast.warn("Please fill the blank")
    const res = await dispatch(LoginAdmin({ "email": email }))
    if (res.payload.length) {
      setToken(res.payload[0]._id)
      if (email.includes("@")) {
        toast.warn("Pls login with phone.")
      } else {
        loginSubmitPhone()
      }
    } else {
      setIsAdmin(false)
      toast.error("User not exist.")
    }
  }

  const handleLogin = (e) => {
    e.preventDefault()
    otpSubmit()
  }

  const handleEmail = (e) => {
    setEmail(e.target.value.toLowerCase().trim())
    setIsAdmin(false)
  }



  const loginSubmitPhone = () => {
    let phone_number = "+91" + email;
    const appVerifier = window.recaptchaVerifier;
    auth
      .signInWithPhoneNumber(phone_number, appVerifier)
      .then((confirmationResult) => {
        console.log("otp sent");
        window.confirmationResult = confirmationResult;
        setIsAdmin(true)
      })
      .catch((error) => {
        toast.error(error.message);
        if (error.message === "reCAPTCHA has already been rendered in this element") return setIsAdmin(true)
      });
  }

  const otpSubmit = () => {
    let opt_number = otp;
    window.confirmationResult
      .confirm(opt_number)
      .then((confirmationResult) => {
        console.log(confirmationResult);
        localStorage.setItem("token", token)
        navigate("user", { replace: true })
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };


  // auth.onAuthStateChanged((user) => {
  //   if (user) {
  //     localStorage.setItem("token", token)
  //   } else {
  //     localStorage.removeItem("token")
  //   }
  // });



  return (
    <>

      <h2 className='text-center my-5'>Admin Login</h2>
      <form action="#" className='text-center'>
        <label>
          Phone or Email :
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <br />
          <input value={email} onChange={handleEmail} type="text" placeholder='Type your phone or email' className='form-control' />
        </label>

        {
          isAdmin && (
            <div className='mt-3'>
              <label>
                Otp :
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <br />
                <input ref={otpValue} value={otp} onChange={(e) => setOtp(e.target.value)} type="text" placeholder='Enter otp' className='form-control' />
              </label>
            </div>
          )
        }

        <br /><br />

        {
          isAdmin
            ? <button className='btn btn-light' onClick={handleLogin}>Verify and Login</button>
            : <button className='btn btn-light' onClick={handleOtp}>Send Otp {admin.loading && <img src="./assest/image/loading.gif" width={20} style={{ marginBottom: "5px" }} />} </button>
        }

      </form> <br />
      <center>or</center> <br />
      <button onClick={signin} className='btn btn-light d-block m-auto'><FaGoogle /> Login with Google</button>

      <div id="recaptcha-container"></div>

      <div className='admin-login-circle'></div>
    </>
  )
}

export default Login