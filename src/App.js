import React from 'react';
import './App.css';
import { Loader } from './Loader';
import { createMachine } from 'xstate';
import { useMachine } from '@xstate/react';

const loadingMachine = createMachine({
  initial: 'loading',
  states: {
    loading: {
      after: {
        2000: 'shimmer',
      },
    },
    shimmer: {
      after: {
        3000: 'ready',
      },
    },
    ready: {
      after: {
        5000: 'docs',
      },
    },
    docs: {},
  },
});

function App() {
  const [state] = useMachine(loadingMachine);

  if (state.matches('loading')) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app" data-state={state.toStrings().join(' ')}>
      <h1>
        Is{' '}
        <a href="https://reactjs.org/docs/concurrent-mode-suspense.html">
          Suspense
        </a>{' '}
        Ready Yet?
      </h1>
      <h2>
        Answer: <Loader />
      </h2>
      {state.matches('docs') && (
        <small>
          <a
            href="https://reactjs.org/docs/concurrent-mode-intro.html"
            title="React Docs: Introducing Concurrent Mode (Experimental)"
          >
            No, but read the docs ⚛︎
          </a>
        </small>
      )}
    </div>
  );
}

export default App;
