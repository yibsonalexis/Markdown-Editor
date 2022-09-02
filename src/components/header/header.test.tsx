import { render, screen } from '@testing-library/react';

import { Header } from './header';

describe('Header component test suit', () => {
  test('should render Header', () => {
    const title = 'test';
    render(<Header title={title} />);
    const element = screen.getByTestId('title');
    expect(element.innerHTML).toBe(title);
  });
});
