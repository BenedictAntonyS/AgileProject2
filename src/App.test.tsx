import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
  render(<App />);
  const element = screen.getByText(/welcome/i); // Adjust to match App.tsx
  expect(element).toBeInTheDocument();
});
