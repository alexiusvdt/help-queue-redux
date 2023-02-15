import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { createStore } from 'redux'; //deprecated, see index reducer for detail
import rootReducer from './reducers/index';
import { Provider } from 'react-redux';


const store = createStore(rootReducer);
//great for testing, keep it out of prod
store.subscribe(() =>
  console.log(store.getState())
  );
//great for testing, keep it out of prod ^

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);