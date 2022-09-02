import { useState } from 'react';
import { marked } from 'marked';

import { Header } from '../header';

import styles from './styles.module.css';

export const MarkdownWithPackage = () => {
  const [markdown, setMarkdown] = useState('');

  const onChangeTextArea = (value: string) => {
    const html = marked(value, { sanitize: true });
    setMarkdown(html);
  };

  return (
    <div>
      <Header title="Markdown Editor with Marked Package" />
      <div className={styles.container}>
        <textarea onChange={(e) => onChangeTextArea(e.target.value)} />
        <div className={styles.preview} dangerouslySetInnerHTML={{ __html: markdown }} />
      </div>
    </div>
  );
};
