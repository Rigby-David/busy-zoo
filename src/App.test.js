import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('if the user clicks on hammer, another hammer should render on the screen', () => {
  render(<App />);
  const hammerOnLoad = screen.getAllByText(/🔨/i);

  expect(hammerOnLoad.length).toBe(1);

  const hammerButton = screen.getByText(/Add a hammer!/i);

  fireEvent.click(hammerButton);

  const hammerAfterClick = screen.getAllByText(/🔨/i);

  expect(hammerAfterClick.length).toBe(2);
});

test('if the user clicks the axe button, add another axe to the screen', () => {
  render(<App />);

  const axeOnLoad = screen.getAllByText(/🪓/i); 

  expect(axeOnLoad.length).toBe(1);

  const axeButton = screen.getByText(/Add an axe!/i);

  fireEvent.click(axeButton);

  const axeAfterClick = screen.getAllByText(/🪓/i);

  expect(axeAfterClick.length).toBe(2);
});


test('user should be able to add a tractor to the screen on click', () => {
  render(<App />);
  const tractorOnLoad = screen.getAllByText(/🚜/i);

  expect(tractorOnLoad.length).toBe(1);

  const tractorButton = screen.getByText(/Add a tractor/i);

  fireEvent.click(tractorButton);

  const tractorOnClick = screen.getAllByText(/🚜/i);

  expect(tractorOnClick.length).toBe(2);
});

// test('user should ')