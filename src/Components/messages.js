import React from "react";
import '../Components/messages.css'

class Messages extends React.Component{
    render(){
        return(
            <div className="message">
                <header class="header">
                    <h4 class= "title">Messages</h4>
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

export default Messages