import './App.css';
import { SHAVIAN_LETTERS } from './shavian';
import { buildMap, createDrawList, getRandomCard, addToReview, removeFromReview } from './components/handleCards';
import { useState } from 'react';
import Card from './components/Card';

function App() {
  const LETTERS = buildMap(SHAVIAN_LETTERS);
  const points = {
    name: true,
    letter: true,
    sound: true,
    code: true
  };
  const [pointsToCheck, setPointsToCheck] = useState(points);
  const [review, setReview] = useState({});
  const [drawList, setDrawList] = useState(createDrawList(LETTERS, review));
  const [currentCard, setCurrentCard] = useState(getRandomCard(drawList, LETTERS));
  // console.log('state', {
  //   LETTERS,
  //   review,
  //   drawList,
  //   currentCard
  // });
  const showCard = () => {
    const p = Object.keys(pointsToCheck);
    const picked = [];
    p.forEach(point => {
      if (pointsToCheck[point]) {
        picked.push(point);
      }
    });
    const index = Math.floor(Math.random() * picked.length);
    return <Card card={currentCard} test={picked[index]} />
  }
  const updatePoints = (e) => {
    const { name, checked } = e.target;
    const newPointsToCheck = {
      ...pointsToCheck,
      [name]: checked
    }
    setPointsToCheck(newPointsToCheck);
  }
  const checkPoints = () => {
    const points = Object.keys(pointsToCheck);
    return (points.map(p => {
      return (
        <div className='point-to-check' key={p}>
          {p}
          <br></br>
          <input type="checkbox" value={p} name={p} onChange={updatePoints} checked={pointsToCheck[p]} />
        </div>
      )
    }))
  }
  return (
    <div className="App">
      <header className="App-header">
        <h3>shavian flash cards</h3>
      </header>
      <div className="App-body">
        fields to test
        <br></br>
        <br></br>
        <div className='points-to-check'>
          {checkPoints()}
        </div>
        <div className="App-cards">
          {showCard()}
        </div>
      </div>
      <div className="App-footer">
        <div className='button-container'>
          <div className='button yay' onClick={e => {
            const newReview = removeFromReview(review, currentCard.name);
            setReview(newReview);
            const newDrawList = createDrawList(LETTERS, newReview);
            setDrawList(newDrawList);
            setCurrentCard(getRandomCard(newDrawList, LETTERS));
          }}>
            Correct
          </div>
          <div className='button nay' onClick={e => {
            const newReview = addToReview(review, currentCard.name);
            setReview(newReview);
            const newDrawList = createDrawList(LETTERS, newReview);
            setDrawList(newDrawList);
            setCurrentCard(getRandomCard(drawList, LETTERS));
          }}>
            Incorrect
          </div>
          <div className='button new' onClick={e => {
            setCurrentCard(getRandomCard(drawList, LETTERS));
          }}>
            New Card
          </div>
        </div>
        <br>
        </br>
        <div className='button' onClick={e => {
          setReview({});
          const newDrawList = createDrawList(LETTERS, {});
          setDrawList(newDrawList);
          setCurrentCard(getRandomCard(newDrawList, LETTERS));
        }}>
          Reset
        </div>
      </div>
    </div>
  );
}

export default App;