import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'

import { TechStackProvider } from './Components/HeroSection/ProjectSection/TechStackContext.jsx'
import App from './App.jsx'
import './CssFiles/index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
)
