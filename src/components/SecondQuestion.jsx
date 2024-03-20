import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css';

function SecondQuestion() {
  return (
    <div className='container'>
      
      <img src="https://media.tenor.com/sV2IT_jzKj4AAAAi/mochi-mochimochi.gif" width="300px" height="300px" alt="tkthao219-bubududu"></img>
      <h2 className='question'>Itni bhi jaldi na mat bol</h2>
      <div className='buttons'>
      <button className='yesButton'>Yes</button>
       
        <NavLink to='/third' className='noButton'>No</NavLink>
      
      </div>
    </div>
  )
}

export default SecondQuestion
