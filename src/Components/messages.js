import React from "react";
import '../App.css'

class Messages extends React.Component{
    render(){
        return(
            <h2>{this.props.name}</h2>,
            <p>{this.props.contents}</p>,
            <p>{this.props.date}</p>
        )
    }
}

export default Messages