import React from 'react'
import Group from './group'
import './messages.css'

class BigG extends React.Component{
    render(){
        return(
            <div>
                <body>
                    <div className="container">
                        <header className="header">
                            <h4 className= "title">Group</h4>
                            <small className="subtitle">Search name</small>
                            <input type="text" id="filter" placeholder="Search"/>
                        </header>
                    
                        <div className="change">
                            <ul id="result"className="user-list gro">
                                <Group src="https://randomuser.me/api/portraits/women/33.jpg"
                                name="Sarah Smith"
                                alt="Sarah"
                                location="Wexford, Ireland"/>

                                <Group src="https://randomuser.me/api/portraits/women/33.jpg"
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

export default BigG