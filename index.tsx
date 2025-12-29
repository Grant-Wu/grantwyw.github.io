import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const startApp = () => {
  console.log("React Initializing...");
  const container = document.getElementById('root');
  
  if (!container) {
    console.error("DOM Error: #root element not found.");
    return;
  }

  try {
    const root = createRoot(container);
    root.render(<App />);
    
    // 成功渲染後，隱藏載入器
    // 稍微延遲以確保初次佈局已完成
    setTimeout(() => {
      if (typeof (window as any).hideAppLoader === 'function') {
        (window as any).hideAppLoader();
      }
    }, 150);
  } catch (err) {
    console.error("Mounting Error:", err);
    if (typeof (window as any).hideAppLoader === 'function') {
      (window as any).hideAppLoader();
    }
  }
};

// 確保執行環境就緒
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startApp);
} else {
  startApp();
}