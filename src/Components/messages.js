import React from "react";
import '../App.css'

class Messages extends React.Component{
    render(){
        return(
            <div className="message">
                <div>
                    <img src="{this.props.pic}" alt=""></img>
                </div>
                <div className="pbox">
                    <h2>{this.props.name}</h2>
                    <p id="text">{this.props.contents}</p>
                    <p id="date">{this.props.date}</p>
                </div>
            </div>
        )
    }
}

export default Messages