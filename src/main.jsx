import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './globals.css'
import './index.css'
import {AppContextProvider} from './context/AppContext'


ReactDOM.createRoot(document.getElementById('root')).render(

    <AppContextProvider>
          <App />
    </AppContextProvider>
  
)
