import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const container = document.getElementById('root');
if (container) {
  try {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    // 渲染任務發出後，呼叫 HTML 預定義的隱藏函式
    if (typeof (window as any).hideAppLoader === 'function') {
      (window as any).hideAppLoader();
    }
  } catch (err) {
    console.error("React Mounting Failed:", err);
    if (typeof (window as any).hideAppLoader === 'function') {
      (window as any).hideAppLoader();
    }
  }
} else {
  console.error("Root element not found");
  if (typeof (window as any).hideAppLoader === 'function') {
    (window as any).hideAppLoader();
  }
}