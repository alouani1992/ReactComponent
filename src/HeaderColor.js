import React from 'react';
import ReactDom from 'react-dom';
class HeaderColor extends React.Component{
    constructor(props){
        super(props);
        this.state = {favoriteColor:'red'}
    }

    shouldComponentUpdate(){
        return false;
    }
    render(){return(
    <h1>My favorite Color is {this.state.favoriteColor}</h1>
    )}
}
export default HeaderColor;