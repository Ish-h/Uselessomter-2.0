import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TrashProvider } from "./pages/context/TrashContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TrashProvider>
      <App />
    </TrashProvider>
  </React.StrictMode>
);
