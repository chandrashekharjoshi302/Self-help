import React from 'react'
import '../Style/Login.css'

function Login() {
  return (
    <div className='main'>
        <div className='child'>
            <span className='login'>Login</span>
        <div>
            <label htmlFor="">Name*</label>
            <input type="text" placeholder='Your Name'/>
        </div>
        <div>
            <label htmlFor="">Email*</label>
            <input type="email" placeholder='Email'/>
        </div>
        <div>
            <label htmlFor="">Phone*</label>
            <input type="call" placeholder='Mobile'/>
        </div>
        <button>Submit</button>
        </div>
    </div>
  )
}

export default Login