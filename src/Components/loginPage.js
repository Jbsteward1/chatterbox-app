import React from 'react';
import '../App.css';

class Lists extends React.Component{
    render(){
        return(
            <div className="secondary">
                <h1>{this.props.contactName}</h1>
                <p>{this.props.occupation}</p>
            </div>
        )
    }
}
export default Lists;