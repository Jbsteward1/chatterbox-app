import './App.css';
import Groups from './Components/group'
<<<<<<< HEAD
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
=======
import Messages from './Components/messages'
import SignIn from './Components/login';

function App() {
  return (
    <div className="App">
      <Groups name="Gucci Gang" img=""/>
      <Groups name="Ladies Only" img=""/>
      <Groups name="Family" img=""/>
      <Groups name="Cryto Team" img="" />
      <div className="messages">
>>>>>>> dc6ed15e3d520b5362c54b3390de91709fa6b095
        <Messages name="Candy" content="Lets hang out tonight..." date="5:55pm, yesterday"/>
        <Messages name="Mom" content="What would you like for dinner to....." date=" 4:20pm, yesterday"/>
        <Messages name="My Boo" content="Where are you hunny?" date="10:30, 11/1/2020" />
        <Messages name="Little Sis" content="Can i get a ride to work later?" date="1:00, 10/29/2020" />
<<<<<<< HEAD
=======
      </div>
      <SignIn/>
>>>>>>> dc6ed15e3d520b5362c54b3390de91709fa6b095
    </div>
    </div>
)
}
<<<<<<< HEAD
export default App;
=======

export default App
>>>>>>> dc6ed15e3d520b5362c54b3390de91709fa6b095
