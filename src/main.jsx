import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LazyMotion, domAnimation } from "framer-motion"
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <LazyMotion features={domAnimation}>
    <StrictMode>
      <App />
    </StrictMode>
  </LazyMotion>

)
