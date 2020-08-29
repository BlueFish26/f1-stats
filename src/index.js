import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { F1ContextProvider } from './contexts/F1Context';
import f1Reducer, { initialState } from './reducers/f1Reducer';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <F1ContextProvider initialState={initialState} reducer={f1Reducer}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </F1ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
