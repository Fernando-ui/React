import React from 'react';
import ReactDOM from 'react-dom';
import PrimerComponente from './PrimerComponente';
import './styles.css'


const divBot = document.querySelector('#root');

ReactDOM.render(<PrimerComponente saludo='jeloy'/>, divBot)