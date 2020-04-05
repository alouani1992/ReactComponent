import React from 'react';
import ReactDOM from 'react-dom';
class Myform extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username : '',
            age : null,
            errorMessage: '',
            description:'The content of a textarea goes in the value attribute'
        };
    }

    handleChange = ( event ) => {
        let name = event.target.name;
        let val = event.target.value;
        let err = '';
        if(name === 'age') {
            if ( val !=='' &&!Number( val ) ) {
                err = <strong>Your age must be a number!'</strong>;
            }
        }
        this.setState({'errorMessage':err});

        this.setState( { [ name ]: val } );
    };
    handleSubmit = ( event ) => {
        event.preventDefault();
        if(!Number(this.state.age)){
            alert('L\'age doit etre un nombre ! ')
        }
        alert( 'form submitted' + this.state );
    };
    render(){
        const myStyle = {
            color:"white",
            backgroundColor:'DodgerBlue',
            padding:"10px",
            fontFamily:"Arial"
        };
        let header = '';
        if(this.state.username){
            header = <h1>{this.state.username}</h1>
        }
        else {
            header ="";
        }
        return(
            <form onSubmit={this.handleSubmit.bind(this)}>
                {header}
                <h1>Hello {this.state.username} {this.state.age}</h1>
                <p style={myStyle}>Entrer votre nom:</p>
                    <input onChange={this.handleChange} type="text" name="username"/>
                    <p>Entrer votre age:</p>
                    <input onChange={this.handleChange} type="text" name="age"/>
                {this.state.errorMessage}
                    <input type="submit"/>
                    <textarea value={this.state.description} />
            </form>
        )
    }
}
export  default Myform;
ReactDOM.render(<Myform/>,document.getElementById('foot'));