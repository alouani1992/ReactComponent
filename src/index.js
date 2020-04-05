import React              from 'react';
import ReactDOM           from 'react-dom';
import './index.css';
import Car                from './Car';
import App                from './App';
import Header             from './Header';
import HeaderColor        from './HeaderColor';
import Football           from './Football';
import Myform             from './Myform';
import * as serviceWorker from './serviceWorker';
import './style/App.css';

ReactDOM.render(<App />, document.getElementById('root'));
const myelemnt= (
<ul>
    <li>Appeles</li>
    <li>Bananas</li>
    <li>Cherries</li>
</ul>
)
ReactDOM.render(<Car test='Garaa' />,document.getElementById('test'))
ReactDOM.render(<Header favcol='Green' />,document.getElementById('color'));
ReactDOM.render(<HeaderColor />,document.getElementById('hcolor'));
ReactDOM.render(<Myform />,document.getElementById('foot'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
