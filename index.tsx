import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

console.log("SafetyLab: index.tsx loaded, starting render process...");

const container = document.getElementById('root');

if (container) {
  try {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("SafetyLab: React render initiated.");
  } catch (err) {
    console.error("SafetyLab: Render error:", err);
    const errorDisplay = document.getElementById('error-display');
    if (errorDisplay) {
      errorDisplay.style.display = 'block';
      errorDisplay.innerHTML += `<p style="color:red">Render Error: ${err.message}</p>`;
    }
  }
} else {
  console.error("SafetyLab: Root container not found!");
}