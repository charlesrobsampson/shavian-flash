import { useState } from 'react';
import './App.css';
import FlashCards from './components/FlashCards';
import Alphabet from './components/Alphabet';

function App() {
  const [display, setDisplay] = useState('flash cards');
  const [toDisplay, setToDisplay] = useState('alphabet');

  const content = (display) => {
    switch (display) {
      case 'flashCards':
        return <FlashCards />
      case 'alphabet':
        return <Alphabet />
      default:
        return <FlashCards />
    }
  }
  return (
    <div className="App">
      <div className='button new' onClick={e => {
        if (display === 'flashCards') {
          setDisplay('alphabet');
          setToDisplay('flashCards');
        } else {
          setDisplay('flashCards');
          setToDisplay('alphabet');
        }
      }}>
        {toDisplay}
      </div>
      {content(display)}
    </div>
  );
}

export default App;
