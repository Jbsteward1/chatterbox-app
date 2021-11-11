import React from 'react';
import '../App.css';


class Dashboard extends React.Component{
    render(){
        return(
            <div>
                <h3>{this.props.numbOfContacts}</h3>
                <p>{this.props.numbOfMessages}</p>
                <p>{this.props.numbOfGroups}</p>
            </div>
        )
    }
}

export default Dashboard;
