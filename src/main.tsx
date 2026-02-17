import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './globalcss/index.css'
import './globalcss/App.css'
import App from './App.tsx'
import { AppProvider } from './context/appProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>,
)
