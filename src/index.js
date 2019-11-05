import React from 'react'
import { render } from 'react-dom'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(rootReducer, /* state */composeEnhancers());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
