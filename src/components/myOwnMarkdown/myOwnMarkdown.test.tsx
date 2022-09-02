import { fireEvent, render, screen } from '@testing-library/react';
import { MyOwnMarkdown } from './myOwnMarkdown';

describe('MyOwnMarkdown suit tests', () => {
  test('should render preview', () => {
    render(<MyOwnMarkdown />);
    const element = screen.getByTestId('preview');
    expect(element).toBeTruthy();
  });

  test('should show Markdown coverted To HTML', () => {
    render(<MyOwnMarkdown />);
    const textareaElement = screen.getByTestId('textarea');
    fireEvent.change(textareaElement, { target: { value: '# test' } });
    const previewElement = screen.getByTestId('preview');
    expect(previewElement).toBeTruthy();
    expect(previewElement.innerHTML).toBe('<h1>test</h1>');
  });
});
