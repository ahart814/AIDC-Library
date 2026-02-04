import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PatternTemplate from './ai_pattern_template'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="min-h-screen bg-gray-100 py-8">
      <PatternTemplate />
    </div>
  </StrictMode>,
)
