import React from "react";
import '../Components/messages.css'

class Messages extends React.Component{
    render(){
        return(
            <ul id="result"class="user-list">
                <li class=""/>
                <img src={this.props.src} alt="Name"/>
                <div class="user-info">
                    <h4>{this.props.name}</h4>
                    <p>{this.props.location}</p>
                </div>
            </ul>
        )
    }
}

export default Messages