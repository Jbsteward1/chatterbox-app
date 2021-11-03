import './App.css';
import Groups from './Components/group'

function App() {
  return (
    <div className="App">
      <Groups name="Gucci Gang" img=""/>
      <Groups name="Ladies Only" img=""/>
      <Groups name="Family" img=""/>
      <div className="messages">
        <Messages name="Candice" content="Lets hang out tonight..." date="yesterday"/>
        <Messages name="Mom" content="What would you like for dinner to....." date="yesterday"/>
      </div>
    </div>
  )
}
