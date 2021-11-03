// import { ChatEngine } from 'react-chat-engine';


import './App.css';
import Groups from './Components/landpage'
import Lists from './Components/loginPage'
import Dashboard from './Components/dashboard'

const App = () => {
    return (
        // <ChatEngine
        //     height="100vh"
        //     projectID=""
        //     userName=""
        //     userPassword=""
        // />,
        <div>
            <Groups className="primary" name="Sign In" description="Quick Chat"/>
            <Groups className="primary" name="Create Account" description="Nothing can Compare"/>
            <div>
                <Lists contactName="Bernard James Bartholamule" messageList="ARRAYS -variables that hold multpile values"/>
            </div>
            <div>
                <Dashboard numbOfContacts="This is the number of contacts"/>
                <Dashboard numbOfMessages="This is the number of messages"/>
                <Dashboard numbOfGroups="This is the number of groups"/>
            </div>
        </div>

    )
}

export default App;