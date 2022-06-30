import { render, screen } from '@testing-library/react';
import Tool from './Tool';

test('if i pass a hammer to Tool, it renders a tool emoji', () => {
  render(<Tool tool='hammer' />);
  const hammerElement = screen.getByText('🔨');
  expect(hammerElement).toBeInTheDocument();
});

test('if i pass an axe to Tool, it renders an axe emoji', () => {
  render(<Tool tool='axe' />);
  const axeElement = screen.getByText('🪓');
  expect(axeElement).toBeInTheDocument();
});