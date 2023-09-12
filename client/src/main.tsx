import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './templates/App.tsx'
import './index.css'
import Hed from './templates/Hed.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
  <Hed/>
  <App />
  </React.StrictMode>,
)
