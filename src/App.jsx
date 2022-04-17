import { useState } from 'react'
import Layout from './components/Layout/Layout'
import './App.css'
import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Layout />
      </QueryClientProvider>
    </div>
  )
}

export default App
