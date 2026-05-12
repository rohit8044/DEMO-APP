// Login.jsx

import './Login.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

function Login() {
  return(
    <>
      <div className="logcotainer">

        <div className='login-items'>

          <h1 className='login-text'>Login</h1>

          {/* Username */}
          <div className='input-group'>
            <i>
              <FontAwesomeIcon icon={faUser} />
            </i>

            <input
              type='text'
              placeholder='Enter Username'
              required
              className='login-input-box'
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
              required
              className='login-input-box'
            />
          </div>

          <button className='login-btn'>
            Login Now
          </button>

          <p className='bottom-text'>
            Don't have an account? <span>Register</span>
          </p>

        </div>

      </div>
    </>
  )
}

export default Login