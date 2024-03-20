import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

function ThirdQuestion() {
  return (
    <div className='container'>
      <img src="https://media.tenor.com/tzvzrz4famQAAAAi/couple-forgive-me.gif" width="300px" height="300px" alt="tkthao219-bubududu"></img>
      <h2 className='question'>Man bhi ja na</h2>
      <div className='buttons'>
      <button className='yesButton'>Yes</button>
      <button className='noButton'>
        <NavLink exact to='/fourth'>No</NavLink>
      </button>
      </div>
    </div>
  );
}

export default ThirdQuestion
