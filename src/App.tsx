import { MarkdownWithPackage } from './components/markdownWithPackage';
import { MyOwnMarkdown } from './components/myOwnMarkdown';

function App() {
  return (
    <div data-testid="app">
      <MyOwnMarkdown />
      <MarkdownWithPackage />
    </div>
  );
}

export default App;
