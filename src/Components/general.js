import React from 'react'
import Groups from "./landpage";
import Lists from "./loginPage";
import Dashboard from "./dashboard";
import Messages from "./messages";
import '../App.css'

class AltPage extends React.Component{

    render(){
        return(
            <div className="dummyP">
                <div className="sides">
                    <h1>Groups</h1>
                    <div className="Bside">
                        <div className="inSide">
                            <Groups name="Gucci Gang" src="" />
                            <Groups name="Ladies Only" src="./Components/pictures/il_1588xN.3176630014_trsn.jpg"/>
                            <Groups name="Family" src="" />
                            <Groups name="Crypto Team" src="" />
                        </div>
                        <button>New Group</button>
                    </div>
                    <h1>Messages</h1>
                    <div className="inSide" id="mmk">
                        <Messages name="Candy" content="Lets hang out tonight..." date="5:55pm, yesterday"/>
                        <Messages name="Mom" content="What would you like for dinner to....." date=" 4:20pm, yesterday"/>
                        <Messages name="My Boo" content="Where are you hunny?" date="10:30, 11/1/2020"/>
                        <Messages name="Little Sis" content="Can i get a ride to work later?"   date="1:00, 10/29/2020"/>
                    </div>
                    <button>New Message</button>
                </div>

                <div id="dash">
                    <Lists 
                    contactName="Bernard James Bartholamule"
                    occupation="Software Engineer"/>
                    <Dashboard/>
                </div>
        
                <div className="sides">
                    <h1>Contacts</h1>
                    <div className="Cside">
                    <button>New Contact</button>
                    </div>
                </div>
            </div>
        )
    }

    _increaseContacts(){
        this.setState({
            numbOfContacts: this.state.numbOfContacts + 1
        })
    }

    _increaseGroups(){
        this.setState({
            numbOfGroups: this.state.numbOfGroups + 1
        })
    }

    _increaseMessages(){
        this.setState({
            numbOfMessages: this.state.numbOfMessages + 1
        })
    }
}

export default AltPage