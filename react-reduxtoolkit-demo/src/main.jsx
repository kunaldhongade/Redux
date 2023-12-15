import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.jsx'
import store from './app/store.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>     {/* // it provide store to every component of our application // it uses react context */}
      <App />
    </Provider>
  </React.StrictMode>,
)
