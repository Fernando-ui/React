import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';
import PrimerComponente from './PrimerComponente';
import './styles.css'


const divBot = document.querySelector('#root');


// ReactDOM.render(<PrimerComponente saludo='jelou'/>, divBot)
ReactDOM.render(<CounterApp value={0}/>, divBot);