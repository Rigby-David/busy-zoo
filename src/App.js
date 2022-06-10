import './App.css';
import { useState } from 'react';

function App() {

  // const [animals, setAnimals] = useState (10);
  const [catSize, setCatSize] = useState(10)
;  // function handleCat() {
  //   animals.push('cat');

  //   setAnimals(animals.slice());
  // }

  return (
    <div className="App">
      <div className='animals'>
        <p style={{ fontSize: `${catSize}px` }}>🐱 : {catSize}</p>
        <button onClick={() => setCatSize(catSize + 10)}>Grow cat</button>
        <button onClick={() => setCatSize(catSize - 10)}>Shrink cat</button>
      </div>
    </div>
  );
}

export default App;
