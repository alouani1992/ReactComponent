import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Car from './Car';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
const myelemnt= (
<ul>
    <li>Appeles</li>
    <li>Bananas</li>
    <li>Cherries</li>
</ul>
)
ReactDOM.render(<Car test='Garaa' />,document.getElementById('test'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
