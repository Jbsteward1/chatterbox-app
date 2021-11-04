import React from 'react';
import '../App.css';

class Database extends React.Component{
    render(){
        return(
            <div className="info">
                <h1>{this.props.numOfContacts}</h1>
                <p>{this.props.numbOfMessages}</p>
                <p>{this.props.numbOfGroups}</p>
            </div>
        )
    }
}
export default Database