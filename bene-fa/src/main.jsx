import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ActiveDoorProvider } from './context/ActiveDoorContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ActiveDoorProvider>
      <App />
    </ActiveDoorProvider>
  </React.StrictMode>
);
