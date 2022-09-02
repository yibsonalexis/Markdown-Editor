import { act, renderHook } from '@testing-library/react-hooks';
import { useMarkdownConvert } from './useMarkdownConvert';

describe('useMarkdownConvert test Suit', () => {
  test('should use MarkdownConvert', () => {
    const { result } = renderHook(() => useMarkdownConvert());
    expect(result.current.markdownConverted).toBe('');
    expect(typeof result.current.convertMarkdownToHTML).toBe('function');
  });

  test('should convert # Markdown To HTML', () => {
    const { result } = renderHook(() => useMarkdownConvert());
    act(() => {
      result.current.convertMarkdownToHTML('# test');
    });
    expect(result.current.markdownConverted).toBe('<h1>test</h1>');
  });

  test('should convert ## Markdown To HTML', () => {
    const { result } = renderHook(() => useMarkdownConvert());
    act(() => {
      result.current.convertMarkdownToHTML('## test');
    });
    expect(result.current.markdownConverted).toBe('<h2>test</h2>');
  });

  test('should convert - Markdown To HTML', () => {
    const { result } = renderHook(() => useMarkdownConvert());
    act(() => {
      result.current.convertMarkdownToHTML('- test');
    });
    expect(result.current.markdownConverted).toBe('<li>test</li>');
  });

  test('should convert --- Markdown To HTML', () => {
    const { result } = renderHook(() => useMarkdownConvert());
    act(() => {
      result.current.convertMarkdownToHTML('---');
    });
    expect(result.current.markdownConverted).toBe('<hr>');
  });
});
