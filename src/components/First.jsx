import React from 'react'
import { NavLink } from 'react-router-dom';
import '../App.css';

export default function First() {

  return (
    <div className='container'>
      <img src="https://media.tenor.com/wGMzikyMbeEAAAAi/flower-for-you-cat.gif" width="350px" height="300px" alt="tkthao219-bubududu"></img>
      <h2 className='question'>Will You Go Out With Me?</h2>
      <div className='buttons'>
      <button className='yesButton'>
      <NavLink to='/final'>Yes</NavLink></button>
      <button  className='noButton'>
      <NavLink  to='/second' >No</NavLink>
      </button>
      
      </div>
      
    </div>
  )
}
