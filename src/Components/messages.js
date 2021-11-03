import React from "react";
import '../App.css'

class Messages extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <img src={this.props.pic} alt=""></img>
                </div>
                <h2>{this.props.name}</h2>
                <p>{this.props.contents}</p>
                <p>{this.props.date}</p>
            </div>
        )
    }
}

export default Messages