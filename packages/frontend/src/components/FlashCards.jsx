import { SHAVIAN_LETTERS } from '../shavian';
import { buildMap, createDrawList, getRandomCard, addToReview, removeFromReview } from './handleCards';
import { useState } from 'react';
import Card from './Card';
import '../App.css';

export default function FlashCards(props) {
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
    const [isFlipped, setIsFlipped] = useState(false);

    const showCard = () => {
        const p = Object.keys(pointsToCheck);
        const picked = [];
        p.forEach(point => {
            if (pointsToCheck[point]) {
                picked.push(point);
            }
        });
        const index = Math.floor(Math.random() * picked.length);
        return <Card card={currentCard} test={picked[index]} isFlipped={isFlipped} flipCard={setIsFlipped} />
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
        <div>
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
                        setIsFlipped(false);
                    }}>
                        Correct
                    </div>
                    <div className='button nay' onClick={e => {
                        const newReview = addToReview(review, currentCard.name);
                        setReview(newReview);
                        const newDrawList = createDrawList(LETTERS, newReview);
                        setDrawList(newDrawList);
                        setCurrentCard(getRandomCard(drawList, LETTERS));
                        setIsFlipped(false);
                    }}>
                        Incorrect
                    </div>
                    <div className='button new' onClick={e => {
                        setCurrentCard(getRandomCard(drawList, LETTERS));
                        setIsFlipped(false);
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
                    setIsFlipped(false);
                }}>
                    Reset
                </div>
            </div>
        </div>
    )
}