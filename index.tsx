import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

/**
 * React 應用初始化
 */
const startApp = () => {
  const container = document.getElementById('root');
  
  if (!container) {
    console.error("Critical: Root element not found.");
    if (typeof (window as any).hideAppLoader === 'function') (window as any).hideAppLoader();
    return;
  }

  try {
    const root = createRoot(container);
    root.render(<App />);
    
    // 渲染任務發出後，呼叫 HTML 預定義的隱藏函式
    // 使用 setTimeout 確保初次渲染的 DOM 已經準備好在畫面上
    setTimeout(() => {
      if (typeof (window as any).hideAppLoader === 'function') {
        (window as any).hideAppLoader();
      }
    }, 200);

  } catch (err) {
    console.error("React Mounting Failed:", err);
    if (typeof (window as any).hideAppLoader === 'function') {
      (window as any).hideAppLoader();
    }
  }
};

// 執行啟動
startApp();