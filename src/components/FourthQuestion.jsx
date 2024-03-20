import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

function FourthQuestion() {
  const [buttonStyle, setButtonStyle] = useState({});

  const handleMouseMove = () => {
    const randomX = Math.random() * (window.innerWidth - 100); // Adjust 100 according to button width
    const randomY = Math.random() * (window.innerHeight - 50); // Adjust 50 according to button height
    setButtonStyle({
      position: 'absolute',
      top: `${randomY}px`,
      left: `${randomX}px`,
    });
  };

  return (
    <div className='container'>
      <img src="https://media.tenor.com/1s9vS3-IhwwAAAAi/tkthao219-bubududu.gif" width={300} height={300} alt="tkthao219-bubududu"></img>
      <h2 className='question'>Kyu itna bhav khati hai?</h2>
      <div className='buttons'>
        <button className='yesButton'>
          <NavLink exact to='/final'>Yes</NavLink>
        </button>
        <button onMouseMove={handleMouseMove} style={buttonStyle}
        className='noButton'>No</button>
      </div>
    </div>
  );
}

export default FourthQuestion;
