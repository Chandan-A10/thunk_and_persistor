import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store'
import {PersistGate} from 'redux-persist/integration/react'
import {persistStore} from 'redux-persist'

let persist=persistStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persist}>
      <App />
    </PersistGate>
  </Provider>
      </React.StrictMode>
);