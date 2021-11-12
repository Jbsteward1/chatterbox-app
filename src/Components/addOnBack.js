import React from'react'
import Messages from './messages'
import './messages.css'

class BigM extends React.Component{
    render(){
        return(
            <div>
                <body>
                    <div className="container">
                        <header className="header">
                            <h4 className= "title">Messages</h4>
                            <small className="subtitle">Search name</small>
                            <input type="text" id="filter" placeholder="Search"/>
                        </header>
                        <div className="change">
                            <ul id="result"className="user-list">
                                <Messages src="https://randomuser.me/api/portraits/women/33.jpg"
                                name="Sarah Smith"
                                alt="Sarah"
                                location="Wexford, Ireland"/>

                                <Messages src="https://randomuser.me/api/portraits/women/33.jpg"
                                name="Joe Smith"
                                alt="Joe"
                                location="Wexford, Ireland"/>
                                <li>Loading...</li>
                            </ul>
                        </div>
                    </div>
                </body>
            </div>
        )
    }
}

export default BigM