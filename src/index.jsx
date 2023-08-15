import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import ThemeSwitchProvider from './context/ThemeSwitch';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeSwitchProvider>
      <App />
    </ThemeSwitchProvider>
  </React.StrictMode>,
);
