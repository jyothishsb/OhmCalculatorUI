import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import OhmCalculator from './Components/OhmCalculator/OhmCalculatorUI';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<OhmCalculator />, document.getElementById('root'));
registerServiceWorker();
