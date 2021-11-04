import './App.css';
import Groups from './Components/group'
import Messages from "./Components/messages"
import './Components/pictures/il_1588xN.3176630014_trsn.jpg'

function App() {
  return (
<div className="App">
    <Groups name="Gucci Gang" src=""/>
    <Groups name="Ladies Only" src="./Components/pictures/il_1588xN.3176630014_trsn.jpg"/>
    <Groups name="Family" src=""/>
    <Groups name="Crypto Team" src="" />
<div className="messages">
        <Messages name="Candy" content="Lets hang out tonight..." date="5:55pm, yesterday"/>
        <Messages name="Mom" content="What would you like for dinner to....." date=" 4:20pm, yesterday"/>
        <Messages name="My Boo" content="Where are you hunny?" date="10:30, 11/1/2020" />
        <Messages name="Little Sis" content="Can i get a ride to work later?" date="1:00, 10/29/2020" />
    </div>
    </div>
)
}
export default App;