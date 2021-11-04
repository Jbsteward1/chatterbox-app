import React from 'react';
import '../Components/login.css'


class SignIn extends React.Component{
    render(){
        return(
            <div className="credentials">
                <section>
                    <div className="container">
                        <div class="userSigninBx">
                            <div class="imgBx"><img src="https://wallpapercave.com/wp/wp9000520.jpg" alt=""/></div>
                            <div class="formBx">
                                <form>
                                    <h2>Sign In</h2>
                                    <input type="text" placeholder="Username"/>
                                    <input type="password" placeholder="Password"/>
                                    <input type="submit" value="Login"/>
                                    <p class="signup">Don't have an account? <a href=" " onClick='{toggleForm()}'>Sign up.</a></p>
                                </form>
                            </div>
                        </div>

                        <div class="userSignupBx">
                            <div class="imgBx"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqzbFZMBcMXHzzKU97a2gchhop5ot47FTq8g&usqp=CAU" alt=""/></div>
                            <div class="formBx">
                                <form>
                                    <h2>Create Account</h2>
                                    <input type="text" placeholder="Username"/>
                                    <input type="text" placeholder="Email"/>
                                    <input type="password" placeholder="Create Password"/>
                                    <input type="password" placeholder="Confirm Password"/>
                                    <input type="submit" value="Sign-up"/>
                                    <p class="signup">Already have an account? <a href=" " onClick='{toggleForm()}'>Sign in.</a></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <script>
                    {
                    function toggleForm(){
                        let container = document.querySelector('container')
                        container.classList.toggle('active')
                        }
                    }
                </script>
            </div>
        )
    }
}

export default SignIn