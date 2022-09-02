import { useState, useCallback } from 'react';

const DEFAULT_VALUE = 'default';
const markdownKeyRules = {
  '#': (value: string): string => `<h1>${value}</h1>`,
  '##': (value: string): string => `<h2>${value}</h2>`,
  '###': (value: string): string => `<h3>${value}</h3>`,
  '####': (value: string): string => `<h4>${value}</h4>`,
  '#####': (value: string): string => `<h5>${value}</h5>`,
  '######': (value: string): string => `<h6>${value}</h6>`,
  '---': (value: string): string => `<hr>`,
  '-': (value: string): string => `<li>${value}</li>`,
  '*': (value: string): string => `<li>${value}</li>`,
  '```': (value: string): string => `<code>${value.replace('```', '')}</code>`,
  // '***': (value: string): string => `<strong>${value}</strong>`,
  [DEFAULT_VALUE]: (value: string): string => `<p>${value}</p>`,
};

export function useMarkdownConvert() {
  const [markdownConverted, setMarkdownConverted] = useState('');

  const deleteMarkdownKeyFromText = (key: string, lineText: string) =>
    key === DEFAULT_VALUE ? lineText : lineText.substring(key.length + 1);

  const convertMarkdownToHTML = useCallback((text: string): string => {
    const textArray = text.split('\n');
    const textArrayMap = textArray.map((line) => {
      const markdownKeyValue = line.split(' ')[0] ?? '';
      const markdownKey = markdownKeyValue in markdownKeyRules ? markdownKeyValue : DEFAULT_VALUE;
      return markdownKeyRules[markdownKey as keyof typeof markdownKeyRules](
        deleteMarkdownKeyFromText(markdownKey, line),
      );
    });
    setMarkdownConverted(textArrayMap.join(''));
    return textArrayMap.join();
  }, []);

  return { convertMarkdownToHTML, markdownConverted };
}
