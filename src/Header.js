import React,{Component} from 'react';
import ReactDOM from 'react-dom';
class Header extends React.Component{
    constructor(propos){
        super(propos);
        this.state={favoriteColor:"red"};
    }
   /* static getDerivedStateFromProps(propos,state){
        return {favoriteColor:propos.favcol};
    }*/
    componentDidMount(){
        setTimeout(()=>{
            this.setState({favoriteColor:"yellow"})
        },1000);
        
    }
    render(){
        console.log('alouani',this.state);
        return(
            <div>            
            <h1>My favorite Color is {this.state.favoriteColor}</h1>
            </div>

        );
    }
}
export default Header;