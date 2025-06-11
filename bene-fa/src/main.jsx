import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ActiveDoorProvider } from './context/ActiveDoorContext.jsx';
import { ActiveDoorColorProvider } from './context/ActiveDoorColorContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ActiveDoorProvider>
      <ActiveDoorColorProvider>
        <App />
      </ActiveDoorColorProvider>
    </ActiveDoorProvider>
  </React.StrictMode>
);
