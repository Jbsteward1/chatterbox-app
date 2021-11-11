import React from 'react'
import '../App.css'
class Group extends React.Component{
    render(){
        return(
            <div className="groups">
                <h1>{this.props.name}</h1>
                <img className="people" src='{this.prop.pics}' alt=""></img>
            </div>
        )
    }
}


export default Group;