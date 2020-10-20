import React from 'react';
import ReactDOM from 'react-dom';
import App from '@app/components/app';
import '@app/styles/app.css';

let root = document.querySelector('#app');
document.body.appendChild(root);
ReactDOM.render(<App />, root);
