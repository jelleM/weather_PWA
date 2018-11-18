import 'react-app-polyfill/ie11'; // For IE 11 support
import 'core-js/es7/array'; // For IE 11 support
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
