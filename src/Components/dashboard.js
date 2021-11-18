import React from 'react';
import '../App.css';


class Dashboard extends React.Component{

    constructor(){
        super();

        this.state = {
            numbOfContacts: 0,
            numbOfGroups: 0,
            numbOfMessages: 0,
        }

        // this._increaseContacts = this._increaseContacts.bind(this)
        // this._increaseGroups = this._increaseGroups.bind(this)
        // this._increaseMessages = this._increaseMessages.bind(this)
    }

    render(){
        return(

            <div className="dashCon">
                <h4># of Contacts: {this.props.numbOfContacts}</h4>
                <h4># of Messages: {this.props.numbOfMessages}</h4>
                <h4># of Groups: {this.props.numbOfGroups}</h4>
            </div>
        )
    }
}

export default Dashboard;
