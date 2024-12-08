// npm manages packages but it does not stand for node package manager
import React from 'react';
import ReactDOM from 'react-dom/client';

const child = React.createElement('div', {}, 'Hello World!');
const parent = ReactDOM.createRoot(document.querySelector('#sec'));
parent.render(child);
