import './App.css';
import Groups from './Components/group'
import Messages from './Components/messages'

function App() {
  return (
    <div className="App">
      <Groups name="Gucci Gang" img=""/>
      <Groups name="Ladies Only" img=""/>
      <Groups name="Family" img=""/>
      <Groups name="Cryto Team" img="" />
      <div className="messages">
        <Messages name="Candy" content="Lets hang out tonight..." date="5:55pm, yesterday"/>
        <Messages name="Mom" content="What would you like for dinner to....." date=" 4:20pm, yesterday"/>
        <Messages name="My Boo" content="Where are you hunny?" date="10:30, 11/1/2020" />
        <Messages name="Little Sis" content="Can i get a ride to work later?" date="1:00, 10/29/2020" />
      </div>
    </div>
  )
}

export default App