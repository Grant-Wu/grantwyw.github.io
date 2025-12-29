import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const init = () => {
  console.log("Initializing React application...");
  const container = document.getElementById('root');
  
  if (!container) {
    console.error("Application Error: #root element not found in DOM.");
    if (typeof (window as any).hideAppLoader === 'function') (window as any).hideAppLoader();
    return;
  }

  try {
    const root = createRoot(container);
    // Rendering without StrictMode initially to ensure clean initialization in ESM environments
    root.render(<App />);
    
    // Trigger loader removal immediately after initial render command
    if (typeof (window as any).hideAppLoader === 'function') {
      (window as any).hideAppLoader();
    }
    console.log("React application mounted successfully.");
  } catch (err) {
    console.error("Failed to mount React application:", err);
    if (typeof (window as any).hideAppLoader === 'function') {
      (window as any).hideAppLoader();
    }
  }
};

// Start initialization
init();