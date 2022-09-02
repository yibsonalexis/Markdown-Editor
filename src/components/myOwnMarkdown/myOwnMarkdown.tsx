import { useMarkdownConvert } from '../../hooks/useMarkdownConvert';
import { Header } from '../header';

import styles from './styles.module.css';

export const MyOwnMarkdown = () => {
  const { convertMarkdownToHTML, markdownConverted } = useMarkdownConvert();

  const onChangeTextArea = (value: string) => {
    convertMarkdownToHTML(value);
  };

  return (
    <div>
      <Header title="My Own Markdown Editor" />
      <div className={styles.container}>
        <div>
          <h3>Markdown Input</h3>
          <textarea data-testid="textarea" onChange={(e) => onChangeTextArea(e.target.value)} />
        </div>
        <div>
          <h3>Markdown Output</h3>
          <div
            data-testid="preview"
            className={styles.preview}
            dangerouslySetInnerHTML={{ __html: markdownConverted }}
          />
        </div>
      </div>
    </div>
  );
};
