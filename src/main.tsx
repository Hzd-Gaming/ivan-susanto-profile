import React from 'react';

import ReactDOM from 'react-dom/client';

import { CTErrorBoundary } from '@/components';

import App from './App.tsx';

import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CTErrorBoundary>
      <App />
    </CTErrorBoundary>
  </React.StrictMode>
);
