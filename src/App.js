import './App.css';
import { useState } from 'react';

function App() {

  // const [animals, setAnimals] = useState (10);
  // const [catSize, setCatSize] = useState(10);

  const [plantSize, setPlantSize] = useState(10);
  const [weedSize, setWeedSize] = useState(10);

  // function handleCat() {
  //   animals.push('cat');

  //   setAnimals(animals.slice());
  // }

  return (
    <div className="App">
      <div className='plants'>
        <div className='smalltree'>
          <img src="smalltree.png" width={10 * plantSize} />
        </div>
        {/* <p style={{ fontSize: `${catSize}px` }}>🐱 : {catSize}</p>
        <button onClick={() => setCatSize(catSize + 10)}>Grow cat</button>
        <button onClick={() => setCatSize(catSize - 10)}>Shrink cat</button> */}
        <div className='buttons'>
          <button onClick={() => setPlantSize(plantSize + 1)}>Water the tree to make it grow!</button>
          <button onClick={() => setPlantSize(plantSize - 1)}>Oh no! The tree is too big! Shrink it!</button>
        </div>
      </div>
    </div>
  );
}

export default App;
