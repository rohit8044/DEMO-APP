// Register.jsx

import './Register.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faUser,
  faEnvelope,
  faLock
} from "@fortawesome/free-solid-svg-icons";

function Register() {
  return (
    <>
      <div className="regcontainer">

        <div className='register-box'>

          <h1 className='register-title'>
            Register
          </h1>

          {/* Username */}
          <div className='input-group'>
            <i>
              <FontAwesomeIcon icon={faUser} />
            </i>

            <input
              type='text'
              placeholder='Enter Username'
              className='register-input'
            />
          </div>

          {/* Email */}
          <div className='input-group'>
            <i>
              <FontAwesomeIcon icon={faEnvelope} />
            </i>

            <input
              type='email'
              placeholder='Enter Email'
              className='register-input'
            />
          </div>

          {/* Password */}
          <div className='input-group'>
            <i>
              <FontAwesomeIcon icon={faLock} />
            </i>

            <input
              type='password'
              placeholder='Enter Password'
              className='register-input'
            />
          </div>

          <button className='register-btn'>
            Create Account
          </button>

          <p className='bottom-text'>
            Already have an account? <span>Login</span>
          </p>

        </div>

      </div>
    </>
  )
}

export default Register