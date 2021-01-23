import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

import Hero from '../../Hero/Hero'

function Login() {
  const [user, setUser] = useState('')

  // Reference input fields
  const emailRef = useRef()
  const newPasswordRef = useRef()

  // Set up input field states
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    console.log(email, password)
  }, [email, password])

  const handleFormSubmit = (event) => {
    event.preventDefault()
    // HANDLE SIGN IN AND AUTHENTICATION PROCESS.
    // MAKE A CALL TO GET API ROUTE TO FETCH THE CORRECT USER OBJECT
    // AND SET IT TO A STATE.
  }

  return (
    <div className="wrapper">
      <div className="row">
        <div className="col">
          <Hero />
        </div>
        <div className="col">
          <form onSubmit={(event) => handleFormSubmit(event)}>
            <div className="form-group">
              <label for="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={(event) => setEmail(event.target.value)}
                ref={emailRef}
              ></input>
            </div>

            <div className="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                onChange={(event) => setPassword(event.target.value)}
                ref={newPasswordRef}
              ></input>
              <button type="submit" className="btn btn-primary">
                Sign In
              </button>
            </div>

            <div className="form-group">
              <small id="redirectSignin" className="form-text text-muted">
                Don't have an account yet?
              </small>
              <Link to="/signup">
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
              </Link>
            </div>
            <Link to="/quiz">
              <button type="submit" className="btn btn-primary">
                GO TO QUESTIONS
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login