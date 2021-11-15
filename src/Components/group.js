import React from 'react'
import './messages.css'
class Group extends React.Component{
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


export default Group;