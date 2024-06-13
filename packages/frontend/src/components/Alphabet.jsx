import { SHAVIAN_LETTERS } from '../shavian';
import { buildMap } from './handleCards';
import Card from './Card';
import '../App.css';

export default function FlashCards() {
    const LETTERS = buildMap(SHAVIAN_LETTERS);
    const ls = Object.keys(LETTERS);
    console.log(LETTERS);
    return (
        <div className='alphabet'>
            <header className="App-header">
                <h3>alphabet</h3>
            </header>
            {ls.map(l => {
                console.log(LETTERS[l]);
                return <Card card={LETTERS[l]} isFlipped={true} flipCard={() => { }} />
            })}
        </div>
    )
}