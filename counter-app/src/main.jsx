import React from 'react';
import ReactDOM from 'react-dom/client';


import { CounterApp } from './CounterApp';

import './styles.css';



ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        {/*<FirstApp title="titlee" subtitle="goku" numero={123}/>*/}
        <CounterApp  value={2}/>
    </React.StrictMode>
);