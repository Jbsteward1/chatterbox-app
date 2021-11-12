import "./App.css";
import SignIn from "./Components/login"
import BigG from "./Components/backpage"
import BigM from "./Components/addOnBack";

const App = () => {
  return (
    <div className="App">
      <div className="secondP">
        <BigG/>
        <BigM/>
      </div>
      
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
                <div id="LandingText"></div>
                <div id="LandingPic"></div>
              </main>
              <div id="LandingInfo"></div>
        </div>
        <SignIn/>
    </div>
  );
}
export default App;
