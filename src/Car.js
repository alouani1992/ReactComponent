import React, { Component } from "react";
import ReactDOM from 'react-dom';
class Car extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            brand:'Ford',
            model: "Mustang",
            color:'red',
            yearOfModel:1992,
            dateOfCirculation:2004
        };
    }
    handleClick=()=>{
        if(this.state.color ==='red'){
        this.setState({color:'blue'});
        }
        else{
        this.setState({color:'red'});
        }
    }
    render(){
        return(
            <div>
            <h1>My {this.state.brand} Car</h1>
            <p>
                It is a  {this.state.color} 
                {this.state.model}
                from {this.state.yearOfModel}
            </p>
            <button type='button' onClick={this.handleClick} >Change Color</button>
            </div>
        )
    }
}

class Garage extends React.Component{
    render(){
        const carInfo = {name:"Ford",model:"fista"};
            return(
            <div>
                <h1>Who lives in my garage ?</h1>
                <Car brand = {carInfo}/>
            </div>
            );
        }
    }
    export default Garage ;
ReactDOM.render(<Garage />,document.getElementById('root'));