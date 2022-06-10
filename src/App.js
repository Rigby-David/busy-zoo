import './App.css';
import { useState } from 'react';
import ToolsList from './ToolsList';
import Shed from './Shed';

function App() {

  // const [animals, setAnimals] = useState (10);
  // const [catSize, setCatSize] = useState(10);

  const [plantSize, setPlantSize] = useState(10);
  const [weedSize, setWeedSize] = useState(10);
  const [tools, setTools] = useState (['hammer', 'axe', 'tractor', 'pickaxe']);
  const [shedIsOpen, setShedIsOpen] = useState(true);

  function handleHammer() {
    tools.push('hammer');

    setTools(tools.slice());
  }

  function handleAxe() {
    tools.push('axe');

    setTools(tools.slice());
  }

  function handleTractor() {
    tools.push('tractor');

    setTools(tools.slice());
  }

  function handlePickaxe() {
    tools.push('pickaxe');

    setTools(tools.slice());
  }

  function handleShed() {
    tools.pop();

    setTools(tools.slice());
  }
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
        <div className='weeds'>
          <img src="weeds.jpg" width={10 * weedSize} />
          <div className='buttons'>
            <button onClick={() => setWeedSize(weedSize + 1)}>Oh no! The weeds are growing!</button> 
            <button onClick={() => setWeedSize(weedSize - 1)}>Whack those weeds!</button>
          </div>
        </div>
      </div>
      <div className='shed'>
        <Shed shedIsOpen={shedIsOpen} />
        <button onClick = {() => setShedIsOpen(!shedIsOpen)}>Check out the shed</button>
      </div>
      <div className='toolpics'>
        <ToolsList tools={tools} />
        <div className='buttons'>
          <button onClick = {handleHammer}>Add a hammer!</button>
          <button onClick = {handleAxe}>Add an axe!</button>
          <button onClick = {handleTractor}>Add a tractor</button>
          <button onClick = {handlePickaxe}>Add a pickaxe</button>
          <button onClick = {handleShed}>Put a tool back</button>
        </div>
      </div>
    </div>
  );
}

export default App;
