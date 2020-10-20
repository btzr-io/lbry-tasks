import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/components/app';

let root = document.querySelector('#app');
document.body.appendChild(root);
ReactDOM.render(<App />, root);
