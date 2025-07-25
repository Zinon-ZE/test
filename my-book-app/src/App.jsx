import { useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { bookPages } from './pages';
import './App.css';
import './index.css';

function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [dark]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors">
      <button
        className="mb-4 px-3 py-1 rounded border bg-white dark:bg-gray-700 dark:text-white"
        onClick={() => setDark(!dark)}
      >
        Toggle {dark ? 'Light' : 'Dark'} Mode
      </button>
      <HTMLFlipBook
        width={400}
        height={500}
        size="stretch"
        minWidth={315}
        maxWidth={1000}
        maxHeight={1533}
        minHeight={400}
        showCover={false}
        className="shadow-xl"
      >
        {bookPages.map((page, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 w-full h-full p-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-bold mb-2">{page.title}</h2>
              <p className="text-base">{page.content}</p>
            </div>
            <div className="text-right text-sm opacity-60">
              {idx + 1}
            </div>
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
}

export default App;
