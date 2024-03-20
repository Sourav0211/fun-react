import React, { useEffect, useRef } from 'react';
import '../App.css';

const Final = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let confetti = [];
    const confettiCount = 300;
    const gravity = 0.5;
    const terminalVelocity = 5;
    const drag = 0.075;
    const colors = [
      { front: 'red', back: 'darkred' },
      { front: 'green', back: 'darkgreen' },
      { front: 'blue', back: 'darkblue' },
      { front: 'yellow', back: 'darkyellow' },
      { front: 'orange', back: 'darkorange' },
      { front: 'pink', back: 'darkpink' },
      { front: 'purple', back: 'darkpurple' },
      { front: 'turquoise', back: 'darkturquoise' }
    ];

    for (let i = 0; i < confettiCount; i++) {
      confetti.push({
        color: colors[Math.floor(Math.random() * colors.length)],
        dimensions: {
          x: Math.random() * 10 + 10,
          y: Math.random() * 20 + 10
        },
        position: {
          x: Math.random() * canvas.width,
          y: canvas.height - 1
        },
        rotation: Math.random() * (2 * Math.PI),
        scale: {
          x: 1,
          y: 1
        },
        velocity: {
          x: Math.random() * 50 - 25,
          y: Math.random() * -50
        }
      });
    }

    function randomRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      confetti.forEach((confetto, index) => {
        let width = confetto.dimensions.x * confetto.scale.x;
        let height = confetto.dimensions.y * confetto.scale.y;

        ctx.translate(confetto.position.x, confetto.position.y);
        ctx.rotate(confetto.rotation);

        confetto.velocity.x -= confetto.velocity.x * drag;
        confetto.velocity.y = Math.min(confetto.velocity.y + gravity, terminalVelocity);
        confetto.velocity.x += Math.random() > 0.5 ? Math.random() : -Math.random();

        confetto.position.x += confetto.velocity.x;
        confetto.position.y += confetto.velocity.y;

        if (confetto.position.y >= canvas.height) confetti.splice(index, 1);
        if (confetto.position.x > canvas.width) confetto.position.x = 0;
        if (confetto.position.x < 0) confetto.position.x = canvas.width;

        confetto.scale.y = Math.cos(confetto.position.y * 0.1);
        ctx.fillStyle = confetto.scale.y > 0 ? confetto.color.front : confetto.color.back;

        ctx.fillRect(-width / 2, -height / 2, width, height);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
      });

      window.requestAnimationFrame(render);
    }

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeCanvas);

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div>
      {/* HTML for your Final component */}
      <div className='container-final'>
        <img src="https://media.tenor.com/OMOMxmBpoWEAAAAi/iloveyou-zzang.gif" width="300px" height="300px" alt="tkthao219-bubududu"></img>
        <h3>I love you</h3>
        <h2 className='question'>HEHEHEHE! I knew it</h2>
      </div>
      <canvas className="confetti" ref={canvasRef} style={{ position: 'fixed', zIndex: -1, top: 0, left: 0 }}></canvas>
    </div>
  );
};

export default Final;
