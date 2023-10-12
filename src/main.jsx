import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// With Intro animation
setTimeout(() => {     // Delay rendering by 13 seconds to load Netflix Intro
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}, 12000);