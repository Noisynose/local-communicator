import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { AuthenticationProvider } from './authentication/AuthenticationProvider'
import './FirebaseConfig'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthenticationProvider>
      <App />
    </AuthenticationProvider>
  </React.StrictMode>,
)
