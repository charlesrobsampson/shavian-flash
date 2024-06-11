import React, { useState } from 'react';
import './Card.css';

export default function Card(props) {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => setIsFlipped(!isFlipped);

  const front = props.test;
  const back = JSON.parse(JSON.stringify(props.card));
  delete back[front];

  const renderFront = () => {
    return <h1 className='front'>{props.card[front]}</h1>;
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
      {isFlipped ? renderBack() : renderFront()}
    </div>
  );
}