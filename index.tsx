import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const mountApp = () => {
  const container = document.getElementById('root');
  
  if (!container) {
    console.error("DOM Error: #root not found.");
    return;
  }

  try {
    const root = createRoot(container);
    // 渲染 App
    root.render(<App />);
    console.log("React: Render sequence initiated.");
    
    // 延遲一點點隱藏 loader，確保初次渲染的畫面已產生
    setTimeout(() => {
      if (typeof (window as any).hideAppLoader === 'function') {
        (window as any).hideAppLoader();
      }
    }, 100);

  } catch (err) {
    console.error("React: Mounting failure", err);
    if (typeof (window as any).hideAppLoader === 'function') {
      (window as any).hideAppLoader();
    }
  }
};

// 確保在 DOM 完全加載後執行
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountApp);
} else {
  mountApp();
}