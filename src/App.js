import "./App.css";
import AltPage from "./Components/general";
import Main from "./Components/main";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

const App = () => {
  return (
    <div className="App"> 
      <Router>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/dahsboard">Secondary</Link>
        </div>
        <hr />
        <Routes>
          <Route  path="/" element={<Main/>}/>
          <Route  path="dahsboard" element={<AltPage/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;