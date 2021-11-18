import React from 'react'
import SignIn from "./login"

class Main extends React.Component{
    render(){
        return(

            <div className="Landing">
                <header>
                    <img src="http://placekitten.com/100/100" alt="DummyLogo"></img>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <li><button className="dropdown-item" type="button">Action</button></li>
                            <li><button className="dropdown-item" type="button">Another action</button></li>
                            <li><button className="dropdown-item" type="button">Something else here</button></li>
                        </ul>
                    </div>
                </header>
                <main>
                    <div id="LandingText">
                        <h1>Welcome to ChatterBox</h1>
                        <p>Sait pans le noir pale au pres sous si va.
                        Souhaitait sanctifier habilement au hurlements 
                        or vieillards. Qu erigent laissez ah mouches 
                        donjons ah le blottis. Ah compagnies la arriverent
                        du remarquent. Abattre habiles menions crurent sa 
                        donjons oh. Sapin pic heros car nid annee oui. 
                        Parlait hagarde dessert on labeurs sentent il. 
                        Importe aux air eue but allures dociles. Souffre 
                        fit allures reciter une entiere.</p>
                    </div>
                    <div id="LandingPic"></div>
                </main>
                <div id="LandingInfo">
                    <div id="creativeSpace">
                        <h2 id="join">Join Our Community</h2>
                        <div class="power">
                            <div id="mySection"></div>
                            <SignIn/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main