import React, { useState } from 'react'
import './LoginOrganic.css'
import { assets } from '../../assets/assets'


const LoginOrganic = ({setShowLogin}) => {
    const[currState,setCurrState] = useState("Sign Up")

    return (
      <div className='login-popup'>
        <form className="login-popup-container">
          <div className="login-popup-title">
              <h2>{currState}</h2>
              <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
          </div>
          <div className="login-popup-inputs">
              {currState==="Login"?<></>:<input type="text" placeholder='Your Name' required />}
              
              <input type="email" placeholder='Your Email' required/>
              <input type="password" placeholder='Password' required/>
          </div>
          <button>{currState==="Sign Up"?"Create account":"Login  "}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to terms of  use & Privacy policy.</p>
        </div>
        {currState==="Login"
        ?<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Chick here</span></p>
        :<p>Aliready have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
        }
        </form>
      </div>
    )
  }

export default LoginOrganic
