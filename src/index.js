import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter } from 'react-router-dom';


import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/index';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

// STABLE STORE:
// import { createStore, applyMiddleware } from 'redux';
// const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// TEST STORE FOR REDUXDEVTOOLS:
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleware)));


const unsubscribe = store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>,
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// console.log('store.getState(): ', store.getState());
unsubscribe();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
