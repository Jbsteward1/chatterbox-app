import './App.css';
import Group from './Components/group'
import Groups from './Components/landpage'
import Lists from './Components/loginPage'
import Dashboard from './Components/dashboard'
import Messages from './Components/messages'
import SignIn from './Components/login';

const App = () => {
    return (
        <div>
            <Group className="primary" name="Sign In" description="Quick Chat"/>
            <Group className="primary" name="Create Account" description="Dont have an account sign uo below"/>
            <div>
                <Lists contactName="Bernard James Bartholamule" messageList="Thinking of a master plan."/>
            </div>
            <div>
                <Dashboard numbOfContacts="This is the number of contacts"/>
                <Dashboard numbOfMessages="This is the number of messages"/>
                <Dashboard numbOfGroups="This is the number of groups"/>
  
            <div className="App">
                <Groups name="Gucci Gang" img=""/>
                <Groups name="Ladies Only" img=""/>
                <Groups name="Family" img=""/>
                <Groups name="Cryto Team" img="" />
            </div>
    
            <div className="messages">
                <Messages name="Candy" content="Lets hang out tonight..." date="5:55pm, yesterday"/>
                <Messages name="Mom" content="What would you like for dinner to....." date=" 4:20pm, yesterday"/>
                <Messages name="My Boo" content="Where are you hunny?" date="10:30, 11/1/2020" />
                <Messages name="Little Sis" content="Can i get a ride to work later?" date="1:00, 10/29/2020" />
            </div>
            <SignIn/>
          </div>
        </div>
  )
}
export default App