import React from 'react'
import { NavLink } from 'react-router-dom';
import '../App.css';

export default function First() {

  return (
    <div className='container'>
      <img src="https://media.tenor.com/wGMzikyMbeEAAAAi/flower-for-you-cat.gif" width="350px" height="300px" alt="tkthao219-bubududu"></img>
      <h2 className='question'>Will You Go Out With Me?</h2>
      <div className='buttons'>
      <button className='yesButton'>Yes</button>
       
      <NavLink  to='/second' className='noButton'>No</NavLink>
      
      </div>
      
    </div>
  )
}
