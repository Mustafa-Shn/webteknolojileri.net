import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders in English by default and switches to Turkish', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: /hello, i am mustafa şahin/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'tr' })).toHaveAttribute('aria-pressed', 'false');

  fireEvent.click(screen.getByRole('button', { name: 'tr' }));

  expect(screen.getByRole('heading', { name: /merhaba, ben mustafa şahin/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'tr' })).toHaveAttribute('aria-pressed', 'true');
});
