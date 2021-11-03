import './App.css';
import Groups from './Components/group';
import Messages from './Components/messages';

function App() {
  return (
    <div className="App">
      <div>
        <Groups name="Gucci Gang" pics="./pictures/chat/guccigang.jpg"/>
        <Groups name="Ladies Only" pics="./src/pictures/chat/il_1588xN.3176630014_trsn.jpg"/>
        <Groups name="Family" pics="./src/pictures/chat/family.png"/>
        <Groups name="Crypto Team" pics="/Users/corcoding/Desktop/projects/chat/src/pictures/chat/crypto.jpeg" />
      </div>
      <div className="messages">
        <Messages pic="./src/pictures/chat/candy1.jpeg" name="Candy" content="Lets hang out tonight..." date="5:55pm, yesterday"/>
        <Messages pic="./pictures/chat/mom.jpeg" name="Mom" content="What would you like for dinner to....." date=" 4:20pm, yesterday"/>
        <Messages pic="./pictures/chat/my boo.jpeg" name="My Boo" content="Where are you hunny?" date="10:30, 11/1/2020" />
        <Messages pic="./pictures/chat/my boo.jpeg" name="Little Sis" content="Can i get a ride to work later?" date="1:00, 10/29/2020" />
      </div>
    </div>
  )
}
export default App;
