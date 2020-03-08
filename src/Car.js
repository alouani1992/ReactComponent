import React, { Component } from "react";
import ReactDOM from 'react-dom';
class Car extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            brand:'Ford',
            model: "Mustang",
            colr:'red',
            yearOfModel:1992,
            dateOfCirculation:2004
        };
    }
    render(){
        return(
            <div>
            <h1>My {this.state.brand} Car</h1>
            <p>
                It is a  {this.state.colr} 
                {this.state.model}
                from {this.state.yearOfModel}
            </p>
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