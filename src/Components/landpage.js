import React from 'react';
import '../App.css';

class Groups extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.description}</p>
            </div>
        )
    }
}
export default Groups;