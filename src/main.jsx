import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import App from './App'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#171717',
            color: '#f5f0ea',
            border: '1px solid rgba(249,115,22,0.2)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.35)',
          },
        }}
      />
    </BrowserRouter>
  </React.StrictMode>,
)
