import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import ThemeSwitchProvider from './context/ThemeSwitch';
import FontFamilySwitchProvider from './context/FontFamilySwitch.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeSwitchProvider>
      <FontFamilySwitchProvider>
        <App />
      </FontFamilySwitchProvider>
    </ThemeSwitchProvider>
  </React.StrictMode>,
);
