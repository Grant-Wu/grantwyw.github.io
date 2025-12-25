import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
if (container) {
  try {
    container.style.display = 'block';
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (err) {
    console.error("Critical Render Error:", err);
    const display = document.getElementById('error-display');
    if (display) {
        display.style.display = 'block';
        display.innerHTML = '<h3 style="color:#ef4444;margin-bottom:8px">Render Error</h3><pre style="font-size:10px;overflow:auto">' + err + '</pre>';
    }
  }
}
