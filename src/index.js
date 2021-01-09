import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ShopDB from './ShopDB';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
  <React.StrictMode>
    <ShopDB />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.unregister();
