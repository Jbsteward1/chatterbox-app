import React from 'react';
import './login.css'
// import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// import { getFirestore, collection, getDocs, setDoc, doc } from 'firebase/firestore/lite';

// const firebaseConfig = {
//   apiKey: "AIzaSyA__MRWOR5h0VUEe3awxEUDponf5t8axb4",
//   authDomain: "chatterbox-community-chat-app.firebaseapp.com",
//   projectId: "chatterbox-community-chat-app",
//   storageBucket: "chatterbox-community-chat-app.appspot.com",
//   messagingSenderId: "629411009047",
//   appId: "1:629411009047:web:cfd6ed208c581679958252",
//   measurementId: "G-JCMCWYDN46"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// function addData() {
//   setDoc(doc(db, "contacts", "4045551234"), {
//   name: "Troy Wilson", 
//   groups: ["teachers"]
//   });
// };


class SignIn extends React.Component{

    constructor() {
        super();

        this.state = {
            signInFormVisible: true,
            signUpFormVisible: false,
        }

        this.setState = ({
            userName: "",
            Email: "",
            createPassword: "",
        }) 


        // this.toggleForm = this.toggleForm.bind(this);
        // this._userName = this._userName.bind(this)
        // this._Email = this._Email.bind(this)
        // this._createPassword = this._createPassword.bind(this)

    }

    toggleForm(event) {
        event.preventDefault();
        if (this.state.signInFormVisible) {
            this.setState({signInFormVisible: false, signUpFormVisible: true})
        } else {
            this.setState({signInFormVisible: true, signUpFormVisible: false})
        }
    }

    render(){
        return(
            <div className="credentials">
                <section>
                    <div className="container">
                        {this.state.signInFormVisible && <div className="userSigninBx">
                            <div className="imgBx"><img src="https://wallpapercave.com/wp/wp9000520.jpg" alt=""/></div>
                            <div className="formBx">
                                <form>
                                    <h2>Sign In</h2>
                                    <input type="text" class="form-control" placeholder="Username" aria-describedby="sizing-addon1"/>

                                    <input type="text" class="form-control" placeholder="Password" aria-describedby="sizing-addon1"/>

                                    <input type="submit" class="form-control" value="Login"/>

                                    <p className="signup">Don't have an account? <a href=" " onClick={this.toggleForm}>Sign up.</a></p>
                                </form>
                            </div>
                        </div>}

                        {this.state.signUpFormVisible && <div className="userSignupBx">
                            <div className="imgBx"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqzbFZMBcMXHzzKU97a2gchhop5ot47FTq8g&usqp=CAU" alt=""/></div>
                            <div className="formBx">
                                <form>
                                    <h2>Create Account</h2>
                                    <input type="text" class="form-control" placeholder="Username" aria-describedby="sizing-addon1"
                                    value={this._updateUserName}/>

                                    <input type="text" class="form-control" placeholder="Email" aria-describedby="sizing-addon1"
                                    value={this._updateEmail}/>

                                    <input type="text" class="form-control" placeholder="Create Password" aria-describedby="sizing-addon1"
                                    value={this._updateCreatePassword}/>

                                    <input type="text" class="form-control" placeholder="Confirm Password" 
                                    aria-describedby="sizing-addon1"/>

                                    <input type="submit" value="Sign-up" onClick={this._addContact}/>

                                    <p className="signup">Already have an account? <a href=" " onClick={this.toggleForm}>Sign in.</a></p>
                                </form>
                            </div>
                        </div>}
                    </div>
                </section>
            </div>
        )
    }

    // _addContact(){
    //     setDoc(doc(this.props.DB, "contacts", this.props.createPassword), {
    //         userName: this.props.userName,
    //         Email: this.props.Email,
    //         Password: this.props.createPassword,
    //         groups: []
    //     })
    // }
}

export default SignIn