import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

// 渲染階段隱藏 Loader 邏輯
const hideLoader = () => {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.classList.add('loader-hidden');
    // 延遲移除 DOM 節點以配合 CSS 過渡效果
    setTimeout(() => {
      if (loader.parentNode) loader.remove();
    }, 600);
  }
};

const container = document.getElementById('root');
if (container) {
  try {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    // 渲染指令發出後即隱藏轉圈
    hideLoader();
  } catch (err) {
    console.error("Initial render failed:", err);
    hideLoader();
  }
} else {
  console.error("Root element not found");
  hideLoader();
}