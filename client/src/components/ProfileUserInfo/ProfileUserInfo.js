/* eslint-disable no-unused-vars */
import { useUser } from '../../utils/UserContext'
import { PieChart } from 'react-minimal-pie-chart'
import React, { useRef, useState } from 'react'
import ListItem from './ListItems'
import ToDoList from './ToDoList'

const ProfileUserInfo = () => {
  // Currently logged in user
  const { user } = useUser()

  return (
    // check if user id exists in context. if not, get id from local storage and fetch.
    // if none exists, redirect to login page.
    <div className="row col-md-12" style={{ marginTop: '70px' }}>
      <div className="col-md-5">
        <div className="row" style={{ justifyContent: 'center' }}>
          <h3
            style={{
              marginLeft: '40px',
            }}
          >
            WINS{' '}
          </h3>
          <span
            class="dot"
            style={{
              height: '25px',
              width: '25px',
              backgroundColor: 'rgb(0 156 92)',
              borderRadius: '50%',
              display: 'inline-block',
              margin: '5px',
              marginLeft: '10px',
              marginRight: '15px',
            }}
          ></span>
          <h3>LOSSES</h3>
          <span
            class="dot"
            style={{
              height: '25px',
              width: '25px',
              backgroundColor: '#ff5061',
              borderRadius: '50%',
              display: 'inline-block',
              margin: '5px',
              marginRight: '0px',
              marginLeft: '10px',
            }}
          ></span>
        </div>
        <PieChart
          // label={({ dataEntry }) => 'WINS'}
          data={[
            {
              title: 'Right answers',
              value:
                user.correct === 0 && user.incorrect === 0 ? 1 : user.correct,
              color: 'rgb(0 156 92)',
            },
            { title: 'Wrong answers', value: user.incorrect, color: '#ff5061' },
          ]}
          style={{ height: 'auto', maxHeight: '250px', margin: '20px' }}
        />
      </div>

      <div
        className="col-md-7"
        style={{ paddingRight: '0px', justifyContent: 'center' }}
      >
        {/* <form
          style={{
            height: 'auto',
            maxHeight: '250px',
            margin: '20px',
            textAlign: 'left',
          }}
        >
          <h6>Username: {user ? user.username : null}</h6>
          <h6>Email: {user ? user.email : null}</h6>
          <h6>Streak: </h6>
          <h6>Birthday: {user ? user.birthday : null} </h6>
          <h6>Joined Date: {user ? user.joined : null}</h6>
        </form> */}
        <ToDoList />
      </div>
    </div>
  )
}

export default ProfileUserInfo
