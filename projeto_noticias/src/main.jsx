import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import {QueryClient, QueryClientProvider} from 'react-query'
import Home from './Home.jsx'
import AuthPage from './pages/AuthPage.jsx'
import App from './App.jsx'

import './css/reset.css'
import './css/index.css'

const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App/>
    </QueryClientProvider>
    
  </React.StrictMode>,
)
