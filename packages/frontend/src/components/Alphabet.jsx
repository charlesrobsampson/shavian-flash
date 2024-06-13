import { SHAVIAN_LETTERS } from '../shavian';
import { buildMap } from './handleCards';
import Card from './Card';

export default function FlashCards() {
    const LETTERS = buildMap(SHAVIAN_LETTERS);
    const ls = Object.keys(LETTERS);
    console.log(LETTERS);
    return (
        <div className='alphabet'>
            <h3>Alphabet</h3>
            {ls.map(l => {
                console.log(LETTERS[l]);
                return <Card card={LETTERS[l]} isFlipped={true} flipCard={() => { }} />
            })}
        </div>
    )
}