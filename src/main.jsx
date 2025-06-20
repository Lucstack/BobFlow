import React from 'react'
import ReactDOM from 'react-dom/client'
// Import our AppWrapper component instead of the default App
import AppWrapper from './App.jsx' 
// Import our main CSS file
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>,
)
