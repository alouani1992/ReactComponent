import React,{Component} from 'react';
import ReactDOM from 'react-dom';
class Header extends React.Component{
    constructor(propos){
        super(propos);
        this.state={favoriteColor:'red'};
    }
    static getDerivedStateFromProps(propos,state){
        return {favoriteColor:propos.favcol};
    }
    render(){
        return(
            <div>            
            <h1>My favorite Color is {this.state.favoriteColor}</h1>
            </div>

        );
    }
}
export default Header;
ReactDOM.render(<Header favcol="yellow"/>,document.getElementById('color'));