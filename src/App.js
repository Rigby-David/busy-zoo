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
        <div className='plant'>
          <img src="smalltree.png" width={10 * plantSize} />
          <div className='buttons'>
            <button onClick={() => setPlantSize(plantSize + 1)}>Water the tree to make it grow!</button>
            <button onClick={() => setPlantSize(plantSize - 1)}>Oh no! The tree is too big! Shrink it!</button>
          </div>
        </div>
        <div className='plant'>
          <img src="weeds.jpg" width={10 * weedSize} />
          <div className='buttons'>
            <button onClick={() => setWeedSize(weedSize + 1)}>Oh no! The weeds are growing!</button> 
            <button onClick={() => setWeedSize(weedSize - 1)}>Whack those weeds!</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
