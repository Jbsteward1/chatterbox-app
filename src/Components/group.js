import React from 'react'
import './messages.css'
class Group extends React.Component{
    render(){
        return(
            <div className="groups">
                <header class="header">
                    <h4 class="title">Groups</h4>
                    <small class="subtitle">Search name</small>
                    <input type="text" id="filter" placeholder="Search"/>
                </header>
            <ul id="result"class="user-list">
                <li class=""/>
                    <img src="https://randomuser.me/api/portraits/women/33.jpg" alt="Sara"/>
                    <div class="user-info">
                        <h4>Sara Smith</h4>
                        <p>Wexford, Ireland</p>
                    </div>
            </ul>
            </div>
        )
    }
}


export default Group;