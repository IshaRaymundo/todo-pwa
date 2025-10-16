import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

// Registrar el service worker
serviceWorkerRegistration.register({
  onUpdate: registration => {
    console.log('Nuevo contenido disponible. Por favor, refresca la página.');
  },
  onSuccess: registration => {
    console.log('Service worker registrado correctamente.');
  }
});
