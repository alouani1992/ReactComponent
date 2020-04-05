import React from 'react';
import ReactDom from 'react-dom';
class Football extends React.Component {
constructor(props){
super(props);
}
handleClick = (event,a)=>{
console.log('testtt');
alert(a);
alert(event);
}
render(){
return(
<div>
<h1>Ceci est la classe test</h1>
<button onClick = {this.handleClick.bind(this,'Great shoot')}>Click here </button>
</div>
);
}

}
export default Football;