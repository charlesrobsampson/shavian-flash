// import React, { useState } from 'react';
import './Card.css';

export default function Card(props) {
  // const [isFlipped, setIsFlipped] = useState(props.isFlipped);
  const handleClick = () => props.flipCard(!props.isFlipped);

  const front = props.test;
  const back = JSON.parse(JSON.stringify(props.card));
  delete back[front];

  const renderFront = () => {
    return (
      <div className='front'>
        <h1>{front}</h1>
        <br></br>
        <h1>{props.card[front]}</h1>
      </div>
    );
  };

  const renderBack = () => {
    const keys = Object.keys(back);
    return (
      <div className='back'>
        {
          keys.map(key => {
            return <h1 key={key}>{`${key}: ${back[key]}`}</h1>;
          })
        }
      </div>
    )
  };
  return (
    <div className="card" onClick={handleClick}>
      {props.isFlipped ? renderBack() : renderFront()}
    </div>
  );
}