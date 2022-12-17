import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <div>
    <App />
    </div>
  </Provider>,
  document.getElementById('root')
)


