import React from 'react';
import '../Components/login.css'


class SignIn extends React.Component{

    constructor() {
        super();

        this.state = {
            signInFormVisible: true,
            signUpFormVisible: false,
        }

        this.toggleForm = this.toggleForm.bind(this);
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
                                    <input type="text" placeholder="Username"/>
                                    <input type="password" placeholder="Password"/>
                                    <input type="submit" value="Login"/>
                                    <p className="signup">Don't have an account? <a href=" " onClick={this.toggleForm}>Sign up.</a></p>
                                </form>
                            </div>
                        </div>}

                        {this.state.signUpFormVisible && <div className="userSignupBx">
                            <div className="imgBx"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqzbFZMBcMXHzzKU97a2gchhop5ot47FTq8g&usqp=CAU" alt=""/></div>
                            <div className="formBx">
                                <form>
                                    <h2>Create Account</h2>
                                    <input type="text" placeholder="Username"/>
                                    <input type="text" placeholder="Email"/>
                                    <input type="password" placeholder="Create Password"/>
                                    <input type="password" placeholder="Confirm Password"/>
                                    <input type="submit" value="Sign-up"/>
                                    <p className="signup">Already have an account? <a href=" " onClick={this.toggleForm}>Sign in.</a></p>
                                </form>
                            </div>
                        </div>}
                    </div>
                </section>
            </div>
        )
    }
}

export default SignIn