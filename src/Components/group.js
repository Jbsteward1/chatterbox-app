

import React from 'react'
import '../App.css'
class Group extends React.Component{
    render(){
        return(
            <div className="groups">
                <h1>{this.props.name}</h1>
                <img src="{this.prop.src}" alt=""></img>
            </div>
        )
    }
}


export default Group;