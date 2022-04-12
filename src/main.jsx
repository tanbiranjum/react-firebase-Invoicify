import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import ThemeProvider from './theme'
import { BrowserRouter as Router } from 'react-router-dom'
import AuthContextProvider from './contexts/AuthContext'

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <Router>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Router>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
