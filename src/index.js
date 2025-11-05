import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
  useEffect(() => {
           const tagManagerArgs = {
               gtmId: 'G-82FK57EZVE'
           };
           TagManager.initialize(tagManagerArgs);
       }, []);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

