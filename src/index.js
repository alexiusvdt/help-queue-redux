import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { createStore } from 'redux';
import reducer from './reducers/ticket-list-reducer';
import { Provider } from 'react-redux';


const store = createStore(reducer);
//great for testing, keep it out of prod
store.subscribe(() =>
  console.log(store.getState())
  );
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);