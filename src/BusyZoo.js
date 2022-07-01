import './App.css';
import { useState } from 'react';
import ToolsList from './ToolsList';
import Shed from './Shed';
import CustomButton from './CustomButton';

export default function BusyZoo() {

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
          <img src="smalltree.png" width={10 * plantSize} alt='shed'/>
          <div className='buttons'>
            <CustomButton onClick={() => setPlantSize(plantSize + 1)}>Water the tree to make it grow!</CustomButton>
            <CustomButton onClick={() => setPlantSize(plantSize - 1)}>Oh no! The tree is too big! Shrink it!</CustomButton>
          </div>
        </div>
        <div className='weeds'>
          <img src="weeds.jpg" width={10 * weedSize} />
          <div className='buttons'>
            <CustomButton onClick={() => setWeedSize(weedSize + 1)}>Oh no! The weeds are growing!</CustomButton> 
            <CustomButton onClick={() => setWeedSize(weedSize - 1)}>Whack those weeds!</CustomButton>
          </div>
        </div>
      </div>
      <div className='shed'>
        <Shed shedIsOpen={shedIsOpen} />
        <CustomButton onClick = {() => setShedIsOpen(!shedIsOpen)}>Check out the shed</CustomButton>
      </div>
      <div className='toolpics'>
        <ToolsList tools={tools} />
        <div className='buttons'>
          <CustomButton onClick = {handleHammer}>Add a hammer!</CustomButton>
          <CustomButton onClick = {handleAxe}>Add an axe!</CustomButton>
          <CustomButton onClick = {handleTractor}>Add a tractor</CustomButton>
          <CustomButton onClick = {handlePickaxe}>Add a pickaxe</CustomButton>
          <CustomButton onClick = {handleShed}>Put a tool back</CustomButton>
        </div>
      </div>
    </div>
  );
}