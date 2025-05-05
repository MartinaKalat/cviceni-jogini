//
// import React from 'react';
//
// import { render } from '@czechitas/render';
// import "./global.css"
// import {App} from "./components/App/App.jsx"
//
// document.querySelector('#root').innerHTML += render(
//     <div>
//         <App />
//     </div>
// )



import React from 'react';
import { createRoot } from 'react-dom/client';
import './global.css';
import { App } from './components/App/App.jsx';

// const root = createRoot(document.getElementById('root'));
// root.render(<App />);

document.addEventListener('DOMContentLoaded', () => {
    const root = createRoot(document.getElementById('root'));
    root.render(<App />);
});

// document.addEventListener('DOMContentLoaded', () => {
//     const root = createRoot(document.getElementById('root'));
//     root.render(<div>Test render</div>);
// });