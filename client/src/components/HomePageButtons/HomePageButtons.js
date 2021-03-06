/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const HomePageButtons = () => {
  return (
    <Link to="/quiz">
      {/* <button
        className="user-home-btn col-md-12"
        href=""
        style={{
          margin: "auto",
          height: "100px",
          marginTop: "90px",
          backgroundColor: "rgb(215 243 254)",
          borderWidth: "3px",
          border: "black solid thin",
          borderRadius: "15px",
        }}
      >
        <h2
          style={{
            padding: "5px",
            fontFamily:
              "Trebuchet MS, Lucida Sans Unicode, Lucida Grande, Lucida Sans, Arial, sans-serif",
          }}
        >
          DAILY QUIZ
        </h2>
      </button> */}
      <button
        href=""
        class="btn-gradient col-md-11 blue mini"
        style={{ minWidth: '50px', float: 'right' }}
      >
        <h2
          style={{
            padding: '5px',
            fontFamily:
              'Trebuchet MS, Lucida Sans Unicode, Lucida Grande, Lucida Sans, Arial, sans-serif',
          }}
        >
          DAILY QUIZ
        </h2>
      </button>
    </Link>
  )
}

export default HomePageButtons
