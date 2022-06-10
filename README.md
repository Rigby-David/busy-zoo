# Alchemy React Base Template

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Use this template for all your "from scratch" deliverables. To start, simply run

- `npm install`
- `npm start`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Busy Farm Plan
-- State --
[plantSize, setPlantSize] = useState(10)
[weedSize, setWeedSize] = useState(10)
[shedIsOpen, setShedIsOpen] = useState(true)
[tools, setTools] = useState (['hammer', 'axe', 'tractor', 'pickaxe' ])
    🔨  🪓 🚜 ⛏️
-- Components --
plantState -- onClick = {() => setPlantSize{plantSize + 1}}
weedState -- onClick = {() => setWeedSize{WeedSize + 1}}

shedState -- onClick = {() => setShedIsOpen(!shedIsOpen)}

toolsState -- onClick = {handleHammer}
-- function handleHammer() {
    tools.push('hammer')

    setTools(tools.slice())
}
-- repeat for each tool in array